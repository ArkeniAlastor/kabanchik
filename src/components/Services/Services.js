import './Services.css';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: '🔍',
    iconBg: '#3b5bdb',
    title: 'Пошук фахівців',
    desc: 'Знайдіть ідеального виконавця серед тисяч перевірених фахівців з різних галузей. Фільтруйте за навичками, рейтингом, досвідом та вартістю.',
    features: ['Розширений пошук та фільтри', 'Перегляд портфоліо та відгуків', 'Порівняння пропозицій', 'Верифіковані профілі'],
  },
  {
    icon: '💼',
    iconBg: '#f5a623',
    title: 'Публікація проектів',
    desc: 'Опублікуйте своє завдання безкоштовно та отримайте десятки пропозицій від кваліфікованих фахівців протягом декількох годин.',
    features: ['Безкоштовна публікація', 'Швидкі відгуки від фахівців', 'Детальний опис вимог', 'Гнучкі умови співпраці'],
  },
  {
    icon: '🔒',
    iconBg: '#2ecc71',
    title: 'Безпечні платежі',
    desc: 'Система ескроу-рахунків гарантує безпеку транзакцій. Кошти передаються виконавцю лише після успішного завершення роботи.',
    features: ['Захист коштів на платформі', 'Різні способи оплати', 'Миттєві транзакції', 'Прозора комісія'],
  },
  {
    icon: '⭐',
    iconBg: '#f5a623',
    title: 'Система рейтингів',
    desc: 'Прозора система відгуків та рейтингів допомагає приймати правильні рішення та будувати довірчі відносини.',
    features: ['Чесні відгуки клієнтів', 'Детальна статистика', 'Підтверджені проекти', 'Рейтинг надійності'],
  },
  {
    icon: '🛡️',
    iconBg: '#9b59b6',
    title: 'Захист угод',
    desc: 'Служба підтримки та арбітраж допомагають вирішувати спірні ситуації швидко та справедливо для обох сторін.',
    features: ['Медіація конфліктів', 'Юридична підтримка', 'Гарантії повернення', 'Страхування проектів'],
  },
  {
    icon: '📱',
    iconBg: '#00bcd4',
    title: 'Мобільний додаток',
    desc: 'Керуйте проектами на ходу з нашими мобільними додатками для iOS та Android. Завжди будьте на зв\'язку.',
    features: ['Повний функціонал', 'Push-сповіщення', 'Офлайн-режим', 'Синхронізація даних'],
  },
  {
    icon: '💬',
    iconBg: '#e91e8c',
    title: 'Система повідомлень',
    desc: 'Вбудований чат дозволяє швидко комунікувати з фахівцями, обговорювати деталі проекту та обмінюватись файлами.',
    features: ['Миттєві повідомлення', 'Відправка файлів', 'Історія переписки', 'Групові чати'],
  },
  {
    icon: '📊',
    iconBg: '#00bfa5',
    title: 'Аналітика та звіти',
    desc: 'Детальна статистика по вашим проектам, витратам та доходам. Експортуйте звіти для бухгалтерії.',
    features: ['Фінансові звіти', 'Статистика проектів', 'Експорт даних', 'Візуалізація метрик'],
  },
  {
    icon: '🎓',
    iconBg: '#5c6bc0',
    title: 'Навчальний центр',
    desc: 'Безкоштовні курси, вебінари та матеріали для підвищення ваших навичок та ефективної роботи на платформі.',
    features: ['Відео-уроки', 'Практичні завдання', 'Сертифікати', 'Менторство'],
  },
  {
    icon: '🌐',
    iconBg: '#e53935',
    title: 'API для інтеграції',
    desc: 'Інтегруйте BusyBee з вашими існуючими системами через потужний API. Автоматизуйте процеси та підвищуйте ефективність.',
    features: ['RESTful API', 'Webhooks', 'Детальна документація', 'Технічна підтримка'],
  },
  {
    icon: '🏆',
    iconBg: '#f5a623',
    title: 'Програма лояльності',
    desc: 'Накопичуйте бонуси за активність на платформі та обмінюйте їх на знижки, преміум-функції та ексклюзивні можливості.',
    features: ['Бонусні бали', 'VIP-статус', 'Спеціальні пропозиції', 'Реферальна програма'],
  },
  {
    icon: '🆘',
    iconBg: '#e53935',
    title: 'Підтримка 24/7',
    desc: 'Наша команда завжди готова допомогти. Email, телефон, онлайн-чат - оберіть зручний спосіб зв\'язку.',
    features: ['Цілодобова підтримка', 'Багатомовний сервіс', 'База знань FAQ', 'Персональний менеджер'],
  },
]

const WHY_ITEMS = [
  { emoji: 'UA_FLAG', title: '100% український', desc: 'Створено в Україні для українців' },
  { emoji: '⚡', title: 'Швидкий старт', desc: 'Перші пропозиції за 1 годину' },
  { emoji: '💰', title: 'Чесні ціни', desc: 'Прозора комісія без прихованих платежів' },
  { emoji: '🛡️', title: 'Гарантії', desc: 'Захист кожної угоди та транзакції' },
];


const ServicesPage = () => {
  return (
    <div className="sp-page">
      
      <header className='sp-header'>
        <div className="sp-header-inner">
          <a href='/'className='sp-brand'>
            <span className='sp-brand-icon'>🐝</span>
            <span className='sp-brand-text'>BusyBee</span>
          </a>
          <nav className="sp-nav">
          <Link to="/" className="sp-nav-link">Головна</Link>
          <Link to="/categories" className="sp-nav-link">Категорії</Link>
          <a href="/services" className="sp-nav-link sp-nav-link--active">Сервіси</a>
        </nav>

         <div className="sp-header-actions">
          <Link to="/login" className="btn-login">Увійти</Link>
          <Link to="/register" className="btn-register">Реєстрація</Link>
        </div>
      </div>
    </header>

    <section className='sp-hero'>
      <h1 className='sp-hero-title'>СЕРВІСИ</h1>
      <p className='sp-hero-suntitle'>Все необхідне для успішної співпраці замовників та фахівців в одній екосистемі</p>
    </section>

      <section className="sp-services">
        <div className="sp-services-inner">
          <div className="sp-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="sp-card">
                <div className="sp-card-icon" style={{ background: s.iconBg }}>
                  <span>{s.icon}</span>
                </div>
                <h3 className="sp-card-title">{s.title}</h3>
                <p className="sp-card-desc">{s.desc}</p>
                <ul className="sp-card-features">
                  {s.features.map((f, j) => (
                    <li key={j} className="sp-card-feature">
                      <span className="sp-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="sp-card-link">Дізнатися більше &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-why">
        <h2 className="sp-why-title">Чому обирають BusyBee?</h2>
        <p className="sp-why-subtitle">
          Ми створили платформу, яка поєднує найкращі практики світового фрілансу з унікальними потребами українського ринку
        </p>
        <div className="sp-why-grid">
          {WHY_ITEMS.map((item, i) => (
            <div key={i} className="sp-why-item">
              <div className="sp-why-emoji">
                {item.emoji === 'UA_FLAG' ? (
                  <img
                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1e6.svg"
                    alt="🇺🇦"
                    style={{width:'2.5rem',height:'2.5rem',display:'block',margin:'0 auto'}}
                  />
                ) : item.emoji}
              </div>
              <div className="sp-why-item-title">{item.title}</div>
              <div className="sp-why-item-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sp-cta">
        <h2 className="sp-cta-title">Готові почати?</h2>
        <p className="sp-cta-subtitle">
          Приєднуйтесь до тисяч українців, які вже знайшли свій успіх на BusyBee
        </p>
        <div className="sp-cta-actions">
          <button className="sp-cta-btn sp-cta-btn--white">Почати працювати</button>
          <button className="sp-cta-btn sp-cta-btn--outline">Дізнатися більше</button>
        </div>
      </section>

      <footer className="sp-footer">
        <p>Маленька праця для великих людей!</p>
      </footer>
 
    </div>
  );
};
 
export default ServicesPage;
