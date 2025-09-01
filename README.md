# 烹飪社團網站 | Cooking Club Website

一個現代化的烹飪社團網站，具有響應式設計和豐富的動畫效果。

## 專案特色

- 🎨 現代化響應式設計
- 📱 完全支援手機和平板
- 🎭 烹飪主題動畫效果
- 🍔 漢堡選單導航
- 📰 最新消息區塊
- 🖼️ 作品展示畫廊
- 👥 關於社團介紹
- 🚀 快速部署到 Render

## 專案結構

```
cooking-club-website/
│
├── public/                       # 靜態資源
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/               # 圖片資源
│       └── icons/                # 圖示資源
│
├── src/
│   ├── components/               # React 元件
│   │   ├── Navbar.jsx           # 響應式導航欄
│   │   ├── Hero.jsx             # 首頁橫幅
│   │   ├── News.jsx             # 最新消息
│   │   ├── Gallery.jsx          # 作品展示
│   │   ├── About.jsx            # 關於我們
│   │   └── Footer.jsx           # 頁尾
│   │
│   ├── styles/                   # 樣式檔案
│   │   ├── globals.css          # 全域樣式
│   │   └── animations.css       # 動畫效果
│   │
│   ├── App.jsx                   # 主應用程式
│   └── index.js                  # 入口檔案
│
├── package.json
├── render.yaml                   # Render 部署設定
└── README.md
```

## 開始使用

### 本地開發

1. 安裝依賴：
```bash
npm install
```

2. 啟動開發伺服器：
```bash
npm start
```

3. 開啟瀏覽器訪問 `http://localhost:3000`

### 建置生產版本

```bash
npm run build
```

## 部署到 Render

1. 將專案推送到 GitHub
2. 在 Render 中連接 GitHub 倉庫
3. 選擇 "Static Site" 服務類型
4. 設定建置指令：`npm install && npm run build`
5. 設定發布路徑：`./build`
6. 部署！

## 技術棧

- **React 18** - 前端框架
- **CSS3** - 樣式和動畫
- **Responsive Design** - 響應式設計
- **Modern JavaScript** - ES6+ 語法

## 功能特色

### 響應式導航
- 桌面版水平選單
- 手機版漢堡選單
- 滾動時背景模糊效果

### 首頁橫幅
- 全螢幕設計
- 烹飪主題動畫元素
- 行動呼籲按鈕

### 最新消息
- 卡片式設計
- 分類標籤
- 作者和日期資訊

### 作品展示
- 篩選功能
- 懸停效果
- 圖片放大動畫

### 關於我們
- 統計數據展示
- 特色服務介紹
- 團隊照片

## 自訂內容

### 更新最新消息
編輯 `src/components/News.jsx` 中的 `newsData` 陣列

### 更新作品展示
編輯 `src/components/Gallery.jsx` 中的 `galleryData` 陣列

### 更新關於我們
編輯 `src/components/About.jsx` 中的內容

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 授權

MIT License
