import React from 'react';

function News() {
  const newsData = [
    {
      id: 1,
      title: "新烹飪工作坊開課！",
      content: "義大利料理工作坊即將開始！學習製作正宗的義大利麵和燉飯，由我們的專業主廚親自指導。",
      date: "2024-01-15",
      author: "主廚 Maria",
      category: "工作坊"
    },
    {
      id: 2,
      title: "每月食譜競賽開始報名",
      content: "提交您最棒的甜點食譜，就有機會獲獎！獲獎食譜將收錄在我們的社團食譜書中。",
      date: "2024-01-10",
      author: "社團管理員",
      category: "競賽"
    },
    {
      id: 3,
      title: "春季烹飪課程開放報名",
      content: "春季烹飪課程現已開放報名！課程包括法式料理、亞洲融合料理和烘焙基礎。",
      date: "2024-01-08",
      author: "主廚 John",
      category: "課程"
    },
    {
      id: 4,
      title: "社團聚餐活動",
      content: "本週末將舉辦社團聚餐活動，大家一起分享美食，交流烹飪心得！",
      date: "2024-01-05",
      author: "活動組長",
      category: "活動"
    }
  ];

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <h2 className="section-title fade-in">最新消息</h2>
        <p className="section-subtitle fade-in">掌握社團最新動態和活動資訊</p>
        
        <div className="news-grid">
          {newsData.map((item, index) => (
            <div 
              key={item.id} 
              className={`news-card hover-lift stagger-item`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="news-header">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-content">{item.content}</p>
              <div className="news-footer">
                <span className="news-author">by {item.author}</span>
                <button className="btn btn-secondary btn-sm">閱讀更多</button>
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
