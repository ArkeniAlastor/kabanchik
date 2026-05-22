import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import ForgotPage from './components/ForgotPage/ForgotPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import OffersPage from './components/OffersPage/OffersPage';
// import UserPage from './components/UserPage/UserPage';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SpecialistsDirectory from './components/SpecialistsDirectory/SpecialistsDirectory';
// import SpecPage from './components/SpecPage/SpecPage';
import ServicesPage from './components/Services/Services';
import TermsPage from './components/TermsPage/TermsPage';
import PrivacyPage from './components/PrivacyPage/PrivacyPage';
import CustomerHelpPage from './components/CustomerHelpPage/CustomerHelpPage';
import HowWorkPage from './components/HowWorkPage/HowWorkPage';
import HelpForSpec from './components/HelpForSpec/HelpForSpec'
import HelpPage from './components/HelpPage/HelpPage';
import AboutPage from './components/AboutPage/AboutPage';


function AppContent() {
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
          {/* <Route path="/userpage" element={<UserPage />} /> */}
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/catalogue-specs" element={<SpecialistsDirectory />} />
          {/* <Route path='/SpecPage' element={<SpecPage />} /> */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/customer-help" element={<CustomerHelpPage />} />
          <Route path="/HowWorkPage" element={<HowWorkPage />} />
          <Route path='/HelpForSpec' element={<HelpForSpec />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
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
