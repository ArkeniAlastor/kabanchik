import './Header.css';
import { Link } from 'react-router-dom';
import { iconBee } from '../../imgs/icons';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <Link to="/" className="brand-link">
          <img src={iconBee} alt="BusyBee" className="brand-bee" />
          <span className="brand-text">BusyBee</span>
        </Link>

        <nav className="header-nav">
          <a href="/" className="nav-link">Категорії</a>
          <a href="/" className="nav-link">Замовлення</a>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="btn-login">Увійти</Link>
          <Link to="/register" className="btn-register">Реєстрація</Link>
        </div>

      </div>
    </header>
  );
}

export default Header;
