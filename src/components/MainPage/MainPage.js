import './MainPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  iconBee,
  iconDesign,
  iconDev,
  iconCopywriting,
  iconMarketing,
  iconVideo,
  iconAudio,
  iconBusiness,
  iconPhoto,
  iconProgramming,
  iconArch,
  iconEngineering,
  iconEducation,
  iconCheck,
  iconMoney,
  iconLightning,
  iconShield,
  iconChat,
  iconStar,
} from '../../imgs/icons';

function MainPage() {
  const categories = [
    { label: 'Дизайн та графіка', icon: iconDesign, count: '420+' },
    { label: 'Розробка', icon: iconDev, count: '380+' },
    { label: 'Копірайтинг', icon: iconCopywriting, count: '320+' },
    { label: 'Маркетинг', icon: iconMarketing, count: '248+' },
    { label: 'Відео', icon: iconVideo, count: '210+' },
    { label: 'Аудіо', icon: iconAudio, count: '180+' },
    { label: 'Бізнес', icon: iconBusiness, count: '196+' },
    { label: 'Фото', icon: iconPhoto, count: '114+' },
    { label: 'Програмування', icon: iconProgramming, count: '438+' },
    { label: 'Архітектура', icon: iconArch, count: '92+' },
    { label: 'Інжинірінг', icon: iconEngineering, count: '84+' },
    { label: 'Навчання', icon: iconEducation, count: '196+' },
  ];

  const features = [
    { icon: iconCheck, title: 'Перевірені фахівці', text: 'Всі спеціалісти проходять верифікацію' },
    { icon: iconMoney, title: 'Безпечні платежі', text: 'Гарантія повернення коштів' },
    { icon: iconLightning, title: 'Швидкий старт', text: 'Знайдіть фахівця за кілька хвилин' },
    { icon: iconShield, title: 'Захист угод', text: 'Безпека кожної транзакції' },
    { icon: iconChat, title: 'Підтримка 24/7', text: 'Завжди готові вам допомогти' },
    { icon: iconStar, title: 'Рейтинги та відгуки', text: 'Обирайте на основі реальних відгуків' },
  ];

  const popularTags = ['Дизайн', 'Веб-розробка', 'SEO', 'Копірайтинг', 'Переклад'];

  return (
    <div className="page">
      <Header />

      <main>

        {/* Hero */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Знайдіть ідеального фахівця для вашого проекту</h1>
                <p className="hero-subtitle">Більше 250,000 професіоналів готові допомогти з будь-яким завданням</p>
                <div className="hero-search">
                  <input type="text" placeholder="Що потрібно зробити? (наприклад: дизайн лого)" aria-label="Пошук" />
                  <button type="button">Знайти</button>
                </div>
                <div className="hero-tags">
                  <span className="hero-tags-label">Популярні:</span>
                  {popularTags.map((tag) => (
                    <button key={tag} type="button" className="hero-tag">{tag}</button>
                  ))}
                </div>
              </div>
              <div className="hero-image">
                <img src={iconBee} alt="BusyBee" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories-section">
          <div className="container">
            <h2 className="section-title">Популярні категорії</h2>
            <div className="categories-grid">
              {categories.map((cat) => (
                <a key={cat.label} href="/" className="cat-card">
                  <div className="cat-icon">
                    <img src={cat.icon} alt={cat.label} />
                  </div>
                  <p className="cat-label">{cat.label}</p>
                  <p className="cat-count">{cat.count}</p>
                </a>
              ))}
            </div>
            <div className="categories-more">
              <button type="button" className="btn-all-cats">Переглянути всі категорії</button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-section">
          <div className="container">
            <h2 className="section-title">Як це працює</h2>
            <p className="section-sub">Три простих кроки до результату</p>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3 className="step-title">Створіть замовлення</h3>
                <p className="step-text">Опишіть що вам потрібно та встановіть бюджет</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3 className="step-title">Оберіть фахівця</h3>
                <p className="step-text">Отримайте пропозиції від профіоналів та оберіть найкращого</p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3 className="step-title">Отримайте результат</h3>
                <p className="step-text">Працюйте разом та отримайте якісний результат вчасно</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Чому обирають BusyBee</h2>
            <div className="features-grid">
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">
                    <img src={f.icon} alt={f.title} />
                  </div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <strong>250K+</strong>
                <span>Фахівців</span>
              </div>
              <div className="stat-item">
                <strong>1,5M+</strong>
                <span>Проектів</span>
              </div>
              <div className="stat-item">
                <strong>98%</strong>
                <span>Задоволених клієнтів</span>
              </div>
              <div className="stat-item">
                <strong>24/7</strong>
                <span>Підтримка</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Готові почати?</h2>
            <p className="cta-sub">Приєднуйтесь до тисяч користувачів які вже знайшли свого фахівця</p>
            <div className="cta-btns">
              <button type="button" className="cta-btn-primary">Створити замовлення</button>
              <button type="button" className="cta-btn-outline">Знайти фахівця</button>
            </div>
          </div>
        </section>

        {/* Banner */}
        <div className="banner-strip">
          Маленька праця для великих людей!
        </div>

        <Footer />

      </main>
    </div>
  );
}

export default MainPage;
