import './HelpForSpec.css';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';
import { useState } from 'react';



function HelpForSpec() {
    const helps = [
        {
            id: 1,
            icon: icons.iconEmail,
            title: 'Email підтримка',
            text: 'support@busybee.ua'
        },
        {
            id: 2,
            icon: icons.iconZvonilka,
            title: 'Горяча лінія 24/7',
            text: '+38 (044) 123-45-67'
        },
        {
            id: 3,
            icon: icons.iconChat,
            title: 'Центр допомоги',
            text: 'База знань та FAQ'

        },
    ];

    const heping = [
        {
            id: 1,
            icon: icons.iconBlocknote,
            category: 'Профіль',
            title: "Як створити привабливий профіль",
            description: "Ваш профіль - це ваша візитна картка. Замовники приймають рішення на основі першого враження, тому важливо зробити профіль максимально інформативним та професійним.",
            features: [
                { id: "f1", text: "Використовуйте професійне фото", icon: icons.iconGalochka },
                { id: "f2", text: "Опишіть свої навички детально", icon: icons.iconGalochka },
                { id: "f3", text: "Додайте кейси з портфоліо", icon: icons.iconGalochka },
                { id: "f4", text: "Вкажіть реалістичні тарифи", icon: icons.iconGalochka },
                { id: "f5", text: "Регулярно оновлюйте інформацію", icon: icons.iconGalochka }
            ]
        },
        {
            id: 2,
            icon: icons.iconChat,
            category: 'Пропозиції',
            title: "Як писати виграшні пропозиції",
            description: "Якісна пропозиція - половина успіху. Покажіть замовнику, що ви розумієте завдання та маєте досвід у вирішенні подібних задач.",
            features: [
                { id: "f1", text: "Уважно прочитайте опис проекту", icon: icons.iconGalochka },
                { id: "f2", text: "Покажіть розуміння задачі", icon: icons.iconGalochka },
                { id: "f3", text: "Опишіть свій підхід до виконання", icon: icons.iconGalochka },
                { id: "f4", text: "Додайте релевантні приклади робіт", icon: icons.iconGalochka },
                { id: "f5", text: "Вкажіть реальні терміни виконання", icon: icons.iconGalochka }
            ]
        },
        {
            id: 3,
            icon: icons.iconMoney,
            category: 'Ціноутворення',
            title: "Як правильно оцінити свою роботу",
            description: "Занижені ціни не завжди допомагають отримати більше замовлень. Оцінюйте свою роботу справедливо, враховуючи ваш досвід, складність проекту та ринкові ціни.",
            features: [
                { id: "f1", text: "Дослідіть ринкові ставки", icon: icons.iconGalochka },
                { id: "f2", text: "Врахуйте свій рівень досвіду", icon: icons.iconGalochka },
                { id: "f3", text: "Оцініть складність проекту", icon: icons.iconGalochka },
                { id: "f4", text: "Закладіть час на правки", icon: icons.iconGalochka },
                { id: "f5", text: "Не демпінгуйте без потреби", icon: icons.iconGalochka }
            ]
        },
        {
            id: 4,
            icon: icons.iconTime,
            category: 'Терміни',
            title: "Управління часом та дедлайнами",
            description: "Дотримання термінів критично важливе для вашої репутації. Плануйте свій час з запасом та завжди інформуйте замовника про можливі затримки заздалегідь..",
            features: [
                { id: "f1", text: "Закладайте резервний час", icon: icons.iconGalochka },
                { id: "f2", text: "Використовуйте тайм-трекінг", icon: icons.iconGalochka },
                { id: "f3", text: "Повідомляйте про прогрес регулярно", icon: icons.iconGalochka },
                { id: "f4", text: "Попереджайте про затримки завчасно", icon: icons.iconGalochka },
                { id: "f5", text: "Встановлюйте реалістичні дедлайни", icon: icons.iconGalochka }
            ]
        },
        {
            id: 5,
            icon: icons.iconDogovorniachok,
            category: 'Комунікація',
            title: "Ефективна взаємодія з замовниками",
            description: "Професійна комунікація - ключ до успішної співпраці. Будьте ввічливими, відповідайте швидко, уточнюйте незрозумілі моменти.",
            features: [
                { id: "f1", text: "Відповідайте протягом 24 годин", icon: icons.iconGalochka },
                { id: "f2", text: "Ставте уточнюючі питання", icon: icons.iconGalochka },
                { id: "f3", text: "Підтверджуйте домовленості письмово", icon: icons.iconGalochka },
                { id: "f4", text: "Будьте чесними щодо можливостей", icon: icons.iconGalochka },
                { id: "f5", text: "Підтримуйте професійний тон", icon: icons.iconGalochka }
            ]
        },
        {
            id: 6,
            icon: icons.iconStar,
            category: 'Рейтинг',
            title: "Як підвищити свій рейтинг",
            description: "Високий рейтинг допомагає отримувати більше замовлень за кращою ціною. Працюйте над своєю репутацією системно.",
            features: [
                { id: "f1", text: "Виконуйте роботу якісно", icon: icons.iconGalochka },
                { id: "f2", text: "Дотримуйтесь термінів", icon: icons.iconGalochka },
                { id: "f3", text: "Просіть відгуки після завершення", icon: icons.iconGalochka },
                { id: "f4", text: "Виправляйте помилки швидко", icon: icons.iconGalochka },
                { id: "f5", text: "Збирайте портфоліо кейсів", icon: icons.iconGalochka }
            ]
        }

    ];

    const best = [
        {
            id: 1,
            icon: icons.iconCheck,
            title: 'Спеціалізація',
            text: 'Краще бути експертом у вузькій ніші, ніж посереднім генералістом'
        },
        {
            id: 2,
            icon: icons.iconCheck,
            title: 'Портфоліо',
            text: 'Додавайте тільки найкращі роботи, які демонструють ваші сильні сторони'
        },
        {
            id: 3,
            icon: icons.iconCheck,
            title: 'Відгуки',
            text: 'Просіть відгуки у задоволених клієнтів одразу після завершення проекту'

        },
        {
            id: 4,
            icon: icons.iconCheck,
            title: 'Навчання',
            text: 'Постійно розвивайте навички та освоюйте нові інструменти'
        },
        {
            id: 5,
            icon: icons.iconCheck,
            title: 'Мережа',
            text: 'Підтримуйте контакт з попередніми клієнтами для повторних замовлень'
        },
        {
            id: 6,
            icon: icons.iconCheck,
            title: 'Якість',
            text: 'Завжди здавайте роботу трохи краще, ніж очікував замовник'

        }
    ];

    const nope = [
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
        },
    ]

    const [question, setQuestion] = useState([
        { id: 1, title: "Як отримати перше замовлення без відгуків?", hidden: "Створіть детальний профіль з портфоліо (можна додати навчальні проекти), встановіть конкурентну ціну для початку, пишіть персоналізовані пропозиції, показуйте ентузіазм та готовність докласти зусиль.", open: false },
        { id: 2, title: "Що робити, якщо замовник просить безкоштовне тестове завдання?", hidden: "???", open: false },
        { id: 3, title: "Як реагувати на негативний відгук?", hidden: "???", open: false },
        { id: 4, title: "Коли можна підвищувати свої тарифи?", hidden: "???", open: false },
        { id: 5, title: "Що робити якщо замовник просить працювати поза платформою?", hidden: "Скрытый текст для блока 3", open: false }
    ]);

    const toggleQuestion = (id) => {
        setQuestion(
            question.map((b) =>
                b.id === id ? { ...b, open: !b.open } : b
            )
        );
    };


    return (
        < div className='HelpForSpec' >
            <Header />

            <div className='Welcome'>
                <div className="hero-image">
                    <img src={icons.iconDarts} alt="BusyBee" />
                </div>
                <h1 className="hero-title">Поради та підтримка 24/7</h1>
                <p className="hero-subtitle">Професійні поради для фахівців, які допоможуть розвинути кар'єру на Busybee.</p>
            </div>
            <section className="helps">
                <div className="helps-list">
                    {helps.map((item, index) => (
                        <div key={index} className="helps-item">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="helps-icon"
                            />
                            <h3 className="helps-title">{item.title}</h3>
                            <p className="helps-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='helping-for-spec'>
                <div className='helping-header'>
                    <h1 className='helping-title'>Корисні поради для фахівців</h1>
                </div>
                <div className='helping'>
                    {heping.map((card) => (
                        <div key={card.id}>
                            <div>
                                <img src={card.icon} alt={card.title} />
                                <p>{card.category}</p>
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
            </section>

            <section className='best-practik'>
                <div className='best-header'>
                    <h1 className='best-title'>Найкращі практики успішних фрілансерів</h1>
                    <span>Дотримуйтесь цих правил для побудови успішної кар'єри</span>
                </div>
                <div>
                    {best.map((card) => (
                        <div key={card.id}>
                            <div>
                                <img src={card.icon} alt={card.title} />
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='nope-mistake'>
                <div className='nope-mistake'>
                    <h1 className='nope-title'>Типові помилки фахівців</h1>
                    <span>Уникайте цих помилок для успішної роботи на платформі</span>
                </div>
                <div>
                    {nope.map((card) => (
                        <div key={card.id}>
                            <div>
                                <img src={card.icon} alt={card.title} />
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='questions'>
                <div className='questions-header'>
                    <h1 className='questions-title'>часті питання</h1>
                </div>
                <div className='questions-list'>
                    {question.map((question) => (
                        <div key={question.id} onClick={() => toggleQuestion(question.id)}>
                            <div>{question.title}</div>
                            {question.open && <div>{question.hidden}</div>}
                        </div>
                    ))}
                </div>
            </section>
            <div className="banner-strip">
                Маленька праця для великих людей!
            </div>
        </div >
    );
}

export default HelpForSpec;