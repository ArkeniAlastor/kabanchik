import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <div className="header-left">
          <a href="#" className="brand-link">
            <span className="brand-icon">B</span>
            <span className="brand-text">BusyBee</span>
          </a>
          <button type="button" className="btn btn-outline">
            Створити замовлення
          </button>
        </div>

        <div className="header-search">
          <input
            type="text"
            placeholder="Що треба зробити?"
            aria-label="Пошук послуг"
          />
          <button type="button" className="btn btn-search">
            Знайти фахівця
          </button>
        </div>

        <div className="header-right">
          <button type="button" className="icon-btn" aria-label="Профіль">
            <span className="avatar" />
          </button>
          <button type="button" className="btn btn-primary">
            Стати фахівцем
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
