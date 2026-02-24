exports.handler = async (event) => {
  const code = event.queryStringParameters?.code;

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'No code provided' }),
    };
  }

  const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
  const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
  const GUILD_ID = process.env.DISCORD_GUILD_ID;
  const ALLOWED_ROLES = (process.env.DISCORD_ALLOWED_ROLES || '').split(',');
  const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI;

  try {
    // 認証コードをアクセストークンに交換
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Failed to get token' }),
      };
    }

    // サーバーのメンバー情報を取得（ロール含む）
    const memberRes = await fetch(
      `https://discord.com/api/users/@me/guilds/${GUILD_ID}/member`,
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
    );

    if (!memberRes.ok) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: 'Not a member of the server' }),
      };
    }

    const memberData = await memberRes.json();
    const userRoles = memberData.roles || [];

    // 許可ロールを持っているかチェック
    const hasRole = userRoles.some((role) => ALLOWED_ROLES.includes(role));

    if (!hasRole) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: 'No required role', debug: { userRoles, allowedRoles: ALLOWED_ROLES, guildId: GUILD_ID } }),
      };
    }

    // ユーザー情報を取得
    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const userData = await userRes.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        username: userData.username,
        avatar: userData.avatar
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
          : null,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};
