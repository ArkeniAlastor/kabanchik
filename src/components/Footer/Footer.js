import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-icon">B</span>
              <span className="brand-text">BusyBee</span>
            </div>
            <p className="footer-tagline">Маркетплейс послуг та вакансій для всієї України.</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Замовникам</h4>
            <ul className="footer-links">
              <li><a href="/">Як зробити замовлення</a></li>
              <li><a href="/">Безпека платежів</a></li>
              <li><a href="/">Гарантія повернення</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Фахівцям</h4>
            <ul className="footer-links">
              <li><a href="/">Як почати заробляти</a></li>
              <li><a href="/">Тарифи</a></li>
              <li><a href="/">Партнерська програма</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Компанія</h4>
            <ul className="footer-links">
              <li><a href="/">Про нас</a></li>
              <li><a href="/">Блог</a></li>
              <li><a href="/">Контакти</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>© 2026 BusyBee. Всі права захищені.</p>
          <div className="footer-bottom-links">
            <a href="/">Умови використання</a>
            <a href="/">Конфіденційність</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
