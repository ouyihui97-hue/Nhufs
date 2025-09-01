import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="chef-hat-icon floating">👨‍🍳</span>
              <h3>烹飪社團</h3>
            </div>
            <p>致力於推廣烹飪文化，讓更多人愛上烹飪藝術</p>
            <div className="social-links">
              <a href="https://www.facebook.com/?locale=zh_TW" className="social-link">
                <i className="social-icon">ⓕ</i>
                Facebook
              </a>
              <a href="https://www.instagram.com/" className="social-link">
                <i className="social-icon">🅾</i>
                Instagram
              </a>
              <a href="https://www.line.me/tw/" className="social-link">
                <i className="social-icon">✉</i>
                Line
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>服務項目</h4>
            <ul className="footer-links">
              <li>烹飪課程</li>
              <li>工作坊</li>
              <li>食譜分享</li>
              <li>社群活動</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>聯絡資訊</h4>
            <div className="contact-info">
              <p>📧 info@cookingclub.com</p>
              <p>📞 (02) 1234-5678</p>
              <p>📍 台北市信義區美食街123號</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 烹飪社團. 版權所有.</p>
            <button onClick={scrollToTop} className="scroll-to-top">
              ↑ 回到頂部
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
