import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';
import './CustomerHelpPage.css';

const CONTACT_CARDS = [
  {
    id: 'email',
    icon: icons.iconEmail,
    title: 'Email підтримка',
    text: 'support@busybee.ua',
    href: 'mailto:support@busybee.ua',
  },
  {
    id: 'phone',
    icon: icons.iconZvonilka,
    title: 'Гаряча лінія 24/7',
    text: '+38 (044) 123-45-67',
    href: 'tel:+380441234567',
  },
  {
    id: 'faq',
    icon: icons.iconChat,
    title: 'Центр допомоги',
    text: 'База знань та FAQ',
    to: '/help',
  },
];

const TIP_CARDS = [
  {
    id: 'brief',
    tag: 'Створення замовлення',
    icon: icons.iconPisat,
    title: 'Як правильно описати проект',
    text: 'Детальний опис допомагає швидше знайти відповідного фахівця і зменшує кількість уточнень у процесі.',
    points: [
      'Опишіть мету проекту та бажаний результат',
      'Вкажіть технічні вимоги та обмеження',
      'Додайте приклади або референси',
      'Встановіть реалістичні терміни',
      'Вкажіть бюджет або діапазон цін',
    ],
  },
  {
    id: 'expert',
    tag: 'Вибір фахівця',
    icon: icons.iconChumodan,
    title: 'На що звернути увагу при виборі',
    text: 'Не завжди найдешевша пропозиція є найкращою. Оцініть фахівця комплексно до старту роботи.',
    points: [
      'Перевірте портфоліо та приклади робіт',
      'Прочитайте відгуки від інших замовників',
      'Оцініть рейтинг та кількість завершених проектів',
      'Подивіться швидкість та стиль комунікації',
      'Запитайте про досвід у схожих задачах',
    ],
  },
  {
    id: 'communication',
    tag: 'Комунікація',
    icon: icons.iconChat,
    title: 'Ефективне спілкування з виконавцем',
    text: 'Чітка комунікація економить час і допомагає уникнути непорозумінь протягом всього проекту.',
    points: [
      'Відповідайте на повідомлення своєчасно',
      'Формулюйте зміни чітко та зрозуміло',
      'Узгоджуйте зміни письмово в чаті',
      'Запитуйте проміжні результати',
      'Давайте конструктивний фідбек',
    ],
  },
  {
    id: 'deadlines',
    tag: 'Терміни',
    icon: icons.iconTime,
    title: 'Як встановити реалістичні дедлайни',
    text: 'Занадто жорсткі терміни можуть вплинути на якість. Краще закладати невеликий запас часу.',
    points: [
      'Запитайте у фахівця про потрібний час',
      'Закладайте час на правки та доопрацювання',
      'Враховуйте можливі затримки',
      'Обговоріть проміжні етапи задачі',
      'Узгодьте штрафи або правила переносу',
    ],
  },
  {
    id: 'budget',
    tag: 'Бюджет',
    icon: icons.iconMoney,
    title: 'Оптимізація витрат на проект',
    text: 'Розумне планування бюджету допомагає отримати якісний результат без зайвих витрат і стресу.',
    points: [
      'Дослідіть середню вартість по ринку',
      'Порівняйте кілька пропозицій',
      'Обговоріть можливість поетапної оплати',
      'Уточніть, що входить у вартість',
      'Закладайте резерв на додаткові правки',
    ],
  },
  {
    id: 'result',
    tag: 'Контроль якості',
    icon: icons.iconLupa,
    title: 'Як перевірити результат роботи',
    text: 'Перед підтвердженням завершення переконайтесь, що результат відповідає домовленостям та опису задачі.',
    points: [
      'Перевірте відповідність технічному завданню',
      'Протестуйте всі функції та матеріали',
      'Запросіть виправлення, якщо потрібно',
      'Збережіть переписку та файли',
      'Підтверджуйте завершення тільки після перевірки',
    ],
  },
];

const MISTAKES = [
  {
    id: 'vague',
    title: 'Нечіткий опис завдання',
    fix: 'Опишіть проект максимально детально та додайте приклади.',
  },
  {
    id: 'price',
    title: 'Вибір виконавця тільки за ціною',
    fix: 'Оцініть портфоліо, відгуки та досвід, а не лише вартість.',
  },
  {
    id: 'agreement',
    title: 'Відсутність письмових домовленостей',
    fix: 'Усі умови краще обговорювати в чаті платформи та зберігати переписку.',
  },
  {
    id: 'deadline',
    title: 'Нереалістичні терміни',
    fix: 'Радьтесь з фахівцем щодо реального часу на виконання.',
  },
  {
    id: 'progress',
    title: 'Ігнорування проміжних результатів',
    fix: 'Регулярно перевіряйте прогрес роботи і давайте зворотний зв’язок.',
  },
  {
    id: 'check',
    title: 'Швидке підтвердження без перевірки',
    fix: 'Ретельно перегляньте результат перед остаточним прийняттям.',
  },
];

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Що робити, якщо фахівець не відповідає?',
    answer: 'Напишіть повторно в чаті, перевірте дедлайн відповіді та за потреби зверніться в підтримку через email або гарячу лінію.'
  },
  {
    id: 2,
    question: 'Як повернути кошти, якщо робота не виконана?',
    answer: 'Зберіть переписку, опишіть проблему і зверніться в підтримку. Якщо оплата була погоджена через платформу, це прискорить розгляд.'
  },
  {
    id: 3,
    question: 'Чи можна змінити умови після початку роботи?',
    answer: 'Так, але всі зміни потрібно письмово узгодити з виконавцем: обсяг, терміни, бюджет і нові очікування по результату.'
  },
  {
    id: 4,
    question: 'Як залишити відгук про фахівця?',
    answer: 'Після завершення проекту відкрийте замовлення у кабінеті, оцініть співпрацю та залиште короткий коментар про результат.'
  },
  {
    id: 5,
    question: 'Що робити при виникненні спору?',
    answer: 'Опишіть ситуацію максимально конкретно, додайте файли та переписку. Підтримка допоможе з розглядом і подальшими кроками.'
  },
];

function CustomerHelpPage() {
  const [openFaqId, setOpenFaqId] = useState(1);

  return (
    <div className="customer-help-page">
      <Header />

      <section className="customer-help-hero">
        <div className="customer-help-container customer-help-hero-inner">
          <img src={icons.iconBulb} alt="Поради" className="customer-help-hero-icon" />
          <h1>Поради та підтримка 24/7</h1>
          <p>
            Корисні поради для замовників, які допоможуть успішно реалізувати
            ваші проекти на BusyBee.
          </p>
        </div>
      </section>

      <main className="customer-help-main">
        <div className="customer-help-container">
          <section className="customer-help-contact-grid">
            {CONTACT_CARDS.map((card) => (
              card.to ? (
                <Link key={card.id} to={card.to} className="customer-help-contact-card">
                  <img src={card.icon} alt="" className="customer-help-contact-icon" />
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </Link>
              ) : (
                <a key={card.id} href={card.href} className="customer-help-contact-card">
                  <img src={card.icon} alt="" className="customer-help-contact-icon" />
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </a>
              )
            ))}
          </section>

          <section className="customer-help-section">
            <h2 className="customer-help-section-title">Корисні поради для замовників</h2>
            <div className="customer-help-tips-grid">
              {TIP_CARDS.map((card) => (
                <article key={card.id} className="customer-help-tip-card">
                  <div className="customer-help-tip-head">
                    <div className="customer-help-tip-icon-wrap">
                      <img src={card.icon} alt="" className="customer-help-tip-icon" />
                    </div>
                    <div>
                      <span className="customer-help-tip-tag">{card.tag}</span>
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                  <p className="customer-help-tip-text">{card.text}</p>
                  <ul className="customer-help-list customer-help-list--ok">
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="customer-help-section customer-help-section--mistakes">
            <h2 className="customer-help-section-title">Типові помилки замовників</h2>
            <p className="customer-help-section-subtitle">
              Уникайте цих помилок для успішної реалізації проектів.
            </p>
            <div className="customer-help-mistakes-grid">
              {MISTAKES.map((mistake) => (
                <article key={mistake.id} className="customer-help-mistake-card">
                  <div className="customer-help-mistake-mark" aria-hidden="true">×</div>
                  <div>
                    <h3>{mistake.title}</h3>
                    <p>{mistake.fix}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="customer-help-section" id="customer-help-faq">
            <h2 className="customer-help-section-title">Часті питання</h2>
            <div className="customer-help-faq-list">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;

                return (
                  <article key={item.id} className={`customer-help-faq-item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="customer-help-faq-button"
                      onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="customer-help-faq-arrow">▼</span>
                    </button>

                    {isOpen ? <p className="customer-help-faq-answer">{item.answer}</p> : null}
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <section className="customer-help-cta">
        <div className="customer-help-container customer-help-cta-inner">
          <h2>Потрібна допомога?</h2>
          <p>Наша команда підтримки завжди готова допомогти вам 24/7.</p>
          <div className="customer-help-cta-actions">
            <a href="mailto:support@busybee.ua" className="customer-help-cta-btn customer-help-cta-btn--primary">
              Написати в підтримку
            </a>
            <Link to="/help" className="customer-help-cta-btn customer-help-cta-btn--secondary">
              Відкрити центр допомоги
            </Link>
          </div>
        </div>
      </section>

      <footer className="customer-help-banner">
        <p>Маленька праця для великих людей!</p>
      </footer>
    </div>
  );
}

export default CustomerHelpPage;