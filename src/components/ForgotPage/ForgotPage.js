import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPage.css';
import { iconBee } from '../../imgs/icons';

function ForgotPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
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

              <form className="forgot-fields" onSubmit={handleSubmit}>
                <label className="forgot-label">
                  Email
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              <div className="forgot-success-icon">✉️</div>
              <h2 className="forgot-success-title">Листа надіслано!</h2>
              <p className="forgot-success-text">
                Ми надіслали інструкції для відновлення пароля на <strong>{email}</strong>
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
          <p className="forgot-promo-sub">Знайдіть ідеального фахівця для вашого проекту</p>
        </div>
      </div>

    </div>
  );
}

export default ForgotPage;
