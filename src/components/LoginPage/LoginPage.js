import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { iconBee } from '../../imgs/icons';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <label className="login-label">
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

            <label className="login-label">
              <span className="login-password-row">
                Пароль
                <a href="/forgot" className="login-forgot">Забули пароль?</a>
              </span>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="login-submit">Увійти</button>
          </form>

          <p className="login-register">
            Ще не маєте акаунту? <Link to="/register">Зареєструватися</Link>
          </p>

          <div className="login-divider">
            <span>або продовжити через</span>
          </div>

          <div className="login-social">
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

      {/* Right: promo */}
      <div className="login-promo-side">
        <div className="login-promo-wrap">
          <img src={iconBee} alt="BusyBee" className="login-promo-bee" />
          <h2 className="login-promo-title">BusyBee</h2>
          <p className="login-promo-sub">Знайдіть ідеального фахівця для вашого проекту</p>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
