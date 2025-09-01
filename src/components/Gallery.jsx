import React, { useState } from 'react';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedGallery, setExpandedGallery] = useState(null);

  const galleryData = [
    {
      id: 1,
      title: '義大利麵製作',
      description: '學習製作正統義大利麵，從麵團到醬汁的完整過程',
      fullDescription: '在這個工作坊中，我們將深入學習義大利麵的製作藝術。從選擇最優質的麵粉開始，到揉製完美的麵團，再到製作各種經典醬汁如番茄肉醬、奶油蘑菇醬等。學員將親手體驗整個製作過程，並學習到義大利麵的烹飪技巧和調味要領。',
      image: '/assets/images/gallery1.jpg',
      category: 'pasta',
      ingredients: ['高筋麵粉', '雞蛋', '橄欖油', '番茄', '羅勒', '帕瑪森起司'],
      cookingTime: '2小時',
      difficulty: '中等',
      icon: '🍝'
    },
    {
      id: 2,
      title: '法式甜點製作',
      description: '精緻法式甜點的製作技巧與裝飾藝術',
      fullDescription: '探索法式甜點的精緻世界！我們將學習製作經典的法式甜點，包括馬卡龍、可麗露、瑪德蓮等。課程涵蓋從基礎的麵糊製作到複雜的裝飾技巧，讓您掌握法式甜點的精髓和美學。',
      image: '/assets/images/gallery2.jpg',
      category: 'dessert',
      ingredients: ['杏仁粉', '糖粉', '蛋白', '奶油', '香草精', '巧克力'],
      cookingTime: '3小時',
      difficulty: '困難',
      icon: '🍰'
    },
    {
      id: 3,
      title: '日式料理體驗',
      description: '傳統日式料理的製作方法與文化體驗',
      fullDescription: '體驗正統的日式料理文化！我們將學習製作壽司、天婦羅、味噌湯等經典日式料理。課程不僅教授烹飪技巧，還會介紹日本飲食文化和禮儀，讓您深入了解日本料理的精髓。',
      image: '/assets/images/gallery1.jpg',
      category: 'japanese',
      ingredients: ['壽司米', '生魚片', '海苔', '天婦羅粉', '味噌', '柴魚片'],
      cookingTime: '2.5小時',
      difficulty: '中等',
      icon: '🍣'
    },
    {
      id: 4,
      title: '中式點心製作',
      description: '傳統中式點心的製作技巧與創新變化',
      fullDescription: '探索中式點心的豐富世界！從傳統的包子、餃子到創新的現代點心，我們將學習各種中式點心的製作技巧。課程包括麵團製作、餡料調配、包製技巧等，讓您掌握中式點心的精髓。',
      image: '/assets/images/gallery2.jpg',
      category: 'chinese',
      ingredients: ['中筋麵粉', '豬肉', '蝦仁', '韭菜', '香菇', '醬油'],
      cookingTime: '2小時',
      difficulty: '中等',
      icon: '🥟'
    },
    {
      id: 5,
      title: '泰式料理課程',
      description: '道地泰式料理的製作與調味技巧',
      fullDescription: '體驗泰式料理的獨特風味！我們將學習製作泰式炒河粉、綠咖哩、冬陰功湯等經典泰式料理。課程重點在於泰式調味料的運用和火候控制，讓您掌握泰式料理的精髓。',
      image: '/assets/images/gallery1.jpg',
      category: 'thai',
      ingredients: ['河粉', '椰奶', '檸檬草', '魚露', '辣椒', '羅勒'],
      cookingTime: '2小時',
      difficulty: '中等',
      icon: '🍜'
    },
    {
      id: 6,
      title: '烘焙基礎課程',
      description: '從零開始學習烘焙的基礎技巧與知識',
      fullDescription: '建立堅實的烘焙基礎！這個課程適合烘焙初學者，我們將從最基礎的麵團製作開始，學習製作麵包、餅乾、蛋糕等。課程涵蓋材料選擇、工具使用、溫度控制等烘焙要領。',
      image: '/assets/images/gallery2.jpg',
      category: 'baking',
      ingredients: ['高筋麵粉', '酵母', '糖', '奶油', '雞蛋', '牛奶'],
      cookingTime: '3小時',
      difficulty: '簡單',
      icon: '🥖'
    }
  ];

  const filters = [
    { id: 'all', label: '全部' },
    { id: 'pasta', label: '義大利料理' },
    { id: 'dessert', label: '甜點' },
    { id: 'japanese', label: '日式料理' },
    { id: 'chinese', label: '中式料理' },
    { id: 'thai', label: '泰式料理' },
    { id: 'baking', label: '烘焙' }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const handleGalleryClick = (item) => {
    setExpandedGallery(item);
  };

  const handleBackClick = () => {
    setExpandedGallery(null);
  };

  if (expandedGallery) {
    return (
      <section className="gallery-section">
        <div className="container">
          <div className="expanded-gallery">
            <button onClick={handleBackClick} className="back-btn">
              ← 返回作品展示
            </button>
            <div className="expanded-gallery-content">
              <div className="expanded-gallery-image">
                <img src={expandedGallery.image} alt={expandedGallery.title} />
                <div className="expanded-gallery-overlay">
                  <span className="expanded-gallery-icon">{expandedGallery.icon}</span>
                </div>
              </div>
              <div className="expanded-gallery-info">
                <h2 className="expanded-gallery-title">{expandedGallery.title}</h2>
                <p className="expanded-gallery-description">{expandedGallery.fullDescription}</p>
                
                <div className="expanded-gallery-details">
                  <div className="detail-item">
                    <span className="detail-label">烹飪時間</span>
                    <span className="detail-value">{expandedGallery.cookingTime}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">難度等級</span>
                    <span className="detail-value">{expandedGallery.difficulty}</span>
                  </div>
                </div>

                <div className="expanded-gallery-ingredients">
                  <h3>主要食材</h3>
                  <div className="ingredients-list">
                    {expandedGallery.ingredients.map((ingredient, index) => (
                      <span key={index} className="ingredient-tag">{ingredient}</span>
                    ))}
                  </div>
                </div>

                <div className="expanded-gallery-actions">
                  <button className="btn">立即報名</button>
                  <button className="btn btn-secondary">查看詳情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <h2 className="section-title">作品展示</h2>
        <p className="section-subtitle">探索我們的烹飪課程與作品</p>
        
        <div className="gallery-filters">
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
          {filteredGallery.map(item => (
            <div
              key={item.id}
              className="gallery-item clickable"
              onClick={() => handleGalleryClick(item)}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span className="gallery-icon floating">{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="gallery-cooking-elements">
                  <span className="gallery-element ingredient-float">🥕</span>
                  <span className="gallery-element spice-float">🌶️</span>
                  <span className="gallery-element spin-whisk">🥄</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <button className="btn">查看更多作品</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
