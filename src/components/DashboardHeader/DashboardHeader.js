import './DashboardHeader.css';
import { Link } from 'react-router-dom';
import * as icons from '../../imgs/icons';

function DashboardHeader({
    searchPlaceholder,
    searchValue,
    onSearchChange,
    actionLabel,
    actionPrefix,
    onActionClick,
    onAlertClick,
    onUserClick,
    user,
}) {
    const UserCardTag = onUserClick ? 'button' : 'div';

    return (
        <header className="dashboard-header">
            <Link to="/" className="dashboard-header-brand">
                <img src={icons.iconBee} alt="BusyBee" className="dashboard-header-brand-icon" />
                <span className="dashboard-header-brand-text">BusyBee</span>
            </Link>

            <div className="dashboard-header-search">
                <span className="dashboard-header-search-icon">⌕</span>
                <input
                    type="text"
                    placeholder={searchPlaceholder}
                    aria-label={searchPlaceholder}
                    value={searchValue}
                    onChange={(event) => onSearchChange(event.target.value)}
                />
            </div>

            <div className="dashboard-header-actions">
                <button
                    type="button"
                    className="dashboard-header-primary-btn"
                    onClick={onActionClick}
                >
                    {actionPrefix ? <span className="dashboard-header-primary-mark">{actionPrefix}</span> : null}
                    <span>{actionLabel}</span>
                </button>

                <button
                    type="button"
                    className="dashboard-header-alert-btn"
                    aria-label="Відкрити повідомлення"
                    onClick={onAlertClick}
                >
                    <img src={icons.iconKolokolchik} alt="" />
                </button>
            </div>

            <UserCardTag
                className={`dashboard-header-user-card${onUserClick ? ' dashboard-header-user-card-button' : ''}`}
                onClick={onUserClick}
                type={onUserClick ? 'button' : undefined}
                aria-label={onUserClick ? `Відкрити налаштування для ${user.name}` : undefined}
            >
                <img src={user.avatar} alt={user.name} className="dashboard-header-user-avatar" />

                <div className="dashboard-header-user-copy">
                    <h3>
                        <span>{user.role}</span>
                        {user.roleIcon ? <img src={user.roleIcon} alt="" className="dashboard-header-role-icon" /> : null}
                    </h3>
                    <p>{user.name}</p>
                </div>
            </UserCardTag>
        </header>
    );
}

export default DashboardHeader;