import './HowWorkPage.css';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ForUserTab = () => {
    const allCards = [
        {
            id: 1,
            mainStepNumber: "1",
            icon: icons.iconPisat,
            title: "Опишіть завдання",
            description: "Створіть детальний опис вашого проекту: що потрібно зробити, які вимоги, терміни та бюджет. Чим детальніше, тим кращі пропозіції ви отримаєте.",
            features: [
                { id: "f1", text: "Виберіть категорію послуги", icon: icons.iconGalochka },
                { id: "f2", text: "Вкажіть бюджет та терміни", icon: icons.iconGalochka },
                { id: "f3", text: "Опишіть технічні вимоги", icon: icons.iconGalochka },
                { id: "f4", text: "Додайте файли при необхідності", icon: icons.iconGalochka }
            ]
        },
        {
            id: 2,
            mainStepNumber: "2",
            icon: icons.iconChuvaki,
            title: "Отримайте пропозиції",
            description: "Протягом декількох годин фахівці почнуть надсилати свої пропозиції з вартістю та термінами виконання. Ви отримаєте сповіщення про кожну нову пропозицію.",
            features: [
                { id: "f1", text: "Перегляньте портфоліо фахівців", icon: icons.iconGalochka },
                { id: "f2", text: "Порівняйте ціни та умови", icon: icons.iconGalochka },
                { id: "f3", text: "Вивчіть відгуки та рейтинги", icon: icons.iconGalochka },
                { id: "f4", text: "Задайте питання в чаті", icon: icons.iconGalochka }
            ]
        },
        {
            id: 3,
            mainStepNumber: "3",
            icon: icons.iconDogovorniachok,
            title: "Оберіть виконавця",
            description: "Порівняйте пропозиції, перегляньте профілі та оберіть найкращого фахівця. Обговорить деталі проекту та узгодьте остаточні умови.",
            features: [
                { id: "f1", text: "Оценіть досвід та кваліфікацію", icon: icons.iconGalochka },
                { id: "f2", text: "Узгодьте деталі проекту", icon: icons.iconGalochka },
                { id: "f3", text: "Підпишіть умови співпраці", icon: icons.iconGalochka },
                { id: "f4", text: "Внесіть предоплату на платформу", icon: icons.iconGalochka }
            ]
        },
        {
            id: 4,
            mainStepNumber: "4",
            icon: icons.iconProgramming,
            title: "Контролюйте виконання",
            description: "Слідкуйте за прогрессом роботи, отримуйте проміжні результати, залишайте коментарі. Фахівець тримає вас в курсі на кожному етапі.",
            features: [
                { id: "f1", text: "Отримуйте оновлення статусу", icon: icons.iconGalochka },
                { id: "f2", text: "Перевіряйте проміжні результати", icon: icons.iconGalochka },
                { id: "f3", text: "Вносьте корективи при необхідності", icon: icons.iconGalochka },
                { id: "f4", text: "Спілкуйтесь через вбудованний чат", icon: icons.iconGalochka }
            ]
        },
        {
            id: 5,
            mainStepNumber: "5",
            icon: icons.iconCheck,
            title: "Прийміть роботу",
            description: "Перевірте фінальний результат, переконайтесь що все відповідає вимогам. Після вашого підтвердження кошти автоматично переводяться фахівцю.",
            features: [
                { id: "f1", text: "Перевірьте результат роботи", icon: icons.iconGalochka },
                { id: "f2", text: "Запросіть виправлення якщо потрібно", icon: icons.iconGalochka },
                { id: "f3", text: "Підтвердьте завершення проекту", icon: icons.iconGalochka },
                { id: "f4", text: "Залиште вігук про співпрацю", icon: icons.iconGalochka }
            ]
        },

    ];

    return (
        <div>
            {allCards.map((card) => (
                <div key={card.id}>
                    <div>
                        <span>{card.mainStepNumber}</span>
                        <img src={card.icon} alt="Main" />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>

                    <div>
                        {card.features && card.features.map((feature) => (
                            <div key={feature.id}>
                                <img src={feature.icon} alt="check" />
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
const ForSpecTab = () => {
    const allCards = [
        {
            id: 1,
            mainStepNumber: "1",
            icon: icons.iconBlocknote,
            title: "Створіть профіль",
            description: "Заповніть свій профіль детально: опишіть навички, досвіт, додайте портфоліо. Якісний профіль допоможе отримувати більше замовлень.",
            features: [
                { id: "f1", text: "Додайте професійне фото", icon: icons.iconGalochka },
                { id: "f2", text: "Опишіть свої навички та досвід", icon: icons.iconGalochka },
                { id: "f3", text: "Завантажте приклади робіт", icon: icons.iconGalochka },
                { id: "f4", text: "Встановіть свої тарифи", icon: icons.iconGalochka }
            ]
        },
        {
            id: 2,
            mainStepNumber: "2",
            icon: icons.iconLupa,
            title: "Знайдіть проекти",
            description: "Переглядайте актуальні замовлення у вашій категорії. Використовуйте фільтри для пошуку підходящих проектів за ціною, термінами та складністю.",
            features: [
                { id: "f1", text: "Фільтруйте за категоріями", icon: icons.iconGalochka },
                { id: "f2", text: "Сортируйте за бюджетом", icon: icons.iconGalochka },
                { id: "f3", text: "Підписуйтесь на нові завдання", icon: icons.iconGalochka },
                { id: "f4", text: "Отримуйте сповіщення миттєво", icon: icons.iconGalochka }
            ]
        },
        {
            id: 3,
            mainStepNumber: "3",
            icon: icons.iconChat,
            title: "Надішліть пропозицію",
            description: "Опишіть як ви плануєте виконати проект, вкажіть терміни та вартість. Покажіть замовнику релевантні кейси з вашого портфоліо.",
            features: [
                { id: "f1", text: "Запропонуйте свою ціну", icon: icons.iconGalochka },
                { id: "f2", text: "Вкажіть терміни виконання", icon: icons.iconGalochka },
                { id: "f3", text: "Опишіть підхід до роботи", icon: icons.iconGalochka },
                { id: "f4", text: "Прикріпіть приклади робіт", icon: icons.iconGalochka }
            ]
        },
        {
            id: 4,
            mainStepNumber: "4",
            icon: icons.iconRaketa,
            title: "Виконайте проект",
            description: "Працюйте над завданням згідно з узгодженими умовами. Регулярно інформуйте замовника про прогрес, надсилайте проміжні результати.",
            features: [
                { id: "f1", text: "Дотримуйтесь термінів", icon: icons.iconGalochka },
                { id: "f2", text: "Підтримуйте зв'язок з клієнтом", icon: icons.iconGalochka },
                { id: "f3", text: "Показуйте проміжні етапи", icon: icons.iconGalochka },
                { id: "f4", text: "Реагуйте на правки швидко", icon: icons.iconGalochka }
            ]
        },
        {
            id: 5,
            mainStepNumber: "5",
            icon: icons.iconCheck,
            title: "Отримайте оплату",
            description: "Після здачі роботи та підтверження замовником, кошти автоматично надходять на ваш рахунок. Накопичуйте рейтинг та відгуки.",
            features: [
                { id: "f1", text: "Отримайте гроші на рахунок", icon: icons.iconGalochka },
                { id: "f2", text: "Виведіть кошти зручним способом", icon: icons.iconGalochka },
                { id: "f3", text: "Отримайте позитивний відгук", icon: icons.iconGalochka },
                { id: "f4", text: "Підвищуйте свій рейтинг", icon: icons.iconGalochka }
            ]
        },

    ];

    return (
        <div>
            {allCards.map((card) => (
                <div key={card.id}>
                    <div>
                        <span>{card.mainStepNumber}</span>
                        <img src={card.icon} alt="Main" />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>

                    <div>
                        {card.features && card.features.map((feature) => (
                            <div key={feature.id}>
                                <img src={feature.icon} alt="check" />
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};



function HowWorkPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('forUser');
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = [
        { key: 'forUser', icon: icons.iconChumodan, label: 'Для замовників' },
        { key: 'forSpec', icon: icons.iconChuvakSMakibuki, label: 'Для фахівців' },
    ];

    // Соответствие ключа вкладки и React-компонента контента
    const contentMap = {
        forUser: <ForUserTab />,
        forSpec: <ForSpecTab />,

    };

    const benefit = [
        { icon: icons.iconLightning, title: 'Швидко', text: 'перші пропозиції вже через годину після публікації. Почніть роботу негайно.' },
        { icon: icons.iconShield, title: 'Безпечно', text: 'Система ексроу-рахунків та арбітраж захищають інтереси обох сторін.' },
        { icon: icons.iconMoney, titlle: 'Вигідно', text: 'Прозора комісія без прихованних платежів. Платите тільки за результат.' }
    ];

    return (
        <div className='HowWorkPage'>
            <Header />
            <div className='Welcome'>
                <div className="hero-image">
                    <img src={icons.iconBee} alt="BusyBee" />
                </div>
                <h1 className="hero-title">Як це працює</h1>
                <p className="hero-subtitle">Простий та зрозумілий процес співпраці на платформі BusyBee.</p>
            </div>

            <section className='HowWorkPage-nav'>
                <div className="tabs-container">
                    <nav
                        className="tabs-menu">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={activeTab === tab.key ? 'active' : ''}
                            >
                                <img
                                    src={tab.icon}
                                    alt=""
                                />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </section>
            <div className="tabs-content">
                {contentMap[activeTab]}
            </div>

            <section className="Benefit">
                <div className="benefit-list">
                    {benefit.map((item, index) => (
                        <div key={index} className="benefit-item">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="benefit-icon"
                            />
                            <h3 className="benefit-title">{item.title}</h3>
                            <p className="benefit-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Готові розпочати?</h2>
                    <p className="cta-sub">Приєднуйтесь до Busybee та знайдіть цікаві проекти вже сьогодні.</p>
                    <div className="cta-btns">
                        <Link to="/register" className="cta-btn-primary">Зареєструватися безкоштовно</Link>
                    </div>
                </div>
            </section>

            <section className="help-section">
                <div className="container">
                    <h2 className="help-title">Залишились питання?</h2>
                    <p className="help-sub">Відвідайте наш центр допомоги або зв'яжіться з підтримкою.</p>
                    <div className="help-btns">
                        <Link to="/register" className="help-btn-primary">Центр допомоги </Link>
                        <Link to="/catalogue-specs" className="help-btn-outline">Написати в підтримку</Link>
                    </div>
                </div>
            </section>
            <div className="banner-strip">
                Маленька праця для великих людей!
            </div>
        </div>

    )
};

export default HowWorkPage;