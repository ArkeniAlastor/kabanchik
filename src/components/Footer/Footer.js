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
            <h4 className="footer-col-title">Як це працює</h4>
            <ul className="footer-links">
              <li><a href="/">Як замовити послугу</a></li>
              <li><a href="/">Робота в Україні</a></li>
              <li><a href="/">Переваги для компаній</a></li>
              <li><a href="/">Гарний бізнес</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Допомога</h4>
            <ul className="footer-links">
              <li><a href="/">Питання та відповіді</a></li>
              <li><a href="/">Публічна оферта</a></li>
              <li><a href="/">Правила конфіденційності</a></li>
              <li><a href="/">Служба підтримки</a></li>
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
