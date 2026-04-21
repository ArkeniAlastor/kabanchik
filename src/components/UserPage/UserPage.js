import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    iconBee,
    iconKolokolchik,
} from '../../imgs/icons';
import './UserPage.css'

function UserPage() {
    {/* Переключение контента главного меню, надо протестировать на роботоспособность*/ }
    const tabs = [
        { key: 'overview', label: 'Огляд' },
        { key: 'orders', label: 'Всі Замовлення' },
        { key: 'active', label: 'Активні' },
        { key: 'completed', label: 'Завершені' },
        { key: 'messages', label: 'Повідомлення' },
        { key: 'favorites', label: 'Обране' },
        { key: 'settings', label: 'Налаштування' },
    ];

    const contentMap = {
        overview: <div>Огляд</div>,
        orders: <div>Всі Замовлення</div>,
        active: <div>Активні замовлення</div>,
        completed: <div>Завершені замовлення</div>,
        messages: <div>овідомлення</div>,
        favorites: <div>Обране</div>,
        settings: <div>Налаштування</div>,
    };

    {/* Вот это засунуть туда, где будет поиск (мне в лень делать норм поиск, да и зачем, верно?)
    <input type="text" placeholder="Що потрібно зробити? (наприклад: дизайн лого)" aria-label="Пошук" />
*/}

    return (
        <header className='header-user'>
            <div className='brand'>
                <Link to="###"/* Ходят слухи, что маршрутизация должна работать*/ className="main-page-link">
                    <img src={iconBee} alt="BusyBee" className="brand-bee" />
                    <span className="brand-text">BusyBee</span>
                </Link>
            </div>
            <div className="order-search">
                <input type="text" placeholder="Пошук замовлень..." aria-label="Пошук" />
            </div>

        </header>
        /*после хедера сделать под раздел с кнопками переключения контента и протестировать*/
    )
};

