import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    iconBee,
    iconKolokolchik,
    iconOleg,
    iconIrina,
    iconOlena,
    iconMaxim,
    iconDanilka,
    iconAndrei,
    iconCheck,
    iconStar,
    iconBlocknote,
    iconChumodan,
    iconTime,
    iconFolder,
    iconMoney,
    iconDarts,
    iconBulb,
    iconZvonilka,
    iconHeart,
} from '../../imgs/icons';
import './UserPage.css'

// Данные карточек статистики для вкладки "Огляд"
const stats = [
    { label: 'Замовлень в роботі', count: '3', icon: iconBlocknote, text: 'АКТИВНИХ' },
    { label: 'Від фахівців', count: '55', icon: iconChumodan, text: 'ПРОПОЗИЦІЇ' },
    { label: 'Успішних проектів', count: '1', icon: iconCheck, text: 'ЗАВЕРШЕНО' },
    { label: 'Середня оцінка', count: '4.9', icon: iconStar, text: 'РЕЙТИНГ' },
];

// Данные карточек заказов (используются в нескольких вкладках)
const orderCard = [
    {
        id: 1,
        title: 'Дизайн логотипу для IT стартапу',
        description: 'Потрібен сучасний мінімалістичний логотип для AI стартапу.',
        status: 'Активне',
        categoryIcon: iconFolder,
        categoryText: 'Дизайн',
        priceIcon: iconMoney,
        priceText: '5000 грн',
        deadlineIcon: iconTime,
        deadlineText: '5 днів',
        proposals: '12 пропозицій',
        date: '2 дні тому',
    },
    {
        id: 2,
        title: 'SEO оптимізація інтернет-магазину',
        description: 'Комплексна SEO оптимізація для підвищення позицій в Google.',
        status: 'Активне',
        categoryIcon: iconFolder,
        categoryText: 'Маркетинг',
        priceIcon: iconMoney,
        priceText: '8000 грн',
        deadlineIcon: iconTime,
        deadlineText: '7 днів',
        proposals: '12 пропозицій',
        date: '1 день тому',
    },
    {
        id: 3,
        title: 'Розробка лендінгу на React',
        description: 'Потрібно написати сайт з адаптивним дизайном та анімаціями.',
        status: 'В роботі',
        categoryIcon: iconFolder,
        categoryText: 'Веб-розробка',
        priceIcon: iconMoney,
        priceText: '15000 грн',
        deadlineIcon: iconTime,
        deadlineText: '14 днів',
        proposals: '8 пропозицій',
        date: '5 днів тому',
    },
    {
        id: 4,
        title: 'Копірайтинг для соц. мереж',
        description: 'Написання постів для instagram та Facebook протягом міцяця.',
        status: 'Завершено',
        categoryIcon: iconFolder,
        categoryText: 'Контент',
        priceIcon: iconMoney,
        priceText: '3000 грн',
        deadlineIcon: iconTime,
        deadlineText: 'Завершено',
        proposals: '20 пропозицій',
        date: '2 тижні тому',
    }];

// Карточки рекомендаций внизу вкладки "Огляд"
const recomendationCards = [
    {
        id: 1,
        icon: iconDarts,
        title: 'Знайти фахівця',
        description: 'Перегляньте категорії та знайдіть ідеального винонавця.',
        linkText: 'Переглянути категорії →',
        linkPath: '/catalogue-specs',
    },
    {
        id: 2,
        icon: iconBulb,
        title: 'Поради',
        description: 'Як отримати найкращі результати від співпраці.',
        linkText: 'Переглянути категорії →',
    },
    {
        id: 3,
        icon: iconZvonilka,
        title: 'Підримка 24/7',
        description: 'Завжди готові допомогти вам.',
        linkText: 'Зв\'язатись →',
    }
];

// Данные избранных специалистов для вкладки "Обране"
const specialists = [
    {
        id: 1,
        avatar: iconMaxim,
        name: 'Марина Коваленко',
        description: 'UI/UX дизайнер',
        iconFav: iconHeart,
        iconRating: iconStar,
        rating: '4.9',
        Reviews: '(127 відгуків)',
        DirectionOne: 'Дизайн',
        DirectionTwo: 'Adobe XD',
        DirectionThree: 'Sketch',
        PriceOnHour: 'від 500 грн/год',
    },
    {
        id: 2,
        avatar: iconAndrei,
        name: 'Андрій Шевченко',
        description: 'full-stack розробник',
        iconFav: iconHeart,
        iconRating: iconStar,
        rating: '5',
        Reviews: '(89 відгуків)',
        DirectionOne: 'React',
        DirectionTwo: 'Node.js',
        DirectionThree: 'MongoDB',
        PriceOnHour: 'від 800 грн/год',
    },
    {
        id: 3,
        avatar: iconOlena,
        name: 'Олена Мельник',
        description: 'Копірайтер',
        iconFav: iconHeart,
        iconRating: iconStar,
        rating: '4.8',
        Reviews: '(156 відгуків)',
        DirectionOne: 'SEO',
        DirectionTwo: 'Маркетинг',
        DirectionThree: 'Контент',
        PriceOnHour: 'від 300 грн/год',
    },
    {
        id: 4,
        avatar: iconDanilka,
        name: 'Дмитро Василенко',
        description: 'Motion-дизайнер',
        iconFav: iconHeart,
        iconRating: iconStar,
        rating: '4.9',
        Reviews: '(94 відгуків)',
        DirectionOne: 'Афтер Еффектс',
        DirectionTwo: '3D',
        DirectionThree: 'Animation',
        PriceOnHour: 'від 600 грн/год',
    },
    {
        id: 5,
        avatar: iconIrina,
        name: 'Ірина Петренко',
        description: 'SMM менеджер',
        iconFav: iconHeart,
        iconRating: iconStar,
        rating: '4.7',
        Reviews: '(112 відгуків)',
        DirectionOne: 'Instagram',
        DirectionTwo: 'Facebook',
        DirectionThree: 'TikTok',
        PriceOnHour: 'від 400 грн/год',
    },
    {
        id: 6,
        avatar: iconMaxim,
        name: 'Максим Іваненко',
        description: 'UI/UX дизайнер',
        iconFav: iconHeart,
        iconRating: iconStar,
        rating: '5',
        Reviews: '(78 відгуків)',
        DirectionOne: 'Web Flow',
        DirectionTwo: 'Figma',
        DirectionThree: 'Css',
        PriceOnHour: 'від 500 грн/год',
    },
];

const profilePhoto = {
    title: 'Фото профілю',
    icon: iconOleg,
    recommendationSize: 'Рекомендований розмір: 400x400px',
    format: 'Формати: JPG, PNG',
};

// Возвращает css-класс статуса для цветового отображения бейджа
const getStatusClass = (status) => {
    if (status === 'Активне') return 'status-active';
    if (status === 'В роботі') return 'status-progress';
    if (status === 'Завершено') return 'status-done';
    return '';
};

// Вкладка "Огляд": статистика, последние заказы и рекомендации
const OverviewTab = ({ onGoToOrders }) => (
    <div className='overview-tab'>
        {/* Stats */}
        <div className='stats-section'>
            <div className="container">
                {stats.map((item, index) => (
                    <div key={index} className='stat-card'>
                        <div className='stat-header'>
                            <img src={item.icon} alt={item.label} />
                            <span className='stat-text'>{item.text}</span>
                        </div>

                        <div className='stat-body'>
                            <h2 className='stat-count'>{item.count}</h2>
                            <p className='stat-label'>{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Last Orders */}
        <div className='last-order-container '>
            <span className='last-order'><h1>Останні замовлення</h1> <p className='go-to-orders' onClick={onGoToOrders}> Переглянути всі →</p>
            </span>
            <div className='last-order-card-container'>
                <div className='last-order-card'>
                    {orderCard.map((orderCard) => (
                        <div className='card' key={orderCard.id}>

                            <div className='card-header'>
                                <h2 className='card-title'>{orderCard.title}</h2>
                                <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                            </div>

                            <p className='card-description'>{orderCard.description}</p>

                            <div className='card-details'>
                                <div className='card-category-item'>
                                    <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.categoryText}</span>
                                </div>

                                <div className='card-price-item'>
                                    <img className='card-item-icon' src={orderCard.priceIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.priceText}</span>
                                </div>

                                <div className='card-deadline-item'>
                                    <img className='card-item-icon' src={orderCard.deadlineIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.deadlineText}</span>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <span className='card-item-text'> {orderCard.proposals}</span>
                                <span> • </span>
                                <span className='card-item-text'>{orderCard.date}</span>

                                <button className='view-details-btn'>Переглянути</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Recommendations */}
        <div className='recommendations-section'>
            {recomendationCards.map((card) => (
                <div className='recomendation-card' key={card.id}>
                    <img className='recomendation-card-icon' src={card.icon} alt="" />
                    <h2 className='recomendation-card-title'>{card.title}</h2>
                    <p className='recomendation-card-description'>{card.description}</p>
                    {card.linkPath ? (
                        <Link className='recomendation-card-link' to={card.linkPath}>{card.linkText}</Link>
                    ) : (
                        <span className='recomendation-card-link'>{card.linkText}</span>
                    )}
                </div>
            ))}
        </div>
    </div>

)

// Вкладка "Всі замовлення": полный список заказов
const OrdersTab = () => (
    <div className='orders-tab'>
        <div className='orders-header'>
            <h1>Всі замовлення</h1>
        </div>

        {/* Orders Grid */}
        <div className='orders-list'>
            <div className='last-order-card-container'>
                <div className='last-order-card'>
                    {orderCard.map((orderCard) => (
                        <div className='card' key={orderCard.id}>

                            <div className='card-header'>
                                <h2 className='card-title'>{orderCard.title}</h2>
                                <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                            </div>

                            <p className='card-description'>{orderCard.description}</p>

                            <div className='card-details'>
                                <div className='card-category-item'>
                                    <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.categoryText}</span>
                                </div>

                                <div className='card-price-item'>
                                    <img className='card-item-icon' src={orderCard.priceIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.priceText}</span>
                                </div>

                                <div className='card-deadline-item'>
                                    <img className='card-item-icon' src={orderCard.deadlineIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.deadlineText}</span>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <span className='card-item-text'> {orderCard.proposals}</span>
                                <span> • </span>
                                <span className='card-item-text'>{orderCard.date}</span>

                                <button className='view-details-btn'>Переглянути</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

// Вкладка "Активні": только заказы в работе
const ActiveTab = () => (
    <div className='active-tab'>
        <div className='orders-header'>
            <h1>Активні замовлення</h1>
        </div>

        {/* Active Orders Grid */}
        <div className='last-order-card-container'>
            <div className='last-order-card'>
                {orderCard.filter(card => card.id !== 4).map((orderCard) => (
                    <div className='card' key={orderCard.id}>

                        <div className='card-header'>
                            <h2 className='card-title'>{orderCard.title}</h2>
                            <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                        </div>

                        <p className='card-description'>{orderCard.description}</p>

                        <div className='card-details'>
                            <div className='card-category-item'>
                                <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.categoryText}</span>
                            </div>

                            <div className='card-price-item'>
                                <img className='card-item-icon' src={orderCard.priceIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.priceText}</span>
                            </div>

                            <div className='card-deadline-item'>
                                <img className='card-item-icon' src={orderCard.deadlineIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.deadlineText}</span>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <span className='card-item-text'> {orderCard.proposals}</span>
                            <span> • </span>
                            <span className='card-item-text'>{orderCard.date}</span>

                            <button className='view-details-btn'>Переглянути</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
)

// Вкладка "Завершені": только завершенные заказы
const EndOrderTab = () => (
    <div className='end-order-tab'>
        <div className='orders-header'>
            <h1>Завершені замовлення</h1>
        </div>

        {/* Completed Orders Grid */}
        <div className='last-order-card-container'>
            <div className='last-order-card'>
                {orderCard.filter(card => card.id === 4).map((orderCard) => (
                    <div className='card' key={orderCard.id}>

                        <div className='card-header'>
                            <h2 className='card-title'>{orderCard.title}</h2>
                            <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                        </div>

                        <p className='card-description'>{orderCard.description}</p>

                        <div className='card-details'>
                            <div className='card-category-item'>
                                <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.categoryText}</span>
                            </div>

                            <div className='card-price-item'>
                                <img className='card-item-icon' src={orderCard.priceIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.priceText}</span>
                            </div>

                            <div className='card-deadline-item'>
                                <img className='card-item-icon' src={orderCard.deadlineIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.deadlineText}</span>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <span className='card-item-text'> {orderCard.proposals}</span>
                            <span> • </span>
                            <span className='card-item-text'>{orderCard.date}</span>

                            <button className='view-details-btn'>Переглянути</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
)

// Вкладка "Повідомлення": список чатов + активный чат
const MessagesTab = () => {
    // Список чатов в левой колонке
    const [chats] = useState([
        {
            id: 1,
            name: 'Марина К.',
            gender: 'female',
            preview: 'Дякую за замовлення! Почну роботу...',
            time: '10:30',
            unread: 2,
            isOnline: true,
        },
        {
            id: 2,
            name: 'Андрій С.',
            gender: 'male',
            preview: 'Готовий перший варіант дизайну',
            time: 'Вчора',
            unread: 0,
            isOnline: false,
        },
        {
            id: 3,
            name: 'Олена М.',
            gender: 'female',
            preview: 'Коли можемо обговорити деталі?',
            time: '2 дні',
            unread: 1,
            isOnline: true,
        },
        {
            id: 4,
            name: 'Дмитро В.',
            gender: 'male',
            preview: 'Відправив фінальні файли',
            time: '3 дні',
            unread: 0,
            isOnline: false,
        },
        {
            id: 5,
            name: 'Ірина П.',
            gender: 'female',
            preview: 'Дякую за співпрацю!',
            time: 'Тиждень',
            unread: 0,
            isOnline: false,
        },

    ]);

    // Истории сообщений, привязанные к ID чата
    const [chatHistories, setChatHistories] = useState({
        1: [
            { id: 1, text: 'Вітаю! Я готова почати.', sender: 'them' },
            { id: 2, text: 'Чудово! Чекаю.', sender: 'me' },
        ],
        2: [
            { id: 3, text: 'Привіт, дизайн готовий', sender: 'them' }
        ],
        3: [],
        4: [],
        5: [],
    });

    const [activeChatId, setActiveChatId] = useState(1);
    const [messageText, setMessageText] = useState('');

    // Текущий выбранный чат
    const activeChat = chats.find(c => c.id === activeChatId);

    // Отправка сообщения в текущий активный чат
    const handleSendMessage = () => {
        if (!messageText.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: messageText,
            sender: 'me',
        };

        setChatHistories({
            ...chatHistories,
            [activeChatId]: [...chatHistories[activeChatId], newMessage]
        });

        setMessageText('');
    };

    return (
        <div className='messages-tab'>
            <div className='orders-header'>
                <h1 className='orders-title'>Повідомлення</h1>
            </div>

            <div className='messages-list'>
                {/* Chats Sidebar */}
                <aside className="chats-sidebar">
                    <div className='chat-search-wrap'>
                        <input className='chat-search-input' type='text' placeholder='Пошук в повідомленнях...' />
                    </div>

                    {chats.map(chat => (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChatId(chat.id)}
                            className={`chat-item ${activeChatId === chat.id ? 'active' : ''}`}
                        >
                            <div className='chat-avatar'>
                                {chat.name.charAt(0)}
                                {chat.isOnline && <span className='chat-online-dot' />}
                            </div>

                            <div className='chat-item-content'>
                                <div className='chat-item-head'>
                                    <h3 className='chat-item-name'>{chat.name}</h3>
                                    <span className='chat-item-time'>{chat.time}</span>
                                </div>
                                <div className='chat-item-foot'>
                                    <p className='chat-item-preview'>{chat.preview}</p>
                                    {chat.unread > 0 && <span className='chat-item-unread'>{chat.unread}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </aside>

                {/* Active Chat Window */}
                <main className='chat-window'>
                    <header className='chat-header'>
                        <div className='chat-header-user'>
                            <div className='chat-avatar'>{activeChat?.name.charAt(0)}</div>
                            <div>
                                <h2>{activeChat?.name}</h2>
                                <p className='chat-header-status'>{activeChat?.isOnline ? 'В мережі' : 'Був(ла) нещодавно'}</p>
                            </div>
                        </div>
                        <button className='chat-call-btn' type='button' aria-label='Зателефонувати'>
                            &#9742;
                        </button>
                    </header>

                    <div className='messages-container'>
                        {chatHistories[activeChatId].map(msg => (
                            <div key={msg.id} className={`message-row ${msg.sender}`}>
                                {msg.sender !== 'me' && <div className='chat-avatar message-avatar'>{activeChat?.name.charAt(0)}</div>}
                                <div className='message-bubble-wrap'>
                                    <div className={`message ${msg.sender}`}>
                                        <span className='message-text'>{msg.text}</span>
                                    </div>
                                    <span className='message-time'>
                                        {msg.sender === 'me' ? '10:29' : '10:30'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <footer className='chat-input-area'>
                        <input className="message-input"
                            type='text'
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Напишіть повідомлення..."
                        />
                        <button className='send-button' onClick={handleSendMessage}>Надіслати</button>
                    </footer>
                </main>
            </div>
        </div>
    );
};

// Вкладка "Обране": сетка карточек избранных специалистов
const FavoritesTab = ({ onGoToMessages }) => (
    <div className='favorites-tab'>
        <div className='orders-header'>
            <h1 className='favorites-title'>Обрані фахівці</h1>
        </div>

        {/* Favorites Specialists Grid */}
        <div className='specialists-grid'>
            {specialists.map((specialist) => (
                <article className='specialist-fav-card' key={specialist.id}>
                    <div className='specialist-top'>
                        <div className='specialist-profile'>
                            <img className='specialist-avatar' src={specialist.avatar} alt={specialist.name} />
                            <div>
                                <h2 className='specialist-name'>{specialist.name}</h2>
                                <p className='specialist-role'>{specialist.description}</p>
                            </div>
                        </div>

                        <button type='button' className='specialist-fav-btn' aria-label='Прибрати з обраного'>
                            <img src={specialist.iconFav} alt='favorite' width='20' height='20' />
                        </button>
                    </div>

                    <div className='specialist-rating-row'>
                        <img className='card-item-icon' src={specialist.iconRating} alt='rating' width='16' />
                        <span className='specialist-rating'>{specialist.rating}</span>
                        <span className='specialist-reviews'>{specialist.Reviews}</span>
                    </div>

                    <div className='specialist-tags'>
                        <span className='specialist-tag'>{specialist.DirectionOne}</span>
                        <span className='specialist-tag'>{specialist.DirectionTwo}</span>
                        <span className='specialist-tag'>{specialist.DirectionThree}</span>
                    </div>

                    <div className='specialist-footer'>
                        <p className='specialist-price'>{specialist.PriceOnHour}</p>
                        <button type='button' className='view-specialist-details-btn' onClick={onGoToMessages}>Написати</button>
                    </div>
                </article>
            ))}
        </div>
    </div>
);

// Вкладка "Налаштування": профиль, пароль, уведомления и опасная зона
const SettingsTab = () => {
    // Форма личных данных
    const [personalData, setPersonalData] = useState({
        firstName: 'Олег',
        lastName: 'Петренко',
        email: 'oleg.petrenko@email.com',
        phone: '+380 67 123 45 67',
        city: ''
    });

    // Форма смены пароля
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Обработчик изменений полей личной информации
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalData({ ...personalData, [name]: value });
    };

    // Обработчик изменений полей пароля
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    // Доступные типы уведомлений
    const notificationItems = [
        { id: 'email', title: 'Email сповіщення', desc: 'Отримувати сповіщення на пошту' },
        { id: 'offers', title: 'Нові пропозиції', desc: 'Сповіщення про нові пропозиції від фахівців' },
        { id: 'messages', title: 'Повідомлення в чаті', desc: 'Сповіщення про нові повідомлення' },
        { id: 'orders', title: 'Оновлення замовлень', desc: 'Зміни статусу ваших замовлень' },
        { id: 'marketing', title: 'Маркетингові листи', desc: 'Новини та спеціальні пропозиції' }
    ];

    // Состояние переключателей уведомлений
    const [notifications, setNotifications] = useState({
        email: true,
        offers: true,
        messages: true,
        orders: true,
        marketing: false
    });

    // Переключает конкретный тип уведомлений
    const handleToggle = (id) => {
        setNotifications(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className='settings-tab'>
            <div className='settings-header'>
                <h1>Налаштування профілю</h1>
            </div>

            <div className='settings-content'>
                {/* Profile Photo */}
                <section className='profile-photo-section'>
                    <div className='profile-photo-header'>
                        <h2 className='profile-photo-title'>{profilePhoto.title}</h2>
                    </div>
                    <div className='profile-photo-body'>
                        <img className='profile-photo' src={profilePhoto.icon} alt="Профіль" />
                        <div className='profile-photo-buttons'>
                            <button className='upload-photo-btn'>Завантажити фото</button>
                            <button className='delete-photo-btn'>Видалити фото</button>
                        </div>
                        <p className='profile-photo-recommendation'>{profilePhoto.recommendationSize}</p>
                        <p className='profile-photo-format'>{profilePhoto.format}</p>
                    </div>
                </section>

                {/* Personal Data and Password */}
                <div className='settings-forms'>
                    <section className='personal-info-section'>
                        <div className='personal-info-header'>
                            <h2 className='personal-info-title'>Особиста інформація</h2>
                        </div>
                        <form className='personal-info-form'>
                            <label className='personal-info-label'>
                                Ім'я
                                <input className='personal-info-input'
                                    name="firstName"
                                    type="text"
                                    value={personalData.firstName}
                                    onChange={handlePersonalChange}
                                    required
                                />
                            </label>

                            <label className='personal-info-label'>
                                Прізвище
                                <input className='personal-info-input'
                                    name="lastName"
                                    type="text"
                                    value={personalData.lastName}
                                    onChange={handlePersonalChange}
                                    required
                                />
                            </label>

                            <label className='personal-info-label'>
                                Email
                                <input className='personal-info-input'
                                    name="email"
                                    type="email"
                                    value={personalData.email}
                                    onChange={handlePersonalChange}
                                    required
                                />
                            </label>

                            <label className='personal-info-label'>
                                Телефон
                                <input className='personal-info-input'
                                    name="phone"
                                    type="tel"
                                    value={personalData.phone}
                                    onChange={handlePersonalChange}
                                />
                            </label>

                            <label className='personal-info-label'>
                                Місто
                                <input className='personal-info-input'
                                    name="city"
                                    type="text"
                                    value={personalData.city}
                                    onChange={handlePersonalChange}
                                />
                            </label>

                            <button className='personal-info-button' type="submit">Зберегти зміни</button>
                        </form>
                    </section>

                    <section className='change-password-section'>
                        <div className='change-password-header'>
                            <h2 className='change-password-title'>Змінити пароль</h2>
                        </div>
                        <form className='change-password-form' onSubmit={(e) => e.preventDefault()}>
                            <label className='change-password-label'>
                                Поточний пароль
                                <input className='change-password-input'
                                    name="currentPassword"
                                    type="password"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </label>

                            <label className='change-password-label'>
                                Новий пароль
                                <input className='change-password-input'
                                    name="newPassword"
                                    type="password"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    minLength={8}
                                    required
                                />
                            </label>

                            <label className='change-password-label'>
                                Підтвердіть новий пароль
                                <input className='change-password-input'
                                    name="confirmPassword"
                                    type="password"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </label>

                            <button className='change-password-button' type="submit">Змінити пароль</button>
                        </form>
                    </section>
                </div>

                {/* Notifications */}
                <div className='message-section'>
                    <div className='message-header'>
                        <h1>Налаштування профілю</h1>
                    </div>
                    <section className='notification-settings-section'>
                        <div className='notification-settings-header'>
                            <h2 className='notification-title'>Налаштування сповіщень</h2>
                        </div>

                        <div className='notification-settings-body'>
                            {notificationItems.map((item) => (
                                <div className='notification-item' key={item.id}>
                                    <div className='notification-item-info'>
                                        <h3 className='notification-item-title'>{item.title}</h3>
                                        <p className='notification-item-description'>{item.desc}</p>
                                    </div>

                                    <label className='notification-toggle'>
                                        <input className='notification-checkbox'
                                            type="checkbox"
                                            checked={notifications[item.id]}
                                            onChange={() => handleToggle(item.id)}
                                        />
                                        <span className='notification-toggle-text'>{notifications[item.id] ? "Увімкнено" : "Вимкнено"}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Danger Zone */}
                <div className='delete-account-section'>
                    <div className='delete-account-header'>
                        <h2 className='delete-account-title'>Небезпечна зона</h2>
                    </div>
                    <div className='delete-account-body'>
                        <section className='danger-zone-section'>
                            <div className='danger-zone-header'>
                                <h2 className='danger-zone-title'>Небезпечна зона</h2>
                            </div>
                            <div className='danger-zone-body'>
                                <div className='deactivate-account'>
                                    <div className='deactivate-account-info'>
                                        <h3 className='deactivate-account-title'>Деактивувати акаунт</h3>
                                        <p>Тимчасово приховати ваш профіль</p>
                                    </div>
                                    <button type="button" className='deactivate-account-button'> Деактивувати</button>
                                </div>
                                <div className='delete-account'>
                                    <div className='delete-account-info'>
                                        <h3 className='delete-account-title'>Видалити акаунт</h3>
                                        <p className='delete-account-description'>Назавжди видалити ваш акаунт та всі дані</p>
                                    </div>
                                    <button type="button" className='delete-account-button'>Видалити </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Основной компонент личного кабинета пользователя
function UserPage() {
    const navigate = useNavigate();

    // Вкладки верхнего меню
    const tabs = [
        { key: 'overview', label: 'Огляд' },
        { key: 'orders', label: 'Всі замовлення', badge: 4 },
        { key: 'active', label: 'Активні' },
        { key: 'completed', label: 'Завершені' },
        { key: 'messages', label: 'Повідомлення', badge: 5 },
        { key: 'favorites', label: 'Обране' },
        { key: 'settings', label: 'Налаштування' },
    ];

    // Соответствие ключа вкладки и React-компонента контента
    const contentMap = {
        overview: <OverviewTab onGoToOrders={() => setActiveTab('orders')} />,
        orders: <OrdersTab />,
        active: <ActiveTab />,
        completed: <EndOrderTab />,
        messages: <MessagesTab />,
        favorites: <FavoritesTab onGoToMessages={() => setActiveTab('messages')} />,
        settings: <SettingsTab />,
    };

    // Данные карточки пользователя в шапке
    const user = { icon: iconOleg, title: 'Замовник', text: 'Олег П.' };

    // Активная вкладка кабинета
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="user-page">
            {/* Header */}
            <header className='header-user'>
                <div className='brand'>
                    <Link to="/" className="main-page-link">
                        <img src={iconBee} alt="BusyBee" className="brand-bee" />
                        <span className="brand-text">BusyBee</span>
                    </Link>
                </div>
                <div className='order-search'>
                    <span className="hero-search-icon">⌕</span>
                    <input type="text" placeholder="Пошук замовлень..." aria-label="Пошук" />
                </div>
                <div className='button'>
                    <button
                        type="button"
                        className='create-order-btn'
                        onClick={() => navigate('/create-order')}
                    >
                        +Створити
                    </button>

                    <button type='button' className='alert'>
                        <img src={iconKolokolchik} alt="kolokolchik" />
                    </button>
                </div>
                <div className='user-card'>
                    <img src={user.icon} alt={user.text} />
                    <h3>{user.title}</h3>
                    <p>{user.text}</p>
                </div>
            </header>

            {/* Tabs Navigation and Content */}
            <nav className='user-nav'>
                <div className="tabs-container">
                    {/* Tabs */}
                    <nav className="tabs-menu">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={activeTab === tab.key ? 'active' : ''}
                            >
                                {tab.label}
                                {tab.badge ? <span className='tab-badge'>{tab.badge}</span> : null}
                            </button>
                        ))}
                    </nav>

                    {/* Active Tab Content */}
                    <div className="tabs-content">
                        {contentMap[activeTab]}
                    </div>
                </div>
            </nav>

            {/* Footer */}

        </div>
    )
};
  
export default UserPage;
