import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { iconBee, iconCheck, iconMoney, iconLightning } from '../../imgs/icons';
import googleIcon from '../../imgs/Icon.png';
import facebookIcon from '../../imgs/Icon (1).png';

const ROLE_OPTIONS = [
  {
    id: 'client',
    icon: '🗂️',
    name: 'Замовник',
    description: 'Замовляти послуги',
    activeClass: 'register-role-card--active-client'
  },
  {
    id: 'expert',
    icon: '💼',
    name: 'Фахівець',
    description: 'Надавати послуги',
    activeClass: 'register-role-card--active-expert'
  }
];

const FORM_FIELDS = [
  {
    name: 'name',
    label: "Ім'я",
    type: 'text',
    placeholder: "Введіть ваше ім'я"
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Мінімум 8 символів',
    minLength: 8
  },
  {
    name: 'confirm',
    label: 'Підтвердіть пароль',
    type: 'password',
    placeholder: 'Введіть пароль ще раз'
  }
];

const SOCIAL_OPTIONS = [
  { id: 'google', label: 'Google', icon: googleIcon },
  { id: 'facebook', label: 'Facebook', icon: facebookIcon },
];

const ROLE_GUIDES = {
  client: {
    eyebrow: 'Маршрут для замовника',
    text: 'Перед реєстрацією можете переглянути каталог фахівців або відкрити поради для замовників.',
    links: [
      { to: '/catalogue-specs', label: 'Каталог фахівців' },
      { to: '/customer-help', label: 'Поради для замовників' },
    ],
  },
  expert: {
    eyebrow: 'Маршрут для фахівця',
    text: 'Якщо хочете спочатку зорієнтуватися, перегляньте актуальні замовлення або поради для фахівців.',
    links: [
      { to: '/offers', label: 'Переглянути замовлення' },
      { to: '/HelpForSpec', label: 'Поради для фахівців' },
    ],
  },
};

const PROMO_FEATURES = [
  { icon: iconCheck, title: 'Перевірені фахівці', text: 'Всі спеціалісти проходять верифікацію' },
  { icon: iconMoney, title: 'Безпечні платежі', text: 'Гарантія повернення коштів' },
  { icon: iconLightning, title: 'Швидкий старт', text: 'Знайдіть фахівця за кілька хвилин' },
];

function RegisterPage() {
  const [role, setRole] = useState('client');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const navigate = useNavigate();
  const currentGuide = ROLE_GUIDES[role];
  const submitButtonStyle = role === 'expert'
    ? {
      background: '#f5c842',
      color: '#1a1a2e',
      boxShadow: '0 10px 18px rgba(217, 168, 32, 0.24)',
    }
    : {
      background: '#2e3d72',
      color: '#ffffff',
      boxShadow: 'none',
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = name === 'name' ? value.replace(/\d+/g, '') : value;

    setForm((currentForm) => ({ ...currentForm, [name]: nextValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(role === 'expert' ? '/SpecPage' : '/userpage');
  };

  return (
    <div className="register-page">

      {/* Left: form */}
      <div className="register-form-side">
        <div className="register-form-wrap">

          <Link to="/" className="register-back">
            <span className="register-back-arrow">‹</span> Назад
          </Link>

          <div className="register-logo">
            <img src={iconBee} alt="BusyBee" />
            <span>BusyBee</span>
          </div>

          <h1 className="register-title">Створити акаунт</h1>
          <p className="register-subtitle">Приєднуйтесь до спільноти BusyBee</p>

          <p className="register-role-label">Я хочу:</p>
          <div className="register-roles">
            {ROLE_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`register-role-card ${role === option.id ? option.activeClass : ''}`}
                onClick={() => setRole(option.id)}
              >
                {role === option.id ? <span className="register-role-check">✓</span> : null}
                <span className="register-role-icon">{option.icon}</span>
                <span className="register-role-name">{option.name}</span>
                <span className="register-role-desc">{option.description}</span>
              </button>
            ))}
          </div>

          <div className={`register-guide register-guide--${role}`}>
            <p className="register-guide-eyebrow">{currentGuide.eyebrow}</p>
            <p className="register-guide-text">{currentGuide.text}</p>
            <div className="register-guide-links">
              {currentGuide.links.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`register-guide-link ${index === 0 ? 'register-guide-link--primary' : 'register-guide-link--secondary'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="register-guide-note">
              Не впевнені, як усе працює? <Link to="/HowWorkPage">Подивіться сценарії платформи</Link>
            </p>
          </div>

          <form className="register-fields" onSubmit={handleSubmit}>
            {FORM_FIELDS.map((field) => (
              <label key={field.name} className="register-label">
                {field.label}
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  minLength={field.minLength}
                  required
                />
              </label>
            ))}

            <button type="submit" className="register-submit" style={submitButtonStyle}>
              Зареєструватися як {role === 'client' ? 'замовник' : 'фахівець'}
            </button>
          </form>

          <p className="register-terms">
            Реєструючись, ви погоджуєтесь з{' '}
            <Link to="/terms">Умовами використання</Link> та{' '}
            <Link to="/privacy">Політикою конфіденційності</Link>
          </p>

          <p className="register-login">
            Вже маєте акаунт? <Link to="/login">Увійти</Link>
          </p>

          <div className="register-divider">
            <span>або зареєструватися через</span>
          </div>

          <div className="register-social">
            {SOCIAL_OPTIONS.map((option) => (
              <button key={option.id} type="button" className="register-social-btn">
                <img src={option.icon} alt="" className="register-social-btn-icon" />
                {option.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Right: promo panel */}
      <div className="register-promo-side">
        <div className="register-promo-wrap">
          <img src={iconBee} alt="BusyBee" className="register-promo-bee" />
          <h2 className="register-promo-title">Приєднуйтесь до<br />BusyBee</h2>
          <ul className="register-promo-features">
            {PROMO_FEATURES.map((feature) => (
              <li key={feature.title} className="register-promo-feature">
                <img src={feature.icon} alt={feature.title} className="register-promo-feature-icon" />
                <div>
                  <p className="register-promo-feature-title">{feature.title}</p>
                  <p className="register-promo-feature-text">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default RegisterPage;
