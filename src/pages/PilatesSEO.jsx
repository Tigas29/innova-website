import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png';
import heroPilates from '../assets/hero pilates.jpg';
import equipeImg from '../assets/imagens todos os profissionais juntos.jpeg';
import luciana from '../assets/luciana-signorini-final.jpg';
import gustavo from '../assets/gustavo-amaral-final.jpg';
import cristiane from '../assets/cristiane-vasconcelos-final.jpg';
import mariana from '../assets/mariana-weschenfelder-final.jpg';

const WA_BASE = 'https://wa.me/5531999476615?text=';
const wa = (msg) => `${WA_BASE}${encodeURIComponent(msg)}`;

/* ─── DATA ─── */
const DEPOIMENTOS = [
  { initials: 'AT', name: 'André Teixeira', tag: 'Pilates Clínico · 10 meses', text: '"Eu me curei de uma hérnia cervical com indicação cirúrgica de dois médicos na Innova. Se você deseja Innovar sua saúde e bem estar, não existe lugar para estar, a não ser aqui!"' },
  { initials: 'AA', name: 'Adriana Araújo', tag: 'Pilates Clínico · 8 meses', text: '"Comecei com dores na coluna que me impediam de trabalhar. Após 3 meses de Pilates Clínico na Innova, recuperei minha qualidade de vida. A atenção dos fisioterapeutas faz toda a diferença."' },
  { initials: 'LH', name: 'Ligia Horacio', tag: 'Pilates Clínico · 3 anos', text: '"Há alguns anos estou na Innova e tenho conseguido excelentes resultados. Me livrei de uma cirurgia no joelho devido a artrose. Muita gratidão a toda equipe pelo cuidado, atenção e carinho."' },
  { initials: 'LC', name: 'Luiz Carlos Castro', tag: 'Pilates Clínico · 10 meses', text: '"Acompanho minha mãe de 85 anos e ela está adorando : sente melhoras a cada sessão. Os profissionais são atenciosos e adaptam os exercícios perfeitamente para ela."' },
  { initials: 'DB', name: 'Diego Bucco', tag: 'Pilates pós-cirúrgico · 6 meses', text: '"Procurei a Innova após uma cirurgia no quadril. O Pilates Clínico foi fundamental para minha recuperação. Profissionais extremamente qualificados que entendem cada detalhe do movimento."' },
  { initials: 'MM', name: 'Mauro Moura', tag: 'Pilates Clínico · 1 ano', text: '"Pratico Pilates Clínico na Innova há mais de um ano. A diferença para outros lugares é clara: turma pequena, atenção individualizada e profissionais que realmente sabem o que estão fazendo."' },
];

const FAQS = [
  { q: 'Qual a diferença entre Pilates Clínico e Pilates Funcional?', a: 'O Pilates Clínico é conduzido por fisioterapeuta e voltado para reabilitação, prevenção e tratamento de disfunções musculoesqueléticas. Cada exercício é prescrito individualmente após avaliação. O Pilates Funcional foca em performance e condicionamento para pessoas saudáveis, geralmente em grupos maiores sem avaliação prévia. Na INNOVA, nosso Pilates é clínico: indicado tanto para quem tem queixas quanto para prevenção com acompanhamento especializado.' },
  { q: 'Quanto custa o Pilates Clínico na INNOVA MOVIMENTO?', a: 'As turmas Trio (máximo 3 alunos) têm planos mensais a partir de R$250 (1x/semana), R$460 (2x/semana) e R$670 (3x/semana). A modalidade Dupla começa em R$380/mês por pessoa. A sessão avulsa custa R$80. A avaliação fisioterápica de Pilates é R$190 para alunos matriculados (30% de desconto). Entre em contato pelo WhatsApp para confirmar horários disponíveis.' },
  { q: 'Em quanto tempo vou sentir resultado?', a: 'Depende do objetivo e da frequência. Para queixas de dor, muitos alunos relatam melhora já nas primeiras sessões. Para resultados de postura, força e mobilidade, o ideal é 2 a 3 meses de prática regular. O Pilates Clínico funciona por acúmulo: quanto maior a frequência e constância, mais rápido o resultado. Nossa equipe avalia sua evolução e ajusta os exercícios continuamente.' },
  { q: 'Vocês aceitam convênio para o Pilates?', a: 'Para o Pilates Clínico, trabalhamos com alguns convênios. O melhor caminho é nos contatar pelo WhatsApp informando o seu plano : verificamos em tempo real. A avaliação fisioterápica de Pilates também pode ser coberta dependendo do seu benefício. Não deixe de perguntar antes de vir.' },
  { q: 'Preciso ter experiência com Pilates para começar?', a: 'Não. A maioria dos nossos alunos começa sem nenhuma experiência com Pilates. Por isso a avaliação inicial é tão importante : partimos do zero, entendemos seu histórico e seu corpo, e construímos a progressão de forma segura. Não tem iniciante demais para o Pilates Clínico.' },
  { q: 'O Pilates Clínico substitui a fisioterapia?', a: 'Em muitos casos, sim. Para queixas de coluna, postura e prevenção de lesões, o Pilates Clínico cumpre um papel terapêutico equivalente à fisioterapia convencional. Para condições mais agudas (pós-operatório imediato, lesões recentes), o indicado é iniciar com sessões individuais de fisioterapia e migrar para o Pilates na fase de manutenção. Nossa equipe te orienta durante a avaliação qual é o melhor caminho.' },
  { q: 'Onde fica a INNOVA MOVIMENTO?', a: 'Estamos na Rua Araguari, 1750, Sala 800, no bairro Santo Agostinho, em Belo Horizonte (MG). Uma localização central, de fácil acesso por metrô e com estacionamento próximo. Entre em contato pelo WhatsApp para mais informações sobre como chegar.' },
];

const PARA_QUEM = [
  { icon: '🦴', title: 'Dores na Coluna', desc: 'Hérnia de disco, dor lombar crônica, cervicalgia. Exercícios adaptados à sua condição.' },
  { icon: '🔄', title: 'Pós-Operatório', desc: 'Reabilitação após cirurgias ortopédicas. Retorno seguro ao movimento com acompanhamento especializado.' },
  { icon: '🏃', title: 'Atletas e Esportistas', desc: 'Melhora de performance, prevenção de lesões e recuperação de overuse. Para quem exige do corpo.' },
  { icon: '👴', title: 'Terceira Idade', desc: 'Equilíbrio, força e mobilidade com total segurança. Exercícios adaptados à faixa etária.' },
  { icon: '💼', title: 'Sedentários', desc: 'Retorno ao movimento sem risco. Progressão individualizada para quem ficou parado por muito tempo.' },
  { icon: '🤰', title: 'Gestantes e Pós-Parto', desc: 'Preparação do corpo para o parto e recuperação pós-parto com segurança e acompanhamento técnico.' },
];

/* ─── NAV ─── */
const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 14px 0;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--cinza-quente), 0 4px 20px rgba(0,0,0,0.06);
`;
const NavInner = styled.div`
  max-width: 1100px; margin: 0 auto; padding: 0 28px;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
`;
const NavLogo = styled.a`
  text-decoration: none;
  img { height: 36px; width: auto; display: block; }
`;
const NavLinks = styled.div`
  display: flex; gap: 28px;
  @media (max-width: 768px) { display: none; }
`;
const NavLink = styled.a`
  font-family: var(--font-display);
  font-size: 14px; font-weight: 500;
  color: var(--cinza-escuro); text-decoration: none;
  &:hover { color: var(--turquesa); }
`;
const NavCta = styled.a`
  background: var(--grad); color: var(--branco);
  font-family: var(--font-display); font-weight: 600; font-size: 13px;
  padding: 9px 18px; border-radius: 50px; text-decoration: none;
  white-space: nowrap; box-shadow: 0 0 10px rgba(93,191,176,0.35);
  transition: var(--transition);
  &:hover { transform: translateY(-1px); box-shadow: 0 0 20px rgba(93,191,176,0.7); }
`;

/* ─── HERO ─── */
const HeroSection = styled.section`
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  overflow: hidden; background: var(--creme);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto; padding-top: 68px;
  }
`;
const HeroLeft = styled.div`
  display: flex; flex-direction: column; justify-content: center;
  padding: 120px 52px 80px 28px;
  max-width: 680px; margin-left: auto;
  @media (max-width: 900px) {
    padding: 48px 24px 40px; max-width: 100%; margin-left: 0;
  }
`;
const HeroRight = styled.div`
  position: relative; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
  &::before {
    content: ''; position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(to right, var(--creme) 0%, transparent 30%);
  }
  @media (max-width: 900px) {
    height: 300px;
    &::before { display: none; }
  }
`;
const Badge = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(93,191,176,0.4);
  padding: 6px 14px; border-radius: 50px;
  font-family: var(--font-display); font-size: 11px; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--turquesa); margin-bottom: 24px; width: fit-content;
`;
const BadgeDot = styled.span`
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--turquesa); flex-shrink: 0;
`;
const H1 = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(30px, 3.4vw, 52px);
  font-weight: 700; line-height: 1.1; letter-spacing: -0.03em;
  color: var(--quase-preto); margin-bottom: 20px;
  em { font-style: normal; color: var(--roxo); }
`;
const HeroSub = styled.p`
  font-size: clamp(15px, 1.3vw, 17px); color: var(--cinza-medio);
  max-width: 480px; line-height: 1.75; margin-bottom: 32px;
`;
const HeroCtaRow = styled.div`
  display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
  @media (max-width: 600px) { flex-direction: column; align-items: flex-start; }
`;
const BtnPrimary = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--grad); color: var(--branco);
  font-family: var(--font-display); font-weight: 600; font-size: 15px;
  padding: 14px 28px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 0 16px rgba(93,191,176,0.4), 0 4px 16px rgba(0,0,0,0.15);
  transition: var(--transition);
  &:hover { transform: translateY(-2px); box-shadow: 0 0 28px rgba(93,191,176,0.6); }
`;
const BtnSecondary = styled.a`
  font-family: var(--font-display); font-size: 15px; font-weight: 500;
  color: var(--turquesa); text-decoration: none;
  &:hover { text-decoration: underline; }
`;
const HeroTrust = styled.div`
  display: flex; gap: 20px; flex-wrap: wrap; margin-top: 32px;
`;
const TrustPill = styled.div`
  font-family: var(--font-display); font-size: 13px; font-weight: 600;
  color: var(--cinza-escuro); background: var(--branco);
  border: 1px solid var(--cinza-quente); border-radius: 50px; padding: 7px 16px;
`;

/* ─── SHARED ─── */
const Container = styled.div`
  max-width: 1100px; margin: 0 auto; padding: 0 28px;
`;
const Section = styled.section`
  padding: 80px 0;
  background: ${p => p.$dark ? 'var(--roxo-deep)' : p.$alt ? 'var(--branco)' : 'var(--creme)'};
  @media (max-width: 600px) { padding: 56px 0; }
`;
const SectionLabel = styled.div`
  font-family: var(--font-display); font-size: 11px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: ${p => p.$light ? 'var(--turquesa-light)' : 'var(--turquesa)'};
  margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
  &::before { content: ''; width: 20px; height: 1px; background: ${p => p.$light ? 'var(--turquesa-light)' : 'var(--turquesa)'}; }
`;
const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 700; line-height: 1.12; letter-spacing: -0.02em;
  color: ${p => p.$light ? 'var(--branco)' : 'var(--quase-preto)'};
  margin-bottom: 16px;
`;
const SectionText = styled.p`
  font-size: 16px; line-height: 1.8;
  color: ${p => p.$light ? 'rgba(255,255,255,0.75)' : 'var(--cinza-medio)'};
  max-width: 680px; margin-bottom: 16px;
`;

/* ─── EDUCATIONAL ─── */
const TwoCol = styled.div`
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 52px; align-items: center; margin-top: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 28px; }
`;
const ImgCol = styled.div`
  border-radius: 20px; overflow: hidden; aspect-ratio: 4/3;
  order: ${p => p.$right ? 2 : 0};
  @media (max-width: 768px) { order: 0; }
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

/* ─── PARA QUEM ─── */
const PerfilGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; margin-top: 48px;
  @media (max-width: 600px) { grid-template-columns: repeat(2, 1fr); }
`;
const PerfilCard = styled.div`
  background: var(--branco); border-radius: var(--radius);
  padding: 28px 24px; border: 1px solid var(--cinza-quente);
  transition: var(--transition);
  &:hover { border-color: var(--roxo-soft); transform: translateY(-3px); }
  .icon { font-size: 32px; margin-bottom: 14px; }
  h3 { font-size: 15px; font-weight: 700; color: var(--quase-preto); margin-bottom: 8px; font-family: var(--font-display); }
  p { font-size: 13px; color: var(--cinza-medio); line-height: 1.6; }
`;

/* ─── DIFERENCIAIS (dark) ─── */
const DifGrid = styled.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 48px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const DifCard = styled.div`
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius); padding: 32px 28px; transition: var(--transition);
  &:hover { background: rgba(255,255,255,0.12); }
  .num { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: var(--turquesa-light); margin-bottom: 12px; font-family: var(--font-display); }
  h3 { font-size: 18px; font-weight: 700; color: var(--branco); margin-bottom: 10px; font-family: var(--font-display); }
  p { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.65; }
`;

/* ─── COMO FUNCIONA ─── */
const Steps = styled.div`
  display: flex; flex-direction: column; gap: 32px;
  margin-top: 40px; max-width: 680px;
`;
const Step = styled.div`
  display: flex; gap: 24px; align-items: flex-start;
`;
const StepNum = styled.div`
  width: 44px; height: 44px; min-width: 44px;
  border-radius: 50%; background: var(--grad); color: var(--branco);
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
`;
const StepBody = styled.div`
  h3 { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--quase-preto); margin-bottom: 8px; }
  p { font-size: 15px; color: var(--cinza-medio); line-height: 1.75; }
`;

/* ─── PREÇOS ─── */
const PrecosGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px; margin-top: 48px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
const PrecoCard = styled.div`
  background: var(--branco); border-radius: 18px; padding: 32px 28px;
  border: 2px solid ${p => p.$destaque ? 'var(--turquesa)' : 'var(--cinza-quente)'};
  position: relative; transition: var(--transition);
  ${p => p.$destaque && `box-shadow: 0 8px 32px rgba(93,191,176,0.2);`}
  &:hover { border-color: var(--roxo); transform: translateY(-3px); }
  ${p => p.$destaque && `
    &::before {
      content: 'Mais escolhido'; position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
      background: var(--turquesa); color: var(--branco);
      font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
      padding: 4px 14px; border-radius: 50px; font-family: var(--font-display);
    }
  `}
  .tipo { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--roxo); margin-bottom: 8px; font-family: var(--font-display); }
  .nome { font-size: 18px; font-weight: 700; color: var(--quase-preto); margin-bottom: 4px; font-family: var(--font-display); }
  .freq { font-size: 13px; color: var(--cinza-medio); margin-bottom: 20px; }
  .valor { font-size: 38px; font-weight: 700; color: var(--quase-preto); line-height: 1; font-family: var(--font-display); }
  .valor sup { font-size: 18px; font-weight: 500; vertical-align: top; margin-top: 6px; display: inline-block; }
  .valor span { font-size: 14px; font-weight: 400; color: var(--cinza-medio); }
  .desc { font-size: 13px; color: var(--cinza-medio); margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--cinza-quente); }
`;
const PrecoCTA = styled.a`
  display: block; text-align: center; margin-top: 20px;
  background: var(--grad); color: var(--branco);
  font-family: var(--font-display); font-weight: 600; font-size: 13px;
  padding: 11px 20px; border-radius: 50px; text-decoration: none;
  transition: var(--transition);
  &:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(93,191,176,0.4); }
`;
const PrecoAviso = styled.p`
  text-align: center; margin-top: 28px; font-size: 13px; color: var(--cinza-medio);
  strong { color: var(--roxo); }
`;

/* ─── EQUIPE ─── */
const TeamGroupPhoto = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 40px;
  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: center 35%;
    display: block;
  }
  @media (max-width: 600px) { img { height: 260px; } }
`;
const TeamGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 20px; margin-top: 36px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
`;
const TeamCard = styled.div`
  background: var(--branco); border-radius: 16px; overflow: hidden;
  border: 1px solid var(--cinza-quente); transition: var(--transition);
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
  font-size: 12px; color: var(--turquesa); font-weight: 600; font-family: var(--font-display);
`;
const TeamBadges = styled.div`
  display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;
`;
const TeamBadge = styled.div`
  font-family: var(--font-display); font-size: 13px; font-weight: 600;
  color: var(--turquesa); background: var(--turquesa-pale); border-radius: 50px; padding: 8px 18px;
`;

/* ─── DEPOIMENTOS CAROUSEL ─── */
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
  &::before { left: 0; background: linear-gradient(to right, var(--creme), transparent); }
  &::after { right: 0; background: linear-gradient(to left, var(--creme), transparent); }
`;
const Carousel = styled.div`
  display: flex; gap: 16px;
  width: max-content; padding: 8px 28px 16px;
  animation: ${scrollRevs} 52s linear infinite;
  &:hover { animation-play-state: paused; }
`;
const RevCard = styled.div`
  background: var(--branco); border-radius: 14px;
  padding: 22px 24px; width: 300px; flex-shrink: 0;
  border: 1px solid var(--cinza-quente);
`;
const RevStars = styled.div`
  font-size: 13px; color: #F5A623; letter-spacing: 2px; margin-bottom: 10px;
`;
const RevText = styled.p`
  font-size: 14px; color: var(--cinza-escuro); line-height: 1.7; margin-bottom: 12px; font-style: italic;
`;
const RevFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center;
`;
const RevName = styled.span`
  font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--quase-preto);
`;
const RevTag = styled.span`
  font-family: var(--font-display); font-size: 11px; color: var(--cinza-medio);
`;
const ReviewsBar = styled.div`
  display: flex; align-items: center; gap: 14px;
  background: var(--turquesa-pale); border: 1px solid var(--turquesa-light);
  border-radius: 14px; padding: 14px 22px; margin-bottom: 4px; flex-wrap: wrap;
`;

/* ─── FAQ ─── */
const FAQList = styled.div`
  margin-top: 48px; display: flex; flex-direction: column; gap: 12px; max-width: 780px;
`;
const FAQItem = styled.div`
  background: var(--branco); border-radius: var(--radius);
  border: 1px solid var(--cinza-quente); overflow: hidden;
`;
const FAQQuestion = styled.button`
  width: 100%; text-align: left; background: none; border: none;
  padding: 20px 24px; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  font-family: var(--font-display); font-size: 15px; font-weight: 600;
  color: ${p => p.$active ? 'var(--roxo)' : 'var(--quase-preto)'};
  transition: color 0.2s;
  &:hover { color: var(--roxo); }
`;
const FAQIcon = styled.span`
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--roxo-pale); color: var(--roxo);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 400; flex-shrink: 0;
  transition: transform 0.3s;
  transform: ${p => p.$active ? 'rotate(45deg)' : 'rotate(0)'};
`;
const FAQAnswer = styled.div`
  max-height: ${p => p.$open ? '400px' : '0'};
  overflow: hidden; transition: max-height 0.4s ease;
  div { padding: 0 24px 20px; font-size: 14px; color: var(--cinza-medio); line-height: 1.75; }
`;

/* ─── FORM ─── */
const FormGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 40px; }
`;
const FormBox = styled.div`
  background: var(--branco); border: 1px solid var(--cinza-quente);
  border-radius: 20px; padding: 36px 32px;
  @media (max-width: 600px) { padding: 24px 20px; }
`;
const FormTitle = styled.h3`
  font-family: var(--font-display); font-size: 20px; font-weight: 700;
  color: var(--quase-preto); margin-bottom: 24px;
`;
const FormField = styled.div`
  margin-bottom: 16px;
  label { display: block; font-family: var(--font-display); font-size: 13px; font-weight: 600; color: var(--cinza-escuro); margin-bottom: 6px; }
  input, select {
    width: 100%; padding: 12px 16px;
    border: 1px solid var(--cinza-quente); border-radius: 10px;
    font-family: var(--font-body); font-size: 15px; color: var(--quase-preto);
    background: var(--creme); outline: none; box-sizing: border-box;
    &:focus { border-color: var(--turquesa); }
  }
`;
const FormBtn = styled.button`
  width: 100%; background: var(--grad); color: var(--branco);
  font-family: var(--font-display); font-weight: 700; font-size: 16px;
  padding: 16px; border: none; border-radius: 50px; cursor: pointer;
  margin-top: 8px; box-shadow: 0 4px 20px rgba(93,191,176,0.35);
  transition: var(--transition);
  &:hover { transform: translateY(-1px); box-shadow: 0 8px 32px rgba(93,191,176,0.5); }
`;
const FormNote = styled.p`
  text-align: center; font-size: 12px; color: var(--cinza-medio); margin-top: 12px;
`;
const TrustList = styled.div`
  display: flex; flex-direction: column; gap: 12px; margin-top: 28px;
`;
const TrustItem = styled.div`
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display); font-size: 14px; color: var(--cinza-medio);
  strong { color: var(--cinza-escuro); font-weight: 600; }
`;
const TrustDot = styled.span`
  width: 7px; height: 7px; border-radius: 50%; background: var(--turquesa); flex-shrink: 0;
`;

/* ─── CTA FINAL ─── */
const CTASection = styled.section`
  background: var(--grad); padding: 100px 0; text-align: center;
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  & > * { position: relative; z-index: 1; }
  h2 { font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 700; color: var(--branco); margin-bottom: 16px; }
  p { font-size: 17px; color: rgba(255,255,255,0.85); margin-bottom: 36px; }
`;
const BtnWhite = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--branco); color: var(--roxo-deep);
  font-family: var(--font-display); font-weight: 700; font-size: 15px;
  padding: 16px 32px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2); transition: var(--transition);
  &:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
`;

/* ─── FOOTER ─── */
const FooterEl = styled.footer`
  background: var(--quase-preto); color: rgba(255,255,255,0.6); padding: 48px 0 32px;
`;
const FooterGrid = styled.div`
  display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 48px; margin-bottom: 40px;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 28px; }
`;
const FooterTitle = styled.div`
  font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: rgba(255,255,255,0.9); margin-bottom: 14px;
`;
const FooterLink = styled.a`
  color: rgba(255,255,255,0.6); text-decoration: none; font-size: 13px; display: block;
  margin-bottom: 8px; transition: color 0.2s;
  &:hover { color: var(--turquesa); }
`;
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px;
  text-align: center; font-size: 12px;
`;

/* ─── WA FLOAT ─── */
const WaFloat = styled.a`
  position: fixed; bottom: 24px; right: 24px; z-index: 200;
  width: 56px; height: 56px; border-radius: 50%;
  background: #25D366; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5); text-decoration: none; transition: var(--transition);
  &:hover { transform: scale(1.08); box-shadow: 0 8px 32px rgba(37,211,102,0.65); }
  svg { width: 28px; height: 28px; fill: white; }
`;

function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <FAQList>
      {FAQS.map((item, i) => (
        <FAQItem key={i}>
          <FAQQuestion $active={open === i} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            {item.q}
            <FAQIcon $active={open === i} aria-hidden="true">+</FAQIcon>
          </FAQQuestion>
          <FAQAnswer $open={open === i}>
            <div>{item.a}</div>
          </FAQAnswer>
        </FAQItem>
      ))}
    </FAQList>
  );
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function PilatesSEO() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', objetivo: '' });

  useEffect(() => {
    document.title = 'Pilates Clínico em Belo Horizonte com Fisioterapeutas | INNOVA MOVIMENTO';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Pilates Clínico com sessões conduzidas por fisioterapeutas em BH. Turmas de até 3 alunos, avaliação clínica individual, equipe com 13 profissionais e nota 5.0 no Google. Santo Agostinho, Belo Horizonte.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://innovamovimento.com.br/pilates';

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'pilates-seo-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://innovamovimento.com.br",
          "name": "INNOVA MOVIMENTO",
          "url": "https://innovamovimento.com.br",
          "telephone": "+5531999476615",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Araguari, 1750, Sl 800",
            "addressLocality": "Belo Horizonte",
            "addressRegion": "MG",
            "postalCode": "30190-110",
            "addressCountry": "BR"
          },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "60" }
        },
        {
          "@type": "Service",
          "name": "Pilates Clínico em Belo Horizonte",
          "description": "Pilates Clínico conduzido por fisioterapeutas especializados, em turmas de no máximo 3 alunos.",
          "provider": { "@type": "LocalBusiness", "name": "INNOVA MOVIMENTO" },
          "areaServed": { "@type": "City", "name": "Belo Horizonte" }
        }
      ]
    });
    document.head.appendChild(script);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    window.scrollTo(0, 0);

    return () => {
      obs.disconnect();
      const s = document.getElementById('pilates-seo-schema');
      if (s) document.head.removeChild(s);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá! Me chamo ${form.nome}. Gostaria de agendar minha avaliação de Pilates Clínico. Objetivo: ${form.objetivo}.`);
    window.open(`https://wa.me/5531999476615?text=${msg}`, '_blank');
  }

  return (
    <>
      {/* NAV */}
      <Nav>
        <NavInner>
          <NavLogo href="/" aria-label="INNOVA MOVIMENTO">
            <img src={logo} alt="INNOVA MOVIMENTO" />
          </NavLogo>
          <NavLinks>
            <NavLink href="#como-funciona">Como Funciona</NavLink>
            <NavLink href="#precos">Preços</NavLink>
            <NavLink href="#equipe">Equipe</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </NavLinks>
          <NavCta href={wa('Olá! Gostaria de agendar minha avaliação de Pilates Clínico.')} target="_blank" rel="noopener">
            Agendar Avaliação
          </NavCta>
        </NavInner>
      </Nav>

      {/* HERO */}
      <HeroSection aria-label="Pilates Clínico em Belo Horizonte">
        <HeroLeft>
          <Badge><BadgeDot />Pilates Clínico · Santo Agostinho · BH</Badge>
          <H1>
            Pilates Clínico em Belo Horizonte<br />
            com fisioterapeutas que entendem <em>o seu corpo</em>
          </H1>
          <HeroSub>
            Cada sessão é montada a partir da sua avaliação clínica. Individual ou em trio, com fisioterapeutas especialistas e referência em grandes clubes esportivos de BH. Santo Agostinho, BH.
          </HeroSub>
          <HeroCtaRow>
            <BtnPrimary href={wa('Olá! Gostaria de agendar minha avaliação de Pilates Clínico.')} target="_blank" rel="noopener">
              <WaIcon /> Agendar Avaliação
            </BtnPrimary>
            <BtnSecondary href="#precos">Ver planos e preços</BtnSecondary>
          </HeroCtaRow>
          <HeroTrust>
            <TrustPill>★ 5.0 no Google</TrustPill>
            <TrustPill>13 fisioterapeutas</TrustPill>
            <TrustPill>+1.000 clientes</TrustPill>
          </HeroTrust>
        </HeroLeft>
        <HeroRight>
          <img src={heroPilates} alt="Fisioterapeuta conduzindo sessão de Pilates Clínico em Belo Horizonte" fetchPriority="high" />
        </HeroRight>
      </HeroSection>

      {/* O QUE É */}
      <Section $alt id="o-que-e" aria-labelledby="oqe-title">
        <Container>
          <SectionLabel>O que é</SectionLabel>
          <SectionTitle id="oqe-title">
            Pilates Clínico: o que é e por que é diferente do pilates convencional
          </SectionTitle>
          <TwoCol>
            <div>
              <SectionText>Pilates Clínico é uma abordagem terapêutica do método Pilates, conduzida por fisioterapeutas. Diferente das aulas em grupo de estúdios convencionais, aqui cada exercício é escolhido com base em uma avaliação clínica, considerando diagnóstico, histórico, limitações e objetivos de cada pessoa.</SectionText>
              <SectionText>Na INNOVA MOVIMENTO, as sessões são individuais ou em trio (máximo 3 pessoas). Quem conduz não é um instrutor, é um fisioterapeuta com formação clínica. O raciocínio por trás de cada exercício é clínico, não genérico.</SectionText>
              <SectionText>Se você já fez pilates e não viu resultado duradouro, a diferença pode estar em quem conduzia. Quando o profissional entende a sua condição clínica, o exercício deixa de ser genérico e passa a ser tratamento.</SectionText>
            </div>
            <ImgCol $right>
              <img src={equipeImg} alt="Equipe de fisioterapeutas da INNOVA MOVIMENTO" loading="lazy" />
            </ImgCol>
          </TwoCol>
        </Container>
      </Section>

      {/* PARA QUEM */}
      <Section id="para-quem" aria-labelledby="pq-title">
        <Container>
          <SectionLabel>Indicações</SectionLabel>
          <SectionTitle id="pq-title">Para quem o Pilates Clínico é indicado</SectionTitle>
          <SectionText>Se você tem uma queixa específica, está em recuperação ou quer se mover com mais segurança: o Pilates Clínico é para você.</SectionText>
          <PerfilGrid>
            {PARA_QUEM.map((item, i) => (
              <PerfilCard key={i} className={`reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </PerfilCard>
            ))}
          </PerfilGrid>
        </Container>
      </Section>

      {/* DIFERENCIAIS */}
      <Section $dark id="diferenciais" aria-labelledby="dif-title">
        <Container>
          <SectionLabel $light className="reveal">Por que a INNOVA</SectionLabel>
          <SectionTitle $light className="reveal" id="dif-title">O que faz a diferença no nosso Pilates</SectionTitle>
          <SectionText $light className="reveal">
            Não é só o método. É a qualidade de quem conduz, o tamanho das turmas e a atenção que você recebe a cada sessão.
          </SectionText>
          <DifGrid>
            {[
              { num: '01', title: 'Turmas Trio · máx. 3 alunos', desc: 'Cada turma tem no máximo 3 pessoas. Isso é raro em BH. Você recebe atenção real: o fisioterapeuta vê e corrige o seu movimento, não só demonstra o exercício.' },
              { num: '02', title: 'Fisioterapeutas especializados', desc: 'Quem conduz seu Pilates tem formação em fisioterapia e especialização em Pilates Clínico. Sabe ler seu histórico, identificar compensações e adaptar o exercício quando necessário.' },
              { num: '03', title: 'Avaliação individualizada antes de começar', desc: 'Você não entra numa aula sem avaliação. Entendemos sua queixa, seu histórico e seus objetivos. A partir daí, prescrevemos, não improvisamos.' },
              { num: '04', title: '+1.000 clientes. 5.0★ no Google.', desc: 'Mais de mil pessoas já passaram pela INNOVA. avaliações no Google com nota máxima. Resultado não se compra, se constrói sessão a sessão.' },
            ].map((item, i) => (
              <DifCard key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </DifCard>
            ))}
          </DifGrid>
        </Container>
      </Section>

      {/* COMO FUNCIONA */}
      <Section $alt id="como-funciona" aria-labelledby="cf-title">
        <Container>
          <SectionLabel>Como funciona</SectionLabel>
          <SectionTitle id="cf-title">Como funciona o Pilates Clínico na INNOVA MOVIMENTO</SectionTitle>
          <Steps>
            <Step>
              <StepNum>01</StepNum>
              <StepBody>
                <h3>Avaliação clínica com fisioterapeuta</h3>
                <p>40 minutos. O fisioterapeuta avalia postura, mobilidade, histórico clínico e seus objetivos. Você sai com uma recomendação clara, sem compromisso, sem pressão. Agende pelo WhatsApp; respondemos em até 2 horas.</p>
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
            <BtnPrimary href={wa('Olá! Gostaria de agendar minha avaliação de Pilates Clínico.')} target="_blank" rel="noopener">
              <WaIcon /> Agendar Avaliação
            </BtnPrimary>
          </div>
        </Container>
      </Section>

      {/* PREÇOS */}
      <Section id="precos" aria-labelledby="preco-title">
        <Container>
          <SectionLabel className="reveal">Planos e investimento</SectionLabel>
          <SectionTitle className="reveal" id="preco-title">Pilates Clínico: Valores mensais</SectionTitle>
          <SectionText className="reveal">
            Escolha a frequência que cabe na sua rotina. Sem taxa de matrícula. Avaliação fisioterápica com desconto para matriculados.
          </SectionText>
          <PrecosGrid>
            <PrecoCard className="reveal">
              <div className="tipo">Trio · até 3 alunos</div>
              <div className="nome">1x por semana</div>
              <div className="freq">4 sessões/mês</div>
              <div className="valor"><sup>R$</sup>250<span>/mês</span></div>
              <div className="desc">Ideal para manutenção e prevenção.</div>
              <PrecoCTA href={wa('Quero saber mais sobre o Pilates Clínico Trio 1x por semana.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
            <PrecoCard $destaque className="reveal reveal-delay-1">
              <div className="tipo">Trio · até 3 alunos</div>
              <div className="nome">2x por semana</div>
              <div className="freq">8 sessões/mês</div>
              <div className="valor"><sup>R$</sup>460<span>/mês</span></div>
              <div className="desc">A frequência ideal para resultado consistente e evolução visível.</div>
              <PrecoCTA href={wa('Quero saber mais sobre o Pilates Clínico Trio 2x por semana.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
            <PrecoCard className="reveal reveal-delay-2">
              <div className="tipo">Trio · até 3 alunos</div>
              <div className="nome">3x por semana</div>
              <div className="freq">12 sessões/mês</div>
              <div className="valor"><sup>R$</sup>670<span>/mês</span></div>
              <div className="desc">Para objetivos específicos e evolução acelerada.</div>
              <PrecoCTA href={wa('Quero saber mais sobre o Pilates Clínico Trio 3x por semana.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
            <PrecoCard className="reveal reveal-delay-3">
              <div className="tipo">Dupla · 2 pessoas fixas</div>
              <div className="nome">Dupla · a partir de</div>
              <div className="freq">1x ou 2x por semana</div>
              <div className="valor"><sup>R$</sup>380<span>/mês</span></div>
              <div className="desc">Você e uma parceira fixa. As duas se matriculam juntas. Avaliação com 30% de desconto.</div>
              <PrecoCTA href={wa('Quero saber mais sobre o Pilates em Dupla.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
          </PrecosGrid>
          <PrecoAviso className="reveal">
            <strong>Avulso:</strong> R$80 por sessão · <strong>Avaliação fisioterápica Pilates:</strong> R$190 (30% desconto para matriculados) · Parcelamento disponível no cartão
          </PrecoAviso>
        </Container>
      </Section>

      {/* EQUIPE */}
      <Section $alt id="equipe" aria-labelledby="equipe-title">
        <Container>
          <SectionLabel>A equipe</SectionLabel>
          <SectionTitle id="equipe-title">4 sócios que formam quem te atende</SectionTitle>
          <SectionText>Os sócios são fisioterapeutas, mestres e especialistas em Pilates e referência em fisioterapia em grandes clubes esportivos de BH. Além da prática clínica, atuam na formação de outros profissionais, sendo responsáveis pelo treinamento contínuo da equipe INNOVA — para que você receba um atendimento seguro, atualizado e de alto nível.</SectionText>
          <TeamGroupPhoto>
            <img src={equipeImg} alt="Equipe completa da INNOVA MOVIMENTO" loading="lazy" />
          </TeamGroupPhoto>
          <TeamGrid>
            {[
              { photo: luciana, name: 'Luciana Signorini', role: 'Fisioterapeuta · Especialista em Pilates Clínico' },
              { photo: gustavo, name: 'Gustavo Amaral', role: 'Fisioterapeuta · Palestrante Nacional' },
              { photo: cristiane, name: 'Cristiane Vasconcelos', role: 'Fisioterapeuta · Especialista em Pilates Clínico' },
              { photo: mariana, name: 'Mariana Weschenfelder', role: 'Fisioterapeuta · Especialista Clínica' },
            ].map((t, i) => (
              <TeamCard key={i}>
                <TeamPhoto><img src={t.photo} alt={t.name} loading="lazy" /></TeamPhoto>
                <TeamInfo><TeamName>{t.name}</TeamName><TeamRole>{t.role}</TeamRole></TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
          <TeamBadges>
            <TeamBadge>13 fisioterapeutas</TeamBadge>
            <TeamBadge>Formadores de profissionais da área</TeamBadge>
            <TeamBadge>Palestrantes nacionais</TeamBadge>
            <TeamBadge>Formação contínua em evidência científica</TeamBadge>
          </TeamBadges>
        </Container>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos" aria-labelledby="dep-title">
        <Container>
          <SectionLabel>Quem já está na Innova</SectionLabel>
          <SectionTitle id="dep-title">Quem passou pela Innova voltou. E indicou.</SectionTitle>
          <ReviewsBar>
            <div style={{ fontSize: 18, color: '#F5A623', letterSpacing: 2 }}>★★★★★</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--cinza-escuro)' }}>
              <strong style={{ color: 'var(--quase-preto)', fontSize: 17 }}>5.0</strong> no Google · avaliações verificadas
            </div>
          </ReviewsBar>
        </Container>
        <CarouselWrap>
          <Carousel>
            {[...DEPOIMENTOS, ...DEPOIMENTOS].map((d, i) => (
              <RevCard key={i}>
                <RevStars>★★★★★</RevStars>
                <RevText>{d.text}</RevText>
                <RevFooter>
                  <RevName>{d.name}</RevName>
                  <RevTag>{d.tag}</RevTag>
                </RevFooter>
              </RevCard>
            ))}
          </Carousel>
        </CarouselWrap>
      </Section>

      {/* FAQ */}
      <Section $alt id="faq" aria-labelledby="faq-title">
        <Container>
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <SectionTitle id="faq-title">Perguntas sobre Pilates Clínico em BH</SectionTitle>
          <FAQAccordion />
        </Container>
      </Section>

      {/* FORMULÁRIO */}
      <Section id="agendar">
        <Container>
          <FormGrid>
            <div>
              <SectionLabel>Agende agora</SectionLabel>
              <SectionTitle>O melhor momento para começar era ontem. O segundo melhor é agora.</SectionTitle>
              <SectionText>Uma avaliação de 40 minutos pode mudar a forma como você se relaciona com o seu corpo. Sem compromisso. Só clareza sobre o que você precisa.</SectionText>
              <TrustList>
                <TrustItem><TrustDot /><strong>★ 5.0</strong>&nbsp;no Google</TrustItem>
                <TrustItem><TrustDot /><strong>Santo Agostinho</strong>, Belo Horizonte</TrustItem>
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
                <FormBtn type="submit">Agendar Minha Avaliação</FormBtn>
                <FormNote>Respondemos em até 2 horas no WhatsApp.</FormNote>
              </form>
            </FormBox>
          </FormGrid>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <CTASection aria-labelledby="cta-title">
        <Container>
          <h2 id="cta-title">Venha descobrir o que o Pilates Clínico pode fazer pelo seu corpo.</h2>
          <p>Sem compromisso. Sem protocolo genérico.<br />Turmas com no máximo 3 alunos. Vagas limitadas por turno.</p>
          <BtnWhite href={wa('Olá! Gostaria de agendar minha avaliação de Pilates Clínico na INNOVA.')} target="_blank" rel="noopener">
            <WaIcon /> Falar com a Innova no WhatsApp
          </BtnWhite>
        </Container>
      </CTASection>

      {/* FOOTER */}
      <FooterEl>
        <Container>
          <FooterGrid>
            <div>
              <img src={logo} alt="INNOVA MOVIMENTO" style={{ height: 40, filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: 16, display: 'block' }} />
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                Fisioterapia, Pilates Clínico e Gyrotonic em Belo Horizonte.<br />
                Rua Araguari, 1750, Sl 800, Santo Agostinho, BH.
              </p>
            </div>
            <div>
              <FooterTitle>Serviços</FooterTitle>
              <FooterLink href="/">Fisioterapia</FooterLink>
              <FooterLink href="/pilates">Pilates Clínico</FooterLink>
              <FooterLink href="/">Gyrotonic</FooterLink>
              <FooterLink href="/">Fisioterapia Esportiva</FooterLink>
            </div>
            <div>
              <FooterTitle>Contato</FooterTitle>
              <FooterLink href="https://wa.me/5531999476615" target="_blank" rel="noopener">WhatsApp: (31) 99947-6615</FooterLink>
              <FooterLink href="https://www.instagram.com/innova.movimento" target="_blank" rel="noopener">@INNOVA.MOVIMENTO</FooterLink>
              <FooterLink href="https://maps.google.com/?q=Rua+Araguari+1750+Santo+Agostinho+BH" target="_blank" rel="noopener">Ver no Google Maps</FooterLink>
            </div>
          </FooterGrid>
          <FooterBottom>
            <p>© 2025 INNOVA MOVIMENTO · Todos os direitos reservados · Santo Agostinho, Belo Horizonte - MG</p>
          </FooterBottom>
        </Container>
      </FooterEl>

      {/* WA FLOAT */}
      <WaFloat href={wa('Olá! Gostaria de saber mais sobre o Pilates Clínico.')} target="_blank" rel="noopener" aria-label="WhatsApp INNOVA MOVIMENTO">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </WaFloat>
    </>
  );
}
