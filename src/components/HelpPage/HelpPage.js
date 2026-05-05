import './HelpPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';

const faqCategories = [
  {
    name: 'Загальні питання',
    icon: icons.iconBlocknote,
    items: [
      {
        question: 'Що таке BusyBee?',
        answer: 'BusyBee - це українська платформа фрілансу, яка об\'єднує замовників та фрілансерів. Тут ви можете знайти виконавців для розв\'язання різних проектів або запропонувати свої послуги на фрілансу.'
      },
      {
        question: 'Як зареєструватися на платформі?',
        answer: 'Для реєстрації перейдіть на сторінку реєстрації, заповніть всі необхідні поля та підтвердіть ваш email. Після цього ви зможете розпочати роботу на платформі.'
      },
      {
        question: 'Чи безпечна реєстрація?',
        answer: 'Так, реєстрація на нашій платформі повністю безпечна. Ми використовуємо сучасні методи шифрування для захисту ваших персональних даних.'
      },
      {
        question: 'Як комісії платформи?',
        answer: 'Комісія платформи залежить від типу проекту та суми. Всі деталі інформація про комісії доступна в розділі "Умови використання".'
      }
    ]
  },
  {
    name: 'Для замовників',
    icon: icons.iconHome,
    items: [
      {
        question: 'Як створити замовлення?',
        answer: 'Натисніть на кнопку "Створити замовлення", заповніть форму з описом проекту, вказавши бюджет, терміни та особливі вимоги. Після публікації фахівці почнуть надсилати пропозиції.'
      },
      {
        question: 'Як вибрати фахівця?',
        answer: 'Вивчіть профілі претендентів, перегляньте їхні портфоліо, рейтинги та відгуки. Ви можете поговорити з кількома фахівцями перед тим, як зробити остаточний вибір.'
      },
      {
        question: 'Як контролювати хід роботи?',
        answer: 'Вся комунікація проходить у внутрішньому чаті платформи. Ви можете відстежувати прогрес, надавати зворотний зв\'язок та запитувати виправлення прямо в проекті.'
      }
    ]
  },
  {
    name: 'Для фахівців',
    icon: icons.iconPchel,
    items: [
      {
        question: 'Як почати пропонувати послуги?',
        answer: 'Створіть профіль, заповніть інформацію про себе, вказавши навички та досвід. Завантажте приклади своєї роботи в портфоліо, і ви готові до прийому замовлень.'
      },
      {
        question: 'Як подати пропозицію на замовлення?',
        answer: 'Перегляньте доступні замовлення в каталозі, виберіть ті, які вам підходять, і подайте пропозицію з описом того, як ви розв\'яжете задачу та якої вартості.'
      },
      {
        question: 'Як отримати платіж?',
        answer: 'Після завершення проекту замовник підтверджує роботу, і кошти надходять на ваш рахунок на платформі. Ви можете вивести їх на свій банківський рахунок.'
      }
    ]
  },
  {
    name: 'Платежі та безпека',
    icon: icons.iconShield,
    items: [
      {
        question: 'Які способи оплати доступні?',
        answer: 'Ми підтримуємо більшість популярних способів оплати: карти Visa/Mastercard, мобільні гаманці та банківські переводи. Вся інформація про оплату захищена шифруванням.'
      },
      {
        question: 'Чи гарантована безпека платежів?',
        answer: 'Так, ми використовуємо технологію Escrow. Кошти замовника утримуються на безпечному рахунку до завершення роботи, що захищає обидві сторони.'
      },
      {
        question: 'Які комісії за виведення коштів?',
        answer: 'Комісія залежить від способу виведення та вашої країни. Детальна інформація про комісії доступна в розділі "Касса" вашого кабінету.'
      }
    ]
  }
];

const supportChannels = [
  {
    icon: icons.iconEmail,
    title: 'Email підтримка',
    description: 'Напишіть нам у будь-який час',
    contact: 'support@busybee.ua',
    responseTime: 'Відповідь протягом 1-2 годин'
  },
  {
    icon: icons.iconZvonilka,
    title: 'Гаряча лінія',
    description: 'Зателефонуйте в підтримку',
    contact: '+38 (044) 123-45-67',
    responseTime: 'Доступна 24/7'
  },
  {
    icon: icons.iconChat,
    title: 'Онлайн чат',
    description: 'Отримайте відповідь у чаті',
    contact: 'Чат у кабінеті',
    responseTime: 'Миттєва відповідь'
  }
];

const resources = [
  {
    icon: icons.iconBlocknote,
    title: 'Умови використання',
    description: 'Ознайомтесь з правилами і умовами роботи на платформі',
    link: '/terms'
  },
  {
    icon: icons.iconShield,
    title: 'Політика конфіденційності',
    description: 'Дізнайтесь як ми захищаємо ваші персональні дані',
    link: '/privacy'
  },
  {
    icon: icons.iconBee,
    title: 'Про BusyBee',
    description: 'Дізнайтесь більше про нашу платформу та місію',
    link: '/about'
  },
  {
    icon: icons.iconNewspaper,
    title: 'Як це працює',
    description: 'Подивіться, як влаштована робота платформи для замовників і фахівців',
    link: '/HowWorkPage'
  }
];

const HelpPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState({ category: 0, item: 0 });
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFAQ = (categoryIdx, itemIdx) => {
    if (expandedFAQ.category === categoryIdx && expandedFAQ.item === itemIdx) {
      setExpandedFAQ({ category: null, item: null });
    } else {
      setExpandedFAQ({ category: categoryIdx, item: itemIdx });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Дякуємо! Ваше повідомлення надіслано.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="help-page">
      <Header />

      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-container">
          <div className="help-hero-inner">
            <div className="sos-icon">
              <img src={icons.iconSos} alt="SOS" />
            </div>
            <h1>Центр допомоги BusyBee</h1>
            <p>Ми завжди готові допомогти вам вирішити будь-яку проблему або відповісти на ваші питання</p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="support-section">
        <div className="help-container">
          <h2>Способи зв'язку з нами</h2>
          <div className="support-grid">
            {supportChannels.map((channel, idx) => (
              <div key={idx} className="support-card">
                <img src={channel.icon} alt={channel.title} className="channel-icon" />
                <h3>{channel.title}</h3>
                <p className="channel-desc">{channel.description}</p>
                <p className="channel-contact">{channel.contact}</p>
                <p className="channel-time">{channel.responseTime}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="help-container">
          <h2>Часті питання (FAQ)</h2>
          
          <div className="faq-tabs">
            {faqCategories.map((category, idx) => (
              <button
                key={idx}
                className={`faq-tab ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <img src={category.icon} alt={category.name} className="faq-tab-icon" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="faq-content">
            {faqCategories[activeTab].items.map((item, itemIdx) => (
              <div key={itemIdx} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(activeTab, itemIdx)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-arrow ${expandedFAQ.category === activeTab && expandedFAQ.item === itemIdx ? 'open' : ''}`}>›</span>
                </button>
                {expandedFAQ.category === activeTab && expandedFAQ.item === itemIdx && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="help-container">
          <div className="contact-form-wrapper">
            <div className="contact-form-text">
              <h2>Не знайшли відповідь?</h2>
              <p>Напишіть нам прямо, і наша команда допоможе вам в найкоротший час</p>
            </div>
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше ім'я"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Тема звернення"
                value={formData.subject}
                onChange={handleFormChange}
                required
              />
              
              <textarea
                name="message"
                placeholder="Детально опишіть вашу проблему або питання..."
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
              
              <button type="submit" className="submit-btn">Надіслати звернення</button>
            </form>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="help-container">
          <h2>Корисні ресурси</h2>
          <div className="resources-grid">
            {resources.map((resource, idx) => (
              <Link key={idx} to={resource.link} className="resource-card">
                <img src={resource.icon} alt={resource.title} className="resource-icon" />
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
