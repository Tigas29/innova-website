import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import Header from './components/Header';
import Hero from './components/Hero';
import Numeros from './components/Numeros';
import Dor from './components/Dor';
import Diferenciais from './components/Diferenciais';
import Servicos from './components/Servicos';
import Encaminhadores from './components/Encaminhadores';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import Equipe from './components/Equipe';
import Etapas from './components/Etapas';
import FAQ from './components/FAQ';
import Convenios from './components/Convenios';
import Localizacao from './components/Localizacao';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import PilatesSEO from './pages/PilatesSEO';
import PilatesAds from './pages/PilatesAds';

function HomePage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Numeros />
      <Dor />
      <Diferenciais />
      <Servicos />
      <Encaminhadores />
      <Galeria />
      <Depoimentos />
      <Equipe />
      <Etapas />
      <FAQ />
      <Convenios />
      <Localizacao />
      <CTAFinal />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pilates" element={<PilatesSEO />} />
        <Route path="/pilates-google" element={<PilatesAds />} />
      </Routes>
    </>
  );
}

export default App;
