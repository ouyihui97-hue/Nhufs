import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              歡迎來到<span className="highlight">烹飪社團</span>
            </h1>
            <p className="hero-subtitle">
              與我們一起探索美食的奧秘，學習專業的烹飪技巧，
              在溫馨的社群中分享您的烹飪熱情
            </p>
          </div>
        </div>
      </div>
      
      <div className="cooking-elements">
        <div className="flame-element">🔥</div>
        <div className="utensil-element">🥄</div>
        <div className="ingredient-element ingredient-float">🥕</div>
        <div className="cooking-pot bubble">🍳</div>
        <div className="spice-element spice-float">🌶️</div>
        <div className="whisk-element spin-whisk">🥄</div>
        <div className="knife-element chop">🔪</div>
        <div className="pan-element sizzle">🍳</div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
