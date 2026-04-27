import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { iconBee, iconCheck, iconMoney, iconLightning } from '../../imgs/icons';
import googleIcon from '../../imgs/Icon.png';
import facebookIcon from '../../imgs/Icon (1).png';

function RegisterPage() {
  const [role, setRole] = useState('client');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = name === 'name' ? value.replace(/\d+/g, '') : value;

    setForm({ ...form, [name]: nextValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(role === 'expert' ? '/SpecPage' : '/userpage');
  };

  const features = [
    { icon: iconCheck, title: 'Перевірені фахівці', text: 'Всі спеціалісти проходять верифікацію' },
    { icon: iconMoney, title: 'Безпечні платежі', text: 'Гарантія повернення коштів' },
    { icon: iconLightning, title: 'Швидкий старт', text: 'Знайдіть фахівця за кілька хвилин' },
  ];

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
            <button
              type="button"
              className={`role-card ${role === 'client' ? 'role-card--active-client' : ''}`}
              onClick={() => setRole('client')}
            >
              {role === 'client' && <span className="role-check">✓</span>}
              <span className="role-icon">🗂️</span>
              <span className="role-name">Замовник</span>
              <span className="role-desc">Замовляти послуги</span>
            </button>
            <button
              type="button"
              className={`role-card ${role === 'expert' ? 'role-card--active-expert' : ''}`}
              onClick={() => setRole('expert')}
            >
              {role === 'expert' && <span className="role-check">✓</span>}
              <span className="role-icon">💼</span>
              <span className="role-name">Фахівець</span>
              <span className="role-desc">Надавати послуги</span>
            </button>
          </div>

          <form className="register-fields" onSubmit={handleSubmit}>
            <label className="register-label">
              Ім'я
              <input
                name="name"
                type="text"
                placeholder="Введіть ваше ім'я"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="register-label">
              Email
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="register-label">
              Пароль
              <input
                name="password"
                type="password"
                placeholder="Мінімум 8 символів"
                value={form.password}
                onChange={handleChange}
                minLength={8}
                required
              />
            </label>
            <label className="register-label">
              Підтвердіть пароль
              <input
                name="confirm"
                type="password"
                placeholder="Введіть пароль ще раз"
                value={form.confirm}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="register-submit">
              Зареєструватися як {role === 'client' ? 'замовник' : 'фахівець'}
            </button>
          </form>

          <p className="register-terms">
            Реєструючись, ви погоджуєтесь з{' '}
            <Link to="/terms">Умовами використання</Link> та{' '}
            <a href="/">Політикою конфіденційності</a>
          </p>

          <p className="register-login">
            Вже маєте акаунт? <Link to="/login">Увійти</Link>
          </p>

          <div className="register-divider">
            <span>або зареєструватися через</span>
          </div>

          <div className="register-social">
            <button type="button" className="social-btn">
              <img src={googleIcon} alt="" className="social-btn-icon" />
              Google
            </button>
            <button type="button" className="social-btn">
              <img src={facebookIcon} alt="" className="social-btn-icon" />
              Facebook
            </button>
          </div>

        </div>
      </div>

      {/* Right: promo panel */}
      <div className="register-promo-side">
        <div className="register-promo-wrap">
          <img src={iconBee} alt="BusyBee" className="promo-bee" />
          <h2 className="promo-title">Приєднуйтесь до<br />BusyBee</h2>
          <ul className="promo-features">
            {features.map((f) => (
              <li key={f.title} className="promo-feature">
                <img src={f.icon} alt={f.title} className="promo-feature-icon" />
                <div>
                  <p className="promo-feature-title">{f.title}</p>
                  <p className="promo-feature-text">{f.text}</p>
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
