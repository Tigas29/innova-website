import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sala3 from '../../assets/sala3.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  background: var(--creme);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    min-height: 100svh;
    position: relative;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 52px 80px 28px;
  max-width: 680px;
  margin-left: auto;
  background: var(--creme);

  @media (max-width: 960px) {
    padding: 100px 24px 60px;
    max-width: 100%;
    margin-left: 0;
    position: relative;
    z-index: 2;
    order: 1;
    background: transparent;
  }
`;

const HeroRight = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(to right, var(--creme) 0%, transparent 30%);
  }

  @media (max-width: 960px) {
    position: absolute;
    inset: 0;
    z-index: 0;
    height: 100%;
    max-height: none;

    &::before {
      background: linear-gradient(135deg, rgba(247,245,242,0.92) 0%, rgba(247,245,242,0.75) 55%, rgba(247,245,242,0.3) 100%);
    }
  }
`;

const HeroBadge = styled.div`
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
  margin-bottom: 28px;
  width: fit-content;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BadgeDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--turquesa);
  flex-shrink: 0;
`;

const HeroH1 = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(34px, 3.8vw, 60px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--quase-preto);
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  em {
    font-style: normal;
    background: var(--grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 960px) {
    font-size: clamp(30px, 7vw, 48px);
  }
`;

const HeroSub = styled.p`
  font-family: var(--font-body);
  font-size: clamp(14px, 1.4vw, 17px);
  color: var(--cinza-medio);
  max-width: 460px;
  margin-bottom: 36px;
  line-height: 1.75;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
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
  transition: var(--transition);
  border: none;
  cursor: pointer;
  align-self: flex-start;
  white-space: nowrap;
  box-shadow: 0 0 16px rgba(93,191,176,0.5), 0 0 32px rgba(93,191,176,0.25), 0 4px 16px rgba(0,0,0,0.2);
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease 0.3s, transform 0.65s ease 0.3s, box-shadow 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    box-shadow: 0 0 24px rgba(93,191,176,0.8), 0 0 60px rgba(93,191,176,0.4), 0 0 100px rgba(128,112,160,0.25);
    transform: translateY(-2px);
  }

  @media (max-width: 960px) {
    align-self: stretch;
    justify-content: center;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const HeroTrust = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid var(--cinza-quente);
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease 0.4s, transform 0.65s ease 0.4s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--cinza-medio);

  strong {
    color: var(--cinza-escuro);
    font-weight: 600;
  }
`;

const TrustDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--turquesa);
  flex-shrink: 0;
`;

export default function Hero() {
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    const elements = [badgeRef, h1Ref, subRef, btnRef, trustRef];
    const timer = setTimeout(() => {
      elements.forEach((ref, i) => {
        setTimeout(() => {
          if (ref.current) ref.current.classList.add('visible');
        }, 150 + i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSection>
      <HeroLeft>
        <HeroBadge ref={badgeRef}>
          <BadgeDot />
          Fisioterapia Premium · Santo Agostinho · BH
        </HeroBadge>
        <HeroH1 ref={h1Ref}>
          Fisioterapia que <em>resolve.</em><br />Não que alivia<br />por uma semana.
        </HeroH1>
        <HeroSub ref={subRef}>
          A cada dia você se sente mais travado. Seja dor no joelho, no ombro, na lombar ou na cervical: o problema não é onde dói. É tratar certo desde o início. A Innova oferece a solução.
        </HeroSub>
        <BtnPrimary
          ref={btnRef}
          href="https://wa.me/5531XXXXXXXX?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
          target="_blank"
        >
          Agendar Avaliação
        </BtnPrimary>
        <HeroTrust ref={trustRef}>
          <TrustItem><TrustDot /> <strong>5.0 ★</strong>&nbsp;no Google</TrustItem>
          <TrustItem><TrustDot /> <strong>+10 anos</strong>&nbsp;de experiência clínica</TrustItem>
          <TrustItem><TrustDot /> <strong>+1.000 clientes</strong>&nbsp;atendidos</TrustItem>
        </HeroTrust>
      </HeroLeft>
      <HeroRight>
        <img src={sala3} alt="INNOVA MOVIMENTO, Espaço premium" fetchPriority="high" />
      </HeroRight>
    </HeroSection>
  );
}
