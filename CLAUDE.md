# ダイスケマンツール ポータルサイト

## 概要
ダイスケマンが作成した各種Webツールへのリンク集ポータルサイトです。

## デプロイ
- **Netlify**: https://daisukeman-toollink.netlify.app
- **GitHub**: https://github.com/daisukeman32/daisukeman-tools
- **自動デプロイ**: GitHubにプッシュすると自動でNetlifyに反映される

## ファイル構成
- `index.html` - メインのポータルページ（全てのコードが1ファイルに含まれる）

## ツール一覧（DEFAULT_TOOLS配列内、index.html 538行目付近）
| 番号 | ツール名 | 説明 | Ver | 更新日 | URL |
|------|----------|------|-----|--------|-----|
| 01 | QUIZAMO | オンデマンドモザイク処理ツール | 3.6 | 2026.02.12 | quizamo.netlify.app |
| 02 | SPANKING MAKER | 手動パンパンツール | 1.0 | 2026.01.21 | spankingmaker.netlify.app |
| 03 | Webloooop | 動画ループ作成ツール | 2.4 | 2026.01.27 | webloooop.netlify.app |
| 04 | FRAME | 動画分割ツール【pixiv用】 | - | 2025.12.18 | framepic.netlify.app |
| 05 | GIFMAKER | GIF作成ツール | 2.0 | 2026.01.10 | ggiiff-maker.netlify.app |
| 06 | Square Crop | pixiv＆X投稿最適化トリミングツール | 2.0 | 2026.01.22 | squarecrop.netlify.app |
| 07 | pixivooon | pixiv投稿支援ツール | 1.8 | 2026.01.30 | pixivooon.netlify.app |
| 08 | Video Compressor | ビデオ圧縮ツール（300〜500MB対応） | - | 2026.01.21 | videocompressor2.netlify.app |
| 09 | SUGOMEMO | SNS特化型メモツール | - | 2026.02.05 | sugomemo.netlify.app |

## 編集方法

### ツールの情報を変更する場合
`index.html`内の`DEFAULT_TOOLS`配列（524行目付近）を編集します。

各ツールは以下の形式で定義されています：
```javascript
{
  name: "ツール名",
  desc: "説明文",
  url: "ツールのURL",
  howto: "使い方動画のGoogle Driveリンク",
  version: "バージョン番号",
  updated: "更新日（YYYY.MM.DD）",
  detail: "詳細説明"
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
