import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as icons from '../../imgs/icons';
import './SpecPage.css'

// Данные карточек статистики для вкладки "Огляд"
const stats = [
    { label: 'Загальний дохід', count: '6.0k', icon: icons.iconMoney, text: 'ЗАРОБІТОК' },
    { label: 'Проектів в роботі', count: '2', icon: icons.iconLightning, text: 'АКТИВНИХ' },
    { label: 'Успішних проектів', count: '1', icon: icons.iconCheck, text: 'ЗАВЕРШЕНО' },
    { label: 'Середня оцінка', count: '4.9', icon: icons.iconStar, text: 'РЕЙТИНГ' },
];

// Данные карточек заказов (используются в нескольких вкладках)
const orderCard = [
    {
        id: 1,
        title: 'Дизайн мобільного додатку',
        description: 'розробка сучасного інтерфейсу для фінансового додатку.',
        status: 'В роботі',
        progressValue: 65,
        categoryIcon: icons.iconFolder,
        categoryText: 'UI/UX Дизайн',
        personaIcon: icons.iconPchel,
        personaText: 'Олег П.',
        priceIcon: icons.iconMoney,
        priceText: '12000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '5 днів',
    },
    {
        id: 2,
        title: 'Розробка інтернет магазину',
        description: 'E-commerce платформа на React з адмін панеллю',
        status: 'В роботі',
        progressValue: 40,
        categoryIcon: icons.iconFolder,
        categoryText: 'Веб-розробка',
        personaIcon: icons.iconPchel,
        personaText: 'Марина К.',
        priceIcon: icons.iconMoney,
        priceText: '25000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '12 днів',
    },
    {
        id: 3,
        title: 'Логотип для бренду',
        description: 'Створення фірмового стилю для нового бренду одягу.',
        status: 'Завершено',
        progressValue: 100,
        categoryIcon: icons.iconFolder,
        categoryText: 'Графічний дизайн',
        personaIcon: icons.iconPchel,
        personaText: 'Андрій С.',
        priceIcon: icons.iconMoney,
        priceText: '6000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: 'Завершено',
    }];

// Карточки рекомендаций внизу вкладки "Огляд"
const recomendationCards = [
    {
        id: 1,
        icon: icons.iconLupa,
        title: 'Нові проекти',
        description: '5 свіжих замовлень чекають на вас.',
        linkText: 'Переглянути переглянути проекти →',
        linkPath: '../CategoryPage/CategoryPage', /*с задумкой на маршрутизацию, но пока плевать*/
    },
    {
        id: 2,
        icon: icons.iconFolder,
        title: 'Партфоліо',
        description: 'Додайте нові роботи до свого портфоліо.',
        linkText: 'Керувати партфоліо →',
    },
    {
        id: 3,
        icon: icons.iconBulb,
        title: 'Поради для успіху',
        description: 'Як збільшити свій дохід на платформі.',
        linkText: 'Читати поради →',
    }
];

// Данные избранных специалистов для вкладки "Обране"
const projects = [
    {
        id: 1,
        title: 'Дизайн логотипу для IT-стартапу',
        description: 'Потрібен сучасний мінімалістичний логотип для AI стартапу. Очікую креативні рішення з використанням синіх та зелених відтінків.',
        category: 'Дизайн',
        personaIcon: icons.iconPchel,
        personaText: 'Андрій С.',
        priceIcon: icons.iconMoney,
        priceText: '5000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '5 днів',
        offersIcon: icons.iconPisat,
        offers: '3 пропозиції',
        addIcon: icons.iconBigTime,
        addText: '2 години тому'
    },
    {
        id: 2,
        title: 'Розробка лендінгу на React',
        description: 'Односторінковий сайт з адаптивним дизайном, анімаціями та інтеграцією форм.',
        category: 'Веб-розробка',
        personaIcon: icons.iconPchel,
        personaText: 'Наталія В.',
        priceIcon: icons.iconMoney,
        priceText: '15000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '14 днів',
        offersIcon: icons.iconPisat,
        offers: '8 пропозицій',
        addIcon: icons.iconBigTime,
        addText: '5 годин тому'
    },
    {
        id: 3,
        title: 'SEO оптимізація сайту',
        description: 'Комплексна SEO оптимізація для покращення позицій в Google.',
        category: 'Маркетинг',
        personaIcon: icons.iconPchel,
        personaText: 'Дмитро К.',
        priceIcon: icons.iconMoney,
        priceText: '8000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '7 днів',
        offersIcon: icons.iconPisat,
        offers: '15 пропозицій',
        addIcon: icons.iconBigTime,
        addText: '1 день тому'
    },
    {
        id: 4,
        title: '3D моделювання продукту ',
        description: 'Потрібна 3D візуалізація нового продукту для презентації інвесторам.',
        category: '3D Графіка',
        personaIcon: icons.iconPchel,
        personaText: 'Ірина Л.',
        priceIcon: icons.iconMoney,
        priceText: '10000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '10 днів',
        offersIcon: icons.iconPisat,
        offers: '6 пропозицій',
        addIcon: icons.iconBigTime,
        addText: '6 години тому'
    },
    {
        id: 5,
        title: 'Контент для Instagram',
        description: 'Створення контенту та підтримка акаунту в Instagram протягом місяця.',
        category: 'SMM',
        personaIcon: icons.iconPchel,
        personaText: 'Максим Т.',
        priceIcon: icons.iconMoney,
        priceText: '4000 грн',
        deadlineIcon: icons.iconTime,
        deadlineText: '30 днів',
        offersIcon: icons.iconPisat,
        offers: '20 пропозицій',
        addIcon: icons.iconBigTime,
        addText: '3 години тому'
    }
];

const profilePhoto = {
    title: 'Фото профілю',
    icon: icons.iconMKultra,
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
const partfolioOrder = [
    {
        id: 1,
        iconPart: icons.iconPart1,
        title: 'Мобільний банкінг додаток',
        category: 'UI/UX',
        description: 'Сучасний інтерфейс для фітнес додатку.',
        iconLike: icons.iconHeart,
        likeRewius: '234',
        reductIcon: icons.iconRedact,
        iconDelite: icons.iconMusorka
    },
    {
        id: 2,
        iconPart: icons.iconPart2,
        title: 'E-commerce платформа',
        category: 'Веб-дизайн',
        description: 'Інтернет-магазин з мінімалістичним дизайном.',
        iconLike: icons.iconHeart,
        likeRewius: '189',
        reductIcon: icons.iconRedact,
        iconDelite: icons.iconMusorka
    },
    {
        id: 3,
        iconPart: icons.iconPart3,
        title: 'Брендинг для кав\'ярні ',
        category: 'Графічний дизайн',
        description: 'Комплексний фірмовий стиль.',
        iconLike: icons.iconHeart,
        likeRewius: '312',
        reductIcon: icons.iconRedact,
        iconDelite: icons.iconMusorka
    },
    {
        id: 4,
        iconPart: icons.iconPart4,
        title: 'Dashboard для аналітики',
        category: 'UI/UX',
        description: 'Адмін панель з графіками  та статистикою.',
        iconLike: icons.iconHeart,
        likeRewius: '156',
        reductIcon: icons.iconRedact,
        iconDelite: icons.iconMusorka
    },
    {
        id: 5,
        iconPart: icons.iconPart5,
        title: 'Логотип для стартапу',
        category: 'Графічний дизайн',
        description: 'Сучасний інтерфейс для tech компанії.',
        iconLike: icons.iconHeart,
        likeRewius: '267',
        reductIcon: icons.iconRedact,
        iconDelite: icons.iconMusorka
    },
    {
        id: 6,
        iconPart: icons.iconPart6,
        title: 'Лендінг для продукту',
        category: 'Веб-дизайн',
        description: 'Односторінковий сайт з анімаціями.',
        iconLike: icons.iconHeart,
        likeRewius: '198',
        reductIcon: icons.iconRedact,
        iconDelite: icons.iconMusorka
    },
]
// Вкладка "Огляд": статистика, последние заказы и рекомендации
const OverviewTab = ({ onGoToSearchProjects }) => (
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
            <span className='last-order'><h1>Останні замовлення</h1> <p className='go-to-orders' onClick={onGoToSearchProjects}> Переглянути всі →</p>
            </span>
            <div className='last-order-card-container'>
                <div className='last-order-card'>
                    {orderCard.filter(card => card.id !== 3).map((orderCard) => (
                        <div className='card' key={orderCard.id}>

                            <div className='card-header'>
                                <h2 className='card-title'>{orderCard.title}</h2>
                                <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                            </div>

                            <p className='card-description'>{orderCard.description}</p>

                            <div className='progressValue'>
                                <label className='progress-title'>Прогрес: {orderCard.progressValue}%</label>
                                <progress className='progress' value={orderCard.progressValue} max="100" style={{ width: '100%' }}></progress>
                            </div>

                            <div className='card-details'>
                                <div className='card-category-item'>
                                    <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                    <span className='card-item-text'>{orderCard.categoryText}</span>
                                </div>

                                <div className='order-persona'>
                                    <img src={orderCard.personaIcon} alt="Customer" />
                                    <span> {orderCard.personaText} </span>
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
                                <button className='view-details-btn'>Деталі</button>
                                <button className='view-messenge-btn'>Повідомлення</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Recommendations */}
        < div className='recommendations-section' >
            {
                recomendationCards.map((card) => (
                    <div className='recomendation-card' key={card.id}>
                        <img className='recomendation-card-icon' src={card.icon} alt="" />
                        <h2 className='recomendation-card-title'>{card.title}</h2>
                        <p className='recomendation-card-description'>{card.description}</p>
                        {card.linkPath ? (
                            <Link className='recomendation-card-link' to="/category">{card.linkText}</Link>
                        ) : (
                            <span className='recomendation-card-link'>{card.linkText}</span>
                        )}
                    </div>
                ))
            }
        </div>
    </div >

)

// Вкладка "Всі замовлення": полный список заказов
const SearchProjectsTab = () => (
    <div className='orders-tab'>
        <div className='orders-header'>
            <h1>Пошук проектів</h1>
        </div>

        {/* Projects Grid */}
        <div className='orders-list'>
            <div className='last-order-card-container'>
                <div className='last-order-card'>
                    {projects.map((project) => (
                        <div className='card' key={project.id}>

                            <div className='card-header'>
                                <h2 className='card-title'>{project.title}</h2>
                                <span className='card-category'>{project.category}</span>
                            </div>

                            <p className='card-description'>{project.description}</p>

                            <div className='card-details'>
                                <div className='card-persona-item'>
                                    <img src={project.personaIcon} alt="" />
                                    <span className='card-item-text'>{project.personaText}</span>
                                </div>

                                <div className='card-price-item'>
                                    <img src={project.priceIcon} alt="" />
                                    <span className='card-item-text'>{project.priceText}</span>
                                </div>
                                <div className='card-deadline-item'>
                                    <img src={project.deadlineIcon} alt="" />
                                    <span className='card-item-text'>{project.deadlineText}</span>
                                </div>
                            </div>

                            <div className='card-footer'>
                                <div className='card-stats'>
                                    <img src={project.offersIcon} alt="" />
                                    <span className='card-item-text'>{project.offers}</span>
                                    <span> • </span>
                                    <img src={project.addIcon} alt="" />
                                    <span className='card-item-text'>{project.addText}</span>
                                </div>

                                <div className='card-actions'>
                                    <button className='send-offer-btn'>Відправити пропозицію</button>
                                    <button className='save-btn'>Зберегти</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

// Вкладка "Активні": только заказы в работе
const MyProjectsTab = () => (
    <div className='my-projects-tab'>
        <div className='orders-header'>
            <h1>Активні замовлення</h1>
        </div>

        {/* Active Orders Grid */}
        <div className='last-order-card-container'>
            <div className='last-order-card'>
                {orderCard.filter(card => card.id !== 3).map((orderCard) => (
                    <div className='card' key={orderCard.id}>

                        <div className='card-header'>
                            <h2 className='card-title'>{orderCard.title}</h2>
                            <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                        </div>

                        <p className='card-description'>{orderCard.description}</p>

                        <div className='progressValue'>
                            <label className='progress-title'>Прогрес: {orderCard.progressValue}%</label>
                            <progress className='progress' value={orderCard.progressValue} max="100" style={{ width: '100%' }}></progress>
                        </div>

                        <div className='card-details'>
                            <div className='card-category-item'>
                                <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.categoryText}</span>
                            </div>

                            <div className='order-persona'>
                                <img src={orderCard.personaIcon} alt="Customer" />
                                <span> {orderCard.personaText} </span>
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
                            <button className='view-details-btn'>Деталі</button>
                            <button className='view-messenge-btn'>Повідомлення</button>
                        </div>
                    </div>
                ))}
                {orderCard.filter(card => card.id === 3).map((orderCard) => (
                    <div className='card' key={orderCard.id}>

                        <div className='card-header'>
                            <h2 className='card-title'>{orderCard.title}</h2>
                            <span className={`card-status ${getStatusClass(orderCard.status)}`}>{orderCard.status}</span>
                        </div>

                        <p className='card-description'>{orderCard.description}</p>

                        <div className='progressValue'>
                            <label className='progress-title'>Прогрес: {orderCard.progressValue}%</label>
                            <progress className='progress' value={orderCard.progressValue} max="100" style={{ width: '100%' }}></progress>
                        </div>

                        <div className='card-details'>
                            <div className='card-category-item'>
                                <img className='card-item-icon' src={orderCard.categoryIcon} alt="" width="16" />
                                <span className='card-item-text'>{orderCard.categoryText}</span>
                            </div>

                            <div className='order-persona'>
                                <img src={orderCard.personaIcon} alt="Customer" />
                                <span> {orderCard.personaText} </span>
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
                            <button className='view-details-btn'>Деталі</button>
                            <button className='view-rewius-btn'>Залишити відгук</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

// Вкладка "Завершені": только завершенные заказы
const PartfolioTab = () => (
    <div className='Partfolio-tab'>
        <div className='Partfolio-header'>
            <h1>Моє портфоліо </h1>
            <button className='partfolio-plus'>+ Додати роботу</button>
        </div>
        {partfolioOrder.map((partfolioOrder) => (
            <div className='cardPart' key={partfolioOrder.id}>
                <div className='cardPart-header'>
                    <div className='cardPart-header-left'>
                        <img className='cardPart-project-icon' src={partfolioOrder.iconPart} alt="Project" width="40" />
                        <h2 className='cardPart-title'>{partfolioOrder.title}</h2>
                    </div>
                    <span className='cardPart-category-tag'>{partfolioOrder.category}</span>
                </div>

                <p className='cardPart-description'>{partfolioOrder.description}</p>

                <div className='cardPart-footer'>
                    <div className='cardPart-stats'>
                        <div className='cardPart-like-item'>
                            <img className='cardPart-item-icon' src={partfolioOrder.iconLike} alt="Like" width="16" />
                            <span className='cardPart-item-text'>{partfolioOrder.likeRewius}</span>
                        </div>
                    </div>

                    <div className='cardPart-actions'>
                        <button className='action-btn' title="Редагувати">
                            <img src={partfolioOrder.reductIcon} alt="Edit" width="18" />
                        </button>

                        <button className='action-btn delete' title="Видалити">
                            <img src={partfolioOrder.iconDelite} alt="Delete" />
                        </button>
                    </div>
                </div>
            </div>
        ))};
    </div>
)

// Вкладка "Повідомлення": список чатов + активный чат
const MessagesTab = () => {
    // Список чатов в левой колонке
    const [chats] = useState([
        {
            id: 1,
            name: 'Олег П.',
            gender: 'male',
            preview: 'Коли зможете надіслати макети?',
            time: '10:30',
            unread: 2,
            isOnline: true,
        },
        {
            id: 2,
            name: 'Марина К.',
            gender: 'female',
            preview: 'Дякую за роботу!',
            time: 'Вчора',
            unread: 0,
            isOnline: false,
        },
        {
            id: 3,
            name: 'Андрій С.',
            gender: 'male',
            preview: 'Можливо зробити ще правки?',
            time: '2 дні',
            unread: 1,
            isOnline: true,
        }

    ]);

    // Истории сообщений, привязанные к ID чата
    const [chatHistories, setChatHistories] = useState({
        1: [
            { id: 1, text: 'Вітаю! Коли зможете надіслати перші макети?.', sender: 'them' },
            { id: 2, text: 'Дам знати завтра ввечері, орієнтировано о 18:00!.', sender: 'me' },
            { id: 3, text: 'Чудово, чекаю! Дякую за оперативність.', sender: 'them' },
        ],
        2: [],
        3: []
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
const TakeTab = ({ onGoToMessages }) => (
    <div className='take-tab'>
        <div className='takes-header'>
            <h1 className='take-title'>Збережені замовлення</h1>
        </div>

        <div className='specialists-grid'>
            {projects.slice(0, 3).map((projects) => (
                <article className='project-fav-card' key={projects.id}>
                    <div className='project-top'>
                        <div className='project-profile'>
                            <img className='project-avatar' src={projects.personaIcon} alt={projects.personaText} />
                            <div>
                                <h2 className='project-name'>{projects.title}</h2>
                                <p className='project-role'>{projects.personaText} • {projects.category}</p>
                            </div>
                        </div>
                    </div>

                    <div className='project-description'>
                        <p className='project-role'>{projects.description}</p>
                    </div>

                    <progress value="50" max="100"></progress>

                    <div className='project-rating-row'>
                        <img src={projects.priceIcon} alt='price' width='16' />
                        <span>{projects.priceText}</span>

                        <img src={projects.deadlineIcon} alt='deadline' width='16' />
                        <span>{projects.deadlineText}</span>
                    </div>

                    <div className='project-tags'>
                        <span>{projects.offers}</span>
                        <span>{projects.addText}</span>
                    </div>

                    <div className='project-footer'>
                        <button type='button' className='view-project-details-btn'>
                            Відправити пропозицію
                        </button>
                        <button type='button' className='delete-order-btn'>
                            Видалити
                        </button>
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
        firstName: 'Марина',
        lastName: 'Коваленко',
        email: 'marina.kovalenko@email.com',
        phone: '+380 93 456 78 90',
        city: ''
    });

    const [professionalData, setProfessionalData] = useState({
        specialization: 'UI/UX Дизайнер',
        description: '',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping', 'Wireframing'],
        rate: 500,
        experience: ''
    });

    const handleProfessionalChange = (e) => {
        const { name, value } = e.target;
        setProfessionalData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSkill = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            e.preventDefault();
            const newSkill = e.target.value.trim();
            if (!professionalData.skills.includes(newSkill)) {
                setProfessionalData(prev => ({
                    ...prev,
                    skills: [...prev.skills, newSkill]
                }));
            }
            e.target.value = '';
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setProfessionalData(prev => ({
            ...prev,
            skills: prev.skills.filter(s => s !== skillToRemove)
        }));
    };

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
        { id: 'offers', title: 'Нові замовлення', desc: 'Сповіщення про нові відповідні замовлення' },
        { id: 'messages', title: 'Повідомлення в чаті', desc: 'Сповіщення про нові повідомлення від замовників' },
        { id: 'orders', title: 'Оновлення замовлень', desc: 'Зміни статусу ваших замовлень' },
        { id: 'marketing', title: 'Поради та новини', desc: 'Корисні поради для фахівців та оновлення платформи' }
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

                {/* Personal Data, Spec and Password */}
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

                    <section className='personal-info-section'>
                        <div className='personal-info-header'>
                            <h2 className='personal-info-title'>Професійна інформація</h2>
                        </div>
                        <form className='personal-info-form'>
                            <label className='personal-info-label'>
                                Спеціалізація
                                <input
                                    className='personal-info-input'
                                    name="specialization"
                                    type="text"
                                    value={professionalData.specialization}
                                    onChange={handleProfessionalChange}
                                />
                            </label>
                            <label className='personal-info-label'>
                                Опис профілю
                                <textarea
                                    className='personal-info-input'
                                    name="profileDescription"
                                    rows="5"
                                    value={professionalData.description}
                                    onChange={handleProfessionalChange}
                                />
                            </label>
                            <div className='personal-info-label'>
                                Навички
                                <div className='skills-container'>
                                    {professionalData.skills.map((skill, index) => (
                                        <span key={index} className='skill-tag'>
                                            {skill}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveSkill(skill)}
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <input
                                    className='personal-info-input'
                                    name="newSkill"
                                    type="text"
                                    placeholder="Додати нову навичку..."
                                    onKeyDown={handleAddSkill}
                                />
                            </div>
                            <div className='personal-info-pp'>
                                <label className='personal-info-label'>
                                    Мінімальна ставка
                                    <div>
                                        <input
                                            className='personal-info-input'
                                            name="rate"
                                            type="number"
                                            value={professionalData.rate}
                                            onChange={handleProfessionalChange}
                                        />
                                        <span>
                                            грн/год
                                        </span>
                                    </div>
                                </label>

                                <label className='personal-info-label'>
                                    Досвід роботи
                                    <input
                                        className='personal-info-input'
                                        name="experience"
                                        type="text"
                                        value={professionalData.experience}
                                        onChange={handleProfessionalChange}
                                    />
                                </label>
                            </div>
                            <button className='personal-nope-info-button' type="submit">Скасувати</button>
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
function SpecPage() {
    const navigate = useNavigate();

    // Вкладки верхнего меню
    const tabs = [
        { key: 'overview', label: 'Огляд' },
        { key: 'searchProjects', label: 'Пошук проектів', badge: 4 },
        { key: 'myProjects', label: 'Мої проекти' },
        { key: 'partfolio', label: 'Портфоліо' },
        { key: 'messages', label: 'Повідомлення', badge: 5 },
        { key: 'take', label: 'Обране' },
        { key: 'settings', label: 'Налаштування' },
    ];

    // Соответствие ключа вкладки и React-компонента контента
    const contentMap = {
        overview: <OverviewTab onGoToSearchProjects={() => setActiveTab('searchProjects')} />,
        searchProjects: <SearchProjectsTab />,
        myProjects: <MyProjectsTab />,
        partfolio: <PartfolioTab />,
        messages: <MessagesTab />,
        take: <TakeTab />,
        settings: <SettingsTab />,
    };

    // Данные карточки пользователя в шапке
    const user = { icon: icons.iconMKultra, title: 'Фахівець', iconbee: icons.iconBee, text: 'Марина К.' };

    // Активная вкладка кабинета
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="user-page">
            {/* Header */}
            <header className='header-user'>
                <div className='brand'>
                    <Link to="/" className="main-page-link">
                        <img src={icons.iconBee} alt="BusyBee" className="brand-bee" />
                        <span className="brand-text">BusyBee</span>
                    </Link>
                </div>
                <div className='order-search'>
                    <span className="hero-search-icon">⌕</span>
                    <input type="text" placeholder="Пошук проектів..." aria-label="Пошук" />
                </div>
                <div className='button'>
                    <button
                        type="button"
                        className='create-order-btn'
                        onClick={() => navigate('')}
                    >
                        Знайти роботу
                    </button>

                    <button type='button' className='alert'>
                        <img src={icons.iconKolokolchik} alt="kolokolchik" />
                    </button>
                </div>
                <div className='user-card'>
                    <img src={user.icon} alt={user.text} />
                    <h3>{user.title} <img src={user.iconbee} alt="" /></h3>
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

export default SpecPage;
