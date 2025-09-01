import React from 'react';

function About() {
  const stats = [
    { number: "50+", label: "活躍會員", icon: "👥" },
    { number: "100+", label: "分享食譜", icon: "📖" },
    { number: "5+", label: "年經驗", icon: "⭐" },
    { number: "20+", label: "專業課程", icon: "🎓" }
  ];

  const features = [
    {
      icon: "👨‍🍳",
      title: "專業指導",
      description: "由經驗豐富的主廚親自指導，學習正統烹飪技巧"
    },
    {
      icon: "👥",
      title: "社群交流",
      description: "與志同道合的烹飪愛好者交流心得，分享美食經驗"
    },
    {
      icon: "📚",
      title: "豐富課程",
      description: "提供多樣化的烹飪課程，從基礎到進階應有盡有"
    },
    {
      icon: "🎉",
      title: "定期活動",
      description: "舉辦各種烹飪活動和比賽，讓學習更有趣"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title fade-in">關於我們</h2>
        <p className="section-subtitle fade-in">認識烹飪社團，了解我們的理念和特色</p>
        
        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>我們的使命</h3>
            <p>
              烹飪社團成立於2019年，我們致力於推廣烹飪文化，讓更多人愛上烹飪。
              無論您是初學者還是經驗豐富的廚師，我們都歡迎您加入我們的大家庭。
            </p>
            <p>
              我們相信烹飪不僅是一門技藝，更是一種生活態度。透過烹飪，
              我們可以創造美味，分享快樂，建立友誼。
            </p>
            
            <h3>我們提供的服務</h3>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item stagger-item">
                  <span className="feature-icon floating">{feature.icon}</span>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-visual slide-in-right">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon floating">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="team-image">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" alt="廚師團隊" />
              <div className="image-overlay">
                <div className="cooking-elements-mini">
                  <span className="mini-element ingredient-float">🥕</span>
                  <span className="mini-element spice-float">🌶️</span>
                  <span className="mini-element utensil-float">🥄</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
