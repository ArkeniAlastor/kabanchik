import './Footer.css';
import { iconBee } from '../../imgs/icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-logo">
              <img src={iconBee} alt="BusyBee" className="footer-bee" />
              <span className="footer-brand-text">BusyBee</span>
            </div>
            <p className="footer-tagline">Маленька праця для великих людей!</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Про нас</h4>
            <ul className="footer-links">
              <li><a href="/">Про проект</a></li>
              <li><a href="/">Контакти</a></li>
              <li><a href="/">Наші партнери</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Сервіси</h4>
            <ul className="footer-links">
              <li><Link to="/services">Безпечний рахунок</Link></li>
              <li><Link to="/services">Преміум</Link></li>
              <li><Link to="/services">Товарний сертифікат</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">
              <Link to="/HowWorkPage" className="footer-col-title-link">Як це працює</Link>
            </h4>
            <ul className="footer-links">
              <li><Link to="/HowWorkPage">Як замовити послугу</Link></li>
              <li><Link to="/HowWorkPage">Робота в Україні</Link></li>
              <li><Link to="/HowWorkPage">Переваги для компаній</Link></li>
              <li><Link to="/HowWorkPage">Гарний бізнес</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Допомога</h4>
            <ul className="footer-links">
              <li><Link to="/help">Центр допомоги</Link></li>
              <li><Link to="/terms">Публічна оферта</Link></li>
              <li><Link to="/privacy">Політика конфіденційності</Link></li>
              <li><Link to="/help">Служба підтримки</Link></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>© 2026 BusyBee. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
