import { useState, useEffect } from 'react';
import { WA_URL, reviews, faqs } from './constants';
import Modal from './components/Modal';
import TrustBar from './components/TrustBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ConveniosStrip from './components/ConveniosStrip';
import DorSolucao from './components/DorSolucao';
import Processo from './components/Processo';
import Equipe from './components/Equipe';
import Depoimentos from './components/Depoimentos';
import Localizacao from './components/Localizacao';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';

export default function PilatesAds() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.title = 'Pilates Clínico em BH | Agende Sua Avaliação – INNOVA MOVIMENTO';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Sessões de Pilates Clínico conduzidas por fisioterapeutas em BH. 5.0 no Google. Agende agora.';

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots); }
    robots.content = 'noindex, nofollow';

    const handleKey = (e) => { if (e.key === 'Escape') setModal(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <Modal open={modal} onClose={closeModal} />
      <TrustBar />
      <Nav onCtaClick={openModal} />
      <Hero onCtaClick={openModal} waUrl={WA_URL} />
      <ConveniosStrip />
      <DorSolucao onCtaClick={openModal} />
      <Processo />
      <Equipe />
      <Depoimentos reviews={reviews} />
      <Localizacao />
      <FAQ faqs={faqs} />
      <CTAFinal onCtaClick={openModal} waUrl={WA_URL} />
    </>
  );
}
