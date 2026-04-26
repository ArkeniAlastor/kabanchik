import './SpecialistsDirectory.css';
import { useState } from 'react';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';

const categories = [
  { id: 'all', label: 'Всі фахівці', icon: null },
  { id: 'design', label: 'Дизайн', icon: icons.iconDesign },
  { id: 'dev', label: 'Розробка', icon: icons.iconDev },
  { id: 'marketing', label: 'Маркетинг', icon: icons.iconMarketing },
  { id: 'content', label: 'Контент', icon: icons.iconPencil },
  { id: 'video', label: 'Відео', icon: icons.iconVideo },
];

const specialists = [
  {
    id: 1,
    name: 'Андрій Шевченко',
    verified: true,
    title: 'Full Stack розробник',
    rating: 5.0,
    reviews: 63,
    location: 'Київ, Україна',
    description: 'Розробляю веб-додатки під бізнес і стартапи. Спеціалізуюсь на React, Node.js та хмарних технологіях.',
    skills: ['React', 'Node.js', 'TypeScript'],
    priceRange: '1000-1500 ₴/год',
    projectsCount: 124,
    availability: 'Доступний',
    categoryKey: 'dev'
  },
  {
    id: 2,
    name: 'Віктор Ткаченко',
    verified: true,
    title: 'DevOps інженер',
    rating: 5.0,
    reviews: 41,
    location: 'Київ, Україна',
    description: 'Налаштовую CI/CD, серверну інфраструктуру та моніторинг. Працюю з AWS, Docker, Kubernetes і Linux.',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    priceRange: '1500-2000 ₴/год',
    projectsCount: 76,
    availability: 'Доступний',
    categoryKey: 'dev'
  },
  {
    id: 3,
    name: 'Олена Коваленко',
    verified: true,
    title: 'UI/UX дизайнер',
    rating: 4.9,
    reviews: 47,
    location: 'Київ, Україна',
    description: 'Створюю зручні інтерфейси для веб- та мобільних продуктів. Маю 5+ років досвіду в стартапах і сервісних командах.',
    skills: ['Figma', 'Adobe XD', 'Sketch'],
    priceRange: '800-1200 ₴/год',
    projectsCount: 89,
    availability: 'Доступний',
    categoryKey: 'design'
  },
  {
    id: 4,
    name: 'Дмитро Мельник',
    verified: true,
    title: 'Mobile розробник',
    rating: 4.9,
    reviews: 52,
    location: 'Харків, Україна',
    description: 'Розробляю нативні та cross-platform мобільні додатки. Працюю з Flutter, React Native, iOS та Android.',
    skills: ['Flutter', 'React Native', 'iOS'],
    priceRange: '1200-1800 ₴/год',
    projectsCount: 45,
    availability: 'Доступний',
    categoryKey: 'dev'
  },
  {
    id: 5,
    name: 'Анна Бондаренко',
    verified: true,
    title: 'Ілюстратор',
    rating: 4.9,
    reviews: 34,
    location: 'Львів, Україна',
    description: 'Малюю авторські ілюстрації для книг, журналів і рекламних кампаній. Працюю в різних стилях від мінімалізму до детальної графіки.',
    skills: ['Digital Illustration', 'Procreate', 'Adobe Illustrator'],
    priceRange: '700-1000 ₴/год',
    projectsCount: 92,
    availability: 'Доступний',
    categoryKey: 'design'
  },
  {
    id: 6,
    name: 'Марія Петренко',
    verified: true,
    title: 'Графічний дизайнер',
    rating: 4.8,
    reviews: 36,
    location: 'Одеса, Україна',
    description: 'Створюю рекламні креативи, брендинг та дизайн для соціальних мереж. Працюю швидко та ясно, завжди на зв’язку.',
    skills: ['Adobe Illustrator', 'Photoshop', 'Branding'],
    priceRange: '600-900 ₴/год',
    projectsCount: 67,
    availability: 'Зайнятий',
    categoryKey: 'design'
  },
  {
    id: 7,
    name: 'Олексій Іванченко',
    verified: true,
    title: 'Backend розробник',
    rating: 4.8,
    reviews: 66,
    location: 'Київ, Україна',
    description: 'Будую надійні та масштабовані backend-рішення. Працюю з Python, Django, FastAPI, PostgreSQL та інтеграціями API.',
    skills: ['Python', 'Django', 'FastAPI'],
    priceRange: '1000-1400 ₴/год',
    projectsCount: 103,
    availability: 'Зайнятий',
    categoryKey: 'dev'
  },
  {
    id: 8,
    name: 'Ірина Сидоренко',
    verified: false,
    title: 'Контент-менеджер',
    rating: 4.7,
    reviews: 29,
    location: 'Дніпро, Україна',
    description: 'Створюю контент для сайтів і соціальних мереж. Пишу тексти, налаштовую базову SEO-структуру та допомагаю з контент-планом.',
    skills: ['Копірайтинг', 'SEO', 'Content Strategy'],
    priceRange: '400-600 ₴/год',
    projectsCount: 156,
    availability: 'Доступний',
    categoryKey: 'content'
  }
];

function SpecialistsDirectory() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const normalizedCategory = selectedCategory.trim().toLowerCase();
  const normalizedLocation = locationFilter.trim().toLowerCase();
  const normalizedPrice = priceFilter.trim().toLowerCase();

  const filteredSpecialists = specialists.filter((specialist) => {
    const searchableText = [
      specialist.name,
      specialist.title,
      specialist.location,
      specialist.description,
      ...specialist.skills
    ].join(' ').toLowerCase();

    const matchesGroup = activeFilter === 'all' || specialist.categoryKey === activeFilter;
    const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
    const matchesSpecialization = !normalizedCategory || specialist.title.toLowerCase().includes(normalizedCategory) || specialist.skills.some((skill) => skill.toLowerCase().includes(normalizedCategory));
    const matchesLocation = !normalizedLocation || specialist.location.toLowerCase().includes(normalizedLocation);
    const matchesBudget = !normalizedPrice || specialist.priceRange.toLowerCase().includes(normalizedPrice);

    return matchesGroup && matchesQuery && matchesSpecialization && matchesLocation && matchesBudget;
  });

  const SpecialistCard = ({ specialist }) => (
    <div className="specialist-card">
      <div className="card-header">
        <div className="avatar-section">
          <img src={`https://i.pravatar.cc/60?img=${specialist.id}`} alt={specialist.name} className="avatar" />
        </div>
        <div className="name-section">
          <div className="name-row">
            <h3 className="specialist-name">{specialist.name}</h3>
            {specialist.verified && <span className="verified-mark">✓</span>}
          </div>
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

      <div className="card-footer">
        <div className="price-block">
          <p className="price">{specialist.priceRange}</p>
          <span className="projects-count">{specialist.projectsCount} проєктів</span>
        </div>
        <div className="card-meta">
          <span className={`availability-badge ${specialist.availability === 'Доступний' ? 'is-open' : 'is-busy'}`}>
            {specialist.availability}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="SpecialistsDirectory">
        <section className="page-header">
          <div className="directory-container">
            <div className="page-header-content">
              <div className="page-title-row">
                <span className="page-title-icon" aria-hidden="true">👥</span>
                <h1>Каталог фахівців</h1>
              </div>
              <p className="subtitle">{specialists.length} професіоналів готові допомогти з вашими проектами</p>

              <label className="hero-search">
                <input
                  type="text"
                  placeholder="Пошук за ім’ям, спеціалізацією або навичками..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
                <span className="hero-search-icon" aria-hidden="true">⌕</span>
              </label>
            </div>
          </div>
        </section>

        <section className="category-filter">
          <div className="directory-container">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.icon ? <img src={category.icon} alt="" className="filter-icon" /> : null}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-content">
          <div className="directory-container">
            <div className="search-filters">
              <p>Знайдено {filteredSpecialists.length} фахівців</p>
              <div className="search-inputs">
                <input
                  type="text"
                  placeholder="Спеціалізація..."
                  className="search-input"
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Локація..."
                  className="search-input"
                  value={locationFilter}
                  onChange={(event) => setLocationFilter(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Бюджет..."
                  className="search-input"
                  value={priceFilter}
                  onChange={(event) => setPriceFilter(event.target.value)}
                />
              </div>
            </div>

            <div className="specialists-grid">
              {filteredSpecialists.length ? (
                filteredSpecialists.map((specialist) => (
                  <SpecialistCard key={specialist.id} specialist={specialist} />
                ))
              ) : (
                <div className="empty-state">За цими фільтрами фахівців не знайдено.</div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SpecialistsDirectory;
