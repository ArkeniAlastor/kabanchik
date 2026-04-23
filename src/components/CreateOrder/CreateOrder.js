import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { iconBee as logo } from '../../imgs/icons';
import './CreateOrder.css';

function CreateOrderHeader() {
  const navigate = useNavigate();

  return (
    <header className="co-header">
      <div className="co-header-inner">
        <Link to="/" className="co-header-logo">
          <img src={logo} alt="BusyBee" className="co-header-logo-img" />
        </Link>
        <nav className="co-header-nav">
          <Link to="/" className="co-header-nav-link">Головна</Link>
          <Link to="/category" className="co-header-nav-link">Категорії</Link>
        </nav>
        <div className="co-header-actions">
          <button className="co-header-login" onClick={() => navigate('/login')}>Увійти</button>
          <button className="co-header-register" onClick={() => navigate('/register')}>Реєстрація</button>
        </div>
      </div>
    </header>
  );
}

const CATEGORIES = [
  { id: 'design', label: 'Дизайн і графіка', icon: '🎨' },
  { id: 'web', label: 'Веб-розробка', icon: '💻' },
  { id: 'mobile', label: 'Мобільні додатки', icon: '📱' },
  { id: 'backend', label: 'Backend розробка', icon: '⚙️' },
  { id: 'games', label: 'Розробка ігор', icon: '🎮' },
  { id: 'ai', label: 'AI/ML розробка', icon: '👑' },
  { id: 'blockchain', label: 'Blockchain', icon: '🔑' },
  { id: 'security', label: 'Кібербезпека', icon: '🛡️' },
  { id: 'devops', label: 'DevOps', icon: '☁️' },
  { id: 'marketing', label: 'Маркетинг', icon: '📊' },
  { id: 'content', label: 'Контент', icon: '✏️' },
  { id: 'video', label: 'Відео', icon: '🎬' },
];

const BUDGETS = [
  { id: 'b1', label: 'До 10,000 ₴' },
  { id: 'b2', label: '10,000 - 30,000 ₴' },
  { id: 'b3', label: '30,000 - 60,000 ₴' },
  { id: 'b4', label: '60,000+ ₴' },
  { id: 'b5', label: 'Свій бюджет' },
];

const TIMELINES = [
  { id: 't1', label: '1-3 дні', icon: '🔥' },
  { id: 't2', label: '1 тиждень', icon: '⚡' },
  { id: 't3', label: '2 тижні', icon: '📅' },
  { id: 't4', label: '1 місяць', icon: '📅' },
  { id: 't5', label: 'Гнучкий термін', icon: '😊' },
];

const STEP_LABELS = ['Опис', 'Деталі', 'Перегляд'];

function Stepper({ step }) {
  return (
    <div className="co-stepper-wrap">
      <div className="co-stepper">
        {STEP_LABELS.map((label, i) => {
          const num = i + 1;
          const active = num <= step;
          return (
            <div key={i} className="co-stepper-item">
              {i > 0 && <div className={`co-step-line ${num <= step ? 'co-step-line--active' : ''}`} />}
              <div className="co-step-col">
                <div className={`co-step-circle ${active ? 'co-step-circle--active' : ''}`}>{num}</div>
                <div className={`co-step-label ${active ? 'co-step-label--active' : ''}`}>{label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Step1({ data, onChange, onNext }) {
  const canProceed = data.title.trim() && data.category && data.description.trim();

  return (
    <div className="co-card">
      <h2 className="co-card-title">Крок 1: Опишіть ваше завдання</h2>

      <div className="co-field">
        <label className="co-label">Назва замовлення *</label>
        <input
          className="co-input"
          placeholder="Наприклад: Розробка інтернет-магазину на React"
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
        />
      </div>

      <div className="co-field">
        <label className="co-label">Категорія *</label>
        <div className="co-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={'co-cat-btn' + (data.category === cat.id ? ' co-cat-btn--active' : '')}
              onClick={() => onChange({ category: cat.id })}
            >
              <span className="co-cat-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="co-field">
        <label className="co-label">Детальний опис завдання *</label>
        <textarea
          className="co-input co-textarea"
          placeholder="Опишіть що потрібно зробити, які вимоги до проекту, які технології бажані..."
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
        />
        <p className="co-hint">Чим детальніше опис, тим кращі пропозиції ви отримаєте.</p>
      </div>

      <div className="co-actions co-actions--right">
        <button
          className={'co-btn-next' + (canProceed ? ' co-btn-next--active' : '')}
          onClick={onNext}
          disabled={!canProceed}
        >
          Далі →
        </button>
      </div>
    </div>
  );
}

function Step2({ data, onChange, onNext, onBack }) {
  const [skillInput, setSkillInput] = useState('');
  const canProceed = data.budget && data.timeline;

  const addSkill = () => {
    const val = skillInput.trim();
    if (!val) return;
    onChange({ skills: [...data.skills, val] });
    setSkillInput('');
  };

  return (
    <div className="co-card">
      <h2 className="co-card-title">Крок 2: Бюджет і терміни</h2>

      <div className="co-field">
        <label className="co-label">Бюджет проекту *</label>
        <div className="co-budgets">
          {BUDGETS.map((b) => (
            <button
              key={b.id}
              className={'co-budget-btn' + (data.budget === b.id ? ' co-budget-btn--active' : '')}
              onClick={() => onChange({ budget: b.id })}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="co-field">
        <label className="co-label">Термін виконання *</label>
        <div className="co-timelines">
          {TIMELINES.map((t) => (
            <button
              key={t.id}
              className={'co-timeline-btn' + (data.timeline === t.id ? ' co-timeline-btn--active' : '')}
              onClick={() => onChange({ timeline: t.id })}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="co-field">
        <label className="co-label">Необхідні навички (опціонально)</label>
        <div className="co-skill-row">
          <input
            className="co-input co-skill-input"
            placeholder="Наприклад: React, TypeScript..."
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          />
          <button className="co-btn-add" onClick={addSkill}>Додати</button>
        </div>
        {data.skills.length > 0 && (
          <div className="co-skills-list">
            {data.skills.map((s, i) => (
              <span key={i} className="co-skill-tag">
                {s}
                <button onClick={() => onChange({ skills: data.skills.filter((_, j) => j !== i) })}>×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="co-actions">
        <button className="co-btn-back" onClick={onBack}>← Назад</button>
        <button
          className={'co-btn-next' + (canProceed ? ' co-btn-next--active' : '')}
          onClick={onNext}
          disabled={!canProceed}
        >
          Далі →
        </button>
      </div>
    </div>
  );
}

function Step3({ data, onBack }) {
  const navigate = useNavigate();
  const category = CATEGORIES.find((c) => c.id === data.category);
  const budget = BUDGETS.find((b) => b.id === data.budget);
  const timeline = TIMELINES.find((t) => t.id === data.timeline);

  return (
    <div className="co-card">
      <h2 className="co-card-title">Крок 3: Перегляд замовлення</h2>

      <div className="co-review">
        <div className="co-review-row">
          <span className="co-review-key">НАЗВА</span>
          <span className="co-review-val">{data.title}</span>
        </div>
        <div className="co-review-row">
          <span className="co-review-key">КАТЕГОРІЯ</span>
          <span className="co-cat-chip">
            <span>{category?.icon}</span> {category?.label}
          </span>
        </div>
        <div className="co-review-row">
          <span className="co-review-key">ОПИС</span>
          <span className="co-review-val">{data.description}</span>
        </div>
        <div className="co-review-two">
          <div className="co-review-row">
            <span className="co-review-key">БЮДЖЕТ</span>
            <span className="co-review-val co-review-val--accent">{budget?.label}</span>
          </div>
          <div className="co-review-row">
            <span className="co-review-key">ТЕРМІН</span>
            <span className="co-review-val">{timeline?.label}</span>
          </div>
        </div>
      </div>

      <div className="co-notice">
        <span className="co-notice-icon">🐝</span>
        <div>
          <p className="co-notice-title">Майже готово!</p>
          <p className="co-notice-text">Після публікації замовлення фахівці зможуть надсилати свої пропозиції.</p>
          <p className="co-notice-sub">Ви зможете переглянути профілі, рейтинги та обрати найкращого виконавця.</p>
        </div>
      </div>

      <div className="co-actions">
        <button className="co-btn-back" onClick={onBack}>← Назад</button>
        <button className="co-btn-publish" onClick={() => navigate('/userpage')}>Опублікувати замовлення</button>
      </div>
    </div>
  );
}

const CreateOrder = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    timeline: '',
    skills: [],
  });

  const update = (patch) => setData((prev) => ({ ...prev, ...patch }));

  return (
    <div className="co-page">
      <CreateOrderHeader />

      <div className="co-hero">
        <h1 className="co-hero-title">Створення замовлення</h1>
        <p className="co-hero-sub">Опишіть ваше завдання, і фахівці почнуть надсилати пропозиції</p>
      </div>

      <Stepper step={step} />

      <div className="co-body">
        {step === 1 && <Step1 data={data} onChange={update} onNext={() => setStep(2)} />}
        {step === 2 && <Step2 data={data} onChange={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 data={data} onBack={() => setStep(2)} />}
      </div>

      <footer className="co-footer">Маленька праця для великих людей!</footer>
    </div>
  );
};

export default CreateOrder;
