import './MainPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  iconHome,
  iconDelivery,
  iconFreelance,
  iconTeachers,
  iconBusiness,
  iconCategories,
  iconExtra1,
  iconExtra2,
  iconExtra3,
} from '../../imgs/icons';

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
      title: "Доставка та кур'єр",
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
        { text: 'Дрібний ремонт', count: '392' },
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
        { text: "Інтер'єрні ескізи", count: '128' },
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
      title: "Краса та здоров'я",
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

  const vacancyCards = [
    { title: 'Бариста', location: 'Одеса', published: 'опубліковано 3 години тому' },
    { title: "Кур'єр", location: 'Одеса', published: 'опубліковано 3 години тому' },
    { title: 'Адміністратор', location: 'Одеса', published: 'опубліковано 3 години тому' },
    { title: 'Водій', location: 'Одеса', published: 'опубліковано 3 години тому' },
  ];

  const vacancyTags = [
    'Продавець', 'Охоронець', 'Вантажник', 'Касир', 'Прибиральник',
    'Офіціант', 'Кухар', 'Промоутер', 'Пакувальник', 'Складський робітник',
  ];

  const geoCols = [
    [
      'Олександрія', 'Біла Церква', 'Білгород-Дністровський', 'Бердичів',
      'Бердянськ', 'Березань', 'Бориспіль', 'Боярка', 'Бровари', 'Буча',
      'Васильків', 'Вінниця', 'Вишневе', 'Вишгород',
      'Дніпро (Дніпропетровськ)', 'Дрогобич', 'Житомир', 'Запоріжжя',
    ],
    [
      'Івано-Франківськ', 'Ізмаїл', 'Ірпінь', "Кам'янець-Подільський",
      "Кам'янське (Дніпродзержинськ)", 'Київ', 'Ковель', 'Конотоп',
      'Краматорськ', 'Кременчук', 'Кривий Ріг',
      'Кропивницький (Кіровоград)', 'Лисичанськ', 'Лозова',
      'Луцьк', 'Львів', 'Маріуполь',
    ],
    [
      'Мелітополь', 'Мукачево', 'Ніжин', 'Миколаїв', 'Нікополь',
      'Новомосковськ', 'Обухів', 'Одеса', 'Павлоград', 'Первомайськ',
      'Переяслав-Хмельницький', 'Полтава', 'Прилуки', 'Ржищів',
      'Рівне', 'Северодонецьк', 'Славутич', "Слов'янськ",
    ],
    [
      'Сміла', 'Суми', 'Тернопіль', 'Ужгород', 'Українка', 'Умань',
      'Фастів', 'Харків', 'Херсон', 'Хмельницький', 'Червоноград',
      'Черкаси', 'Чернігів', 'Чернівці', 'Чорноморськ (Іллічівськ)',
      'Шостка', 'Енергодар', 'Яготин',
    ],
  ];

  return (
    <div className="page">
      <Header />

      <main>

        {/* Hero */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-badge">
              <span />
              Понад 50 000 фахівців онлайн
            </div>
            <h1 className="hero-title">Замовляй та надавай<br /><em>послуги з комфортом</em></h1>
            <p className="hero-subtitle">Разом нас не зупинити. Ми з Україною.</p>
            <div className="hero-search">
              <input
                type="text"
                placeholder="Що треба зробити?"
                aria-label="Пошук послуг"
              />
              <button type="button">Знайти фахівця</button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>50 000+</strong>
                <span>фахівців</span>
              </div>
              <div className="hero-stat">
                <strong>120 000+</strong>
                <span>виконаних замовлень</span>
              </div>
              <div className="hero-stat">
                <strong>4.9 ★</strong>
                <span>середній рейтинг</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Популярні послуги</h2>
            <p className="section-lead">Знайди фахівця в будь-якій категорії</p>
            <div className="category-list">
              {categoryIcons.map((cat) => (
                <a key={cat.label} href="/" className="category-card">
                  <div className="category-icon">
                    <img src={cat.img} alt={cat.label} />
                  </div>
                  <span className="category-label">{cat.label}</span>
                </a>
              ))}
            </div>

            <div className="service-grid">
              {serviceCards.map((card, idx) => (
                <article key={idx} className="service-card">
                  <div className="service-card-header">
                    <div className="service-card-icon">
                      <img src={card.icon} alt="icon" />
                    </div>
                    <h3 className="service-card-title">{card.title}</h3>
                  </div>
                  <ul className="service-features">
                    {card.items.map((item, i) => (
                      <li key={i} className="service-feature">
                        <span>{item.text}</span>
                        <span className="service-count">{item.count}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <a href="/" className="service-card-link">Показати ще</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* More Services */}
        <section className="more-section">
          <div className="container">
            <h2 className="section-title">Ще більше послуг</h2>
            <p className="section-lead">Ми охоплюємо всі сфери</p>
            <div className="service-grid">
              {extraServiceCards.map((card, idx) => (
                <article key={idx} className="service-card">
                  <div className="service-card-header">
                    <div className="service-card-icon">
                      <img src={card.icon} alt="icon" />
                    </div>
                    <h3 className="service-card-title">{card.title}</h3>
                  </div>
                  <ul className="service-features">
                    {card.items.map((item, i) => (
                      <li key={i} className="service-feature">
                        <span>{item.text}</span>
                        <span className="service-count">{item.count}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <a href="/" className="service-card-link">Показати ще</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Vacancies */}
        <section className="vacancies-section">
          <div className="container">
            <div className="vacancies-header">
              <h2>Не знайшли потрібну послугу? Використовуйте пошук!</h2>
              <div className="vacancies-search">
                <input type="text" placeholder="Яку роботу вам потрібно виконати?" />
                <button type="button" className="vacancies-city-btn">Одеса &#8964;</button>
              </div>
            </div>

            <div className="vacancies-top">
              <p className="vacancies-count"><strong>23</strong> вакансій знайдено</p>
              <div className="vacancies-filters">
                <button type="button" className="pill-button pill-button--active">Усі рубрики</button>
                <button type="button" className="pill-button">Вся Україна</button>
              </div>
            </div>

            <div className="vacancy-grid">
              {vacancyCards.map((vacancy, idx) => (
                <article key={idx} className="vacancy-card">
                  <div className="vacancy-card-body">
                    <h3 className="vacancy-title">{vacancy.title}</h3>
                    <p className="vacancy-location">{vacancy.location}</p>
                    <p className="vacancy-published">{vacancy.published}</p>
                  </div>
                  <button type="button" className="vacancy-button">Відгукнутись</button>
                </article>
              ))}
            </div>

            <div className="vacancy-tags">
              {vacancyTags.map((tag, idx) => (
                <button key={idx} type="button" className="tag-pill">{tag}</button>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-section">
          <div className="container">
            <h2 className="section-title">Як це працює?</h2>
            <p className="section-sub">Три простих кроки — і справа зроблена</p>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3 className="step-title">Опишіть завдання</h3>
                <p className="step-text">Розкажіть, що потрібно зробити — безкоштовно та швидко. Займає менше хвилини.</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <h3 className="step-title">Отримайте пропозиції</h3>
                <p className="step-text">Фахівці самі напишуть вам з цінами та відгуками. Обирайте найкращого.</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <h3 className="step-title">Готово!</h3>
                <p className="step-text">Платіть тільки після виконання. Ваші гроші під захистом до підтвердження.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Geography */}
        <section className="geo-section">
          <div className="container">
            <div className="geo-map-wrapper">
              <h2 className="geo-title">Географія Пчілки</h2>
              <div className="geo-cities">
                {geoCols.map((col, ci) => (
                  <ul key={ci} className="geo-col">
                    {col.map((city, i) => (
                      <li key={i}>{city}</li>
                    ))}
                  </ul>
                ))}
              </div>

            </div>
            <div className="geo-cta">
              <p className="geo-cta-text">Шукайте перевірених фахівців або вигідні замовлення за допомогою сервісу Busy Bee</p>
              <div className="geo-btns">
                <button type="button" className="geo-btn-primary">Знайти фахівця</button>
                <button type="button" className="geo-btn-outline">Стати фахівцем</button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews-section">
          <div className="container">
            <h2 className="section-title">Що кажуть люди</h2>
            <p className="section-sub">Тисячі задоволених замовників по всій Україні</p>
            <div className="reviews-grid">
              <article className="review-card">
                <div className="review-header">
                  <div className="review-avatar">М</div>
                  <div>
                    <p className="review-name">Марія К.</p>
                    <div className="review-stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">Знайшла сантехніка за 10 хвилин. Прийшов вчасно, зробив акуратно. Дуже задоволена!</p>
              </article>
              <article className="review-card">
                <div className="review-header">
                  <div className="review-avatar">О</div>
                  <div>
                    <p className="review-name">Олег Д.</p>
                    <div className="review-stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">Замовляв переїзд. Все пройшло швидко, без пошкоджень. Рекомендую сервіс!</p>
              </article>
              <article className="review-card">
                <div className="review-header">
                  <div className="review-avatar">А</div>
                  <div>
                    <p className="review-name">Анна В.</p>
                    <div className="review-stars">★★★★☆</div>
                  </div>
                </div>
                <p className="review-text">Знайшла репетитора з англійської. Дуже приємна людина, і ціна нижча ніж в агенціях.</p>
              </article>
            </div>
          </div>
        </section>

        <Footer />

      </main>
    </div>
  );
}

export default MainPage;
