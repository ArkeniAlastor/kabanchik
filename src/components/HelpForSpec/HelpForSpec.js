import './HelpForSpec.css';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CONTACT_CARDS = [
    {
        id: 'email',
        icon: icons.iconEmail,
        title: 'Email підтримка',
        text: 'support@busybee.ua',
        href: 'mailto:support@busybee.ua'
    },
    {
        id: 'phone',
        icon: icons.iconZvonilka,
        title: 'Гаряча лінія 24/7',
        text: '+38 (044) 123-45-67',
        href: 'tel:+380441234567'
    },
    {
        id: 'faq',
        icon: icons.iconChat,
        title: 'Центр допомоги',
        text: 'База знань та FAQ',
        to: '/help'
    }
];

const HERO_LINKS = [
    {
        id: 'offers',
        label: 'Знайти замовлення',
        to: '/offers'
    },
    {
        id: 'how-work',
        label: 'Як це працює',
        to: '/HowWorkPage'
    },
    {
        id: 'help',
        label: 'Центр допомоги',
        to: '/help'
    }
];

const TIP_CARDS = [
    {
        id: 1,
        icon: icons.iconBlocknote,
        category: 'Профіль',
        title: 'Як створити привабливий профіль',
        description: 'Ваш профіль - це ваша візитна картка. Замовники приймають рішення на основі першого враження, тому важливо зробити профіль максимально інформативним та професійним.',
        features: [
            { id: 'f1', text: 'Використовуйте професійне фото', icon: icons.iconGalochka },
            { id: 'f2', text: 'Опишіть свої навички детально', icon: icons.iconGalochka },
            { id: 'f3', text: 'Додайте кейси з портфоліо', icon: icons.iconGalochka },
            { id: 'f4', text: 'Вкажіть реалістичні тарифи', icon: icons.iconGalochka },
            { id: 'f5', text: 'Регулярно оновлюйте інформацію', icon: icons.iconGalochka }
        ]
    },
    {
        id: 2,
        icon: icons.iconChat,
        category: 'Пропозиції',
        title: 'Як писати виграшні пропозиції',
        description: 'Якісна пропозиція - головна перевага у боротьбі за проект. Покажіть замовнику, що ви розумієте завдання та маєте досвід у схожих задачах.',
        features: [
            { id: 'f1', text: 'Уважно прочитайте опис проекту', icon: icons.iconGalochka },
            { id: 'f2', text: 'Покажіть розуміння задачі', icon: icons.iconGalochka },
            { id: 'f3', text: 'Опишіть свій підхід до виконання', icon: icons.iconGalochka },
            { id: 'f4', text: 'Додайте релевантні приклади робіт', icon: icons.iconGalochka },
            { id: 'f5', text: 'Вкажіть реальні терміни виконання', icon: icons.iconGalochka }
        ]
    },
    {
        id: 3,
        icon: icons.iconMoney,
        category: 'Ціноутворення',
        title: 'Як правильно оцінити свою роботу',
        description: 'Занижені ціни не завжди допомагають отримати більше замовлень. Оцінюйте свою роботу справедливо, враховуючи досвід, складність задачі та ринок.',
        features: [
            { id: 'f1', text: 'Дослідіть ринкові ставки', icon: icons.iconGalochka },
            { id: 'f2', text: 'Врахуйте свій рівень досвіду', icon: icons.iconGalochka },
            { id: 'f3', text: 'Оцініть складність проекту', icon: icons.iconGalochka },
            { id: 'f4', text: 'Закладіть час на правки', icon: icons.iconGalochka },
            { id: 'f5', text: 'Не демпінгуйте без потреби', icon: icons.iconGalochka }
        ]
    },
    {
        id: 4,
        icon: icons.iconTime,
        category: 'Терміни',
        title: 'Управління часом та дедлайнами',
        description: 'Дотримання термінів критично важливе для вашої репутації. Плануйте час із запасом і завжди попереджайте замовника про можливі затримки заздалегідь.',
        features: [
            { id: 'f1', text: 'Закладайте резервний час', icon: icons.iconGalochka },
            { id: 'f2', text: 'Використовуйте тайм-трекінг', icon: icons.iconGalochka },
            { id: 'f3', text: 'Повідомляйте про прогрес регулярно', icon: icons.iconGalochka },
            { id: 'f4', text: 'Попереджайте про затримки завчасно', icon: icons.iconGalochka },
            { id: 'f5', text: 'Встановлюйте реалістичні дедлайни', icon: icons.iconGalochka }
        ]
    },
    {
        id: 5,
        icon: icons.iconDogovorniachok,
        category: 'Комунікація',
        title: 'Ефективна взаємодія з замовниками',
        description: 'Професійна комунікація - ключ до успішної співпраці. Будьте ввічливими, відповідайте швидко та уточнюйте незрозумілі моменти.',
        features: [
            { id: 'f1', text: 'Відповідайте протягом 24 годин', icon: icons.iconGalochka },
            { id: 'f2', text: 'Ставте уточнюючі питання', icon: icons.iconGalochka },
            { id: 'f3', text: 'Підтверджуйте домовленості письмово', icon: icons.iconGalochka },
            { id: 'f4', text: 'Будьте чесними щодо можливостей', icon: icons.iconGalochka },
            { id: 'f5', text: 'Підтримуйте професійний тон', icon: icons.iconGalochka }
        ]
    },
    {
        id: 6,
        icon: icons.iconStar,
        category: 'Рейтинг',
        title: 'Як підвищити свій рейтинг',
        description: 'Високий рейтинг допомагає отримувати більше замовлень за кращою ціною. Працюйте над своєю репутацією системно та послідовно.',
        features: [
            { id: 'f1', text: 'Виконуйте роботу якісно', icon: icons.iconGalochka },
            { id: 'f2', text: 'Дотримуйтесь термінів', icon: icons.iconGalochka },
            { id: 'f3', text: 'Просіть відгуки після завершення', icon: icons.iconGalochka },
            { id: 'f4', text: 'Виправляйте помилки швидко', icon: icons.iconGalochka },
            { id: 'f5', text: 'Збирайте портфоліо кейсів', icon: icons.iconGalochka }
        ]
    }
];

const BEST_PRACTICES = [
    {
        id: 1,
        icon: icons.iconCheck,
        title: 'Спеціалізація',
        text: 'Краще бути експертом у вузькій ніші, ніж посереднім генералістом.'
    },
    {
        id: 2,
        icon: icons.iconCheck,
        title: 'Портфоліо',
        text: 'Додавайте тільки найкращі роботи, які демонструють ваші сильні сторони.'
    },
    {
        id: 3,
        icon: icons.iconCheck,
        title: 'Відгуки',
        text: 'Просіть відгуки у задоволених клієнтів одразу після завершення проекту.'
    },
    {
        id: 4,
        icon: icons.iconCheck,
        title: 'Навчання',
        text: 'Постійно розвивайте навички та освоюйте нові інструменти.'
    },
    {
        id: 5,
        icon: icons.iconCheck,
        title: 'Мережа',
        text: 'Підтримуйте контакт з попередніми клієнтами для повторних замовлень.'
    },
    {
        id: 6,
        icon: icons.iconCheck,
        title: 'Якість',
        text: 'Завжди здавайте роботу трохи краще, ніж очікував замовник.'
    }
];

const COMMON_MISTAKES = [
    {
        id: 1,
        icon: icons.iconNope,
        title: 'Неповний або застарілий профіль',
        text: '✓ Регулярно оновлюйте портфоліо, навички та досвід'
    },
    {
        id: 2,
        icon: icons.iconNope,
        title: 'Шаблонні пропозиції без персоналізації',
        text: '✓ Пишіть унікальну пропозицію для кожного проекту'
    },
    {
        id: 3,
        icon: icons.iconNope,
        title: 'Занадто низькі ціни заради отримання замовлення',
        text: '✓ Оцінюйте роботу адекватно, показуйте цінність'
    },
    {
        id: 4,
        icon: icons.iconNope,
        title: 'Повільні відповіді на повідомлення',
        text: '✓ Налаштуйте сповіщення, відповідайте швидко'
    },
    {
        id: 5,
        icon: icons.iconNope,
        title: 'Обіцяння нереальних термінів',
        text: '✓ Будьте чесними щодо часу виконання'
    },
    {
        id: 6,
        icon: icons.iconNope,
        title: 'Відсутність комунікації під час роботи',
        text: '✓ Регулярно інформуйте про прогрес проекту'
    }
];

const FAQ_ITEMS = [
    {
        id: 1,
        title: 'Як отримати перше замовлення без відгуків?',
        answer: 'Створіть детальний профіль з портфоліо, навіть якщо це навчальні або особисті проекти. Встановіть конкурентну ціну на старті, пишіть персоналізовані пропозиції та показуйте замовнику, що готові вкластися у якісний результат.'
    },
    {
        id: 2,
        title: 'Що робити, якщо замовник просить безкоштовне тестове завдання?',
        answer: 'Оцініть обсяг. Невеликий фрагмент або короткий приклад підходу допустимі, але повноцінну роботу без оплати краще не виконувати. Поясніть, що можете показати портфоліо, кейси або платний тест у скороченому форматі.'
    },
    {
        id: 3,
        title: 'Як реагувати на негативний відгук?',
        answer: 'Відповідайте спокійно та професійно. Подякуйте за зворотний зв’язок, коротко поясніть ситуацію без конфлікту і, якщо це можливо, запропонуйте спосіб виправити проблему. Адекватна реакція часто працює краще, ніж спроба сперечатися.'
    },
    {
        id: 4,
        title: 'Коли можна підвищувати свої тарифи?',
        answer: 'Після того як у вас з’явилися хороші відгуки, стабільний потік проектів і сильніше портфоліо. Якщо замовники регулярно погоджуються на ваші умови або у вас завантажений графік, це хороший сигнал, що ставку можна піднімати.'
    },
    {
        id: 5,
        title: 'Що робити, якщо замовник просить працювати поза платформою?',
        answer: 'Краще відмовитися і залишити роботу всередині платформи. Так ви зберігаєте історію домовленостей, захист платежів і можливість звернутися в підтримку у разі спору.'
    }
];


function HelpForSpec() {
    const [openFaqId, setOpenFaqId] = useState(1);


    return (
        <div className='HelpForSpec'>
            <Header />

            <section className='help-spec-hero'>
                <div className='help-spec-container help-spec-hero-inner'>
                    <div className='help-spec-hero-image'>
                        <img src={icons.iconDarts} alt='Поради' />
                    </div>
                    <h1 className='help-spec-hero-title'>Поради та підтримка 24/7</h1>
                    <p className='help-spec-hero-subtitle'>Професійні поради для фахівців, які допоможуть розвинути кар&apos;єру на BusyBee</p>
                    <div className='help-spec-hero-actions'>
                        {HERO_LINKS.map((link) => (
                            <Link key={link.id} to={link.to} className='help-spec-hero-link'>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <main className='help-spec-main'>
                <div className='help-spec-container'>
                    <section className='help-spec-contact-grid'>
                        {CONTACT_CARDS.map((item) => (
                            item.to ? (
                                <Link key={item.id} to={item.to} className='help-spec-contact-card'>
                                    <img
                                        src={item.icon}
                                        alt=''
                                        className='help-spec-contact-icon'
                                    />
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </Link>
                            ) : (
                                <a key={item.id} href={item.href} className='help-spec-contact-card'>
                                    <img
                                        src={item.icon}
                                        alt=''
                                        className='help-spec-contact-icon'
                                    />
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </a>
                            )
                        ))}
                    </section>

                    <section className='help-spec-section'>
                        <h2 className='help-spec-section-title'>Корисні поради для фахівців</h2>
                        <div className='help-spec-tip-grid'>
                            {TIP_CARDS.map((card) => (
                                <article key={card.id} className='help-spec-tip-card'>
                                    <div className='help-spec-tip-head'>
                                        <div className='help-spec-tip-icon-wrap'>
                                            <img src={card.icon} alt='' className='help-spec-tip-icon' />
                                        </div>
                                        <div>
                                            <span className='help-spec-tip-tag'>{card.category}</span>
                                            <h3>{card.title}</h3>
                                        </div>
                                    </div>

                                    <p className='help-spec-tip-text'>{card.description}</p>

                                    <ul className='help-spec-list help-spec-list--ok'>
                                        {card.features.map((feature) => (
                                            <li key={feature.id}>
                                                <img src={feature.icon} alt='' className='help-spec-list-icon' />
                                                <span>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className='help-spec-section help-spec-section--practices'>
                        <h2 className='help-spec-section-title'>Найкращі практики успішних фрілансерів</h2>
                        <p className='help-spec-section-subtitle'>Дотримуйтесь цих правил для побудови успішної кар&apos;єри</p>
                        <div className='help-spec-practice-grid'>
                            {BEST_PRACTICES.map((card) => (
                                <article key={card.id} className='help-spec-practice-card'>
                                    <img
                                        src={card.icon}
                                        alt=''
                                        className='help-spec-practice-icon'
                                    />
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className='help-spec-section help-spec-section--mistakes'>
                        <h2 className='help-spec-section-title'>Типові помилки фахівців</h2>
                        <p className='help-spec-section-subtitle'>Уникайте цих помилок для успішної роботи на платформі</p>
                        <div className='help-spec-mistake-grid'>
                            {COMMON_MISTAKES.map((card) => (
                                <article key={card.id} className='help-spec-mistake-card'>
                                    <img
                                        src={card.icon}
                                        alt=''
                                        className='help-spec-mistake-icon'
                                    />
                                    <div>
                                        <h3>{card.title}</h3>
                                        <p>{card.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className='help-spec-section' id='help-for-spec-faq'>
                        <h2 className='help-spec-section-title'>Часті питання</h2>
                        <div className='help-spec-faq-list'>
                            {FAQ_ITEMS.map((item) => {
                                const isOpen = openFaqId === item.id;

                                return (
                                    <article key={item.id} className={`help-spec-faq-item${isOpen ? ' is-open' : ''}`}>
                                        <button
                                            type='button'
                                            className='help-spec-faq-button'
                                            onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                                        >
                                            <span>{item.title}</span>
                                            <span className='help-spec-faq-arrow'>▼</span>
                                        </button>

                                        {isOpen ? <p className='help-spec-faq-answer'>{item.answer}</p> : null}
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </main>

            <section className='help-spec-cta'>
                <div className='help-spec-container help-spec-cta-inner'>
                    <h2>Потрібна допомога?</h2>
                    <p>Наша команда підтримки завжди готова допомогти вам 24/7</p>
                    <div className='help-spec-cta-actions'>
                        <a href='mailto:support@busybee.ua' className='help-spec-cta-btn help-spec-cta-btn--primary'>
                            Написати в підтримку
                        </a>
                        <Link to='/help' className='help-spec-cta-btn help-spec-cta-btn--secondary'>
                            Відкрити центр допомоги
                        </Link>
                    </div>
                </div>
            </section>

            <footer className='help-spec-banner'>
                <p>Маленька праця для великих людей!</p>
            </footer>
        </div>
    );
}

export default HelpForSpec;