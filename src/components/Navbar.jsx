import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="chef-hat-icon floating">👨‍🍳</span>
            <h2>烹飪社團</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">
                  首頁
                </a>
              </li>
              <li className="nav-item">
                <a href="#news" onClick={() => scrollToSection('news')} className="nav-link">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a href="#gallery" onClick={() => scrollToSection('gallery')} className="nav-link">
                  作品展示
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
                  關於我們
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <img src="/assets/icons/close.svg" alt="Close Menu" />
            ) : (
              <img src="/assets/icons/menu.svg" alt="Menu" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
