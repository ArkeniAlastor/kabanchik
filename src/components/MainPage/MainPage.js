import './MainPage.css';
import iconHome from '../../imgs/icons-02.svg';
import iconDelivery from '../../imgs/icons-02-14.svg';
import iconFreelance from '../../imgs/icons-02-15.svg';
import iconTeachers from '../../imgs/icons-02-16.svg';
import iconBusiness from '../../imgs/icons-02-17.svg';
import iconCategories from '../../imgs/icons-02-18.svg';
import iconExtra1 from '../../imgs/icons-02-04.svg';
import iconExtra2 from '../../imgs/Frame 84.svg';
import iconExtra3 from '../../imgs/Frame 85.svg';

function MainPage() {
  const categoryIcons = [
    { label: 'Дім', img: iconHome },
    { label: 'Доставка', img: iconDelivery },
    { label: 'Фріланс', img: iconFreelance },
    { label: 'Викладачі', img: iconTeachers },
    { label: 'Бізнес', img: iconBusiness },
    { label: 'Категорії', img: iconCategories },
  ];

  const serviceCards = [
    {
      icon: iconHome,
      title: 'Домашній майстер',
      items: [
        { text: 'Допомога літнім людям', count: '9638' },
        { text: 'Транспортні перевезення', count: '96' },
        { text: 'Доставка пального', count: '9638' },
      ],
    },
    {
      icon: iconDelivery,
      title: 'Доставка та кур’єр',
      items: [
        { text: 'Термінові посилки', count: '642' },
        { text: 'Фургони та вантаж', count: '184' },
        { text: 'Місцева доставка', count: '1 264' },
      ],
    },
    {
      icon: iconFreelance,
      title: 'Онлайн-послуги',
      items: [
        { text: 'Консультації', count: '1 038' },
        { text: 'Дизайн та верстка', count: '426' },
        { text: 'Переклади', count: '287' },
      ],
    },
    {
      icon: iconTeachers,
      title: 'Викладачі',
      items: [
        { text: 'Репетиторство', count: '532' },
        { text: 'Мови та IT', count: '398' },
        { text: 'Підготовка до тестів', count: '214' },
      ],
    },
    {
      icon: iconBusiness,
      title: 'Бізнес-послуги',
      items: [
        { text: 'Маркетинг', count: '128' },
        { text: 'Юридична підтримка', count: '76' },
        { text: 'Фінансовий аналіз', count: '54' },
      ],
    },
    {
      icon: iconCategories,
      title: 'Категорії',
      items: [
        { text: 'Пошук фахівця', count: '1 230' },
        { text: 'Нові пропозиції', count: '842' },
        { text: 'Топ-заявки', count: '648' },
      ],
    },
    {
      icon: iconExtra1,
      title: 'Сантехнік',
      items: [
        { text: 'Заміна труб', count: '184' },
        { text: 'Установка фільтрів', count: '72' },
        { text: 'Налагодження', count: '38' },
      ],
    },
    {
      icon: iconExtra2,
      title: 'Електрик',
      items: [
        { text: 'Розетки та освітлення', count: '248' },
        { text: 'Щитки та автоматика', count: '96' },
        { text: 'Ремонт техніки', count: '124' },
      ],
    },
    {
      icon: iconExtra3,
      title: 'Побутові послуги',
      items: [
        { text: 'Прибирання', count: '632' },
        { text: 'Догляд за будинком', count: '148' },
        { text: 'Мелкий ремонт', count: '392' },
      ],
    },
  ];

  const extraServiceCards = [
    {
      icon: iconDelivery,
      title: 'Логістика',
      items: [
        { text: 'Складування', count: '142' },
        { text: 'Транспортні маршрути', count: '97' },
        { text: 'Митне оформлення', count: '64' },
      ],
    },
    {
      icon: iconFreelance,
      title: 'Дизайн',
      items: [
        { text: 'Інтер’єрні ескізи', count: '128' },
        { text: 'Логотипи', count: '76' },
        { text: 'Презентації', count: '93' },
      ],
    },
    {
      icon: iconBusiness,
      title: 'Юридична допомога',
      items: [
        { text: 'Контракти', count: '58' },
        { text: 'Захист у суді', count: '34' },
        { text: 'Патентні питання', count: '19' },
      ],
    },
    {
      icon: iconTeachers,
      title: 'Краса та здоров’я',
      items: [
        { text: 'Перукарські послуги', count: '112' },
        { text: 'Манікюр', count: '87' },
        { text: 'Масаж', count: '63' },
      ],
    },
    {
      icon: iconCategories,
      title: 'Будівництво',
      items: [
        { text: 'Фундаментні роботи', count: '46' },
        { text: 'Оздоблення фасадів', count: '32' },
        { text: 'Монтаж покрівлі', count: '28' },
      ],
    },
    {
      icon: iconHome,
      title: 'Еко-послуги',
      items: [
        { text: 'Дезінфекція', count: '81' },
        { text: 'Очищення повітря', count: '49' },
        { text: 'Установка фільтрів', count: '66' },
      ],
    },
  ];

  return (
    <main className="main-page">
      <section className="hero">
        <header className="main-header">
          <div className="header-left">
            <a href="#" className="brand-link">
              {/* logo placeholder */}
              <span className="brand-icon" aria-hidden="true">B</span>
              <span className="brand-text">BusyBee</span>
            </a>
            <button type="button" className="header-button header-button--outline">
              Створити замовлення
            </button>
          </div>

          <div className="header-center">
            <div className="header-searchbar">
              <input
                type="text"
                placeholder="Що треба зробити?"
                aria-label="Пошук послуг"
              />
              <button type="button" className="header-button header-button--search">
                Знайти фахівця
              </button>
            </div>
          </div>

          <div className="header-right">
            <button type="button" className="icon-button" aria-label="Профіль">
              {/* profile placeholder */}
              <span className="profile-placeholder" />
            </button>
            <button type="button" className="header-button header-button--primary">
              Стати фахівцем
            </button>
          </div>
        </header>

        <div className="hero-content">
          <h1>Заказывай та надавай послуги з комфортом</h1>
          <p>Разом нас не зупинити. Ми з Україною.</p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Що треба зробити?"
              aria-label="Пошук послуг"
            />
            <button type="button">Знайти фахівця</button>
          </div>
          <div className="cards-block">
            <div className="category-list">
              {categoryIcons.map((category) => (
                <a key={category.label} href="#" className="category-card">
                  <div className="category-icon">
                    <img src={category.img} alt={`${category.label} icon`} />
                  </div>
                  <span className="category-label">{category.label}</span>
                </a>
              ))}
            </div>

            <div className="service-grid">
              {serviceCards.map((card, idx) => (
                <article key={idx} className="service-card">
                  <div className="service-card-header">
                    <div className="service-card-icon">
                      <img src={card.icon} alt="Service icon" />
                    </div>
                    <h3 className="service-card-title">{card.title}</h3>
                  </div>
                  <ul className="service-features">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="service-feature">
                        <span>{item.text}</span>
                        <span className="service-count">{item.count}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <a href="#" className="service-card-link">Показати ще</a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <section className="bottom-section">
            <h2>Ще більше послуг</h2>
            <div className="service-grid">
              {extraServiceCards.map((card, idx) => (
                <article key={idx} className="service-card">
                  <div className="service-card-header">
                    <div className="service-card-icon">
                      <img src={card.icon} alt="Service icon" />
                    </div>
                    <h3 className="service-card-title">{card.title}</h3>
                  </div>
                  <ul className="service-features">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="service-feature">
                        <span>{item.text}</span>
                        <span className="service-count">{item.count}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <a href="#" className="service-card-link">Показати ще</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default MainPage;

