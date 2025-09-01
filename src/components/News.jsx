import React, { useState } from 'react';

function News() {
  const [expandedNews, setExpandedNews] = useState(null);

  const newsData = [
    {
      id: 1,
      title: "新烹飪工作坊開課！",
      content: "義大利料理工作坊即將開始！學習製作正宗的義大利麵和燉飯，由我們的專業主廚親自指導。",
      fullContent: "義大利料理工作坊即將開始！學習製作正宗的義大利麵和燉飯，由我們的專業主廚親自指導。本次工作坊將涵蓋從基礎到進階的義大利料理技巧，包括手工義大利麵製作、經典醬料調配、以及傳統燉飯的烹飪方法。課程為期8週，每週一次，每次3小時。學員將有機會親手製作多道經典義大利料理，並學習專業的擺盤技巧。工作坊結束後，每位學員都將獲得結業證書和完整的食譜手冊。",
      date: "2024-01-15",
      author: "主廚 Maria",
      category: "工作坊",
      icon: "👨‍🍳"
    },
    {
      id: 2,
      title: "每月食譜競賽開始報名",
      content: "提交您最棒的甜點食譜，就有機會獲獎！獲獎食譜將收錄在我們的社團食譜書中。",
      fullContent: "提交您最棒的甜點食譜，就有機會獲獎！獲獎食譜將收錄在我們的社團食譜書中。本次競賽主題為「創意甜點」，參賽者可以提交任何原創或改良的甜點食譜。評審將根據創意性、可操作性、美味程度和視覺效果進行評分。前三名將獲得豐厚獎金，所有入圍作品都將收錄在我們即將出版的社團食譜書中。報名截止日期為本月底，請把握機會展現您的烹飪才華！",
      date: "2024-01-10",
      author: "社團管理員",
      category: "競賽",
      icon: "🏆"
    },
    {
      id: 3,
      title: "春季烹飪課程開放報名",
      content: "春季烹飪課程現已開放報名！課程包括法式料理、亞洲融合料理和烘焙基礎。",
      fullContent: "春季烹飪課程現已開放報名！課程包括法式料理、亞洲融合料理和烘焙基礎。我們精心設計了三個不同難度等級的課程，適合各種程度的學員。法式料理課程將教授經典法國菜餚的製作技巧，包括醬汁調配、肉類烹飪和甜點製作。亞洲融合料理課程將結合傳統亞洲烹飪技巧與現代創新元素。烘焙基礎課程則專注於麵包、蛋糕和餅乾的製作。所有課程都提供小班教學，確保每位學員都能得到充分的指導。",
      date: "2024-01-08",
      author: "主廚 John",
      category: "課程",
      icon: "📚"
    },
    {
      id: 4,
      title: "社團聚餐活動",
      content: "本週末將舉辦社團聚餐活動，大家一起分享美食，交流烹飪心得！",
      fullContent: "本週末將舉辦社團聚餐活動，大家一起分享美食，交流烹飪心得！這是一個難得的機會讓社團成員聚在一起，分享各自的烹飪作品和心得。每位參與者都可以帶一道自己製作的美食來分享，我們將提供場地、餐具和飲品。活動中還將有美食評比環節，由專業主廚擔任評審，選出最佳作品。此外，我們還安排了烹飪技巧分享環節，讓大家互相學習。這是一個增進友誼、提升廚藝的絕佳機會！",
      date: "2024-01-05",
      author: "活動組長",
      category: "活動",
      icon: "🎉"
    }
  ];

  const handleNewsClick = (newsItem) => {
    setExpandedNews(newsItem);
  };

  const handleBackClick = () => {
    setExpandedNews(null);
  };

  if (expandedNews) {
    return (
      <section id="news" className="section news-section">
        <div className="container">
          <div className="expanded-news">
            <button className="back-btn" onClick={handleBackClick}>
              ← 返回最新消息
            </button>
            
            <div className="expanded-news-content">
              <div className="expanded-news-header">
                <div className="expanded-news-meta">
                  <span className="news-category">{expandedNews.category}</span>
                  <span className="news-date">{expandedNews.date}</span>
                </div>
                <div className="expanded-news-icon">{expandedNews.icon}</div>
              </div>
              
              <h2 className="expanded-news-title">{expandedNews.title}</h2>
              
              <div className="expanded-news-body">
                <p className="expanded-news-content-text">{expandedNews.fullContent}</p>
              </div>
              
              <div className="expanded-news-footer">
                <span className="news-author">by {expandedNews.author}</span>
                <div className="expanded-news-actions">
                  <button className="btn btn-secondary">分享</button>
                  <button className="btn">收藏</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="news-section section">
      <div className="container">
        <h2 className="section-title">最新消息</h2>
        <p className="section-subtitle">了解社團的最新活動與課程資訊</p>
        
        <div className="news-grid">
          {newsData.map((item, index) => (
            <div 
              key={item.id} 
              className={`news-card hover-lift stagger-item clickable`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleNewsClick(item)}
            >
              <div className="news-header">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <div className="news-icon floating">{item.icon}</div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-content">{item.content}</p>
              <div className="news-footer">
                <span className="news-author">by {item.author}</span>
                <button className="btn btn-secondary btn-sm">閱讀更多</button>
              </div>
              <div className="news-cooking-elements">
                <span className="news-element ingredient-float">🥕</span>
                <span className="news-element spice-float">🌶️</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="news-cta fade-in">
          <button className="btn">查看所有消息</button>
        </div>
      </div>
    </section>
  );
}

export default News;
