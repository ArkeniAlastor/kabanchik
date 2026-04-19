import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';
import { iconBee, iconCheck, iconMoney, iconLightning } from '../../imgs/icons';

function RegisterPage() {
  const [role, setRole] = useState('client');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <a href="/">Умовами використання</a> та{' '}
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
              <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.4 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" fill="#FFC107"/>
                <path d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.4 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" fill="#FF3D00"/>
                <path d="M24 44c5.4 0 10.3-2.1 14-5.4l-6.5-5.5C29.6 34.9 26.9 36 24 36c-5.3 0-9.7-3.3-11.3-8H6.1C9.5 35.6 16.2 44 24 44z" fill="#4CAF50"/>
                <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.5 5.5C37.5 38.5 44 33 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1976D2"/>
              </svg>
              Google
            </button>
            <button type="button" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
              </svg>
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
