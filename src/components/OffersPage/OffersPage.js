import './OffersPage.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
  iconDev,
} from '../../imgs/icons';

const offersData = {
  'Розробка і програмування': {
    'Веб-розробка': [
      {
        id: 1,
        title: 'Потрібен frontend розробник для інтернет-магазину',
        mainCategory: 'Веб-розробка',
        budget: '15,000 - 25,000 ₴',
        views: '2 перегляди',
        likes: '1',
        description: 'Шукаємо досвідченого frontend розробника для створення сучасного інтернет-магазину одягу. Необхідно реалізувати responsive дизайн, кошик покупок, фільтр товарів, інтеграцію з платіжними системами.',
        technologies: ['React', 'TypeScript', 'Redux'],
        freelancer: { name: 'Олена К.', rating: 4.8, reviews: 23 }
      },
      {
        id: 2,
        title: 'Розробка мобільного додатку для доставки їжі',
        mainCategory: 'Мобільні додатки',
        budget: '40,000 - 60,000 ₴',
        views: '3 перегляди',
        likes: '2',
        description: 'Потрібне створення iOS та Android додатку для сервісу доставки їжі. Функціональність: реєстрація користувачів, пошук ресторанів, оформлення замовлення, відстеження доставки, інтеграція з сервісами платежів. React Native або Flutter.',
        technologies: ['React Native', 'Firebase', 'Google Maps API'],
        freelancer: { name: 'Ростислав "Скейлілики"', rating: 5, reviews: 17 }
      },
      {
        id: 3,
        title: 'Backend API для фінтех стартапу',
        mainCategory: 'Backend розробка',
        budget: '50,000 - 80,000 ₴',
        views: '15 проглядів',
        description: 'Створення RESTful API для платформи онлайн-платежів. Вимоги: розробка на Node.js або Python, організація БД (PostgreSQL), реалізація JWT автентифікації, логування, документація. Документація Swagger обов\'язкова.',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        freelancer: { name: 'Алекс П.', rating: 4.9, reviews: 45 }
      },
      {
        id: 20,
        title: 'Розробка SPA на Vue.js',
        mainCategory: 'Веб-розробка',
        budget: '18,000 - 30,000 ₴',
        views: '5 переглядів',
        likes: '3',
        description: 'Розроблення Single Page Application для управління проектами. Потрібна робота з API, стан-менеджмент Vuex, мобільна адаптивність.',
        technologies: ['Vue.js', 'Vuex', 'Axios'],
        freelancer: { name: 'Тетяна М.', rating: 4.7, reviews: 32 }
      },
      {
        id: 21,
        title: 'Fullstack розробка веб-портала',
        mainCategory: 'Веб-розробка',
        budget: '35,000 - 55,000 ₴',
        views: '8 переглядів',
        likes: '4',
        description: 'Повна розробка веб-портала для управління реклами. Frontend на React, Backend на Node.js. Потрібна оптимізація, безпека, масштабованість.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
        freelancer: { name: 'Геннадій Х.', rating: 4.8, reviews: 39 }
      },
      {
        id: 22,
        title: 'Розробка landing page для SaaS продукту',
        mainCategory: 'Веб-розробка',
        budget: '12,000 - 20,000 ₴',
        views: '6 переглядів',
        likes: '2',
        description: 'Потрібно створити сучасний адаптивний landing page для B2B SaaS. Важливо: швидке завантаження, SEO, інтеграція форми з CRM та аналітикою.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Google Analytics'],
        freelancer: { name: 'Світлана Б.', rating: 4.7, reviews: 21 }
      },
      {
        id: 23,
        title: 'Доопрацювання інтернет-магазину на Next.js',
        mainCategory: 'Веб-розробка',
        budget: '28,000 - 45,000 ₴',
        views: '10 переглядів',
        likes: '5',
        description: 'Шукаємо розробника для доопрацювання e-commerce проекту: оптимізація SSR, сторінка товару, checkout, інтеграція з платіжним шлюзом та CRM.',
        technologies: ['Next.js', 'React', 'Stripe', 'REST API'],
        freelancer: { name: 'Богдан М.', rating: 4.9, reviews: 48 }
      },
      {
        id: 24,
        title: 'Створення адмін-панелі для сервісу бронювання',
        mainCategory: 'Веб-розробка',
        budget: '22,000 - 38,000 ₴',
        views: '7 переглядів',
        likes: '3',
        description: 'Потрібно реалізувати адмін-панель для управління бронюваннями: таблиці, фільтри, ролі користувачів, аудит дій та експорт звітів.',
        technologies: ['React', 'TypeScript', 'Ant Design', 'Node.js'],
        freelancer: { name: 'Ілля К.', rating: 4.8, reviews: 30 }
      }
    ],
    'Мобільні додатки': [
      {
        id: 4,
        title: 'Розробка Android додатку для фітнес-трекера',
        mainCategory: 'Мобільні додатки',
        budget: '30,000 - 45,000 ₴',
        views: '5 переглядів',
        likes: '3',
        description: 'Потрібен розробник для створення Android додатку для трекінгу тренувань. Функціональність: синхронізація з фітнес-трекерами, графіки прогресу, соціальні функції, push-сповіщення.',
        technologies: ['Kotlin', 'Firebase', 'Google Fit API'],
        freelancer: { name: 'Василь М.', rating: 4.7, reviews: 28 }
      },
      {
        id: 8,
        title: 'iOS додаток для управління проектами',
        mainCategory: 'Мобільні додатки',
        budget: '25,000 - 40,000 ₴',
        views: '7 переглядів',
        likes: '4',
        description: 'Розроблення iOS додатку для управління проектами та завданнями. Потрібна інтеграція з календарем, нотифікаціями, синхронізацією в хмарі. Swift, SwiftUI.',
        technologies: ['Swift', 'SwiftUI', 'CloudKit', 'UserNotifications'],
        freelancer: { name: 'Ігор П.', rating: 4.8, reviews: 34 }
      },
      {
        id: 9,
        title: 'Кросс-платформний додаток для e-commerce',
        mainCategory: 'Мобільні додатки',
        budget: '45,000 - 70,000 ₴',
        views: '9 переглядів',
        likes: '6',
        description: 'Розробка мобільного додатку для інтернет-магазину з підтримкою iOS та Android. Включає каталог товарів, кошик, платежи, профіль користувача. Flutter або React Native.',
        technologies: ['Flutter', 'Firebase', 'Stripe'],
        freelancer: { name: 'Катерина Л.', rating: 4.9, reviews: 42 }
      }
    ],
    'Backend розробка': [
      {
        id: 5,
        title: 'Backend API для соціальної мережі',
        mainCategory: 'Backend розробка',
        budget: '60,000 - 100,000 ₴',
        views: '8 переглядів',
        likes: '5',
        description: 'Розроблення backend частини соціальної мережі. Вимоги: мікросервісна архітектура, Docker, Kubernetes, Redis для кешування, MongoDB або PostgreSQL, WebSocket для real-time функцій.',
        technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
        freelancer: { name: 'Марія С.', rating: 5, reviews: 52 }
      },
      {
        id: 10,
        title: 'REST API для платформи навчання',
        mainCategory: 'Backend розробка',
        budget: '35,000 - 55,000 ₴',
        views: '6 переглядів',
        likes: '3',
        description: 'Розробка бекенду для платформи онлайн-навчання. Потрібна система управління користувачами, курсами, прогресом навчання. Node.js або Django, PostgreSQL.',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        freelancer: { name: 'Павло Г.', rating: 4.8, reviews: 38 }
      },
      {
        id: 11,
        title: 'Мікросервіс для обробки платежів',
        mainCategory: 'Backend розробка',
        budget: '55,000 - 85,000 ₴',
        views: '11 переглядів',
        likes: '7',
        description: 'Розроблення мікросервісу для обробки платежів з інтеграцією Stripe, PayPal. Потрібна система логування, моніторингу помилок, масштабованості. Python або Go.',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Stripe API', 'Kafka'],
        freelancer: { name: 'Антон В.', rating: 4.9, reviews: 45 }
      },
      {
        id: 12,
        title: 'GraphQL API для мобільного додатку',
        mainCategory: 'Backend розробка',
        budget: '40,000 - 60,000 ₴',
        views: '5 переглядів',
        likes: '2',
        description: 'Розробка GraphQL API для мобільного клієнта. Потрібна оптимізація запитів, кешування, автентифікація. Node.js з Apollo Server або Python з Strawberry.',
        technologies: ['Node.js', 'Apollo Server', 'GraphQL', 'MongoDB'],
        freelancer: { name: 'Ніколай К.', rating: 4.7, reviews: 31 }
      }
    ],
    'Розробка ігор': [
      {
        id: 6,
        title: 'Розробка 2D браузерної гри',
        mainCategory: 'Розробка ігор',
        budget: '20,000 - 35,000 ₴',
        views: '4 перегляди',
        likes: '2',
        description: 'Потрібна розробка 2D гри на базі Phaser або Babylon.js. Гра має жанр "платформер" з можливістю мультиплеєру. Включає рівні, врагів, ачівменти.',
        technologies: ['Phaser', 'JavaScript', 'Canvas'],
        freelancer: { name: 'Дмитро Л.', rating: 4.6, reviews: 19 }
      },
      {
        id: 13,
        title: 'Unity 3D гра для мобільних пристроїв',
        mainCategory: 'Розробка ігор',
        budget: '50,000 - 80,000 ₴',
        views: '8 переглядів',
        likes: '5',
        description: 'Розроблення повнофункціональної 3D гри для iOS та Android. Гра повинна мати красиву графіку, систему рівнів, бонусів, лідерборду.',
        technologies: ['Unity', 'C#', 'Firebase'],
        freelancer: { name: 'Максим О.', rating: 4.8, reviews: 26 }
      },
      {
        id: 14,
        title: 'Unreal Engine проект для VR',
        mainCategory: 'Розробка ігор',
        budget: '70,000 - 120,000 ₴',
        views: '12 переглядів',
        likes: '8',
        description: 'Розробка VR гри на Unreal Engine 5. Потрібна якісна графіка, інтерактивність, оптимізація для VR гарнітур. Opus і интеграция з платформами.',
        technologies: ['Unreal Engine 5', 'C++', 'Blueprints'],
        freelancer: { name: 'Сергій М.', rating: 4.9, reviews: 41 }
      }
    ],
    'AI/ML розробка': [
      {
        id: 25,
        title: 'ML модель для прогнозування попиту',
        mainCategory: 'AI/ML розробка',
        budget: '35,000 - 55,000 ₴',
        views: '8 переглядів',
        likes: '4',
        description: 'Потрібен ML інженер для розробки моделі прогнозування попиту на товари на основі історичних даних продажів.',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost'],
        freelancer: { name: 'Торгова мережа "Продукт"', rating: 4.7, reviews: 19 }
      }
    ],
    Blockchain: [
      {
        id: 26,
        title: 'Смарт-контракт для NFT маркетплейсу',
        mainCategory: 'Blockchain',
        budget: '45,000 - 70,000 ₴',
        views: '4 перегляди',
        likes: '2',
        description: 'Потрібна розробка smart contract на Solidity для NFT маркетплейсу з аудитом безпеки та тестами.',
        technologies: ['Solidity', 'Hardhat', 'Web3.js', 'OpenZeppelin'],
        freelancer: { name: 'UkraineArt NFT', rating: 4.8, reviews: 12 }
      }
    ],
    'Кібербезпека': [
      {
        id: 27,
        title: 'Аудит безпеки веб-додатку',
        mainCategory: 'Кібербезпека',
        budget: '20,000 - 35,000 ₴',
        views: '7 переглядів',
        likes: '3',
        description: 'Необхідно провести pentest веб-додатку, перевірити OWASP Top 10 та підготувати звіт з рекомендаціями.',
        technologies: ['OWASP', 'Burp Suite', 'Nmap', 'Report Writing'],
        freelancer: { name: 'IT компанія "Софтлайн"', rating: 4.9, reviews: 16 }
      }
    ],
    DevOps: [
      {
        id: 28,
        title: 'Налаштування CI/CD pipeline для проекту',
        mainCategory: 'DevOps',
        budget: '15,000 - 25,000 ₴',
        views: '11 переглядів',
        likes: '5',
        description: 'Потрібно налаштувати автоматизований CI/CD для веб-проекту: тести, деплой, rollback та моніторинг.',
        technologies: ['GitHub Actions', 'Docker', 'AWS', 'Terraform'],
        freelancer: { name: 'Дмитро П.', rating: 4.9, reviews: 18 }
      }
    ]
  },
  'Дизайн і графіка': {
    'Графічний дизайн': [
      {
        id: 7,
        title: 'Дизайн упаковки для косметики',
        mainCategory: 'Дизайн упаковки',
        budget: '3,000 - 8,000 ₴',
        views: '12 переглядів',
        likes: '4',
        description: 'Потрібен талановитий дизайнер для створення оригінальної упаковки косметичної продукції. Стиль: мінімалізм, еко-friendly. 3D макети та рендери.',
        technologies: ['Adobe XD', 'Photoshop', 'Illustrator'],
        freelancer: { name: 'Софія О.', rating: 4.9, reviews: 31 }
      },
      {
        id: 15,
        title: 'Дизайн логотипу та фірмового стилю',
        mainCategory: 'Графічний дизайн',
        budget: '5,000 - 12,000 ₴',
        views: '14 переглядів',
        likes: '6',
        description: 'Розроблення унікального логотипу та повного набору фірмового стилю (логотип, шрифти, кольорова палітра, гайдлайн). Дизайн повинен бути сучасним та запам\'ятовуватися.',
        technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
        freelancer: { name: 'Олександр Д.', rating: 4.8, reviews: 38 }
      },
      {
        id: 16,
        title: 'Дизайн постерів та рекламних матеріалів',
        mainCategory: 'Графічний дизайн',
        budget: '2,000 - 6,000 ₴',
        views: '10 переглядів',
        likes: '3',
        description: 'Розроблення серії рекламних постерів для музичного фестивалю. Потрібна творча концепція, яскрава типографія, привабливий дизайн.',
        technologies: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
        freelancer: { name: 'Крістіна В.', rating: 4.7, reviews: 27 }
      },
      {
        id: 17,
        title: 'UI/UX дизайн мобільного додатку',
        mainCategory: 'Графічний дизайн',
        budget: '8,000 - 15,000 ₴',
        views: '16 переглядів',
        likes: '9',
        description: 'Дизайн користувацького інтерфейсу та UX для мобільного додатку фітнесу. Потрібні макети екранів, прототип, дизайн-систем, гайдлайн.',
        technologies: ['Figma', 'Adobe XD', 'Sketch'],
        freelancer: { name: 'Ева Р.', rating: 4.9, reviews: 44 }
      }
    ],
    'UI/UX дизайн': [
      {
        id: 18,
        title: 'Редизайн веб-сайту е-комерції',
        mainCategory: 'UI/UX дизайн',
        budget: '10,000 - 20,000 ₴',
        views: '9 переглядів',
        likes: '5',
        description: 'Повний редизайн веб-сайту інтернет-магазину одягу. Потрібно поліпшити UX, створити сучасний дизайн, оптимізувати конверсію.',
        technologies: ['Figma', 'Prototyping', 'User Research'],
        freelancer: { name: 'Наталія З.', rating: 4.8, reviews: 35 }
      }
    ],
    'Ілюстрація': [
      {
        id: 19,
        title: 'Ілюстрації для дітячої книги',
        mainCategory: 'Ілюстрація',
        budget: '6,000 - 14,000 ₴',
        views: '7 переглядів',
        likes: '4',
        description: 'Розроблення 20 ілюстрацій для дітячої казки. Стиль: м\'який, яскравий, привабливий для дітей. Формати: digital та print.',
        technologies: ['Procreate', 'Photoshop', 'Illustrator'],
        freelancer: { name: 'Ліза Т.', rating: 4.7, reviews: 29 }
      }
    ]
  }
};

const categoryDescriptions = {
  'Розробка і програмування': '8 доступних завдань для фахівців',
  'Дизайн і графіка': '12 доступних завдань для фахівців',
  'Маркетинг і реклама': '6 доступних завдань для фахівців'
};

const PROGRAMMING_SUBCATEGORIES = [
  'Всі',
  'Веб-розробка',
  'Мобільні додатки',
  'Backend розробка',
  'Розробка ігор',
  'AI/ML розробка',
  'Blockchain',
  'Кібербезпека',
  'DevOps'
];

function OffersPage() {
  const location = useLocation();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [offers, setOffers] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [mainCategory, setMainCategory] = useState('Розробка і програмування');

  const getOffersBySubCategory = (category, subCategory) => {
    const categoryData = offersData[category] || {};

    if (subCategory === 'Всі') {
      return Object.values(categoryData).flat();
    }

    return categoryData[subCategory] || [];
  };

  useEffect(() => {
    const state = location.state;
    const category = state?.selectedCategory || 'Розробка і програмування';
    const subCategory = state?.selectedSubCategory || null;
    
    setMainCategory(category);
    
    if (offersData[category]) {
      const subs = category === 'Розробка і програмування'
        ? PROGRAMMING_SUBCATEGORIES
        : ['Всі', ...Object.keys(offersData[category])];
      setSubCategories(subs);
      
      const defaultSub = subCategory && subs.includes(subCategory) ? subCategory : 'Всі';
      setSelectedSubCategory(defaultSub);
      setOffers(getOffersBySubCategory(category, defaultSub));
    }
  }, [location.state]);

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setOffers(getOffersBySubCategory(mainCategory, subCategory));
  };

  return (
    <div className="OffersPage">
      <Header />

      {/* Hero */}
      <section className="offers-hero-section">
        <div className="container">
          <div className="offers-hero-content">
            <div className="offers-hero-icon-wrapper">
              <img src={iconDev} alt="Laptop" className="offers-hero-icon" />
            </div>
            <div className="offers-hero-text">
              <h1 className="offers-hero-title">{mainCategory}</h1>
              <p className="offers-hero-subtitle">{categoryDescriptions[mainCategory] || '8 доступних завдань для фахівців'}</p>
              <div className="offers-hero-search">
                <input type="text" placeholder="Пошук за назвою, описом або тегом пошуку..." aria-label="Пошук" />
                <span className="offers-hero-search-icon">⌕</span>
              </div>
            </div>
            <div className="offers-hero-action">
              <button type="button" className="offers-create-order-btn">
                <span className="offers-create-order-plus">+</span>
                Створити замовлення
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategory Filter */}
      <section className="offers-filter-section">
        <div className="container">
          <div className="offers-category-buttons">
            {subCategories.map((subCategory) => (
              <button
                key={subCategory}
                className={`offers-category-btn ${selectedSubCategory === subCategory ? 'active' : ''}`}
                onClick={() => handleSubCategoryClick(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
          <p className="offers-count">Знайдено {offers.length} завдань</p>
        </div>
      </section>

      {/* Offers List */}
      <section className="offers-list-section">
        <div className="container">
          <div className="offers-list">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="offer-header">
                  <div className="offer-title-section">
                    <h3 className="offer-title">{offer.title}</h3>
                    <div className="offer-meta">
                      <span className="offer-category">{offer.mainCategory}</span>
                      {offer.views && <span className="offer-status">Premium</span>}
                    </div>
                  </div>
                  <div className="offer-budget">
                    <p className="offer-budget-amount">{offer.budget}</p>
                    {offer.views && <p className="offer-views">{offer.views}</p>}
                  </div>
                </div>

                <p className="offer-description">{offer.description}</p>

                <div className="offer-technologies">
                  {offer.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="offer-footer">
                  <div className="offer-freelancer">
                    <div className="freelancer-avatar">
                      {offer.freelancer.name.charAt(0)}
                    </div>
                    <div className="freelancer-info">
                      <p className="freelancer-name">{offer.freelancer.name}</p>
                      <p className="freelancer-rating">⭐ {offer.freelancer.rating} ({offer.freelancer.reviews} {offer.freelancer.reviews === 1 ? 'отзыв' : 'отзывов'})</p>
                    </div>
                  </div>
                  <button className="offer-btn-hire">Запропонувати ціну</button>
                </div>
              </div>
            ))}
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

export default OffersPage;

