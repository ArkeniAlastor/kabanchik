import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { iconBee, iconCheck, iconMoney, iconLightning } from '../../imgs/icons';
import googleIcon from '../../imgs/Icon.png';
import facebookIcon from '../../imgs/Icon (1).png';

const FORM_FIELDS = [
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
    placeholder: '••••••••',
    link: { to: '/forgot', label: 'Забули пароль?' }
  }
];

const SOCIAL_OPTIONS = [
  { id: 'google', label: 'Google', icon: googleIcon },
  { id: 'facebook', label: 'Facebook', icon: facebookIcon },
];

const LOGIN_FEATURES = [
  {
    icon: iconCheck,
    title: 'Перевірені фахівці',
    text: 'Профілі, рейтинг і відгуки вже зібрані в одному місці.'
  },
  {
    icon: iconMoney,
    title: 'Прозора співпраця',
    text: 'Бюджет, етапи і домовленості видно без хаосу в переписках.'
  },
  {
    icon: iconLightning,
    title: 'Швидкий старт',
    text: 'Після входу можна одразу перейти до замовлень, чату або кабінету.'
  },
];

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">

      {/* Left: form */}
      <div className="login-form-side">
        <div className="login-form-wrap">

          <Link to="/" className="login-back">
            <span className="login-back-arrow">‹</span> Назад
          </Link>

          <div className="login-logo">
            <img src={iconBee} alt="BusyBee" />
            <span>BusyBee</span>
          </div>

          <h1 className="login-title">Вітаємо знову!</h1>
          <p className="login-subtitle">Увійдіть до свого акаунту</p>

          <form className="login-fields" onSubmit={handleSubmit}>
            {FORM_FIELDS.map((field) => (
              <label key={field.name} className="login-label">
                {field.link ? (
                  <span className="login-password-row">
                    {field.label}
                    <Link to={field.link.to} className="login-forgot">{field.link.label}</Link>
                  </span>
                ) : (
                  field.label
                )}

                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                />
              </label>
            ))}

            <button type="submit" className="login-submit">Увійти</button>
          </form>

          <p className="login-register">
            Ще не маєте акаунту? <Link to="/register">Зареєструватися</Link>
          </p>

          <div className="login-divider">
            <span>або продовжити через</span>
          </div>

          <div className="login-social">
            {SOCIAL_OPTIONS.map((option) => (
              <button key={option.id} type="button" className="login-social-btn">
                <img src={option.icon} alt="" className="login-social-btn-icon" />
                {option.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Right: promo */}
      <div className="login-promo-side">
        <div className="login-promo-wrap">
          <img src={iconBee} alt="BusyBee" className="login-promo-bee" />
          <h2 className="login-promo-title">BusyBee</h2>
          <p className="login-promo-sub">Поверніться до свого кабінету і продовжуйте роботу без зайвих кроків.</p>

          <ul className="login-promo-features">
            {LOGIN_FEATURES.map((feature) => (
              <li key={feature.title} className="login-promo-feature">
                <img src={feature.icon} alt={feature.title} className="login-promo-feature-icon" />
                <div>
                  <p className="login-promo-feature-title">{feature.title}</p>
                  <p className="login-promo-feature-text">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
