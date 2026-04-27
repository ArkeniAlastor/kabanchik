import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import ForgotPage from './components/ForgotPage/ForgotPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import OffersPage from './components/OffersPage/OffersPage';
import UserPage from './components/UserPage/UserPage';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SpecialistsDirectory from './components/SpecialistsDirectory/SpecialistsDirectory';
import SpecPage from './components/SpecPage/SpecPage';
import ServicesPage from './components/Services/Services';
import TermsPage from './components/TermsPage/TermsPage';


function AppContent() {
  // вот тут юзаеться локатион, что бы показать системе, куда футер не ставить
  const location = useLocation();
  const noFooterRoutes = ['/login', '/register', '/forgot', '/terms', '/services'];
  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);
  //чут чут перелопаченный контент
  return (
    <div className="app-wrapper">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/catalogue-specs" element={<SpecialistsDirectory />} />
          <Route path='/SpecPage' element={<SpecPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      {shouldShowFooter && <Footer />}
    </div>
  );
}
// Маршрутка теперь вот тут
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
