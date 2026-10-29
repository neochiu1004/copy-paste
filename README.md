# ClipFlow - 極速剪貼 PWA

單擊複製、雙擊貼上、左滑刪除的本機剪貼插槽工具。
線上版：https://neochiu1004.github.io/copy-paste/

## 功能

- 分類分頁（可新增／改名／拖曳排序／刪除）
- 插槽支援文字、網址（自動辨識並顯示 favicon）、圖片
- 手勢：單擊複製、雙擊貼上（自動讀剪貼簿）、左滑刪除
- 管理模式：編輯插槽與分類、**匯出／匯入 JSON 備份**（圖片一併打包）
- 可安裝為 PWA（manifest + service worker），離線可開啟

## 資料與隱私

- 所有資料只存在你的裝置：文字與設定存 localStorage、圖片存 IndexedDB。
- 不上傳任何伺服器。清除瀏覽器資料會一併清除，請定期用「管理 → 匯出備份」保存。

## 開發

樣式使用 Tailwind CSS **預編譯**（不再用 Play CDN）。修改 `index.html` 的 class
或 `src.css` 後，重新產生 `app.css`：

```bash
npm install tailwindcss@3.4 @tailwindcss/forms@0.5
npx tailwindcss -c tailwind.config.js -i src.css -o app.css --minify
```

- `index.html` — 全部介面與邏輯（單檔）
- `src.css` — Tailwind 指令 + 自訂樣式來源
- `app.css` — 編譯產物（部署用，勿手改）
- `sw.js` — service worker（快取 app shell 與字體）；改版時請同步調升 `CACHE_VERSION`
- `manifest.json` / `icon-*.png` — PWA 安裝資訊與圖示
