import './CategoryPage.css';
import { useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';

const categoryButtons = [
  'Всі категорії',
  'Дизайн і графіка',
  'Розробка і програмування',
  'Маркетинг і реклама',
  'Контент і копірайтинг',
  'Відео і анімація',
  'Аудіо',
  'Бізнес і консалтинг',
  'Переклади',
  'Фотографія',
  'Архітектура та інженерія',
  'Навчання'
];

const categories = [
  { icon: icons.iconDesign, title: 'Графічний дизайн', count: '40k+', group: 'Дизайн і графіка' },
  { icon: icons.iconPeizaj, title: 'Дизайн логотипів', count: '32k+', group: 'Дизайн і графіка' },
  { icon: icons.iconComedyMask, title: 'Ілюстрація', count: '28k+', group: 'Дизайн і графіка' },
  { icon: icons.iconMobila, title: 'UI/UX дизайн', count: '41k+', group: 'Дизайн і графіка' },
  { icon: icons.iconTassel, title: 'Дизайн упаковки', count: '18k+', group: 'Дизайн і графіка' },
  { icon: icons.iconOffice, title: 'Брендинг', count: '25k+', group: 'Дизайн і графіка' },
  { icon: icons.iconTriangle, title: '3D дизайн', count: '15k+', group: 'Дизайн і графіка' },
  { icon: icons.iconCircus, title: 'Дизайн презентацій', count: '22k+', group: 'Дизайн і графіка' },
  { icon: icons.iconDev, title: 'Веб-розробка', count: '50k+', group: 'Розробка і програмування' },
  { icon: icons.iconMobila, title: 'Мобільні додатки', count: '31k+', group: 'Розробка і програмування' },
  { icon: icons.iconProgramming, title: 'Backend розробка', count: '27k+', group: 'Розробка і програмування' },
  { icon: icons.iconGamePad, title: 'Розробка ігор', count: '12k+', group: 'Розробка і програмування' },
  { icon: icons.iconAI, title: 'AI/ML розробка', count: '9k+', group: 'Розробка і програмування' },
  { icon: icons.iconBlockChain, title: 'Blockchain', count: '7k+', group: 'Розробка і програмування' },
  { icon: icons.iconShield, title: 'Кібербезпека', count: '8k+', group: 'Розробка і програмування' },
  { icon: icons.iconCloud, title: 'DevOps', count: '11k+', group: 'Розробка і програмування' },
  { icon: icons.iconMarketing, title: 'Цифровий маркетинг', count: '28k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconLupa, title: 'SEO оптимізація', count: '24k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconSiren, title: 'SMM', count: '31k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconEmail, title: 'Email маркетинг', count: '16k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconMoney, title: 'Контекстна реклама', count: '19k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconBusiness, title: 'Аналітика', count: '14k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconDarts, title: 'Performance маркетинг', count: '12k+', group: 'Маркетинг і реклама' },
  { icon: icons.iconCopywriting, title: 'Копірайтинг', count: '32k+', group: 'Контент і копірайтинг' },
  { icon: icons.iconNotes, title: 'Технічне письмо', count: '11k+', group: 'Контент і копірайтинг' },
  { icon: icons.iconNewspaper, title: 'Контент-маркетинг', count: '18k+', group: 'Контент і копірайтинг' },
  { icon: icons.iconMicrophone, title: 'Сценарії', count: '9k+', group: 'Контент і копірайтинг' },
  { icon: icons.iconBook, title: 'Рерайтинг', count: '14k+', group: 'Контент і копірайтинг' },
  { icon: icons.iconPencil, title: 'Редагування', count: '16k+', group: 'Контент і копірайтинг' },
  { icon: icons.iconVideo, title: 'Відеомонтаж', count: '21k+', group: 'Відео і анімація' },
  { icon: icons.iconCamera, title: 'Відеозйомка', count: '15k+', group: 'Відео і анімація' },
  { icon: icons.iconShine, title: 'Анімація', count: '17k+', group: 'Відео і анімація' },
  { icon: icons.iconPlenka, title: 'Motion дизайн', count: '13k+', group: 'Відео і анімація' },
  { icon: icons.iconComedyMask, title: '3D анімація', count: '10k+', group: 'Відео і анімація' },
  { icon: icons.iconVideo, title: 'Відеореклама', count: '12k+', group: 'Відео і анімація' },
  { icon: icons.iconAudio, title: 'Аудіомонтаж', count: '15k+', group: 'Аудіо' },
  { icon: icons.iconMicrophone, title: 'Озвучування', count: '11k+', group: 'Аудіо' },
  { icon: icons.iconStar, title: 'Створення музики', count: '8k+', group: 'Аудіо' },
  { icon: icons.iconHeadphones, title: 'Звуковий дизайн', count: '7k+', group: 'Аудіо' },
  { icon: icons.iconNotes, title: 'Джингли та саундтреки', count: '6k+', group: 'Аудіо' },
  { icon: icons.iconBusiness, title: 'Бізнес-консалтинг', count: '10k+', group: 'Бізнес і консалтинг' },
  { icon: icons.iconOffice, title: 'Фінансовий консалтинг', count: '14k+', group: 'Бізнес і консалтинг' },
  { icon: icons.iconMarketing, title: 'Маркетингова стратегія', count: '16k+', group: 'Бізнес і консалтинг' },
  { icon: icons.iconDarts, title: 'Бізнес-планування', count: '12k+', group: 'Бізнес і консалтинг' },
  { icon: icons.iconBulb, title: 'Стартап консалтинг', count: '9k+', group: 'Бізнес і консалтинг' },
  { icon: icons.iconGlobus, title: 'Переклад текстів', count: '21k+', group: 'Переклади' },
  { icon: icons.iconEducation, title: 'Технічний переклад', count: '15k+', group: 'Переклади' },
  { icon: icons.iconVideo, title: 'Переклад відео', count: '11k+', group: 'Переклади' },
  { icon: icons.iconChuvak, title: 'Усний переклад', count: '8k+', group: 'Переклади' },
  { icon: icons.iconBook, title: 'Літературний переклад', count: '8k+', group: 'Переклади' },
  { icon: icons.iconPhoto, title: 'Фотозйомка', count: '17k+', group: 'Фотографія' },
  { icon: icons.iconPeizaj, title: 'Обробка фото', count: '19k+', group: 'Фотографія' },
  { icon: icons.iconDesign, title: 'Ретушування', count: '14k+', group: 'Фотографія' },
  { icon: icons.iconPhoto, title: 'Предметна фотозйомка', count: '9k+', group: 'Фотографія' },
  { icon: icons.iconVessilya, title: 'Весільна фотографія', count: '7k+', group: 'Фотографія' },
  { icon: icons.iconArch, title: 'Архітектурне проектування', count: '6k+', group: 'Архітектура та інженерія' },
  { icon: icons.iconHome, title: 'Дизайн інтер\'єру', count: '10k+', group: 'Архітектура та інженерія' },
  { icon: icons.iconTree, title: 'Ландшафтний дизайн', count: '7k+', group: 'Архітектура та інженерія' },
  { icon: icons.iconEngineering, title: 'Інженерні розрахунки', count: '8k+', group: 'Архітектура та інженерія' },
  { icon: icons.iconTriangle, title: '3D візуалізація', count: '12k+', group: 'Архітектура та інженерія' },
  { icon: icons.iconEducation, title: 'Репетиторство', count: '11k+', group: 'Навчання' },
  { icon: icons.iconStudent, title: 'Online курси', count: '9k+', group: 'Навчання' },
  { icon: icons.iconDev, title: 'IT навчання', count: '14k+', group: 'Навчання' },
  { icon: icons.iconChuvak, title: 'Мовні курси', count: '13k+', group: 'Навчання' },
  { icon: icons.iconBee, title: 'Бізнес-тренінги', count: '7k+', group: 'Навчання' }
];

const ALL_CATEGORIES = 'Всі категорії';


function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const navigate = useNavigate();

  const filteredCategories = useMemo(() => {
    return selectedCategory === ALL_CATEGORIES
      ? categories
      : categories.filter((category) => category.group === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleOfferClick = useCallback((categoryTitle, categoryGroup) => {
    navigate('/offers', {
      state: { selectedCategory: categoryGroup, selectedSubCategory: categoryTitle }
    });
  }, [navigate]);

  return (
    <div className="CategoryPage">
      <Header />

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Всі категорії послуг</h1>
              <p className="hero-subtitle">Знайдіть потрібного фахівця серед 65 категорій</p>
              <div className="hero-search">
                <input
                  type="text"
                  placeholder="Пошук категорії..."
                  aria-label="Пошук категорії"
                />
                <span className="hero-search-icon">⌕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <div className="category-buttons">
            {categoryButtons.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="categories-count">Знайдено {filteredCategories.length} категорій</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-grid-section">
        <div className="container">
          <div className="features">
            {filteredCategories.map((category) => (
              <button
                key={`${category.group}-${category.title}`}
                type="button"
                className={`feature1-card ${category.title === 'Веб-розробка' ? 'is-clickable' : ''}`}
                onClick={() => {
                  if (category.title === 'Веб-розробка') {
                    handleOfferClick(category.title, category.group);
                  }
                }}
              >
                <img src={category.icon} alt={category.title} />
                <h3>{category.title}</h3>
                <p>{category.count}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Не знайшли потрібну категорію?</h2>
          <p className="cta-sub">Опишіть ваше завдання, і ми допоможемо знайти фахівця</p>
          <div className="cta-btns">
            <button type="button" className="cta-btn-primary">Створити замовлення</button>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="banner-strip">
        Маленька праця для великих людей!
      </div>
    </div>
  );
}

export default CategoryPage;
