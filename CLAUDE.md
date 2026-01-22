# ダイスケマンツール ポータルサイト

## 概要
ダイスケマンが作成した各種Webツールへのリンク集ポータルサイトです。

## デプロイ
- **Netlify**: https://daisukeman-toollink.netlify.app
- **GitHub**: https://github.com/daisukeman32/daisukeman-tools
- **自動デプロイ**: GitHubにプッシュすると自動でNetlifyに反映される

## ファイル構成
- `index.html` - メインのポータルページ（全てのコードが1ファイルに含まれる）

## ツール一覧（DEFAULT_TOOLS配列内、index.html 524行目付近）
| 番号 | ツール名 | 説明 | URL |
|------|----------|------|-----|
| 01 | Webloooop | 動画ループ作成ツール | webloooop.netlify.app |
| 02 | クイザモ | モザイク処理ツール | quizamo.netlify.app |
| 03 | FRAME | 動画分割ツール | framepic.netlify.app |
| 04 | GIFMAKER | GIF作成ツール | ggiiff-maker.netlify.app |
| 05 | SPANKING MAKER | 手動パンパンツール | spankingmaker.netlify.app |
| 06 | Square Crop | pixiv & X 投稿最適化トリミングツール | squarecrop.netlify.app |
| 07 | Video Compressor | ビデオ圧縮ツール（300〜500MB対応） | videocompressor2.netlify.app |

## 編集方法

### ツールの情報を変更する場合
`index.html`内の`DEFAULT_TOOLS`配列（524行目付近）を編集します。

各ツールは以下の形式で定義されています：
```javascript
{
  name: "ツール名",
  desc: "説明文",
  url: "ツールのURL",
  howto: "使い方動画のGoogle Driveリンク"
}
```

### 使い方動画リンクの形式
Google Driveの共有リンクを使用：
```
https://drive.google.com/file/d/[FILE_ID]/view?usp=sharing
```

## 管理機能
- 管理者パスワード: `asdf`（CONFIG.ADMIN_PASSWORD）
- JSONBin連携: 未設定時はローカルストレージを使用

## よくある作業
- **動画リンク差し替え**: `howto`の値を新しいGoogle Driveリンクに変更
- **説明文変更**: `desc`の値を変更
- **新規ツール追加**: DEFAULT_TOOLS配列に新しいオブジェクトを追加
