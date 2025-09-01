import React from 'react';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text slide-in-left">
            <h1 className="hero-title">
              歡迎來到
              <span className="highlight"> 烹飪社團</span>
            </h1>
            <p className="hero-subtitle">
              加入我們的烹飪愛好者社群，一起探索美食的樂趣，
              學習各種烹飪技巧，分享美味的食譜！
            </p>
            <div className="hero-buttons">
              <button 
                className="btn pulse"
                onClick={() => scrollToSection('about')}
              >
                立即加入
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('gallery')}
              >
                查看作品
              </button>
            </div>
          </div>
          
          <div className="hero-visual slide-in-right">
            <div className="cooking-elements">
              <div className="flame-element flame">🔥</div>
              <div className="utensil-element utensil-float">🍳</div>
              <div className="ingredient-element floating">🥕</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
