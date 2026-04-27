import './Header.css';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { iconBee } from '../../imgs/icons';

const NAV_LINKS = [
  { to: '/category', label: 'Категорії' },
  { to: '/offers', label: 'Замовлення' },
  { to: '/services', label: 'Сервіси' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-link">
          <img src={iconBee} alt="BusyBee" className="brand-bee" />
          <span className="brand-text">BusyBee</span>
        </Link>

        <button
          type="button"
          className={`header-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header-panel ${isMenuOpen ? 'is-open' : ''}`}>
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
