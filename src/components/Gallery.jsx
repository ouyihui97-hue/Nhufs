import React, { useState } from 'react';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryData = [
    {
      id: 1,
      title: "手工義大利麵",
      category: "pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      description: "新鮮製作的手工義大利麵，搭配特製醬料"
    },
    {
      id: 2,
      title: "法式甜點",
      category: "dessert",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      description: "精緻的法式馬卡龍和可頌"
    },
    {
      id: 3,
      title: "亞洲料理",
      category: "asian",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description: "傳統與創新的亞洲美食"
    },
    {
      id: 4,
      title: "烘焙麵包",
      category: "bread",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      description: "手工製作的歐式麵包"
    },
    {
      id: 5,
      title: "海鮮料理",
      category: "seafood",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "新鮮海鮮烹製的美味料理"
    },
    {
      id: 6,
      title: "素食料理",
      category: "vegetarian",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
      description: "健康美味的素食選擇"
    }
  ];

  const filters = [
    { id: 'all', label: '全部' },
    { id: 'pasta', label: '義大利麵' },
    { id: 'dessert', label: '甜點' },
    { id: 'asian', label: '亞洲料理' },
    { id: 'bread', label: '烘焙' },
    { id: 'seafood', label: '海鮮' },
    { id: 'vegetarian', label: '素食' }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title fade-in">作品展示</h2>
        <p className="section-subtitle fade-in">欣賞社團成員的精美烹飪作品</p>
        
        <div className="gallery-filters fade-in">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item scale-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="btn btn-sm">查看詳情</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta fade-in">
          <button className="btn">查看更多作品</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
