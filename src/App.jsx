import { useEffect } from 'react';
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

function App() {
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

    // Observe all .reveal elements (except Hero which handles itself)
    document.querySelectorAll('.reveal').forEach((r) => obs.observe(r));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles />
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

export default App;
