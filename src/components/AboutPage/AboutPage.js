import './AboutPage.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { iconBee } from '../../imgs/icons';

const VALUES = [
  {
    label: '01',
    title: 'Прозора співпраця',
    desc: 'Замовник і фахівець повинні розуміти маршрут роботи, очікування і наступний крок без хаосу в переписках.',
  },
  {
    label: '02',
    title: 'Український фокус',
    desc: 'BusyBee розвиває локальний ринок послуг і робить пошук виконавців всередині України швидшим та зрозумілішим.',
  },
  {
    label: '03',
    title: 'Робочі інструменти',
    desc: 'Ми збираємо замовлення, каталог, підтримку та сервісні сторінки в одну систему, а не в набір випадкових екранів.',
  },
  {
    label: '04',
    title: 'Якість комунікації',
    desc: 'Платформа повинна підказувати, куди перейти далі, і зменшувати кількість тупикових сценаріїв для обох сторін.',
  },
];

const STATS = [
  { number: '15K+', label: 'фахівців у каталозі' },
  { number: '8K+', label: 'активних замовників' },
  { number: '25K+', label: 'створених проєктів' },
  { number: '4.8/5', label: 'середня оцінка сервісу' },
];

const STORY_BLOCKS = [
  {
    kicker: 'Наша місія',
    title: 'Зробити пошук виконавця і старт роботи коротким та зрозумілим',
    paragraphs: [
      'BusyBee створений для ситуації, коли замовнику потрібен не просто список фахівців, а зрозумілий маршрут від ідеї до виконання. Ми хочемо, щоб користувач одразу бачив, де створити замовлення, де знайти виконавця і куди звернутися по допомогу.',
      'Для фахівців це означає менше випадкових барʼєрів на старті, а для замовників - менше ризику загубитися між сторінками, ролями та окремими сервісами.',
    ],
    links: [
      { to: '/create-order', label: 'Створити замовлення' },
      { to: '/catalogue-specs', label: 'Перейти в каталог' },
    ],
  },
  {
    kicker: 'Що ми будуємо',
    title: 'Єдину платформу, а не набір розрізнених екранів',
    paragraphs: [
      'У центрі BusyBee стоїть звʼязок між ролями, сторінками і діями. Якщо користувач читає про сервіс, він повинен мати прямий перехід до каталогу, замовлення або довідки без тупиків і декоративних кнопок.',
      'Тому ми розвиваємо не лише вітрину, а цілу логіку переходів: від публічних сторінок до допомоги, сервісів, замовлень та особистих кабінетів.',
    ],
    links: [
      { to: '/HowWorkPage', label: 'Як це працює' },
      { to: '/help', label: 'Центр допомоги' },
    ],
  },
];

const TEAM = [
  {
    tag: 'CEO',
    name: 'Андрій Коваленко',
    role: 'Стратегія і розвиток',
    desc: 'Відповідає за те, щоб платформа лишалась зрозумілою для бізнесу, замовників і незалежних фахівців.',
  },
  {
    tag: 'CTO',
    name: 'Марія Шевченко',
    role: 'Продукт і технології',
    desc: 'Працює над тим, щоб сценарії на сайті були не декоративними, а реально вели користувача до дії.',
  },
  {
    tag: 'OPS',
    name: 'Олег Петренко',
    role: 'Якість досвіду',
    desc: 'Фокусується на структурі сторінок, довідці, сервісних переходах і всьому, що зменшує плутанину в роботі.',
  },
];

function AboutPage() {
  return (
    <div className="ab-page">
      <Header />

      <main className="ab-main">
        <section className="ab-hero">
          <div className="ab-container">
            <div className="ab-hero-layout">
              <div className="ab-hero-copy">
                <span className="ab-eyebrow">Про платформу</span>
                <h1 className="ab-hero-title">BusyBee поєднує замовників і фахівців у зрозумілий робочий процес</h1>
                <p className="ab-hero-subtitle">
                  Ми будуємо українську платформу послуг, де шлях від ідеї до результату не розсипається на випадкові сторінки,
                  а працює як єдина система з каталогом, замовленнями, сервісами та підтримкою.
                </p>

                <div className="ab-hero-actions">
                  <Link to="/catalogue-specs" className="ab-btn ab-btn--secondary">Перейти в каталог</Link>
                </div>
              </div>

              <div className="ab-hero-card">
                <div className="ab-hero-card-top">
                  <div className="ab-hero-mark">
                    <img src={iconBee} alt="BusyBee" className="ab-hero-mark-image" />
                  </div>
                  <div>
                    <p className="ab-hero-card-label">BusyBee в одному блоці</p>
                    <h2 className="ab-hero-card-title">Що користувач повинен отримати одразу</h2>
                  </div>
                </div>

                <ul className="ab-hero-points">
                  <li>Швидкий перехід до створення замовлення без зайвих кроків.</li>
                  <li>Каталог фахівців, де можна порівнювати і обирати виконавця.</li>
                  <li>Довідку і сервіси, які підтримують роботу, а не відволікають від неї.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ab-story-section">
          <div className="ab-container">
            <div className="ab-section-head">
              <span className="ab-section-kicker">Чому існує BusyBee</span>
              <h2 className="ab-section-title">Ми наводимо порядок між замовленням, вибором виконавця і підтримкою</h2>
              <p className="ab-section-subtitle">
                Сторінка про нас повинна не просто розповідати історію, а показувати, як платформа мислить і куди веде користувача далі.
              </p>
            </div>

            <div className="ab-story-grid">
              {STORY_BLOCKS.map((block) => (
                <article key={block.title} className="ab-panel">
                  <p className="ab-panel-kicker">{block.kicker}</p>
                  <h3 className="ab-panel-title">{block.title}</h3>

                  <div className="ab-panel-copy">
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="ab-panel-actions">
                    {block.links.map((item) => (
                      <Link key={item.to} to={item.to} className="ab-inline-link">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ab-values-section">
          <div className="ab-container">
            <div className="ab-section-head">
              <span className="ab-section-kicker">Наші принципи</span>
              <h2 className="ab-section-title">BusyBee тримається не на лозунгах, а на конкретних правилах продукту</h2>
            </div>

            <div className="ab-values-grid">
              {VALUES.map((item) => (
                <article key={item.label} className="ab-value-card">
                  <span className="ab-value-label">{item.label}</span>
                  <h3 className="ab-value-title">{item.title}</h3>
                  <p className="ab-value-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ab-stats-section">
          <div className="ab-container">
            <div className="ab-stats-panel">
              <div className="ab-stats-head">
                <span className="ab-section-kicker ab-section-kicker--light">BusyBee в цифрах</span>
                <h2 className="ab-stats-title">Масштаб платформи вимірюється не декором, а реальною активністю користувачів</h2>
              </div>

              <div className="ab-stats-grid">
                {STATS.map((item) => (
                  <div key={item.label} className="ab-stat-card">
                    <div className="ab-stat-number">{item.number}</div>
                    <div className="ab-stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ab-team-section">
          <div className="ab-container">
            <div className="ab-section-head">
              <span className="ab-section-kicker">Команда</span>
              <h2 className="ab-section-title">За платформою стоїть команда, яка дивиться на сайт як на робочий інструмент</h2>
              <p className="ab-section-subtitle">
                Наша задача не просто запустити сторінки, а зробити так, щоб кожна з них допомагала користувачу рухатися далі по сервісу.
              </p>
            </div>

            <div className="ab-team-grid">
              {TEAM.map((member) => (
                <article key={member.name} className="ab-team-card">
                  <span className="ab-team-tag">{member.tag}</span>
                  <h3 className="ab-team-name">{member.name}</h3>
                  <p className="ab-team-role">{member.role}</p>
                  <p className="ab-team-desc">{member.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ab-join-section">
          <div className="ab-container">
            <div className="ab-join-panel">
              <span className="ab-section-kicker">Наступний крок</span>
              <h2 className="ab-join-title">Приєднуйтесь до BusyBee у тій ролі, яка вам потрібна зараз</h2>
              <p className="ab-join-subtitle">
                Якщо ви шукаєте виконавця, переходьте до створення замовлення. Якщо хочете працювати як фахівець, починайте з реєстрації або каталогу платформи.
              </p>

              <div className="ab-join-actions">
                <Link to="/register" className="ab-btn ab-btn--dark">Зареєструватися як фахівець</Link>
                <Link to="/create-order" className="ab-btn ab-btn--accent">Створити замовлення</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;