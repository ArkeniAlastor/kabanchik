import './MainPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import * as icons from '../../imgs/icons';

const CATEGORY_CARDS = [
    { label: 'Дизайн і графіка', icon: icons.iconDesign, count: '420+' },
    { label: 'Розробка і програмування', icon: icons.iconDev, count: '380+' },
    { label: 'Контент і копірайтинг', icon: icons.iconCopywriting, count: '320+' },
    { label: 'Маркетинг і реклама', icon: icons.iconMarketing, count: '248+' },
    { label: 'Відео і анімація', icon: icons.iconVideo, count: '210+' },
    { label: 'Аудіо', icon: icons.iconAudio, count: '180+' },
    { label: 'Бізнес і консалтинг', icon: icons.iconBusiness, count: '196+' },
    { label: 'Фотографія', icon: icons.iconPhoto, count: '114+' },
    { label: 'Переклади', icon: icons.iconGlobus, count: '96+' },
    { label: 'Архітектура та інженерія', icon: icons.iconArch, count: '92+' },
    { label: 'Навчання', icon: icons.iconEducation, count: '196+' },
    { label: 'AI та автоматизація', icon: icons.iconAI, count: '88+' },
];

const HOW_STEPS = [
    {
        number: '1',
        title: 'Створіть замовлення',
        text: 'Опишіть, що вам потрібно, і вкажіть бюджет, терміни та побажання до виконавця.'
    },
    {
        number: '2',
        title: 'Оберіть фахівця',
        text: 'Отримайте пропозиції, порівняйте профілі, відгуки та портфоліо й знайдіть свій варіант.'
    },
    {
        number: '3',
        title: 'Отримайте результат',
        text: 'Працюйте в одному просторі, спілкуйтесь у чаті та доводьте задачу до готового результату.'
    },
];

const FEATURE_CARDS = [
    { icon: icons.iconCheck, title: 'Перевірені фахівці', text: 'Профілі, відгуки і портфоліо допомагають вибирати не навмання.' },
    { icon: icons.iconMoney, title: 'Безпечні платежі', text: 'Домовленості і правила платформи зменшують ризики при співпраці.' },
    { icon: icons.iconLightning, title: 'Швидкий старт', text: 'Пошук, замовлення і спілкування вже зібрані в простий процес.' },
    { icon: icons.iconShield, title: 'Захист угод', text: 'Кожен етап роботи легше контролювати, коли все знаходиться в одному сервісі.' },
    { icon: icons.iconChat, title: 'Підтримка 24/7', text: 'Чат, кабінети і допоміжні сторінки зменшують кількість зайвих питань.' },
    { icon: icons.iconStar, title: 'Рейтинги та відгуки', text: 'Легше оцінити спеціаліста до початку роботи, а не після помилки.' },
];

const PLATFORM_STATS = [
    { value: '250K+', label: 'фахівців' },
    { value: '1,5M+', label: 'проєктів' },
    { value: '98%', label: 'задоволених клієнтів' },
    { value: '24/7', label: 'підтримка' },
];

const POPULAR_TAGS = ['Дизайн', 'Веб-розробка', 'SEO', 'Копірайтинг', 'Переклад'];

const matchesSearchQuery = (value, normalizedQuery) => {
    return !normalizedQuery || value.toLowerCase().includes(normalizedQuery);
};

function MainPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredCategories = CATEGORY_CARDS.filter((category) => matchesSearchQuery(category.label, normalizedQuery));

    const scrollToCategories = () => {
        const section = document.getElementById('mainpage-categories');

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        scrollToCategories();
    };

    const handleTagClick = (tag) => {
        setSearchQuery(tag);
        scrollToCategories();
    };

    return (
        <div className="MainPage">
            <Header />

            <main>
                {/* Hero */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <span className="hero-eyebrow">Платформа для замовників і фахівців</span>
                                <h1 className="hero-title">Знайдіть ідеального фахівця для вашого проєкту</h1>
                                <p className="hero-subtitle">Почніть з пошуку категорії, а далі переходьте до замовлення, каталогу або кабінету без зайвих кроків.</p>

                                <form className="hero-search" onSubmit={handleSearchSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Що потрібно зробити? Наприклад: дизайн лого"
                                        aria-label="Пошук категорії"
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                    />
                                    <button type="submit">Знайти</button>
                                </form>

                                <div className="hero-tags">
                                    <span className="hero-tags-label">Популярні:</span>
                                    {POPULAR_TAGS.map((tag) => (
                                        <button
                                            key={tag}
                                            type="button"
                                            className={`hero-tag ${normalizedQuery === tag.toLowerCase() ? 'active' : ''}`}
                                            aria-pressed={normalizedQuery === tag.toLowerCase()}
                                            onClick={() => handleTagClick(tag)}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>

                                <div className="hero-actions">
                                    <Link to="/create-order" className="hero-btn hero-btn--primary">Створити замовлення</Link>
                                    <Link to="/catalogue-specs" className="hero-btn hero-btn--secondary">Каталог фахівців</Link>
                                </div>
                            </div>

                            <div className="hero-image">
                                <img src={icons.iconBee} alt="BusyBee" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="categories-section" id="mainpage-categories">
                    <div className="container">
                        <h2 className="section-title">Популярні категорії</h2>
                        <p className="section-note">Знайдено {filteredCategories.length} категорій</p>

                        <div className="categories-grid">
                            {filteredCategories.length ? (
                                filteredCategories.map((category) => (
                                    <Link key={category.label} to="/category" className="cat-card">
                                        <div className="cat-icon">
                                            <img src={category.icon} alt={category.label} />
                                        </div>
                                        <p className="cat-label">{category.label}</p>
                                        <p className="cat-count">{category.count}</p>
                                    </Link>
                                ))
                            ) : (
                                <div className="categories-empty">За цим запитом категорій не знайдено.</div>
                            )}
                        </div>

                        <div className="categories-more">
                            <Link to="/category" className="btn-all-cats">Переглянути всі категорії</Link>
                        </div>
                    </div>
                </section>

                {/* How */}
                <section className="how-section">
                    <div className="container">
                        <h2 className="section-title">Як це працює</h2>
                        <p className="section-sub">Три простих кроки до результату</p>

                        <div className="steps-grid">
                            {HOW_STEPS.map((step) => (
                                <article key={step.number} className="step-card">
                                    <div className="step-num">{step.number}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-text">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="features-section">
                    <div className="container">
                        <h2 className="section-title">Чому обирають BusyBee</h2>

                        <div className="features-grid">
                            {FEATURE_CARDS.map((feature) => (
                                <article key={feature.title} className="feature-card">
                                    <div className="feature-icon">
                                        <img src={feature.icon} alt={feature.title} />
                                    </div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-text">{feature.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            {PLATFORM_STATS.map((stat) => (
                                <div key={stat.label} className="stat-item">
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="container">
                        <h2 className="cta-title">Готові почати?</h2>
                        <p className="cta-sub">Приєднуйтесь до тисяч користувачів, які вже знайшли свого фахівця або перший проєкт.</p>
                        <div className="cta-btns">
                            <Link to="/register" className="cta-btn-primary">Створити замовлення</Link>
                            <Link to="/catalogue-specs" className="cta-btn-outline">Знайти фахівця</Link>
                        </div>
                    </div>
                </section>

                {/* Banner */}
                <div className="banner-strip">
                    Маленька праця для великих людей!
                </div>
            </main>
        </div>
    );
}

export default MainPage;