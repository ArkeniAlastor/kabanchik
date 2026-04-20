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
              <span className="social-btn-icon google-icon">G</span>
              Google
            </button>
            <button type="button" className="social-btn">
              <span className="social-btn-icon facebook-icon">f</span>
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
