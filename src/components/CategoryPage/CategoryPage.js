import './CategoryPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  iconDesign,
  iconPeizaj,
  iconComedyMask,
  iconMobila,
  iconTassel,
  iconOffice,
  iconTriangle,
  iconCircus,
  iconDev,
  iconProgramming,
  iconGamePad,
  iconAI,
  iconBlockChain,
  iconShield,
  iconCloud,
  iconMarketing,
  iconLupa,
  iconSiren,
  iconEmail,
  iconMoney,
  iconBusiness,
  iconDarts,
  iconCopywriting,
  iconNotes,
  iconNewspaper,
  iconMicrophone,
  iconBook,
  iconPencil,
  iconVideo,
  iconCamera,
  iconShine,
  iconPlenka,
  iconAudio,
  iconHeadphones,
  iconStar,
  iconBulb,
  iconGlobus,
  iconChuvak,
  iconPhoto,
  iconVessilya,
  iconArch,
  iconHome,
  iconTree,
  iconEngineering,
  iconEducation,
  iconStudent,
  iconBee
} from '../../imgs/icons';

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
  { icon: iconDesign, title: 'Графічний дизайн', count: '40k+', group: 'Дизайн і графіка' },
  { icon: iconPeizaj, title: 'Дизайн логотипів', count: '32k+', group: 'Дизайн і графіка' },
  { icon: iconComedyMask, title: 'Ілюстрація', count: '28k+', group: 'Дизайн і графіка' },
  { icon: iconMobila, title: 'UI/UX дизайн', count: '41k+', group: 'Дизайн і графіка' },
  { icon: iconTassel, title: 'Дизайн упаковки', count: '18k+', group: 'Дизайн і графіка' },
  { icon: iconOffice, title: 'Брендинг', count: '25k+', group: 'Дизайн і графіка' },
  { icon: iconTriangle, title: '3D дизайн', count: '15k+', group: 'Дизайн і графіка' },
  { icon: iconCircus, title: 'Дизайн презентацій', count: '22k+', group: 'Дизайн і графіка' },
  { icon: iconDev, title: 'Веб-розробка', count: '50k+', group: 'Розробка і програмування' },
  { icon: iconMobila, title: 'Мобільні додатки', count: '31k+', group: 'Розробка і програмування' },
  { icon: iconProgramming, title: 'Backend розробка', count: '27k+', group: 'Розробка і програмування' },
  { icon: iconGamePad, title: 'Розробка ігор', count: '12k+', group: 'Розробка і програмування' },
  { icon: iconAI, title: 'AI/ML розробка', count: '9k+', group: 'Розробка і програмування' },
  { icon: iconBlockChain, title: 'Blockchain', count: '7k+', group: 'Розробка і програмування' },
  { icon: iconShield, title: 'Кібербезпека', count: '8k+', group: 'Розробка і програмування' },
  { icon: iconCloud, title: 'DevOps', count: '11k+', group: 'Розробка і програмування' },
  { icon: iconMarketing, title: 'Цифровий маркетинг', count: '28k+', group: 'Маркетинг і реклама' },
  { icon: iconLupa, title: 'SEO оптимізація', count: '24k+', group: 'Маркетинг і реклама' },
  { icon: iconSiren, title: 'SMM', count: '31k+', group: 'Маркетинг і реклама' },
  { icon: iconEmail, title: 'Email маркетинг', count: '16k+', group: 'Маркетинг і реклама' },
  { icon: iconMoney, title: 'Контекстна реклама', count: '19k+', group: 'Маркетинг і реклама' },
  { icon: iconBusiness, title: 'Аналітика', count: '14k+', group: 'Маркетинг і реклама' },
  { icon: iconDarts, title: 'Performance маркетинг', count: '12k+', group: 'Маркетинг і реклама' },
  { icon: iconCopywriting, title: 'Копірайтинг', count: '32k+', group: 'Контент і копірайтинг' },
  { icon: iconNotes, title: 'Технічне письмо', count: '11k+', group: 'Контент і копірайтинг' },
  { icon: iconNewspaper, title: 'Контент-маркетинг', count: '18k+', group: 'Контент і копірайтинг' },
  { icon: iconMicrophone, title: 'Сценарії', count: '9k+', group: 'Контент і копірайтинг' },
  { icon: iconBook, title: 'Рерайтинг', count: '14k+', group: 'Контент і копірайтинг' },
  { icon: iconPencil, title: 'Редагування', count: '16k+', group: 'Контент і копірайтинг' },
  { icon: iconVideo, title: 'Відеомонтаж', count: '21k+', group: 'Відео і анімація' },
  { icon: iconCamera, title: 'Відеозйомка', count: '15k+', group: 'Відео і анімація' },
  { icon: iconShine, title: 'Анімація', count: '17k+', group: 'Відео і анімація' },
  { icon: iconPlenka, title: 'Motion дизайн', count: '13k+', group: 'Відео і анімація' },
  { icon: iconComedyMask, title: '3D анімація', count: '10k+', group: 'Відео і анімація' },
  { icon: iconVideo, title: 'Відеореклама', count: '12k+', group: 'Відео і анімація' },
  { icon: iconAudio, title: 'Аудіомонтаж', count: '15k+', group: 'Аудіо' },
  { icon: iconMicrophone, title: 'Озвучування', count: '11k+', group: 'Аудіо' },
  { icon: iconStar, title: 'Створення музики', count: '8k+', group: 'Аудіо' },
  { icon: iconHeadphones, title: 'Звуковий дизайн', count: '7k+', group: 'Аудіо' },
  { icon: iconNotes, title: 'Джингли та саундтреки', count: '6k+', group: 'Аудіо' },
  { icon: iconBusiness, title: 'Бізнес-консалтинг', count: '10k+', group: 'Бізнес і консалтинг' },
  { icon: iconOffice, title: 'Фінансовий консалтинг', count: '14k+', group: 'Бізнес і консалтинг' },
  { icon: iconMarketing, title: 'Маркетингова стратегія', count: '16k+', group: 'Бізнес і консалтинг' },
  { icon: iconDarts, title: 'Бізнес-планування', count: '12k+', group: 'Бізнес і консалтинг' },
  { icon: iconBulb, title: 'Стартап консалтинг', count: '9k+', group: 'Бізнес і консалтинг' },
  { icon: iconGlobus, title: 'Переклад текстів', count: '21k+', group: 'Переклади' },
  { icon: iconEducation, title: 'Технічний переклад', count: '15k+', group: 'Переклади' },
  { icon: iconVideo, title: 'Переклад відео', count: '11k+', group: 'Переклади' },
  { icon: iconChuvak, title: 'Усний переклад', count: '8k+', group: 'Переклади' },
  { icon: iconBook, title: 'Літературний переклад', count: '8k+', group: 'Переклади' },
  { icon: iconPhoto, title: 'Фотозйомка', count: '17k+', group: 'Фотографія' },
  { icon: iconPeizaj, title: 'Обробка фото', count: '19k+', group: 'Фотографія' },
  { icon: iconDesign, title: 'Ретушування', count: '14k+', group: 'Фотографія' },
  { icon: iconPhoto, title: 'Предметна фотозйомка', count: '9k+', group: 'Фотографія' },
  { icon: iconVessilya, title: 'Весільна фотографія', count: '7k+', group: 'Фотографія' },
  { icon: iconArch, title: 'Архітектурне проектування', count: '6k+', group: 'Архітектура та інженерія' },
  { icon: iconHome, title: 'Дизайн інтер\'єру', count: '10k+', group: 'Архітектура та інженерія' },
  { icon: iconTree, title: 'Ландшафтний дизайн', count: '7k+', group: 'Архітектура та інженерія' },
  { icon: iconEngineering, title: 'Інженерні розрахунки', count: '8k+', group: 'Архітектура та інженерія' },
  { icon: iconTriangle, title: '3D візуалізація', count: '12k+', group: 'Архітектура та інженерія' },
  { icon: iconEducation, title: 'Репетиторство', count: '11k+', group: 'Навчання' },
  { icon: iconStudent, title: 'Online курси', count: '9k+', group: 'Навчання' },
  { icon: iconDev, title: 'IT навчання', count: '14k+', group: 'Навчання' },
  { icon: iconChuvak, title: 'Мовні курси', count: '13k+', group: 'Навчання' },
  { icon: iconBee, title: 'Бізнес-тренінги', count: '7k+', group: 'Навчання' }
];


function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Всі категорії');
  const navigate = useNavigate();
  
  const filteredCategories = selectedCategory === 'Всі категорії'
    ? categories
    : categories.filter((category) => category.group === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleOfferClick = (categoryTitle, categoryGroup) => {
    navigate('/offers', { state: { selectedCategory: categoryGroup, selectedSubCategory: categoryTitle } });
  };

  return (
    <div className="CategoryPage">
      <Header />
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Всі категорії послуг</h1>
              <p className="hero-subtitle">Знайдіть потрібного фахівця серед 65 категорій</p>
              <div className="hero-search">
                <input type="text" placeholder="Пошук категорії..." aria-label="Пошук категорії" />
                <span className="hero-search-icon">⌕</span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="categories-grid-section">
        <div className="container">
          <div className="features">
            {filteredCategories.map((category) => (
              <div key={category.title} className="feature1-card">
                <img src={category.icon} alt={category.title} />
                <h3>{category.title}</h3>
                <p>{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Не знайшли потрібну категорію?</h2>
          <p className="cta-sub">Опишіть ваше завдання, і ми допоможемо знайти фахівця</p>
          <div className="cta-btns">
            <button type="button" className="cta-btn-primary">Створити замовлення</button>
          </div>
        </div>
      </section>
      <div className="banner-strip">
        Маленька праця для великих людей!
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
