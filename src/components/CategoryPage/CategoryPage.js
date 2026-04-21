import './CategoryPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {iconCheck,iconMoney,iconLightning,iconShield,iconChat,iconStar,iconDarts,iconStudent,iconTree,iconTriangle,iconVessilya,iconHeadphones,iconLupa,iconOffice,iconTassel,iconCloud,iconGamePad,iconGlobus,iconBulb,iconNotes,iconBook,iconShine,iconPlenka,iconCircus,iconBlockChain,iconAI,iconEmail,iconSiren,iconMicrophone,iconNewspaper,iconPencil,iconCamera,iconComedyMask,iconMusical,iconPeizaj,iconChuvak,iconMobila } from '../../imgs/icons';


const features = [
    { icon: iconCheck, title: 'Перевірені фахівці', text: 'Всі спеціалісти проходять верифікацію' },
    { icon: iconMoney, title: 'Безпечні платежі', text: 'Гарантія повернення коштів' },
    { icon: iconLightning, title: 'Швидкий старт', text: 'Знайдіть фахівця за кілька хвилин' },
    { icon: iconShield, title: 'Захист угод', text: 'Безпека кожної транзакції' },
    { icon: iconChat, title: 'Підтримка 24/7', text: 'Завжди готові вам допомогти' },
    { icon: iconStar, title: 'Рейтинги та відгуки', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconDarts, title: 'Perfomance маркетинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconStudent, title: 'Online курси', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconHome, title: 'Дизайн інтер/єру', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconTree, title: 'Ландшафтний дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconTriangle, title: '3D візуалізація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconVessilya, title: 'Весільна фотографія', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconHeadphones, title: 'Звуковий дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconLupa, title: 'SEO оптимізація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconOffice, title: 'Брендинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconTassel, title: 'Дизайн упаковки', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconCloud, title: 'DevOps', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconGamePad, title: 'Розробка ігор', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconGlobus, title: 'Переклад текстів', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconBulb, title: 'Стартап консалтинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconNotes, title: 'Джингли та саундтреки', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconBook, title: 'Рерайтинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconShine, title: 'Анімація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconPlenka, title: 'Motion дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconCircus, title: 'Дизайн презентацій', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconBlockChain, title: 'Blockchain', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconAI, title: 'AI/ML розробка', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconEmail, title: 'Email маркетинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconSiren, title: 'SMM', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMicrophone, title: 'Сценарії', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconNewspaper, title: 'Контент-маркетинг', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconPencil, title: 'Редагування', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconCamera, title: 'Відеозйомка', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconComedyMask, title: 'Ілюстрація', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMusical, title: 'Створення музики', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconPeizaj, title: 'Дизайн логотипів', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconChuvak, title: 'Усний переклад', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMobila, title: 'UI/UX дизайн', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMusical, title: 'Створення музики', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMusical, title: 'Створення музики', text: 'Обирайте на основі реальних відгуків' },
    { icon: iconMusical, title: 'Створення музики', text: 'Обирайте на основі реальних відгуків' },
  ];


const CategoryPage = () => (
  <div className="CategoryPage">
    <Header/>
    <Footer/>
    
  </div>
);

export default CategoryPage;
