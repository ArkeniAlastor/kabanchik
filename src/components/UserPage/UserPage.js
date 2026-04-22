import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import Footer from '../Footer/Footer';
const stats = [
    { label: 'Замовлень в роботі', count: '3', icon: iconBlocknote, text: 'АКТИВНИХ' },
    { label: 'Від фахівців', count: '55', icon: iconChumodan, text: 'ПРОПОЗИЦІЇ' },
    { label: 'Успішних проектів', count: '1', icon: iconCheck, text: 'ЗАВЕРШЕНО' },
    { label: 'Середня оцінка', count: '4.9', icon: iconStar, text: 'РЕЙТИНГ' },
];

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

const recomendationCards = [
    {
        id: 1,
        icon: iconDarts,
        title: 'Знайти фахівця',
        description: 'Перегляньте категорії та знайдіть ідеального винонавця.',
        linkText: 'Переглянути категорії →',
        linkPath: '../CategoryPage/CategoryPage', /*с задумкой на маршрутизацию, но пока плевать*/
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

const OverviewTab = ({ onGoToOrders }) => (
    <div className='overview-tab'>

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
        <div className='last-order-container '>
            <span className='last-order'><h1>Останні замовлення</h1> <p className='go-to-orders' onClick={onGoToOrders}> Переглянути всі →</p> {/*Должен быть синим*/}
            </span>
            <div className='last-order-card-container'>{/*сделать сетчатое расположение*/}
                <div className='last-order-card'>
                    {orderCard.map((orderCard) => (
                        <div className='card' key={orderCard.id}>

                            <div className='card-header'>
                                <h2 className='card-title'>{orderCard.title}</h2>
                                <span className='card-status'>{orderCard.status}</span>
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
        <div className='recommendations-section'>
            {recomendationCards.map((card) => (
                <div className='recomendation-card' key={card.id}>
                    <img className='recomendation-card-icon' src={card.icon} alt="" />
                    <h2 className='recomendation-card-title'>{card.title}</h2>
                    <p className='recomendation-card-description'>{card.description}</p>
                    <span className='recomendation-card-link'>{card.linkText}</span>
                </div>
            ))}
        </div>
    </div>

)

const OrdersTab = () => (
    <div className='orders-tab'>
        <div className='orders-header'>
            <h1>Всі замовлення</h1>
        </div>
        <div className='orders-list'>
            <div className='last-order-card-container'>{/*сделать сетчатое расположение*/}
                <div className='last-order-card'>
                    {orderCard.map((orderCard) => (
                        <div className='card' key={orderCard.id}>

                            <div className='card-header'>
                                <h2 className='card-title'>{orderCard.title}</h2>
                                <span className='card-status'>{orderCard.status}</span>
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

const ActiveTab = () => (
    <div className='active-tab'>
        <div className='orders-header'>
            <h1>Активні замовлення</h1>
        </div>
        <div className='last-order-card-container'>{/*сделать сетчатое расположение*/}
            <div className='last-order-card'>
                {orderCard.filter(card => card.id !== 4).map((orderCard) => (
                    <div className='card' key={orderCard.id}>

                        <div className='card-header'>
                            <h2 className='card-title'>{orderCard.title}</h2>
                            <span className='card-status'>{orderCard.status}</span>
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

const EndOrderTab = () => (
    <div className='end-order-tab'>
        <div className='orders-header'>
            <h1>Завершені замовлення</h1>
        </div>
        <div className='last-order-card-container'>{/*сделать сетчатое расположение*/}
            <div className='last-order-card'>
                {orderCard.filter(card => card.id === 4).map((orderCard) => (
                    <div className='card' key={orderCard.id}>

                        <div className='card-header'>
                            <h2 className='card-title'>{orderCard.title}</h2>
                            <span className='card-status'>{orderCard.status}</span>
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

const MessagesTab = () => {
    const [chats] = useState([
        { id: 1, name: 'Марина К.', gender: 'female' },
        { id: 2, name: 'Андрій С.', gender: 'male' },
        { id: 3, name: 'Олена М.', gender: 'female' },
        { id: 4, name: 'Дмитро В.', gender: 'male' },
        { id: 5, name: 'Ірина П.', gender: 'female' },

    ]);

    // 2. Истории сообщений, привязанные к ID чата
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

    const activeChat = chats.find(c => c.id === activeChatId);

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

                <aside className="chats-sidebar">
                    {chats.map(chat => (
                        <div
                            key={chat.id} onClick={() => setActiveChatId(chat.id)} className={`chat-item ${activeChatId === chat.id ? 'active' : ''}`}
                            style={{ cursor: 'pointer', padding: '10px' }}/*Когда будешь ксс делать, убирай эту фигню, и сделаешь это уже в ксс */>
                            {chat.name}
                        </div>
                    ))}
                </aside>


                <main className='chat-window'>
                    <header className='chat-header'>
                        <h2>{activeChat?.name}</h2>
                    </header>

                    <div className='messages-container'>
                        {chatHistories[activeChatId].map(msg => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                <b className='message-sender'>
                                    {msg.sender === 'me'
                                        ? 'Ви: '
                                        : (activeChat?.gender === 'male' ? 'Він: ' : 'Вона: ')
                                    }
                                </b>
                                <span className='message-text'>{msg.text}</span>
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

const FavoritesTab = ({ onGoToMessages }) => (
    <div className='favorites-tab'>
        <div className='orders-header'>
            <h1 className='favorites-title'>Обрані фахівці</h1>
        </div>
        <div className='specialist-card'>
            {specialists.map((specialists) => (
                <div className='card-specialist' key={specialists.id}>

                    <div className='card-specialist-header'>
                        <img src={specialists.avatar} alt={specialists.name} width="40" />
                        <div>
                            <h2 className='card-title'>{specialists.name}</h2>
                            <span className='card-description'>{specialists.description}</span>
                        </div>
                    </div>

                    <div className='card-specialist-details'>
                        <div className='card-category-item'>
                            <img className='card-item-icon' src={specialists.iconFav} alt="fav" width="16" />
                        </div>

                        <div className='card-specialist-rating-item'>
                            <img className='card-item-icon' src={specialists.iconRating} alt="rating" width="16" />
                            <span className='card-specialist-item-text'>{specialists.rating} {specialists.Reviews}</span>
                        </div>

                        <div className='card-specialist-directions'>
                            <span className='card-specialist-item-text'>{specialists.DirectionOne}</span>
                            <span className='card-specialist-item-text'>{specialists.DirectionTwo}</span>
                            <span className='card-specialist-item-text'>{specialists.DirectionThree}</span>
                        </div>

                        <div className='card-specialist-price-item'>
                            <span className='card-specialist-item-text'>{specialists.PriceOnHour}</span>
                        </div>
                    </div>

                    <div className='card-specialist-footer'>
                        <button className='view-specialist-details-btn' onClick={onGoToMessages}>Написати</button>
                    </div>

                </div>
            ))}
        </div>
    </div>
);

const SettingsTab = () => {
    const [personalData, setPersonalData] = useState({
        firstName: 'Олег',
        lastName: 'Петренко',
        email: 'oleg.petrenko@email.com',
        phone: '+380 67 123 45 67',
        city: ''
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalData({ ...personalData, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const notificationItems = [
        { id: 'email', title: 'Email сповіщення', desc: 'Отримувати сповіщення на пошту' },
        { id: 'offers', title: 'Нові пропозиції', desc: 'Сповіщення про нові пропозиції від фахівців' },
        { id: 'messages', title: 'Повідомлення в чаті', desc: 'Сповіщення про нові повідомлення' },
        { id: 'orders', title: 'Оновлення замовлень', desc: 'Зміни статусу ваших замовлень' },
        { id: 'marketing', title: 'Маркетингові листи', desc: 'Новини та спеціальні пропозиції' }
    ];

    const [notifications, setNotifications] = useState({
        email: true,
        offers: true,
        messages: true,
        orders: true,
        marketing: false
    });

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
                <section сlassName='profile-photo-section'>
                    <div сlassName='profile-photo-header'>
                        <h2 сlassName='profile-photo-title'>{profilePhoto.title}</h2>
                    </div>
                    <div сlassName='profile-photo-body'>
                        <img сlassName='profile-photo' src={profilePhoto.icon} alt="Профіль" />
                        <div className='profile-photo-buttons'>
                            <button сlassName='upload-photo-btn'>Завантажити фото</button>
                            <button сlassName='delete-photo-btn'>Видалити фото</button>
                        </div>
                        <p сlassName='profile-photo-recommendation'>{profilePhoto.recommendationSize}</p>
                        <p сlassName='profile-photo-format'>{profilePhoto.format}</p>
                    </div>
                </section>
                <div className='settings-forms'>
                    <section сlassName='personal-info-section'>
                        <div сlassName='personal-info-header'>
                            <h2 сlassName='personal-info-title'>Особиста інформація</h2>
                        </div>
                        <form сlassName='personal-info-form'>
                            <label сlassName='personal-info-label'>
                                Ім'я
                                <input сlassName='personal-info-input'
                                    name="firstName"
                                    type="text"
                                    value={personalData.firstName}
                                    onChange={handlePersonalChange}
                                    required
                                />
                            </label>

                            <label сlassName='personal-info-label'>
                                Прізвище
                                <input сlassName='personal-info-input'
                                    name="lastName"
                                    type="text"
                                    value={personalData.lastName}
                                    onChange={handlePersonalChange}
                                    required
                                />
                            </label>

                            <label сlassName='personal-info-label'>
                                Email
                                <input сlassName='personal-info-input'
                                    name="email"
                                    type="email"
                                    value={personalData.email}
                                    onChange={handlePersonalChange}
                                    required
                                />
                            </label>

                            <label сlassName='personal-info-label'>
                                Телефон
                                <input сlassName='personal-info-input'
                                    name="phone"
                                    type="tel"
                                    value={personalData.phone}
                                    onChange={handlePersonalChange}
                                />
                            </label>

                            <label сclassName='personal-info-label'>
                                Місто
                                <input сclassName='personal-info-input'
                                    name="city"
                                    type="text"
                                    value={personalData.city}
                                    onChange={handlePersonalChange}
                                />
                            </label>

                            <button className='personal-info-button' type="submit">Зберегти зміни</button>
                        </form>
                    </section>

                    <section сlassName='change-password-section'>
                        <div сlassName='change-password-header'>
                            <h2 сlassName='change-password-title'>Змінити пароль</h2>
                        </div>
                        <form className='change-password-form' onSubmit={(e) => e.preventDefault()}>
                            <label сclass_name='change-password-label'>
                                Поточний пароль
                                <input сlassName='change-password-input'
                                    name="currentPassword"
                                    type="password"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </label>

                            <label сlassName='change-password-label'>
                                Новий пароль
                                <input сlassName='change-password-input'
                                    name="newPassword"
                                    type="password"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    minLength={8}
                                    required
                                />
                            </label>

                            <label сclass_name='change-password-label'>
                                Підтвердіть новий пароль
                                <input сclass_name='change-password-input'
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

function UserPage() {
    const tabs = [
        { key: 'overview', label: 'Огляд' },
        { key: 'orders', label: 'Всі Замовлення' },
        { key: 'active', label: 'Активні' },
        { key: 'completed', label: 'Завершені' },
        { key: 'messages', label: 'Повідомлення' },
        { key: 'favorites', label: 'Обране' },
        { key: 'settings', label: 'Налаштування' },
    ];
    const contentMap = {
        overview: <OverviewTab onGoToOrders={() => setActiveTab('orders')} />,
        orders: <OrdersTab />,
        active: <ActiveTab />,
        completed: <EndOrderTab />,
        messages: <MessagesTab />,
        favorites: <FavoritesTab onGoToMessages={() => setActiveTab('messages')} />,
        settings: <SettingsTab />,
    };
    const user = { icon: iconOleg, title: 'Замовник', text: 'Олег П.' };

    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="user-page">
            <header className='header-user'>
                <div className='brand'>
                    <Link to="###"/* Мне лень сюда марщрутизацию вставлять, потом*/ className="main-page-link">
                        <img src={iconBee} alt="BusyBee" className="brand-bee" />
                        <span className="brand-text">BusyBee</span>
                    </Link>
                </div>
                <div className='order-search'>
                    <span className="hero-search-icon">⌕</span>
                    <input type="text" placeholder="Пошук замовлень..." aria-label="Пошук" />
                </div>
                <div className='button'>
                    <button type="button" className='create-order-btn'>+Створити</button>

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
            <nav className='user-nav'>
                <div className="tabs-container">
                    <nav className="tabs-menu">
                        {tabs.map((tab) => (
                            <button key={tab.key} onClick={() => setActiveTab(tab.key)}>
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                    <div className="tabs-content">
                        {contentMap[activeTab]}
                    </div>
                </div>
            </nav>
            <Footer />
        </div>
    )
};
  
export default UserPage;
