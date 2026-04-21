import './CategoryPage.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {iconCheck,iconMoney,iconLightning,iconShield,iconChat,iconStar,iconDarts,iconStudent,iconHome,iconTree,iconTriangle,iconVessilya,iconHeadphones,iconLupa,iconOffice,iconTassel,iconCloud,iconGamePad,iconGlobus,iconBulb,iconNotes,iconBook,iconShine,iconPlenka,iconCircus,iconBlockChain,iconAI,iconEmail,iconSiren,iconMicrophone,iconNewspaper,iconPencil,iconCamera,iconComedyMask,iconMusical,iconPeizaj,iconChuvak,iconMobila,iconBee } from '../../imgs/icons';


const popularTags = ['Дизайн', 'Веб-розробка', 'SEO', 'Копірайтинг', 'Переклад'];

const categoryButtons = [
  'Всі категорії',
  'Дизайні і графіка',
  'Розробка і програмування',
  'Маркетинг | реклама',
  'Контент | копірайтинг',
  'Відео | анімація',
  'Аудіо'
];


const features = [
    { icon: iconCheck, title: 'Перевірені фахівці', text: 'Всі спеціалісти проходять верифікацію' },
    { icon: iconMoney, title: 'Безпечні платежі', text: 'Гарантія повернення коштів' },
    { icon: iconLightning, title: 'Швидкий старт', text: 'Знайдіть фахівця за кілька хвилин' },
    { icon: iconShield, title: 'Захист угод', text: 'Безпека кожної транзакції' },
    { icon: iconChat, title: 'Підтримка 24/7', text: 'Завжди готові вам допомогти' },
    { icon: iconStar, title: 'Рейтинги та відгуки', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconDarts, title: 'Perfomance маркетинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconStudent, title: 'Online курси', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconHome, title: 'Дизайн інтер/єру', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconTree, title: 'Ландшафтний дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconTriangle, title: '3D візуалізація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconVessilya, title: 'Весільна фотографія', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconHeadphones, title: 'Звуковий дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconLupa, title: 'SEO оптимізація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconOffice, title: 'Брендинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconTassel, title: 'Дизайн упаковки', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconCloud, title: 'DevOps', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconGamePad, title: 'Розробка ігор', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconGlobus, title: 'Переклад текстів', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconBulb, title: 'Стартап консалтинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconNotes, title: 'Джингли та саундтреки', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconBook, title: 'Рерайтинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconShine, title: 'Анімація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconPlenka, title: 'Motion дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconCircus, title: 'Дизайн презентацій', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconBlockChain, title: 'Blockchain', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconAI, title: 'AI/ML розробка', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconEmail, title: 'Email маркетинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconSiren, title: 'SMM', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMicrophone, title: 'Сценарії', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconNewspaper, title: 'Контент-маркетинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconPencil, title: 'Редагування', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconCamera, title: 'Відеозйомка', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconComedyMask, title: 'Ілюстрація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMusical, title: 'Створення музики', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconPeizaj, title: 'Дизайн логотипів', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconChuvak, title: 'Усний переклад', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMobila, title: 'UI/UX дизайн', text: 'Обирайте на основі реальних відгуків' },
  ];


function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Всі категорії');
  const [showCategoryOverlay, setShowCategoryOverlay] = useState(false);

  const handleCategoryClick = (category) => {
    if (category !== 'Всі категорії') {
      setSelectedCategory(category);
      setShowCategoryOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowCategoryOverlay(false);
    setSelectedCategory('Всі категорії');
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
                <input type="text" placeholder="Що потрібно зробити? (наприклад: дизайн лого)" aria-label="Пошук" />
                <button type="button">Знайти</button>
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
          <p className="categories-count">Знайдено 65 категорій</p>
        </div>
      </section>
      {!showCategoryOverlay ? (
        <div className="features">
          {features.map((feature1, index) => (
            <div key={index} className="feature1-card">
              <img src={feature1.icon} alt={feature1.title} />
              <h3>{feature1.title}</h3>
              <p>{feature1.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="category-overlay">
          <button type="button" className="overlay-close-btn" onClick={handleCloseOverlay}>← Усі категорії</button>
          <div className="overlay-content">
            <h2 className="overlay-title">{selectedCategory}</h2>
            <div className="overlay-features">
              {features.slice(0, 12).map((feature1, index) => (
                <div key={index} className="feature1-card">
                  <img src={feature1.icon} alt={feature1.title} />
                  <h3>{feature1.title}</h3>
                  <p>{feature1.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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
      <Footer />
    </div>

    
  );}

export default CategoryPage;
