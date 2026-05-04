import './AboutPage.css';
import { Link } from 'react-router-dom';
import {
  iconBee,
} from '../../imgs/icons';

const VALUES = [
  { emoji: '💙', title: 'Патріотизм', desc: 'Ми віримо в Україну і працюємо для розвитку української економіки, підтримуючи вітчизняних фахівців та бізнес.' },
  { emoji: '🤝', title: 'Довіра', desc: 'Ми будуємо прозору та чесну платформу, де кожен користувач може бути впевнений у захисті своїх інтересів.' },
  { emoji: '⚡', title: 'Ефективність', desc: 'Ми спрощуємо процес співпраці, економлячи час та ресурси наших користувачів через сучасні технології.' },
  { emoji: '🌟', title: 'Якість', desc: 'Ми підтримуємо високі стандарти якості сервісу та допомагаємо фахівцям розвивати свої навички.' },
];

const STATS = [
  { number: '15K+', label: 'Фахівців' },
  { number: '8K+', label: 'Замовників' },
  { number: '25K+', label: 'Проектів' },
  { number: '4.8', label: 'Середній рейтинг' },
];

const TEAM = [
  { emoji: '👨‍💼', name: 'Андрій Коваленко', role: 'CEO & Founder', desc: '10+ років у IT, колишній фрілансер' },
  { emoji: '👩‍💻', name: 'Марія Шевченко', role: 'CTO & Co-Founder', desc: 'Експерт з розробки платформ' },
  { emoji: '👨‍🎨', name: 'Олег Петренко', role: 'Head of Product', desc: 'UX/UI дизайнер та продакт-менеджер' },
];

function AboutPage() {
  return (
    <div className="ab-page">

      <header className="ab-header">
        <div className="ab-header-inner">
          <Link to="/" className="ab-brand">
            <img src={iconBee} alt="BusyBee" />
            <span>BusyBee</span>
          </Link>
          <nav className="ab-nav">
            <Link to="/" className="ab-nav-link">Головна</Link>
            <Link to="/categories" className="ab-nav-link">Категорії</Link>
            <Link to="/about" className="ab-nav-link ab-nav-link--active">Про нас</Link>
          </nav>
          <div className="ab-header-actions">
            <Link to="/login" className="ab-btn-login">Увійти</Link>
            <Link to="/register" className="ab-btn-register">Реєстрація</Link>
          </div>
        </div>
      </header>

      <section className="ab-hero">
        <img src={iconBee} alt="BusyBee" />
        <h1 className="ab-hero-title">Про BusyBee</h1>
        <p className="ab-hero-subtitle">
          Українська платформа, яка об'єднує талановитих фахівців та амбітних замовників для створення успішних проектів
        </p>
      </section>

      <section className="ab-content">
        <div className="ab-inner">

          <div className="ab-block">
            <div className="ab-block-icon">🎯</div>
            <div>
              <h2 className="ab-block-title">Наша місія</h2>
              <p>Ми створили BusyBee, щоб надати українським фахівцям можливість реалізувати свій потенціал, а бізнесу - знайти найкращих виконавців для своїх завдань. Наша мета - побудувати найбільшу та найнадійнішу екосистему фрілансу в Україні.</p>
              <br />
              <p>Ми віримо, що кожна людина має унікальні таланти, і наша платформа допомагає цим талантам знайти своє застосування, створюючи цінність для суспільства та економіки України.</p>
            </div>
          </div>

          <div className="ab-block">
            <div className="ab-block-icon">📖</div>
            <div>
              <h2 className="ab-block-title">Наша історія</h2>
              <p>BusyBee народився у 2024 році з простої ідеї: створити платформу, де українські фахівці можуть легко знаходити цікаві проекти, а замовники - кваліфікованих виконавців.</p>
              <br />
              <p>Назва BusyBee (Зайнята Бджілка) символізує працьовитість, продуктивність та командну роботу. Патріотичні кольори України 🇺🇦 в нашому дизайні підкреслюють нашу відданість розвитку української економіки.</p>
              <br />
              <p>Сьогодні ми пишаємось тим, що допомогли тисячам українців знайти роботу та реалізувати сотні успішних проектів.</p>
            </div>
          </div>

          <div className="ab-block ab-block--column">
            <h2 className="ab-section-title">Наші цінності</h2>
            <div className="ab-values-grid">
              {VALUES.map(function(item, index) {
                return (
                  <div key={index} className="ab-value-card">
                    <div className="ab-value-emoji">{item.emoji}</div>
                    <h3 className="ab-value-title">{item.title}</h3>
                    <p className="ab-value-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <section className="ab-stats">
        <div className="ab-stats-card">
          <h2 className="ab-stats-title">BusyBee в цифрах</h2>
          <div className="ab-stats-grid">
            {STATS.map(function(item, index) {
              return (
                <div key={index} className="ab-stat">
                  <div className="ab-stat-number">{item.number}</div>
                  <div className="ab-stat-label">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ab-team">
        <div className="ab-inner">
          <h2 className="ab-section-title">Наша команда</h2>
          <p className="ab-team-subtitle">
            Ми - команда ентузіастів, які об'єднані спільною метою: зробити фріланс в Україні доступним, безпечним та ефективним для всіх.
          </p>
          <div className="ab-team-grid">
            {TEAM.map(function(member, index) {
              return (
                <div key={index} className="ab-team-card">
                  <div className="ab-team-avatar">{member.emoji}</div>
                  <div className="ab-team-name">{member.name}</div>
                  <div className="ab-team-role">{member.role}</div>
                  <div className="ab-team-desc">{member.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ab-join">
        <div className="ab-inner">
          <div className="ab-join-card">
            <div className="ab-join-rocket">🚀</div>
            <h2 className="ab-join-title">Приєднуйтесь до BusyBee</h2>
            <p className="ab-join-subtitle">
              Станьте частиною найбільшої української спільноти фахівців та замовників. Разом ми будуємо майбутнє!
            </p>
            <div className="ab-join-actions">
              <button className="ab-join-btn ab-join-btn--dark">Зареєструватися як фахівець</button>
              <button className="ab-join-btn ab-join-btn--yellow">Створити замовлення</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="ab-footer">
        <p>Маленька праця для великих людей!</p>
      </footer>

    </div>
  );
}

export default AboutPage;