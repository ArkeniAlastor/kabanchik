import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { iconBee } from '../../imgs/icons';

const NAV_LINKS = [
  { to: '/category', label: 'Категорії' },
  { to: '/offers', label: 'Замовлення' },
  { to: '/HowWorkPage', label: 'Як працює' },
  { to: '/services', label: 'Сервіси' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-link">
          <span className="brand-mark">
            <img src={iconBee} alt="BusyBee" className="brand-bee" />
          </span>
          <span className="brand-copy">
            <span className="brand-text">BusyBee</span>
            <span className="brand-note">Платформа послуг</span>
          </span>
        </Link>

        <div className="header-nav-shell">
          <nav className="header-nav" aria-label="Основна навігація">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="header-side">
          <Link to="/help" className="header-support-link">
            <span className="header-support-dot" aria-hidden="true" />
            Допомога 24/7
          </Link>

          <div className="header-actions">
            <Link to="/login" className="btn-login">Увійти</Link>
            <Link to="/register" className="btn-register">Реєстрація</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
