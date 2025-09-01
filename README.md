# 烹飪社團網站 (Cooking Club Website)

一個現代化的烹飪社團單頁網站，使用 React 開發，具有響應式設計和豐富的烹飪主題動畫效果。

## 🍳 功能特色

### 主要功能
- **響應式導航欄**: 支援桌面和移動設備，包含漢堡選單
- **英雄區塊**: 背景圖片、號召性按鈕和烹飪主題動畫
- **最新消息區塊**: 展示社團動態，具有淡入動畫效果
- **作品展示區塊**: 圖片畫廊，支援分類篩選和懸停效果
- **關於我們區塊**: 社團資訊和統計數據，具有滑入動畫
- **頁腳**: 社交連結和聯絡資訊，包含浮動餐具動畫

### 動畫效果
- **浮動廚師帽**: 持續的上下浮動動畫
- **火焰效果**: 閃爍的火焰動畫
- **浮動餐具**: 各種烹飪用具的浮動動畫
- **氣泡效果**: 烹飪鍋的氣泡動畫
- **香料浮動**: 調味料的浮動動畫
- **旋轉打蛋器**: 打蛋器的旋轉動畫
- **滋滋聲效果**: 平底鍋的滋滋聲動畫
- **切菜動畫**: 菜刀的切菜動畫

### 響應式設計
- 支援桌面、平板和手機設備
- 自適應網格佈局
- 移動端優化的導航選單
- 觸控友好的互動元素

## 🚀 快速開始

### 前置需求
- Node.js (版本 14 或更高)
- npm 或 yarn

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone <repository-url>
   cd cooking-club-website
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm start
   ```

4. **開啟瀏覽器**
   訪問 [http://localhost:3000](http://localhost:3000)

### 建置生產版本
```bash
npm run build
```

## 📁 專案結構

```
cooking-club-website/
├── public/
│   ├── assets/
│   │   ├── icons/          # 圖示檔案
│   │   └── images/         # 圖片檔案
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/         # React 元件
│   │   ├── About.jsx       # 關於我們區塊
│   │   ├── Footer.jsx      # 頁腳元件
│   │   ├── Gallery.jsx     # 作品展示區塊
│   │   ├── Hero.jsx        # 英雄區塊
│   │   ├── Navbar.jsx      # 導航欄元件
│   │   └── News.jsx        # 最新消息區塊
│   ├── styles/             # CSS 樣式檔案
│   │   ├── animations.css  # 動畫效果
│   │   └── globals.css     # 全域樣式
│   ├── App.jsx             # 主要應用元件
│   └── index.js            # 應用入口點
├── package.json
└── README.md
```

## 🎨 設計特色

### 色彩方案
- **主色調**: #ff6b35 (橙色)
- **次要色調**: #f7931e (深橙色)
- **強調色**: #ffd23f (黃色)
- **文字深色**: #2c3e50
- **文字淺色**: #7f8c8d

### 字體
- 使用 Noto Sans TC 字體，支援繁體中文

### 動畫效果
- 使用 CSS 關鍵幀動畫
- 平滑的過渡效果
- 烹飪主題的互動元素
- 響應式動畫設計

## 🔧 技術棧

- **前端框架**: React 18
- **樣式**: CSS3 (自定義樣式)
- **動畫**: CSS 關鍵幀動畫
- **建置工具**: Create React App
- **部署**: 支援靜態網站託管

## 📱 響應式斷點

- **桌面**: 1200px 以上
- **平板**: 768px - 1199px
- **手機**: 767px 以下

## 🎯 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 🚀 部署

### 靜態網站託管
專案可以部署到任何靜態網站託管服務：

1. **Netlify**
   ```bash
   npm run build
   # 上傳 build 資料夾到 Netlify
   ```

2. **Vercel**
   ```bash
   npm run build
   # 上傳 build 資料夾到 Vercel
   ```

3. **GitHub Pages**
   ```bash
   npm run build
   # 上傳 build 資料夾到 GitHub Pages
   ```

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

### 開發指南
1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

此專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡資訊

- 專案維護者: [您的姓名]
- 電子郵件: [您的郵箱]
- 專案連結: [GitHub 連結]

---

**享受烹飪的樂趣！** 🍳✨
