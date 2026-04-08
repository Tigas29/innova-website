import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.png';
import atend1 from '../../assets/atend1.jpg';
import atend2 from '../../assets/atend2.jpg';
import sala4 from '../../assets/sala4.jpg';
import luciana from '../../assets/luciana-signorini-final.jpg';
import gustavo from '../../assets/gustavo-amaral-final.jpg';
import cristiane from '../../assets/cristiane-vasconcelos-final.jpg';
import mariana from '../../assets/mariana-weschenfelder-final.jpg';

const WA = 'https://wa.me/5531983444371?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20de%20Pilates%20Cl%C3%ADnico.';

/* ─── NAVBAR ─── */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(247,245,242,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cinza-quente);
`;
const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;
const NavLogo = styled.a`
  text-decoration: none;
  img { height: 40px; width: auto; display: block; }
`;
const NavLinks = styled.div`
  display: flex;
  gap: 28px;
  @media (max-width: 768px) { display: none; }
`;
const NavLink = styled.a`
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  color: var(--cinza-escuro);
  text-decoration: none;
  &:hover { color: var(--turquesa); }
`;
const NavCta = styled.a`
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 22px;
  border-radius: 50px;
  text-decoration: none;
  white-space: nowrap;
  &:hover { opacity: 0.9; }
`;

/* ─── HERO ─── */
const HeroSection = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  background: var(--creme);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 68px;
  }
`;
const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 52px 80px 28px;
  max-width: 620px;
  margin-left: auto;
  @media (max-width: 900px) {
    padding: 48px 24px 40px;
    max-width: 100%;
    margin-left: 0;
  }
`;
const HeroRight = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(to right, var(--creme) 0%, transparent 30%);
  }
  @media (max-width: 900px) {
    height: 300px;
    &::before { display: none; }
  }
`;
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(93,191,176,0.4);
  padding: 6px 14px;
  border-radius: 50px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--turquesa);
  margin-bottom: 24px;
  width: fit-content;
`;
const Dot = styled.span`
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--turquesa);
  flex-shrink: 0;
`;
const H1 = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(30px, 3.4vw, 52px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--quase-preto);
  margin-bottom: 20px;
`;
const HeroSub = styled.p`
  font-size: clamp(15px, 1.3vw, 17px);
  color: var(--cinza-medio);
  max-width: 480px;
  line-height: 1.75;
  margin-bottom: 32px;
`;
const Badges3 = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;
const SocialBadge = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--cinza-escuro);
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: 50px;
  padding: 7px 16px;
`;
const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  padding: 15px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 0 16px rgba(93,191,176,0.4), 0 4px 16px rgba(0,0,0,0.15);
  align-self: flex-start;
  margin-right: 16px;
  &:hover { opacity: 0.92; transform: translateY(-2px); }
`;
const BtnSecondary = styled.a`
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 500;
  color: var(--turquesa);
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;
const CtaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

/* ─── SHARED ─── */
const Section = styled.section`
  padding: ${p => p.alt ? '80px 0' : '80px 0'};
  background: ${p => p.dark ? 'var(--quase-preto)' : p.alt ? 'var(--branco)' : 'var(--creme)'};
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
`;
const SectionLabel = styled.div`
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--turquesa);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  &::before { content: ''; width: 20px; height: 1px; background: var(--turquesa); }
`;
const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 42px);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: ${p => p.light ? 'var(--branco)' : 'var(--quase-preto)'};
  margin-bottom: 16px;
`;
const SectionText = styled.p`
  font-size: 16px;
  color: ${p => p.light ? 'rgba(255,255,255,0.75)' : 'var(--cinza-medio)'};
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 16px;
`;

/* ─── EDUCATIVO ─── */
const EduGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 40px;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

/* ─── CARDS ─── */
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 40px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
const Card = styled.div`
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: var(--radius);
  padding: 28px 24px;
  h3 {
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 700;
    color: var(--quase-preto);
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: var(--cinza-medio);
    line-height: 1.7;
  }
`;
const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--turquesa-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  font-size: 20px;
`;

/* ─── STEPS ─── */
const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
  max-width: 680px;
`;
const Step = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;
const StepNum = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StepBody = styled.div`
  h3 {
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 700;
    color: var(--quase-preto);
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    color: var(--cinza-medio);
    line-height: 1.75;
  }
`;

/* ─── TEAM ─── */
const TeamBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`;
const TeamBadge = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--turquesa);
  background: var(--turquesa-pale);
  border-radius: 50px;
  padding: 8px 18px;
`;

/* ─── DEPOIMENTOS ─── */
const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
const TestCard = styled.div`
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: var(--radius);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TestText = styled.p`
  font-size: 15px;
  color: var(--cinza-escuro);
  line-height: 1.75;
  flex: 1;
  font-style: italic;
`;
const TestAuthor = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--cinza-medio);
`;
const Stars = styled.div`
  color: #F59E0B;
  font-size: 14px;
  letter-spacing: 2px;
`;

/* ─── FAQ ─── */
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 40px;
  max-width: 800px;
`;
const FaqItem = styled.div`
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: var(--radius);
  overflow: hidden;
`;
const FaqQ = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 18px 22px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--quase-preto);
  text-align: left;
  &:hover { color: var(--turquesa); }
`;
const FaqIcon = styled.span`
  font-size: 20px;
  color: var(--turquesa);
  flex-shrink: 0;
  transition: transform 0.3s;
  transform: ${p => p.open ? 'rotate(45deg)' : 'none'};
`;
const FaqA = styled.div`
  max-height: ${p => p.open ? '300px' : '0'};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;
const FaqAInner = styled.div`
  padding: 0 22px 18px;
  font-size: 15px;
  color: var(--cinza-medio);
  line-height: 1.75;
`;

/* ─── FORM ─── */
const FormSection = styled.section`
  padding: 80px 0;
  background: var(--creme);
`;
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 40px; }
`;
const FormBox = styled.div`
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: 20px;
  padding: 36px 32px;
  @media (max-width: 600px) { padding: 24px 20px; }
`;
const FormTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 24px;
`;
const FormField = styled.div`
  margin-bottom: 16px;
  label {
    display: block;
    font-family: var(--font-display);
    font-size: 13px;
    font-weight: 600;
    color: var(--cinza-escuro);
    margin-bottom: 6px;
  }
  input, select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--cinza-quente);
    border-radius: 10px;
    font-family: var(--font-body);
    font-size: 15px;
    color: var(--quase-preto);
    background: var(--creme);
    outline: none;
    &:focus { border-color: var(--turquesa); }
  }
`;
const FormBtn = styled.button`
  width: 100%;
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  padding: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 4px 20px rgba(93,191,176,0.35);
  &:hover { opacity: 0.92; }
`;
const FormNote = styled.p`
  text-align: center;
  font-size: 12px;
  color: var(--cinza-medio);
  margin-top: 12px;
`;
const TrustList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
`;
const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--cinza-medio);
  strong { color: var(--cinza-escuro); font-weight: 600; }
`;
const TrustDot = styled.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--turquesa);
  flex-shrink: 0;
`;

/* ─── TEAM GRID ─── */
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 36px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
`;
const TeamCard = styled.div`
  background: var(--branco);
  border-radius: 16px; overflow: hidden;
  border: 1px solid var(--cinza-quente);
  transition: var(--transition);
  &:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
`;
const TeamPhoto = styled.div`
  aspect-ratio: 3/4; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
  ${TeamCard}:hover & img { transform: scale(1.04); }
`;
const TeamInfo = styled.div`
  padding: 14px 16px;
`;
const TeamName = styled.div`
  font-family: var(--font-display); font-size: 14px; font-weight: 700;
  color: var(--quase-preto); margin-bottom: 3px;
`;
const TeamRole = styled.div`
  font-size: 12px; color: var(--turquesa);
  font-weight: 600; font-family: var(--font-display);
`;

/* ─── SCROLL DEPOIMENTOS ─── */
const scrollRevs = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
const CarouselWrap = styled.div`
  overflow: hidden; margin: 32px -28px 0;
  position: relative;
  &::before, &::after {
    content: ''; position: absolute;
    top: 0; bottom: 0; width: 80px; z-index: 2; pointer-events: none;
  }
  &::before { left: 0; background: linear-gradient(to right, var(--branco), transparent); }
  &::after { right: 0; background: linear-gradient(to left, var(--branco), transparent); }
`;
const Carousel = styled.div`
  display: flex; gap: 16px;
  width: max-content; padding: 8px 28px 16px;
  animation: ${scrollRevs} 52s linear infinite;
  &:hover { animation-play-state: paused; }
`;
const RevCard = styled.div`
  background: var(--creme); border-radius: 14px;
  padding: 22px 24px; width: 290px; flex-shrink: 0;
  border: 1px solid var(--cinza-quente);
`;
const RevStars = styled.div`
  font-size: 13px; color: #F5A623;
  letter-spacing: 2px; margin-bottom: 10px;
`;
const RevText = styled.p`
  font-size: 14px; color: var(--cinza-escuro);
  line-height: 1.7; margin-bottom: 12px; font-style: italic;
`;
const RevFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center;
`;
const RevName = styled.span`
  font-family: var(--font-display); font-size: 13px;
  font-weight: 700; color: var(--quase-preto);
`;
const RevTime = styled.span`
  font-family: var(--font-display); font-size: 11px; color: var(--cinza-medio);
`;
const ReviewsBar = styled.div`
  display: flex; align-items: center; gap: 14px;
  background: var(--turquesa-pale); border: 1px solid var(--turquesa-light);
  border-radius: 14px; padding: 14px 22px; margin-bottom: 4px; flex-wrap: wrap;
`;
const ReviewsText = styled.div`
  font-family: var(--font-display); font-size: 15px; color: var(--cinza-escuro);
  strong { color: var(--quase-preto); font-size: 17px; }
`;

/* ─── IMAGEM LATERAL ─── */
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 52px; align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 28px; }
`;
const ImgCol = styled.div`
  border-radius: 20px; overflow: hidden;
  aspect-ratio: 4/3;
  order: ${p => p.$right ? 2 : 0};
  @media (max-width: 768px) { order: 0; }
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

/* ─── FOOTER ─── */
const FooterMin = styled.footer`
  background: var(--quase-preto);
  padding: 24px 28px;
  text-align: center;
  font-family: var(--font-display);
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  a { color: rgba(255,255,255,0.6); text-decoration: none; margin: 0 8px; &:hover { color: #fff; } }
`;

const WaFloat = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 200;
  background: #25D366;
  color: var(--branco);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(37,211,102,0.4);
  &:hover { transform: scale(1.08); }
  svg { width: 30px; height: 30px; }
`;

const faqs = [
  { q: 'Em quanto tempo vou sentir resultado?', a: 'A maioria dos pacientes relata melhora entre a terceira e a quarta sessão. Resultados consistentes, como redução significativa da dor e ganho de mobilidade, costumam aparecer entre o primeiro e o terceiro mês, dependendo da condição.' },
  { q: 'Como funciona a avaliação?', a: 'Você agenda pelo WhatsApp ou formulário. Um fisioterapeuta avalia sua postura, mobilidade, histórico e objetivos em aproximadamente 40 minutos. No final, você recebe uma recomendação personalizada, sem compromisso de continuidade.' },
  { q: 'Vocês atendem por convênio ou Wellhub?', a: 'Sim. Aceitamos alguns convênios e também somos parceiros do Wellhub (antigo Gympass). Para a maioria dos serviços, o atendimento é particular, o que garante sessões mais longas, sem limite de quantidade e com atenção individualizada. Entre em contato para verificar se o seu convênio é aceito.' },
  { q: 'Preciso de encaminhamento médico?', a: 'Depende do procedimento. Para fisioterapia convencional, o encaminhamento médico é necessário. Para Pilates Clínico, você agenda diretamente. Se tiver exames ou laudos, traga, eles ajudam no planejamento.' },
  { q: 'Qual a diferença para um estúdio de pilates convencional?', a: 'Aqui, quem conduz as sessões são fisioterapeutas, não instrutores. O plano é baseado em avaliação clínica, não em sequência padrão. É atendimento individual ou em trio, nunca grupo grande. E os sócios são professores de pós-graduação na área.' },
  { q: 'Quais serviços vocês oferecem além do Pilates?', a: 'Além do Pilates Clínico, trabalhamos com Fisioterapia, Gyrotonic, RPG e reabilitação pós-operatória. Cada serviço é conduzido por fisioterapeutas com plano montado para a sua necessidade.' },
  { q: 'Onde fica a INNOVA MOVIMENTO?', a: 'Rua Araguari, 1750, sala 800, bairro Santo Agostinho, Belo Horizonte, MG. Região central, com fácil acesso e estacionamento próximo.' },
  { q: 'Pilates Clínico serve para quem nunca fez pilates?', a: 'Sim. Justamente por ser conduzido por fisioterapeutas com avaliação clínica, o Pilates Clínico é seguro e indicado para iniciantes, inclusive para quem tem dor ou limitações. O plano começa do seu nível real.' },
];

const cards = [
  { icon: '🔁', title: 'Dor crônica nas costas ou coluna', text: 'Lombalgia, cervicalgia, dor ciática. O plano é montado para a sua condição, não para fortalecimento geral.' },
  { icon: '🏥', title: 'Reabilitação pós-cirúrgica', text: 'Pós-operatório de coluna, joelho, ombro ou quadril. Cada fase da recuperação tem um protocolo que muda conforme você evolui.' },
  { icon: '📋', title: 'Hérnia de disco e protusão', text: 'Exercícios escolhidos com base no tipo e localização da hérnia. Sem movimentos genéricos que podem piorar o quadro.' },
  { icon: '🏃', title: 'Prevenção de lesões', text: 'Para quem pratica esporte, corre ou treina e quer manter o corpo funcionando sem surpresas.' },
  { icon: '🧘', title: 'Mobilidade e postura', text: 'Quem trabalha sentado o dia todo e sente o corpo travar. Sessões focadas em devolver amplitude de movimento.' },
  { icon: '👴', title: 'Terceira idade e condições especiais', text: 'Osteoporose, artrose, fibromialgia. Sessões adaptadas com segurança e progressão individualizada.' },
];

export default function PilatesSEO() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', objetivo: '', origem: '' });

  useEffect(() => {
    document.title = 'Pilates Clínico em BH com Fisioterapeutas | INNOVA MOVIMENTO';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Pilates Clínico com sessões conduzidas por fisioterapeutas no Santo Agostinho, BH. Avaliação clínica individual, equipe com 13 profissionais e nota 5.0 no Google. Agende sua avaliação.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://innovamovimento.com.br/pilates';
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá! Me chamo ${form.nome}. Gostaria de agendar minha avaliação de Pilates Clínico. Objetivo: ${form.objetivo}.`);
    window.open(`https://wa.me/5531983444371?text=${msg}`, '_blank');
  }

  return (
    <>
      <Nav>
        <NavInner>
          <NavLogo href="/"><img src={logo} alt="INNOVA MOVIMENTO" /></NavLogo>
          <NavLinks>
            <NavLink href="#como-funciona">Como Funciona</NavLink>
            <NavLink href="#equipe">Equipe</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </NavLinks>
          <NavCta href={WA} target="_blank">Agendar Avaliação</NavCta>
        </NavInner>
      </Nav>

      {/* HERO */}
      <HeroSection>
        <HeroLeft>
          <Badge><Dot />Pilates Clínico · Santo Agostinho · BH</Badge>
          <H1>Pilates Clínico em Belo Horizonte com fisioterapeutas</H1>
          <HeroSub>Cada sessão é montada a partir da sua avaliação clínica. Individual ou em trio, com fisioterapeutas que também são professores de pós-graduação. Santo Agostinho, BH.</HeroSub>
          <Badges3>
            <SocialBadge>★ 5.0 no Google</SocialBadge>
            <SocialBadge>13 fisioterapeutas</SocialBadge>
            <SocialBadge>Professores de pós-graduação</SocialBadge>
          </Badges3>
          <CtaRow>
            <BtnPrimary href={WA} target="_blank">Agendar Avaliação</BtnPrimary>
            <BtnSecondary href="#como-funciona">Entenda como funciona</BtnSecondary>
          </CtaRow>
        </HeroLeft>
        <HeroRight>
          <img src={atend1} alt="Fisioterapeuta conduzindo sessão de Pilates Clínico em Belo Horizonte" fetchPriority="high" />
        </HeroRight>
      </HeroSection>

      {/* EDUCATIVO */}
      <Section alt>
        <Container>
          <TwoCol>
            <div>
              <SectionLabel>O que é</SectionLabel>
              <SectionTitle>Pilates Clínico: o que é e por que é diferente do pilates convencional</SectionTitle>
              <SectionText>Pilates Clínico é uma abordagem terapêutica do método Pilates, conduzida por fisioterapeutas. Diferente das aulas em grupo de estúdios convencionais, aqui cada exercício é escolhido com base em uma avaliação clínica, considerando diagnóstico, histórico, limitações e objetivos de cada pessoa.</SectionText>
              <SectionText>Na INNOVA MOVIMENTO, as sessões são individuais ou em trio (máximo 3 pessoas). Quem conduz não é um instrutor, é um fisioterapeuta com formação clínica. O raciocínio por trás de cada exercício é clínico, não genérico.</SectionText>
              <SectionText>Se você já fez pilates e não viu resultado duradouro, a diferença pode estar em quem conduzia. Quando o profissional entende a sua condição clínica, o exercício deixa de ser genérico e passa a ser tratamento.</SectionText>
            </div>
            <ImgCol $right>
              <img src={atend2} alt="Fisioterapeuta conduzindo sessão de Pilates Clínico em Belo Horizonte" loading="lazy" />
            </ImgCol>
          </TwoCol>
        </Container>
      </Section>

      {/* PARA QUEM */}
      <Section>
        <Container>
          <SectionLabel>Indicações</SectionLabel>
          <SectionTitle>Para quem o Pilates Clínico é indicado</SectionTitle>
          <CardsGrid>
            {cards.map((c, i) => (
              <Card key={i}>
                <CardIcon>{c.icon}</CardIcon>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Card>
            ))}
          </CardsGrid>
        </Container>
      </Section>

      {/* COMO FUNCIONA */}
      <Section alt id="como-funciona">
        <Container>
          <SectionLabel>Como funciona</SectionLabel>
          <SectionTitle>Como funciona o Pilates Clínico na INNOVA MOVIMENTO</SectionTitle>
          <Steps>
            <Step>
              <StepNum>01</StepNum>
              <StepBody>
                <h3>Avaliação clínica com fisioterapeuta</h3>
                <p>40 minutos. O fisioterapeuta avalia postura, mobilidade, histórico clínico e seus objetivos. Você sai com uma recomendação clara, sem compromisso, sem pressão. Agende pelo WhatsApp ou formulário; respondemos em até 2 horas.</p>
              </StepBody>
            </Step>
            <Step>
              <StepNum>02</StepNum>
              <StepBody>
                <h3>Plano montado para o seu corpo</h3>
                <p>Com base na avaliação, o fisioterapeuta monta um plano de exercícios para a sua condição. Se você tem hérnia, o plano é para hérnia. Se é pós-operatório, o plano é para a fase exata da sua recuperação. Nada de sequência padrão.</p>
              </StepBody>
            </Step>
            <Step>
              <StepNum>03</StepNum>
              <StepBody>
                <h3>Evolução acompanhada sessão a sessão</h3>
                <p>Frequência ideal para a maioria: 2 a 3 vezes por semana. Cada sessão é ajustada conforme sua evolução. A maioria dos pacientes relata melhora entre a terceira e a quarta sessão.</p>
              </StepBody>
            </Step>
          </Steps>
          <div style={{ marginTop: 40 }}>
            <BtnPrimary href={WA} target="_blank">Agendar Avaliação</BtnPrimary>
          </div>
        </Container>
      </Section>

      {/* EQUIPE */}
      <Section id="equipe">
        <Container>
          <SectionLabel>A equipe</SectionLabel>
          <SectionTitle>Quem conduz as suas sessões ensina quem forma os próximos fisioterapeutas</SectionTitle>
          <SectionText>São 3 sócios-fundadores que são professores de pós-graduação em fisioterapia. Não é um título no currículo, é literalmente quem forma os próximos profissionais do mercado. Essa equipe de 13 fisioterapeutas trata pacientes de manhã e dá aula na universidade à noite.</SectionText>
          <TeamGrid>
            {[
              { photo: luciana, name: 'Luciana Signorini', role: 'Fisioterapeuta · Professora de Pós-graduação' },
              { photo: gustavo, name: 'Gustavo Amaral', role: 'Fisioterapeuta · Palestrante Nacional' },
              { photo: cristiane, name: 'Cristiane Vasconcelos', role: 'Fisioterapeuta · Professora de Pós-graduação' },
              { photo: mariana, name: 'Mariana Weschenfelder', role: 'Fisioterapeuta · Especialista Clínica' },
            ].map((t, i) => (
              <TeamCard key={i}>
                <TeamPhoto><img src={t.photo} alt={t.name} loading="lazy" /></TeamPhoto>
                <TeamInfo><TeamName>{t.name}</TeamName><TeamRole>{t.role}</TeamRole></TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
          <TeamBadges style={{ marginTop: 24 }}>
            <TeamBadge>13 fisioterapeutas</TeamBadge>
            <TeamBadge>3 professores de pós-graduação</TeamBadge>
            <TeamBadge>Palestrantes nacionais</TeamBadge>
            <TeamBadge>Formação contínua em evidência científica</TeamBadge>
          </TeamBadges>
        </Container>
      </Section>

      {/* DEPOIMENTOS */}
      <Section alt id="depoimentos">
        <Container>
          <SectionLabel>Depoimentos</SectionLabel>
          <SectionTitle>Quem passou pela Innova voltou. E indicou.</SectionTitle>
          <ReviewsBar>
            <div style={{ fontSize: 18, color: '#F5A623', letterSpacing: 2 }}>★★★★★</div>
            <ReviewsText><strong>5.0</strong> no Google · +60 avaliações verificadas</ReviewsText>
          </ReviewsBar>
        </Container>
        <CarouselWrap>
          <Carousel>
            {[...seoReviews, ...seoReviews].map((rev, i) => (
              <RevCard key={i}>
                <RevStars>★★★★★</RevStars>
                <RevText>{rev.text}</RevText>
                <RevFooter>
                  <RevName>{rev.name}</RevName>
                  <RevTime>{rev.time}</RevTime>
                </RevFooter>
              </RevCard>
            ))}
          </Carousel>
        </CarouselWrap>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <SectionLabel>Dúvidas</SectionLabel>
          <SectionTitle>Perguntas frequentes sobre Pilates Clínico em BH</SectionTitle>
          <FaqList>
            {faqs.map((f, i) => (
              <FaqItem key={i}>
                <FaqQ onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <FaqIcon open={openFaq === i}>+</FaqIcon>
                </FaqQ>
                <FaqA open={openFaq === i}>
                  <FaqAInner>{f.a}</FaqAInner>
                </FaqA>
              </FaqItem>
            ))}
          </FaqList>
        </Container>
      </Section>

      {/* FORMULÁRIO */}
      <FormSection id="agendar">
        <Container>
          <FormGrid>
            <div>
              <SectionLabel>Agende agora</SectionLabel>
              <SectionTitle>O melhor momento para começar era ontem. O segundo melhor é agora.</SectionTitle>
              <SectionText>Uma avaliação de 40 minutos pode mudar a forma como você se relaciona com o seu corpo. Sem compromisso. Só clareza sobre o que você precisa.</SectionText>
              <TrustList>
                <TrustItem><TrustDot /><strong>★ 5.0</strong>&nbsp;no Google</TrustItem>
                <TrustItem><TrustDot /><strong>Santo Agostinho</strong>&nbsp;, Belo Horizonte</TrustItem>
                <TrustItem><TrustDot />Respondemos em <strong>até 2 horas</strong></TrustItem>
              </TrustList>
            </div>
            <FormBox>
              <FormTitle>Agende sua avaliação</FormTitle>
              <form onSubmit={handleSubmit}>
                <FormField>
                  <label>Nome completo *</label>
                  <input type="text" required placeholder="Seu nome" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} />
                </FormField>
                <FormField>
                  <label>WhatsApp com DDD *</label>
                  <input type="tel" required placeholder="(31) 99999-9999" value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})} />
                </FormField>
                <FormField>
                  <label>E-mail *</label>
                  <input type="email" required placeholder="seu@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </FormField>
                <FormField>
                  <label>Principal objetivo *</label>
                  <select required value={form.objetivo} onChange={e => setForm({...form, objetivo: e.target.value})}>
                    <option value="">Selecione...</option>
                    <option>Aliviar dor</option>
                    <option>Reabilitação pós-cirúrgica</option>
                    <option>Prevenir lesões</option>
                    <option>Melhorar mobilidade e postura</option>
                    <option>Complementar tratamento</option>
                    <option>Ainda não sei</option>
                  </select>
                </FormField>
                <FormField>
                  <label>Como nos encontrou?</label>
                  <select value={form.origem} onChange={e => setForm({...form, origem: e.target.value})}>
                    <option value="">Selecione...</option>
                    <option>Google</option>
                    <option>Instagram</option>
                    <option>Indicação</option>
                    <option>Outro</option>
                  </select>
                </FormField>
                <FormBtn type="submit">Agendar Minha Avaliação →</FormBtn>
                <FormNote>🔒 Dados confidenciais. Respondemos em até 2 horas.</FormNote>
              </form>
            </FormBox>
          </FormGrid>
        </Container>
      </FormSection>

      {/* FOOTER */}
      <FooterMin>
        INNOVA MOVIMENTO · Santo Agostinho, Belo Horizonte, MG ·
        <a href="https://wa.me/5531983444371" target="_blank">WhatsApp</a> ·
        <a href="https://instagram.com/innova.movimento" target="_blank">Instagram</a> ·
        © 2026
      </FooterMin>

      <WaFloat href={WA} target="_blank" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </WaFloat>
    </>
  );
}
