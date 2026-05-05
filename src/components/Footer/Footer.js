import './Footer.css';
import { iconBee } from '../../imgs/icons';
import { Link } from 'react-router-dom';

const FOOTER_GROUPS = [
  {
    title: 'Замовникам',
    links: [
      { to: '/create-order', label: 'Створити замовлення' },
      { to: '/catalogue-specs', label: 'Каталог фахівців' },
      { to: '/customer-help', label: 'Допомога замовникам' },
      { to: '/services', label: 'Сервіси та захист' },
    ],
  },
  {
    title: 'Фахівцям',
    links: [
      { to: '/offers', label: 'Знайти замовлення' },
      { to: '/HelpForSpec', label: 'Допомога фахівцям' },
      { to: '/register', label: 'Реєстрація' },
      { to: '/HowWorkPage', label: 'Як працює платформа' },
    ],
  },
  {
    title: 'Компанія',
    links: [
      { to: '/about', label: 'Про нас' },
      { to: '/category', label: 'Категорії послуг' },
      { to: '/services', label: 'Сервіси BusyBee' },
      { to: '/HowWorkPage', label: 'Як це працює' },
    ],
  },
  {
    title: 'Підтримка',
    links: [
      { to: '/help', label: 'Центр допомоги' },
      { to: '/terms', label: 'Публічна оферта' },
      { to: '/privacy', label: 'Політика конфіденційності' },
      { to: '/login', label: 'Увійти в акаунт' },
    ],
  },
];

const FOOTER_BOTTOM_LINKS = [
  { to: '/terms', label: 'Умови' },
  { to: '/privacy', label: 'Конфіденційність' },
  { to: '/help', label: 'Підтримка' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={iconBee} alt="BusyBee" className="footer-bee" />
              <span className="footer-brand-text">BusyBee</span>
            </Link>
            <p className="footer-tagline">Маленька праця для великих людей!</p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div className="footer-col" key={group.title}>
              <h4 className="footer-col-title">{group.title}</h4>
              <ul className="footer-links">
                {group.links.map((item) => (
                  <li key={`${group.title}-${item.to}`}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 BusyBee. Всі права захищені.</p>
          <div className="footer-bottom-links">
            {FOOTER_BOTTOM_LINKS.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
