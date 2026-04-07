import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const WA_LINK_BASE = 'https://wa.me/5531999476615?text=';

const PageMeta = createGlobalStyle`
  /* PilatesSEO page overrides */
`;

// ─── Layout helpers ──────────────────────────────────────────────────
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
`;

// ─── NAV ─────────────────────────────────────────────────────────────
const Nav = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 14px 0;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--cinza-quente), 0 4px 20px rgba(0,0,0,0.06);
`;
const NavInner = styled.div`
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
`;
const NavLogo = styled(Link)`
  text-decoration: none;
  img { height: 48px; width: auto; }
`;
const NavLinks = styled.ul`
  display: flex; gap: 28px; list-style: none;
  @media (max-width: 900px) { display: none; }
  a { text-decoration: none; color: var(--cinza-escuro); font-size: 14px; font-weight: 500; transition: color 0.2s; }
  a:hover, a[aria-current] { color: var(--roxo); }
`;
const NavCTA = styled.a`
  background: var(--grad); color: var(--branco);
  font-weight: 600; font-size: 13px;
  padding: 9px 18px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 0 10px rgba(93,191,176,0.35);
  transition: var(--transition);
  &:hover { transform: translateY(-1px); box-shadow: 0 0 20px rgba(93,191,176,0.7); }
`;

// ─── HERO ─────────────────────────────────────────────────────────────
const HeroSection = styled.section`
  min-height: 92vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--creme);
  padding-top: 76px;
  overflow: hidden;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;
const HeroLeft = styled.div`
  display: flex; flex-direction: column; justify-content: center;
  padding: 80px 52px 80px 28px;
  max-width: 680px; margin-left: auto;
  @media (max-width: 900px) { padding: 100px 28px 48px; max-width: 100%; margin: 0; }
`;
const HeroRight = styled.div`
  position: relative; overflow: hidden;
  @media (max-width: 900px) { height: 320px; }
  img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
`;
const HeroBadge = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--turquesa-pale); color: var(--turquesa);
  font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
  padding: 6px 14px; border-radius: 50px;
  margin-bottom: 20px;
  &::before { content: '●'; font-size: 8px; }
`;
const H1 = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
  font-weight: 700;
  color: var(--quase-preto);
  line-height: 1.18;
  margin-bottom: 20px;
  em { font-style: normal; color: var(--roxo); }
`;
const HeroSub = styled.p`
  font-size: 17px; color: var(--cinza-medio);
  line-height: 1.7; margin-bottom: 32px; max-width: 520px;
`;
const HeroCTAGroup = styled.div`
  display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
  @media (max-width: 600px) { flex-direction: column; align-items: flex-start; }
`;
const BtnPrimary = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--grad); color: var(--branco);
  font-weight: 700; font-size: 15px;
  padding: 14px 28px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 4px 20px rgba(93,191,176,0.4);
  transition: var(--transition);
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(93,191,176,0.55); }
`;
const BtnSecondary = styled.a`
  display: inline-flex; align-items: center; gap: 8px;
  border: 2px solid var(--cinza-quente); color: var(--cinza-escuro);
  font-weight: 600; font-size: 14px;
  padding: 12px 22px; border-radius: 50px; text-decoration: none;
  transition: var(--transition);
  &:hover { border-color: var(--roxo); color: var(--roxo); }
`;
const HeroTrust = styled.div`
  margin-top: 36px; display: flex; gap: 24px; flex-wrap: wrap;
`;
const TrustItem = styled.div`
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: var(--cinza-medio);
  .icon { color: var(--turquesa); font-size: 15px; }
`;

// ─── GENERIC SECTION ─────────────────────────────────────────────────
const Section = styled.section`
  padding: 80px 0;
  background: ${p => p.$bg || 'var(--branco)'};
  @media (max-width: 600px) { padding: 56px 0; }
`;
const SectionLabel = styled.div`
  font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--turquesa); margin-bottom: 12px;
`;
const SectionTitle = styled.h2`
  font-size: clamp(1.7rem, 2.8vw, 2.3rem);
  font-weight: 700; color: var(--quase-preto);
  line-height: 1.25; margin-bottom: 16px;
`;
const SectionDesc = styled.p`
  font-size: 16px; color: var(--cinza-medio); line-height: 1.75; max-width: 640px;
`;

// ─── O QUE É ─────────────────────────────────────────────────────────
const OQueEGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  align-items: center; margin-top: 48px;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 32px; }
`;
const OQueEImg = styled.div`
  border-radius: 20px; overflow: hidden; aspect-ratio: 4/3;
  img { width: 100%; height: 100%; object-fit: cover; }
`;
const OQueEText = styled.div`
  h3 { font-size: 1.3rem; font-weight: 700; color: var(--quase-preto); margin-bottom: 16px; }
  p { font-size: 15px; color: var(--cinza-medio); line-height: 1.75; margin-bottom: 14px; }
`;
const HighlightBox = styled.div`
  background: var(--turquesa-pale); border-left: 3px solid var(--turquesa);
  padding: 16px 20px; border-radius: 0 10px 10px 0;
  font-size: 14px; color: var(--cinza-escuro); line-height: 1.6; margin-top: 20px;
`;

// ─── PARA QUEM ────────────────────────────────────────────────────────
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
  h3 { font-size: 15px; font-weight: 700; color: var(--quase-preto); margin-bottom: 8px; }
  p { font-size: 13px; color: var(--cinza-medio); line-height: 1.6; }
`;

// ─── DIFERENCIAIS ─────────────────────────────────────────────────────
const DifSection = styled(Section)`
  background: var(--roxo-deep);
  ${SectionLabel} { color: var(--turquesa-light); }
  ${SectionTitle} { color: var(--branco); }
  ${SectionDesc} { color: rgba(255,255,255,0.7); }
`;
const DifGrid = styled.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
  margin-top: 48px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const DifCard = styled.div`
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius); padding: 32px 28px; transition: var(--transition);
  &:hover { background: rgba(255,255,255,0.12); }
  .num { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: var(--turquesa-light); margin-bottom: 12px; }
  h3 { font-size: 18px; font-weight: 700; color: var(--branco); margin-bottom: 10px; }
  p { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.65; }
`;

// ─── PREÇOS ───────────────────────────────────────────────────────────
const PrecosGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px; margin-top: 48px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
const PrecoCard = styled.div`
  background: var(--branco); border-radius: 18px;
  padding: 32px 28px; border: 2px solid ${p => p.$destaque ? 'var(--turquesa)' : 'var(--cinza-quente)'};
  position: relative; transition: var(--transition);
  ${p => p.$destaque && `box-shadow: 0 8px 32px rgba(93,191,176,0.2);`}
  &:hover { border-color: var(--roxo); transform: translateY(-3px); }
  ${p => p.$destaque && `
    &::before {
      content: 'Mais escolhido';
      position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
      background: var(--turquesa); color: var(--branco);
      font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
      padding: 4px 14px; border-radius: 50px;
    }
  `}
  .tipo { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--roxo); margin-bottom: 8px; }
  .nome { font-size: 18px; font-weight: 700; color: var(--quase-preto); margin-bottom: 4px; }
  .freq { font-size: 13px; color: var(--cinza-medio); margin-bottom: 20px; }
  .valor { font-size: 38px; font-weight: 700; color: var(--quase-preto); line-height: 1; }
  .valor sup { font-size: 18px; font-weight: 500; vertical-align: top; margin-top: 6px; display: inline-block; }
  .valor span { font-size: 14px; font-weight: 400; color: var(--cinza-medio); }
  .desc { font-size: 13px; color: var(--cinza-medio); margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--cinza-quente); }
`;
const PrecoCTA = styled.a`
  display: block; text-align: center; margin-top: 20px;
  background: var(--grad); color: var(--branco);
  font-weight: 600; font-size: 13px;
  padding: 11px 20px; border-radius: 50px; text-decoration: none;
  transition: var(--transition);
  &:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(93,191,176,0.4); }
`;
const PrecoAviso = styled.p`
  text-align: center; margin-top: 28px;
  font-size: 13px; color: var(--cinza-medio);
  strong { color: var(--roxo); }
`;

// ─── DEPOIMENTOS ──────────────────────────────────────────────────────
const DepGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  margin-top: 48px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const DepCard = styled.div`
  background: var(--creme); border-radius: var(--radius);
  padding: 28px 24px; border: 1px solid var(--cinza-quente);
  display: flex; flex-direction: column; gap: 14px;
  .stars { color: #F59E0B; font-size: 15px; letter-spacing: 2px; }
  .text { font-size: 14px; color: var(--cinza-escuro); line-height: 1.7; font-style: italic; flex: 1; }
`;
const DepFooter = styled.div`
  display: flex; align-items: center; gap: 10px;
`;
const DepAvatar = styled.div`
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--grad); display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 13px; color: var(--branco); flex-shrink: 0;
`;
const DepInfo = styled.div`
  .name { font-size: 13px; font-weight: 700; color: var(--quase-preto); }
  .tag { font-size: 11px; color: var(--cinza-medio); }
`;

// ─── FAQ ──────────────────────────────────────────────────────────────
const FAQList = styled.div`
  margin-top: 48px; display: flex; flex-direction: column; gap: 12px;
  max-width: 780px;
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
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--roxo-pale); color: var(--roxo);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 400; flex-shrink: 0;
  transition: transform 0.3s;
  transform: ${p => p.$active ? 'rotate(45deg)' : 'rotate(0)'};
`;
const FAQAnswer = styled.div`
  max-height: ${p => p.$open ? '400px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s ease;
  div {
    padding: 0 24px 20px;
    font-size: 14px; color: var(--cinza-medio); line-height: 1.75;
  }
`;

// ─── CTA FINAL ───────────────────────────────────────────────────────
const CTAFinalSection = styled.section`
  background: var(--grad); padding: 100px 0;
  text-align: center; position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  & > * { position: relative; z-index: 1; }
  h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 700; color: var(--branco); margin-bottom: 16px; }
  p { font-size: 17px; color: rgba(255,255,255,0.85); margin-bottom: 36px; }
`;
const BtnWhite = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--branco); color: var(--roxo-deep);
  font-weight: 700; font-size: 15px;
  padding: 16px 32px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  transition: var(--transition);
  &:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
`;
const CTAUrgency = styled.p`
  margin-top: 20px; font-size: 13px; color: rgba(255,255,255,0.75);
`;

// ─── FOOTER ───────────────────────────────────────────────────────────
const FooterEl = styled.footer`
  background: var(--quase-preto); color: rgba(255,255,255,0.6);
  padding: 48px 0 32px;
`;
const FooterGrid = styled.div`
  display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 48px;
  margin-bottom: 40px;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 28px; }
`;
const FooterTitle = styled.div`
  font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: rgba(255,255,255,0.9); margin-bottom: 14px;
`;
const FooterLink = styled.a`
  color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;
  font-size: 13px; display: block; margin-bottom: 8px;
  &:hover { color: var(--turquesa); }
`;
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px;
  text-align: center; font-size: 12px;
`;

// ─── WA FLOAT ─────────────────────────────────────────────────────────
const WAFloat = styled.a`
  position: fixed; bottom: 24px; right: 24px; z-index: 200;
  width: 56px; height: 56px; border-radius: 50%;
  background: #25D366; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5);
  text-decoration: none; transition: var(--transition);
  &:hover { transform: scale(1.08); box-shadow: 0 8px 32px rgba(37,211,102,0.65); }
  svg { width: 28px; height: 28px; fill: white; }
`;

// ─── DATA ─────────────────────────────────────────────────────────────
const DEPOIMENTOS = [
  { initials: 'AT', name: 'André Teixeira', tag: 'Pilates Clínico · 10 meses', text: '"Eu me curei de uma hérnia cervical com indicação cirúrgica de dois médicos na Innova. Se você deseja Innovar sua saúde e bem estar, não existe lugar para estar, a não ser lar!"' },
  { initials: 'AA', name: 'Adriana Araújo', tag: 'Pilates Clínico · 8 meses', text: '"Comecei com dores na coluna que me impediam de trabalhar. Após 3 meses de Pilates Clínico na Innova, recuperei minha qualidade de vida. A atenção dos fisioterapeutas faz toda a diferença."' },
  { initials: 'LH', name: 'Ligia Horacio', tag: 'Pilates Clínico · 3 anos', text: '"Há alguns anos estou na Innova e tenho conseguido excelentes resultados. Me livrei de uma cirurgia no joelho devido a artrose. Muita gratidão a toda equipe pelo cuidado, atenção e carinho."' },
  { initials: 'LC', name: 'Luiz Carlos Castro', tag: 'Pilates Clínico · 10 meses', text: '"Acompanho minha mãe de 85 anos e ela está adorando — sente melhoras a cada sessão. Os profissionais são atenciosos e adaptam os exercícios perfeitamente para ela."' },
  { initials: 'DB', name: 'Diego Bucco', tag: 'Pilates pós-cirúrgico · 6 meses', text: '"Procurei a Innova após uma cirurgia no quadril. O Pilates Clínico foi fundamental para minha recuperação. Profissionais extremamente qualificados que entendem cada detalhe do movimento."' },
  { initials: 'MM', name: 'Mauro Moura', tag: 'Pilates Clínico · 1 ano', text: '"Pratico Pilates Clínico na Innova há mais de um ano. A diferença para outros lugares é clara: turma pequena, atenção individualizada e profissionais que realmente sabem o que estão fazendo."' },
];

const FAQS = [
  { q: 'Qual a diferença entre Pilates Clínico e Pilates Funcional?', a: 'O Pilates Clínico é conduzido por fisioterapeuta e voltado para reabilitação, prevenção e tratamento de disfunções musculoesqueléticas. Cada exercício é prescrito individualmente após avaliação. O Pilates Funcional foca em performance e condicionamento para pessoas saudáveis, geralmente em grupos maiores sem avaliação prévia. Na INNOVA, nosso Pilates é clínico — indicado tanto para quem tem queixas quanto para prevenção com acompanhamento especializado.' },
  { q: 'Quanto custa o Pilates Clínico na INNOVA MOVIMENTO?', a: 'As turmas Trio (máximo 3 alunos) têm planos mensais a partir de R$250 (1x/semana), R$460 (2x/semana) e R$670 (3x/semana). A modalidade Dupla começa em R$380/mês por pessoa. A sessão avulsa custa R$80. A avaliação fisioterápica de Pilates é R$190 para alunos matriculados (30% de desconto). Entre em contato pelo WhatsApp para confirmar horários disponíveis.' },
  { q: 'Em quanto tempo vou sentir resultado?', a: 'Depende do objetivo e da frequência. Para queixas de dor, muitos alunos relatam melhora já nas primeiras sessões. Para resultados de postura, força e mobilidade, o ideal é 2 a 3 meses de prática regular. O Pilates Clínico funciona por acúmulo — quanto maior a frequência e constância, mais rápido o resultado. Nossa equipe avalia sua evolução e ajusta os exercícios continuamente.' },
  { q: 'Vocês aceitam convênio para o Pilates?', a: 'Para o Pilates Clínico, trabalhamos com alguns convênios. O melhor caminho é nos contatar pelo WhatsApp informando o seu plano — verificamos em tempo real. A avaliação fisioterápica de Pilates também pode ser coberta dependendo do seu benefício. Não deixe de perguntar antes de vir.' },
  { q: 'Onde fica a INNOVA MOVIMENTO?', a: 'Estamos na Rua Araguari, 1750, Sala 800, no bairro Santo Agostinho, em Belo Horizonte (MG). Uma localização central, de fácil acesso por metrô e com estacionamento próximo. Entre em contato pelo WhatsApp para mais informações sobre como chegar.' },
  { q: 'Preciso ter experiência com Pilates para começar?', a: 'Não. A maioria dos nossos alunos começa sem nenhuma experiência com Pilates. Por isso a avaliação inicial é tão importante — partimos do zero, entendemos seu histórico e seu corpo, e construímos a progressão de forma segura. Não tem iniciante demais para o Pilates Clínico.' },
  { q: 'O Pilates Clínico substitui a fisioterapia?', a: 'Em muitos casos, sim. Para queixas de coluna, postura e prevenção de lesões, o Pilates Clínico cumpre um papel terapêutico equivalente à fisioterapia convencional. Para condições mais agudas (pós-operatório imediato, lesões recentes), o indicado é iniciar com sessões individuais de fisioterapia e migrar para o Pilates na fase de manutenção. Nossa equipe te orienta durante a avaliação qual é o melhor caminho.' },
];

function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <FAQList>
      {faqs.map((item, i) => (
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

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function PilatesSEO() {
  useEffect(() => {
    // Set page title and meta
    document.title = 'Pilates Clínico em Belo Horizonte | INNOVA MOVIMENTO';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Pilates Clínico com fisioterapeutas especializados em BH. Trio, Dupla e Individual. +1.000 clientes. Avaliação gratuita. Santo Agostinho, BH.');

    // Inject schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
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

    // Reveal animations
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    window.scrollTo(0, 0);
    return () => { obs.disconnect(); document.head.removeChild(script); };
  }, []);

  const waLink = (msg) => `${WA_LINK_BASE}${encodeURIComponent(msg)}`;

  return (
    <>
      <PageMeta />

      {/* NAV */}
      <Nav>
        <Container>
          <NavInner>
            <NavLogo to="/" aria-label="INNOVA MOVIMENTO">
              <img src="/images/logo.png" alt="INNOVA MOVIMENTO" />
            </NavLogo>
            <NavLinks>
              <li><a href="/">Início</a></li>
              <li><a href="/pilates" aria-current="page">Pilates</a></li>
            </NavLinks>
            <NavCTA href={waLink('Olá! Gostaria de saber mais sobre o Pilates Clínico e agendar uma avaliação gratuita.')} target="_blank" rel="noopener">
              Agendar Avaliação
            </NavCTA>
          </NavInner>
        </Container>
      </Nav>

      {/* HERO */}
      <HeroSection aria-label="Pilates Clínico em Belo Horizonte">
        <HeroLeft>
          <HeroBadge className="reveal">Pilates Clínico · Santo Agostinho, BH</HeroBadge>
          <H1 className="reveal reveal-delay-1">
            Pilates Clínico em Belo Horizonte<br />para quem quer <em>resultado real</em>
          </H1>
          <HeroSub className="reveal reveal-delay-2">
            Conduzido por fisioterapeutas especializados. Turmas de no máximo 3 alunos.
            Exercício prescrito para o seu corpo — não para a turma toda.
          </HeroSub>
          <HeroCTAGroup className="reveal reveal-delay-3">
            <BtnPrimary href={waLink('Olá! Gostaria de agendar minha avaliação gratuita de Pilates Clínico.')} target="_blank" rel="noopener">
              <WhatsAppIcon /> Agendar Avaliação Gratuita
            </BtnPrimary>
            <BtnSecondary href="#precos">Ver planos e preços</BtnSecondary>
          </HeroCTAGroup>
          <HeroTrust className="reveal reveal-delay-4">
            <TrustItem><span className="icon">★</span> 5.0 no Google (60+ avaliações)</TrustItem>
            <TrustItem><span className="icon">✓</span> +1.000 clientes atendidos</TrustItem>
            <TrustItem><span className="icon">✓</span> 13 profissionais especializados</TrustItem>
          </HeroTrust>
        </HeroLeft>
        <HeroRight>
          {/* TODO: foto de pilates — usando atend1 como placeholder */}
          <img src="/images/atend1.jpg" alt="Pilates Clínico na INNOVA MOVIMENTO — Belo Horizonte" loading="eager" />
        </HeroRight>
      </HeroSection>

      {/* O QUE É */}
      <Section id="o-que-e" aria-labelledby="oqe-title">
        <Container>
          <SectionLabel className="reveal">Entenda a diferença</SectionLabel>
          <SectionTitle className="reveal reveal-delay-1" id="oqe-title">
            Pilates Clínico não é aula de Pilates.<br />É fisioterapia em movimento.
          </SectionTitle>
          <OQueEGrid>
            <OQueEImg className="reveal">
              {/* TODO: foto de pilates */}
              <img src="/images/atend2.jpg" alt="Fisioterapeuta conduzindo sessão de Pilates Clínico" loading="lazy" />
            </OQueEImg>
            <OQueEText className="reveal reveal-delay-2">
              <h3>O que diferencia o Pilates Clínico do Pilates de academia?</h3>
              <p>No Pilates de academia, você segue uma aula coletiva com 10, 15 ou 20 pessoas. O exercício é o mesmo para todos. O foco é a prática — não o seu corpo.</p>
              <p>No Pilates Clínico da INNOVA, cada aluno passa por uma <strong>avaliação fisioterápica individual</strong> antes de começar. Os exercícios são <strong>prescritos para o seu histórico, suas limitações e seus objetivos</strong> — não para a turma toda.</p>
              <p>Quem conduz é <strong>fisioterapeuta especializado</strong>, não instrutor de Pilates. A diferença está em quem acompanha você e o que sabe fazer com o que observa.</p>
              <HighlightBox>
                <strong>Turmas de no máximo 3 pessoas.</strong> Atenção real. Evolução contínua. Sem se perder no meio de uma aula cheia.
              </HighlightBox>
            </OQueEText>
          </OQueEGrid>
        </Container>
      </Section>

      {/* PARA QUEM É */}
      <Section $bg="var(--creme)" id="para-quem" aria-labelledby="pq-title">
        <Container>
          <SectionLabel className="reveal">Para quem é indicado</SectionLabel>
          <SectionTitle className="reveal reveal-delay-1" id="pq-title">Pilates Clínico funciona para quem?</SectionTitle>
          <SectionDesc className="reveal reveal-delay-2">
            Se você tem uma queixa específica, está em recuperação ou quer simplesmente se mover com mais segurança — o Pilates Clínico é para você.
          </SectionDesc>
          <PerfilGrid>
            {[
              { icon: '🦴', title: 'Dores na Coluna', desc: 'Hérnia de disco, dor lombar crônica, cervicalgia. Exercícios adaptados à sua condição.' },
              { icon: '🔄', title: 'Pós-Operatório', desc: 'Reabilitação após cirurgias ortopédicas. Retorno seguro ao movimento com acompanhamento especializado.' },
              { icon: '🏃', title: 'Atletas e Esportistas', desc: 'Melhora de performance, prevenção de lesões e recuperação de overuse. Para quem exige do corpo.' },
              { icon: '👴', title: 'Terceira Idade', desc: 'Equilíbrio, força e mobilidade com total segurança. Exercícios adaptados à faixa etária.' },
              { icon: '💼', title: 'Sedentários', desc: 'Retorno ao movimento sem risco. Progressão individualizada para quem ficou parado por muito tempo.' },
              { icon: '🤰', title: 'Gestantes e Pós-Parto', desc: 'Preparação do corpo para o parto e recuperação pós-parto com segurança e acompanhamento técnico.' },
            ].map((item, i) => (
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
      <DifSection id="diferenciais" aria-labelledby="dif-title">
        <Container>
          <SectionLabel className="reveal">Por que a INNOVA</SectionLabel>
          <SectionTitle className="reveal reveal-delay-1" id="dif-title">O que faz a diferença no nosso Pilates</SectionTitle>
          <SectionDesc className="reveal reveal-delay-2">
            Não é só o método. É a qualidade de quem conduz, o tamanho das turmas e a atenção que você recebe a cada sessão.
          </SectionDesc>
          <DifGrid>
            {[
              { num: '01', title: 'Turmas Trio — máx. 3 alunos', desc: 'Cada turma tem no máximo 3 pessoas. Isso é raro em BH. Você recebe atenção real — o fisioterapeuta vê e corrige o seu movimento, não só demonstra o exercício.' },
              { num: '02', title: 'Fisioterapeutas especializados', desc: 'Quem conduz seu Pilates tem formação em fisioterapia e pós-graduação. Sabe ler seu histórico, identificar compensações e adaptar o exercício quando necessário.' },
              { num: '03', title: 'Avaliação individualizada antes de começar', desc: 'Você não entra numa aula sem avaliação. Entendemos sua queixa, seu histórico e seus objetivos. A partir daí, prescrevemos — não improvisamos.' },
              { num: '04', title: '+1.000 clientes. 5.0★ no Google.', desc: 'Mais de mil pessoas já passaram pela INNOVA. 60+ avaliações no Google, todas com nota máxima. Resultado não se compra — se constrói sessão a sessão.' },
            ].map((item, i) => (
              <DifCard key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </DifCard>
            ))}
          </DifGrid>
        </Container>
      </DifSection>

      {/* PREÇOS */}
      <Section $bg="var(--creme)" id="precos" aria-labelledby="preco-title">
        <Container>
          <SectionLabel className="reveal">Planos e investimento</SectionLabel>
          <SectionTitle className="reveal reveal-delay-1" id="preco-title">Pilates Clínico — Valores mensais</SectionTitle>
          <SectionDesc className="reveal reveal-delay-2">
            Escolha a frequência que cabe na sua rotina. Sem taxa de matrícula. Avaliação fisioterápica com desconto para matriculados.
          </SectionDesc>
          <PrecosGrid>
            <PrecoCard className="reveal">
              <div className="tipo">Trio · até 3 alunos</div>
              <div className="nome">1x por semana</div>
              <div className="freq">4 sessões/mês</div>
              <div className="valor"><sup>R$</sup>250<span>/mês</span></div>
              <div className="desc">Ideal para manutenção e prevenção.</div>
              <PrecoCTA href={waLink('Quero saber mais sobre o Pilates Clínico Trio 1x por semana.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
            <PrecoCard $destaque className="reveal reveal-delay-1">
              <div className="tipo">Trio · até 3 alunos</div>
              <div className="nome">2x por semana</div>
              <div className="freq">8 sessões/mês</div>
              <div className="valor"><sup>R$</sup>460<span>/mês</span></div>
              <div className="desc">A frequência ideal para resultado consistente e evolução visível.</div>
              <PrecoCTA href={waLink('Quero saber mais sobre o Pilates Clínico Trio 2x por semana.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
            <PrecoCard className="reveal reveal-delay-2">
              <div className="tipo">Trio · até 3 alunos</div>
              <div className="nome">3x por semana</div>
              <div className="freq">12 sessões/mês</div>
              <div className="valor"><sup>R$</sup>670<span>/mês</span></div>
              <div className="desc">Para objetivos específicos e evolução acelerada.</div>
              <PrecoCTA href={waLink('Quero saber mais sobre o Pilates Clínico Trio 3x por semana.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
            <PrecoCard className="reveal reveal-delay-3">
              <div className="tipo">Dupla · 2 pessoas fixas</div>
              <div className="nome">Dupla · a partir de</div>
              <div className="freq">1x ou 2x por semana</div>
              <div className="valor"><sup>R$</sup>380<span>/mês</span></div>
              <div className="desc">Você e uma parceira fixa. As duas se matriculam juntas. Avaliação com 30% de desconto.</div>
              <PrecoCTA href={waLink('Quero saber mais sobre o Pilates em Dupla.')} target="_blank" rel="noopener">Quero esse plano</PrecoCTA>
            </PrecoCard>
          </PrecosGrid>
          <PrecoAviso className="reveal">
            <strong>Avulso:</strong> R$80 por sessão · <strong>Avaliação fisioterápica Pilates:</strong> R$190 (30% desconto para matriculados) · Parcelamento disponível no cartão
          </PrecoAviso>
        </Container>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos" aria-labelledby="dep-title">
        <Container>
          <SectionLabel className="reveal">Quem já está na Innova</SectionLabel>
          <SectionTitle className="reveal reveal-delay-1" id="dep-title">Resultados reais. Palavras deles.</SectionTitle>
          <DepGrid>
            {DEPOIMENTOS.map((d, i) => (
              <DepCard key={i} className={`reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <div className="stars">★★★★★</div>
                <p className="text">{d.text}</p>
                <DepFooter>
                  <DepAvatar>{d.initials}</DepAvatar>
                  <DepInfo>
                    <div className="name">{d.name}</div>
                    <div className="tag">{d.tag}</div>
                  </DepInfo>
                </DepFooter>
              </DepCard>
            ))}
          </DepGrid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section $bg="var(--creme)" id="faq" aria-labelledby="faq-title">
        <Container>
          <SectionLabel className="reveal">Dúvidas frequentes</SectionLabel>
          <SectionTitle className="reveal reveal-delay-1" id="faq-title">Perguntas sobre Pilates Clínico em BH</SectionTitle>
          <FAQAccordion faqs={FAQS} />
        </Container>
      </Section>

      {/* CTA FINAL */}
      <CTAFinalSection aria-labelledby="cta-title">
        <Container>
          <h2 id="cta-title">Agende sua avaliação gratuita</h2>
          <p>Venha descobrir o que o Pilates Clínico pode fazer pelo seu corpo.<br />Sem compromisso. Sem protocolo genérico.</p>
          <BtnWhite href={waLink('Olá! Gostaria de agendar minha avaliação gratuita de Pilates Clínico na INNOVA.')} target="_blank" rel="noopener">
            <WhatsAppIcon /> Falar com Luciana no WhatsApp
          </BtnWhite>
          <CTAUrgency>Turmas com no máximo 3 alunos. Vagas limitadas por turno.</CTAUrgency>
        </Container>
      </CTAFinalSection>

      {/* FOOTER */}
      <FooterEl>
        <Container>
          <FooterGrid>
            <div>
              <img src="/images/logo.png" alt="INNOVA MOVIMENTO" style={{ height: 44, filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: 16, display: 'block' }} />
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
      <WAFloat href={waLink('Olá! Gostaria de saber mais sobre o Pilates Clínico.')} target="_blank" rel="noopener" aria-label="WhatsApp INNOVA MOVIMENTO">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </WAFloat>
    </>
  );
}
