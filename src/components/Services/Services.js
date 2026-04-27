import './Services.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';

const SERVICE_STATS = [
    { value: '24/7', label: 'підтримка в роботі' },
    { value: 'Escrow', label: 'захист платежів' },
    { value: '1 год', label: 'перші відгуки на задачу' },
    { value: 'FAQ', label: 'прості правила та умови' },
];

const SERVICE_CARDS = [
    {
        id: 'search',
        icon: icons.iconLupa,
        tone: 'blue',
        title: 'Пошук фахівців',
        description: 'Каталог, фільтри та профілі допомагають швидко знайти виконавця без хаотичного перегляду десятків сторінок.',
        points: [
            'Пошук по навичках і категоріях',
            'Портфоліо, рейтинг і відгуки в одному місці',
            'Зрозумілий вибір між кількома кандидатами'
        ],
        linkText: 'Перейти в каталог',
        to: '/catalogue-specs',
    },
    {
        id: 'orders',
        icon: icons.iconFolder,
        tone: 'gold',
        title: 'Публікація замовлень',
        description: 'Створюйте задачу з описом, бюджетом і термінами, щоб одразу отримувати релевантні пропозиції від фахівців.',
        points: [
            'Окремі поля для бюджету та деталей',
            'Швидке оформлення замовлення без зайвих кроків',
            'Зрозумілий старт для нових користувачів'
        ],
        linkText: 'Створити замовлення',
        to: '/create-order',
    },
    {
        id: 'payments',
        icon: icons.iconMoney,
        tone: 'green',
        title: 'Безпечні платежі',
        description: 'Оплата і умови співпраці оформлені так, щоб обидві сторони розуміли процес і менше ризикували.',
        points: [
            'Прозорі етапи та домовленості',
            'Опора на правила сервісу й оферту',
            'Менше суперечок навколо оплати'
        ],
        linkText: 'Переглянути умови',
        to: '/terms',
    },
    {
        id: 'messages',
        icon: icons.iconChat,
        tone: 'rose',
        title: 'Повідомлення і діалог',
        description: 'Вбудований чат тримає всю переписку по проєкту в одному місці, без сторонніх месенджерів і втрати контексту.',
        points: [
            'Обговорення задачі прямо в кабінеті',
            'Швидкий перехід між чатами',
            'Зручний формат для замовника і виконавця'
        ],
        linkText: 'Відкрити кабінет',
        to: '/userpage',
    },
    {
        id: 'specialist-area',
        icon: icons.iconLightning,
        tone: 'violet',
        title: 'Кабінет фахівця',
        description: 'Фахівець бачить свої проєкти, портфоліо, збережені задачі та налаштування профілю в одному робочому просторі.',
        points: [
            'Окремий розділ для поточних задач',
            'Збережені проєкти та портфоліо поруч',
            'Простий пошук по своїх робочих даних'
        ],
        linkText: 'Перейти в кабінет',
        to: '/SpecPage',
    },
    {
        id: 'trust',
        icon: icons.iconStar,
        tone: 'dark',
        title: 'Рейтинг і довіра',
        description: 'Відгуки, завершені задачі та публічна інформація про виконавця допомагають краще оцінити, з ким ви працюєте.',
        points: [
            'Реальні оцінки після співпраці',
            'Портфоліо як частина профілю',
            'Більше прозорості при виборі фахівця'
        ],
        linkText: 'Подивитися приклади',
        to: '/offers',
    },
];

const TRUST_ITEMS = [
    {
        id: 'speed',
        icon: icons.iconLightning,
        title: 'Швидкий старт',
        description: 'Не потрібно довго розбиратись, що куди натискати. Основні сценарії вже розкладені по окремих сторінках.',
    },
    {
        id: 'clarity',
        icon: icons.iconMoney,
        title: 'Прозорі умови',
        description: 'Бюджет, терміни, етапи й роль кожної сторони видно одразу, без зайвих уточнень у процесі.',
    },
    {
        id: 'protection',
        icon: icons.iconShield,
        title: 'Захист угоди',
        description: 'Сервіс побудований так, щоб зменшити ризики і для замовника, і для фахівця на кожному етапі.',
    },
    {
        id: 'support',
        icon: icons.iconCheck,
        title: 'Підтримка процесу',
        description: 'Від першого замовлення до завершення задачі платформа веде користувача через зрозумілі дії.',
    },
];

const START_OPTIONS = [
    {
        id: 'customer',
        icon: icons.iconFolder,
        title: 'Я замовник',
        description: 'Якщо потрібно знайти виконавця і швидко оформити задачу, починайте зі створення замовлення.',
        action: 'Створити замовлення',
        to: '/create-order',
    },
    {
        id: 'specialist',
        icon: icons.iconBee,
        title: 'Я фахівець',
        description: 'Якщо ви шукаєте роботу або хочете оформити свій профіль, перейдіть у кабінет фахівця.',
        action: 'Відкрити кабінет',
        to: '/SpecPage',
    },
    {
        id: 'rules',
        icon: icons.iconBook,
        title: 'Потрібні правила',
        description: 'Коли хочеться спочатку зрозуміти, як працюють умови, оплата і безпека, відкрийте оферту.',
        action: 'Переглянути умови',
        to: '/terms',
    },
];

function ServiceCard({ service }) {
    return (
        <article className="service-card">
            <div className={`service-card-icon service-card-icon--${service.tone}`}>
                <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <ul className="service-card-points">
                {service.points.map((point) => (
                    <li key={point}>
                        <span className="service-card-check" aria-hidden="true">✓</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            <Link to={service.to} className="service-card-link">{service.linkText}</Link>
        </article>
    );
}

function ServicesPage() {
    return (
        <>
            <Header />
            <div className="ServicesPage">
                <section className="page-header">
                    <div className="services-container">
                        <div className="page-header-content">
                            <div className="page-title-row">
                                <img src={icons.iconBee} alt="" className="page-title-icon" />
                                <span className="page-eyebrow">Сервіси платформи</span>
                            </div>
                            <h1>Все для роботи без хаосу і зайвих кроків</h1>
                            <p className="subtitle">BusyBee об'єднує пошук фахівців, замовлення, оплату, чат і робочі кабінети в одному зрозумілому процесі.</p>

                            <div className="service-stats">
                                {SERVICE_STATS.map((stat) => (
                                    <div key={stat.label} className="service-stat">
                                        <strong>{stat.value}</strong>
                                        <span>{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="hero-actions">
                                <Link to="/create-order" className="hero-btn hero-btn--primary">Створити замовлення</Link>
                                <Link to="/catalogue-specs" className="hero-btn hero-btn--secondary">Знайти фахівця</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="services-container">
                        <div className="section-intro">
                            <h2>Основні можливості</h2>
                            <p>Кожен сервіс відповідає за конкретну частину роботи: пошук, оформлення задачі, безпеку, комунікацію та контроль процесу.</p>
                        </div>

                        <div className="services-grid">
                            {SERVICE_CARDS.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="trust-section">
                    <div className="services-container">
                        <div className="section-intro">
                            <h2>Що це дає в реальній роботі</h2>
                            <p>Не просто набір функцій, а речі, які реально спрощують старт, спілкування й доведення задачі до результату.</p>
                        </div>

                        <div className="trust-grid">
                            {TRUST_ITEMS.map((item) => (
                                <article key={item.id} className="trust-card">
                                    <div className="trust-card-icon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="start-section">
                    <div className="services-container">
                        <div className="section-intro">
                            <h2>З чого почати</h2>
                            <p>Оберіть сценарій, який ближчий вам зараз: знайти виконавця, знайти роботу або спочатку прочитати правила.</p>
                        </div>

                        <div className="start-grid">
                            {START_OPTIONS.map((item) => (
                                <article key={item.id} className="start-card">
                                    <div className="start-card-icon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Link to={item.to} className="start-card-link">{item.action}</Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="services-container">
                        <div className="cta-panel">
                            <div className="cta-copy">
                                <h2>Сервіси вже є. Далі важливий тільки ваш сценарій.</h2>
                                <p>Можете одразу створити замовлення, переглянути фахівців або перейти в свій кабінет і працювати далі без зайвих переходів.</p>
                            </div>

                            <div className="cta-actions">
                                <Link to="/create-order" className="cta-btn cta-btn--primary">Створити задачу</Link>
                                <Link to="/offers" className="cta-btn cta-btn--secondary">Переглянути проєкти</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="banner-strip">
                    Маленька праця для великих людей!
                </div>
            </div>
        </>
    );
}

export default ServicesPage;