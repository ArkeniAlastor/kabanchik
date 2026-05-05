import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPage.css';
import { iconBee, iconCheck, iconLightning, iconMoney } from '../../imgs/icons';

const FORGOT_FIELD = {
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'your@email.com'
};

const FORGOT_SHORTCUTS = [
  { to: '/login', label: 'Повернутися до входу', tone: 'primary' },
  { to: '/register', label: 'Створити акаунт', tone: 'secondary' },
  { to: '/help', label: 'Центр допомоги', tone: 'secondary' },
];

const PROMO_FEATURES = [
  {
    icon: iconCheck,
    title: 'Швидке відновлення',
    text: 'Повернення доступу починається з одного email без зайвих кроків.'
  },
  {
    icon: iconLightning,
    title: 'Доступ до кабінету',
    text: 'Після відновлення можна одразу повернутися до замовлень і повідомлень.'
  },
  {
    icon: iconMoney,
    title: 'Безпечний процес',
    text: 'Відновлення побудоване як окремий простий сценарій без зайвого шуму.'
  },
];

function ForgotPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="forgot-page">

      {/* Left: form */}
      <div className="forgot-form-side">
        <div className="forgot-form-wrap">

          <Link to="/login" className="forgot-back">
            <span className="forgot-back-arrow">‹</span> Назад
          </Link>

          <div className="forgot-logo">
            <img src={iconBee} alt="BusyBee" />
            <span>BusyBee</span>
          </div>

          {!sent ? (
            <>
              <h1 className="forgot-title">Забули пароль?</h1>
              <p className="forgot-subtitle">Введіть email і ми надішлемо інструкції для відновлення</p>

              <div className="forgot-shortcuts">
                {FORGOT_SHORTCUTS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`forgot-shortcut forgot-shortcut--${item.tone}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <p className="forgot-help-note">
                Якщо немає доступу до старого email, відкрийте <Link to="/help">центр допомоги</Link> або поверніться до <Link to="/login">входу</Link> та перевірте дані ще раз.
              </p>

              <form className="forgot-fields" onSubmit={handleSubmit}>
                <label className="forgot-label">
                  {FORGOT_FIELD.label}
                  <input
                    name={FORGOT_FIELD.name}
                    type={FORGOT_FIELD.type}
                    placeholder={FORGOT_FIELD.placeholder}
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button type="submit" className="forgot-submit">Надіслати інструкції</button>
              </form>

              <p className="forgot-login">
                Згадали пароль? <Link to="/login">Увійти</Link>
              </p>
            </>
          ) : (
            <div className="forgot-success">
              <div className="forgot-success-icon">
                <img src={iconCheck} alt="Успіх" />
              </div>
              <h2 className="forgot-success-title">Листа надіслано!</h2>
              <p className="forgot-success-text">
                Ми надіслали інструкції для відновлення пароля на <strong>{email}</strong>
              </p>
              <p className="forgot-success-support">
                Не бачите лист? Перевірте спам або відкрийте <Link to="/help">центр допомоги</Link>.
              </p>
              <Link to="/login" className="forgot-submit forgot-submit--link">Повернутися до входу</Link>
            </div>
          )}

        </div>
      </div>

      {/* Right: promo */}
      <div className="forgot-promo-side">
        <div className="forgot-promo-wrap">
          <img src={iconBee} alt="BusyBee" className="forgot-promo-bee" />
          <h2 className="forgot-promo-title">BusyBee</h2>
          <p className="forgot-promo-sub">Поверніть доступ до акаунту і продовжуйте роботу без зайвих бар'єрів.</p>

          <ul className="forgot-promo-features">
            {PROMO_FEATURES.map((feature) => (
              <li key={feature.title} className="forgot-promo-feature">
                <img src={feature.icon} alt={feature.title} className="forgot-promo-feature-icon" />
                <div>
                  <p className="forgot-promo-feature-title">{feature.title}</p>
                  <p className="forgot-promo-feature-text">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default ForgotPage;
