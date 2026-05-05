import './Header.css';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { iconBee } from '../../imgs/icons';

const NAV_LINKS = [
  { to: '/category', label: 'Категорії' },
  { to: '/catalogue-specs', label: 'Фахівці' },
  { to: '/offers', label: 'Замовлення' },
  { to: '/HowWorkPage', label: 'Як працює' },
  { to: '/services', label: 'Сервіси' },
  { to: '/about', label: 'Про нас' },
];

const MOBILE_EXPLORE_LINKS = [
  { to: '/create-order', label: 'Створити замовлення', tone: 'accent' },
  { to: '/help', label: 'Центр допомоги' },
  { to: '/customer-help', label: 'Замовникам' },
  { to: '/HelpForSpec', label: 'Фахівцям' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isMenuOpen ? ' is-menu-open' : ''}`}>
      {isMenuOpen ? (
        <button
          type="button"
          className="header-backdrop"
          aria-label="Закрити меню"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}

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

        <button
          type="button"
          className={`header-menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-header-panel"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="mobile-header-panel" className={`header-panel${isMenuOpen ? ' is-open' : ''}`}>
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
            <NavLink to="/help" className={({ isActive }) => `header-support-link${isActive ? ' active' : ''}`}>
              <span className="header-support-dot" aria-hidden="true" />
              Допомога 24/7
            </NavLink>

            <div className="header-actions">
              <Link to="/login" className="btn-login">Увійти</Link>
              <Link to="/register" className="btn-register">Реєстрація</Link>
            </div>
          </div>

          <div className="header-explore-shell">
            <span className="header-explore-label">Додаткові сторінки</span>
            <div className="header-explore-links" aria-label="Додаткові сторінки">
              {MOBILE_EXPLORE_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `header-explore-link${item.tone ? ` header-explore-link--${item.tone}` : ''}${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
