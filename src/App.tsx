import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.tsx'
import TopBar from './components/TopBar.tsx'
import Hero from './components/Hero.tsx'
import Services from './components/Services.tsx'
import About from './components/About.tsx'
import Stats from './components/Stats.tsx'
import InfoServices from './components/InfoServices.tsx'
import DifCompetencia from './components/DifCompetencia.tsx'
import ContactCTA from './components/ContactCTA.tsx'
import Footer from './components/Footer.tsx'
import AboutUsPage from './components/AboutUsPage.tsx'
import './style/Footer.css'
import './style/ContactCTA.css'
import './style/DifCompetencia.css'
import './style/InfoServices.css'
import './style/Stats.css'
import './style/About.css'
import './style/Services.css'
import './style/Hero.css'
import './style/Navbar.css'
import './style/TopBar.css'
import Sofas from './components/Sofas/Sofas.tsx';
import Colchones from './components/Colchones/Cochones.tsx';
import Alfombras from './components/Alfombras/Alfombras.tsx';
import Edredones from './components/Edredones/Edredones.tsx';
import RestAlfombras from './components/RestAlfombras/RestAlfombras.tsx';
import Cortinas from './components/Cortinas/Cortinas.tsx';
import Precios from './components/Precios/Precios.tsx';

function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <InfoServices />
      <DifCompetencia />
      <ContactCTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />
        <Route path="/limpieza-de-sofas-a-domicilio-madrid" element={<Sofas />} />
        <Route path="/limpieza-de-colchones-a-domicilio-madrid" element={<Colchones />} />
        <Route path="/limpieza-de-alfombras-madrid" element={<Alfombras />} />
        <Route path="/limpieza-de-edredones" element={<Edredones />} />
        <Route path="/restauracion-de-alfombras" element={<RestAlfombras />} />
        <Route path="/limpieza-de-cortinas" element={<Cortinas />} />
        <Route path="/precios-limpieza-madrid" element={<Precios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
