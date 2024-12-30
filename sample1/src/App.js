
import './styles/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
//pages
import { Home } from './pages/Home';
import Warranty from './pages/Warranty';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import NewPatient from './pages/NewPatients';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <Router>

      <>
      <Header/>
      <HeroSection/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newpatient" element={<NewPatient />} />
        <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
