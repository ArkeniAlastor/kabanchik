import './SpecialistsDirectory.css';
import { useState } from 'react';
import Header from '../Header/Header';
import {
  iconDesign,
  iconDev,
  iconMarketing,
  iconPencil,
  iconVideo,
  iconLupa,
} from '../../imgs/icons';

function SpecialistsDirectory(){
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Все відомі', icon: null },
    { id: 'design', label: 'Дизайн', icon: iconDesign },
    { id: 'dev', label: 'Розробка', icon: iconDev },
    { id: 'marketing', label: 'Маркетинг', icon: iconMarketing },
    { id: 'content', label: 'Контент', icon: iconPencil },
    { id: 'video', label: 'Відео', icon: iconVideo },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const specialists = [
    {
      id: 1,
      name: "Андрій Шевченко",
      verified: true,
      title: "Web-розробник",
      rating: 5,
      reviews: 1,
      location: "Київ, Україна",
      description: "Розробляю веб-сайти на високій цілті. Спеціалізуюсь на React. Можу й займе택ниці та майже Допоможу у розробці та створенні для Вас.",
      skills: ["React", "Node.js", "JavaScript"],
      priceRange: "1000-1500 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 2,
      name: "Віктор Ткаченко",
      verified: true,
      title: "DevOps інженер",
      rating: 4.1,
      reviews: 1,
      location: "Київ, Україна",
      description: "Налаштовую CICD, делаю аналіз, контрольування Доступ робіт з AWS, Google Cloud, Kubernetes. Винимаю.",
      skills: ["Docker", "Kubernetes", "AWS"],
      priceRange: "1500-2000 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 3,
      name: "Олена Коваленко",
      verified: true,
      title: "UX/UI дизайнер",
      rating: 4.9,
      reviews: 1,
      location: "Київ, Україна",
      description: "Створюю сучасні та яскраві інтерфейси для м'яких додатків. Маю 8+ років досвіду роботи в стартупах та великими компаніями.",
      skills: ["Figma", "Adobe XD", "Sketch"],
      priceRange: "800-1200 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 4,
      name: "Дмитро Мельник",
      verified: true,
      title: "Мобільний розробник",
      rating: 4.8,
      reviews: 1,
      location: "Київ, Україна",
      description: "Розробляю мобільні OS та Android додатки. Python та React Native. Портфоліо включає 100+ проектів різною складності.",
      skills: ["Kotlin", "React Native", "iOS"],
      priceRange: "1200-1800 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 5,
      name: "Анна Бондаренко",
      verified: true,
      title: "SMM-спеціаліст",
      rating: 4.9,
      reviews: 1,
      location: "Київ, Україна",
      description: "Мінізую контент маркетинг для ком нування, рекламі в роботах. Оптимізую з допомого для всіх нас.",
      skills: ["Digital Marketing", "Facebook", "Adobe Creative"],
      priceRange: "700-1000 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 6,
      name: "Марія Петренко",
      verified: true,
      title: "Графічний дизайнер",
      rating: 4.8,
      reviews: 1,
      location: "Київ, Україна",
      description: "Створюю яскраві логотипи, брошури та дизайн для соціальних мереж. Персоно завдання під запит та здійсню за межам проектів.",
      skills: ["Adobe Illustrator", "Photoshop", "Branding"],
      priceRange: "600-900 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 7,
      name: "Олексій Іванченко",
      verified: true,
      title: "Backend розробник",
      rating: 4.8,
      reviews: 1,
      location: "Київ, Україна",
      description: "Розробляю задачні та масштабовані backend рішення. Python, Django, PostgreSQL. Оптимізую базу даних та API.",
      skills: ["Python", "Django", "PostgreSQL"],
      priceRange: "1000-1400 ₴/год",
      status: "Активний профіль"
    },
    {
      id: 8,
      name: "Ірина Сидоренко",
      verified: false,
      title: "Content-менеджер",
      rating: 4.7,
      reviews: 1,
      location: "Харків, Україна",
      description: "Створюю лікавий контент для сайтів та соціальних мереж. SEO оптимізація базова, контент стратегія та копірайтинг.",
      skills: ["Копірайтинг", "SEO", "Content strategy"],
      priceRange: "400-600 ₴/год",
      status: "Активний профіль"
    }
  ];

  const SpecialistCard = ({ specialist }) => (
    <div className="specialist-card">
      <div className="card-header">
        <div className="avatar-section">
          <img src={`https://i.pravatar.cc/60?img=${specialist.id}`} alt={specialist.name} className="avatar" />
          {specialist.verified && <span className="verified-badge">✓</span>}
        </div>
        <div className="name-section">
          <h3 className="specialist-name">{specialist.name}</h3>
          <p className="specialist-title">{specialist.title}</p>
        </div>
      </div>

      <div className="rating-section">
        <div className="rating">
          <span className="stars">★</span>
          <span className="rating-value">{specialist.rating}</span>
        </div>
        <span className="reviews">({specialist.reviews})</span>
        <span className="location">{specialist.location}</span>
      </div>

      <p className="description">{specialist.description}</p>

      <div className="skills">
        {specialist.skills.map((skill, idx) => (
          <span key={idx} className="skill-tag">{skill}</span>
        ))}
      </div>

      <div className="price-section">
        <p className="price">{specialist.priceRange}</p>
        <div className="card-actions">
          <a href="#" className="view-profile">Переглянути профіль →</a>
          <button className="contact-btn">Написати</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="SpecialistsDirectory">
        <div className="page-header">
          <h1>Каталог фахівців</h1>
          <p className="subtitle">8 професіоналів готові допомогти з вашими проектами</p>
        </div>

      <div className="filters-section">
        <div className="filter-buttons">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.id === 'all' ? '✓' : ''}
              {category.icon && <img src={category.icon} alt={category.label} className="filter-icon" />}
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="search-filters">
        <p>Значення в фільтрах</p>
        <div className="search-inputs">
          <input 
            type="text" 
            placeholder="Пошук..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Категорія..." 
            className="search-input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Ціна..." 
            className="search-input"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="specialists-grid">
        {specialists.map(specialist => (
          <SpecialistCard key={specialist.id} specialist={specialist} />
        ))}
      </div>
    </div>
    </>
  );
}

export default SpecialistsDirectory;
