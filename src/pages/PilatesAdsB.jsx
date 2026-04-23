import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo.png";
import heroPilates from "../assets/hero pilates.jpg";
import equipeImg from "../assets/imagens todos os profissionais juntos.jpeg";
import espacoSalaGeral from "../assets/espaco-sala-geral.jpg";
import espacoCadillac from "../assets/espaco-cadillac.jpg";
import espacoReformer from "../assets/espaco-reformer.jpg";
import espacoSalaReformers from "../assets/espaco-sala-reformers.jpg";
const LEADS_API = "/api/lead";

const WA_BASE = "https://wa.me/5531983444371?text=";
const waLink = (msg) => `${WA_BASE}${encodeURIComponent(msg)}`;

async function sendLead(data) {
  try {
    const res = await fetch(LEADS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, pagina: "/pilates-google-b" }),
    });
    if (!res.ok) console.error("[lead] API error:", res.status, await res.text());
  } catch (err) {
    console.error("[lead] fetch error:", err);
  }
}

/* ─── MODAL ─── */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(26, 24, 21, 0.65);
  backdrop-filter: blur(4px);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "all" : "none")};
  transition: opacity 0.25s ease;
`;
const ModalBox = styled.div`
  background: var(--branco);
  border-radius: 20px;
  padding: 40px 36px;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
  transform: ${(p) => (p.$open ? "translateY(0)" : "translateY(16px)")};
  transition: transform 0.3s ease;
  position: relative;
  @media (max-width: 500px) {
    padding: 28px 20px;
  }
`;
const ModalClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: var(--creme);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: var(--cinza-medio);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--cinza-quente);
  }
`;
const ModalTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 4px;
`;
const ModalSub = styled.p`
  font-size: 13px;
  color: var(--cinza-medio);
  margin-bottom: 22px;
`;
const FormGroup = styled.div`
  margin-bottom: 14px;
  label {
    display: block;
    font-family: var(--font-display);
    font-size: 12px;
    font-weight: 600;
    color: var(--cinza-escuro);
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  input,
  select {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid var(--cinza-quente);
    border-radius: 10px;
    font-family: var(--font-display);
    font-size: 15px;
    color: var(--quase-preto);
    background: var(--creme);
    outline: none;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
    &:focus {
      border-color: var(--turquesa);
      box-shadow: 0 0 0 3px rgba(93, 191, 176, 0.15);
      background: var(--branco);
    }
    &::placeholder {
      color: #bbb;
    }
    -webkit-appearance: none;
  }
`;
const BtnForm = styled.button`
  width: 100%;
  padding: 15px;
  background: var(--grad);
  color: var(--branco);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 4px 20px rgba(93, 191, 176, 0.45);
  transition: var(--transition);
  margin-top: 6px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(93, 191, 176, 0.6);
  }
`;
const FormNote = styled.p`
  text-align: center;
  font-size: 12px;
  color: var(--cinza-medio);
  margin-top: 10px;
`;
const FormSuccess = styled.div`
  text-align: center;
  padding: 20px 0;
  .icon {
    font-size: 48px;
    margin-bottom: 14px;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--quase-preto);
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    color: var(--cinza-medio);
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;
const BtnWASuccess = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25d366;
  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 24px;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    background: #22c55e;
    transform: translateY(-1px);
  }
`;

/* ─── SPINNER ─── */
const spin = keyframes`to { transform: rotate(360deg); }`;
const LoadingState = styled.div`
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 48px 0; gap: 20px;
`;
const SpinnerRing = styled.div`
  width: 52px; height: 52px;
  border: 5px solid #e8e8e8;
  border-top-color: #4bbfa8;
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
`;
const LoadingText = styled.p`
  font-size: 15px; color: var(--cinza-medio); font-weight: 500; text-align: center;
`;

/* ─── TRUST BAR ─── */
const TrustBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: var(--quase-preto);
  padding: 9px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: none;
  }
`;
const TBI = styled.span`
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  white-space: nowrap;
  em {
    color: var(--turquesa);
    font-style: normal;
    font-weight: 700;
  }
`;
const Sep = styled.span`
  color: rgba(255, 255, 255, 0.2);
  @media (max-width: 500px) {
    display: none;
  }
`;

/* ─── NAV ─── */
const Nav = styled.nav`
  background: rgba(247, 245, 242, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cinza-quente);
  padding: 0 28px;
  margin-top: 36px;
  position: sticky;
  top: 36px;
  z-index: 100;
  @media (max-width: 768px) {
    margin-top: 0;
    top: 0;
  }
`;
const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 38px;
    width: auto;
    display: block;
  }
`;
const NavCta = styled.button`
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 22px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(93, 191, 176, 0.35);
  &:hover {
    opacity: 0.9;
  }
`;

/* ─── HERO ─── */
const HeroSection = styled.section`
  background: var(--creme);
  padding: 60px 28px 72px;
  @media (max-width: 768px) {
    position: relative;
    min-height: 100svh;
    padding: 0;
    overflow: hidden;
  }
`;
const HeroGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  @media (max-width: 768px) {
    position: relative;
    z-index: 2;
    min-height: 100svh;
    max-width: 100%;
    padding: 80px 24px 56px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0;
  }
`;
const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(93, 191, 176, 0.4);
  padding: 6px 14px;
  border-radius: 50px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--turquesa);
  margin-bottom: 20px;
  width: fit-content;
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--turquesa);
  }
  @media (max-width: 768px) {
    border-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.7);
  }
`;
const UrgencyPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fef3c7;
  color: #92400e;
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 6px 14px;
  border-radius: 50px;
  margin-bottom: 16px;
`;
const UrgencyDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ef4444;
  animation: pulse 1.5s infinite;
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;
const H1 = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(28px, 3.2vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--quase-preto);
  margin-bottom: 18px;
  em {
    font-style: normal;
    color: var(--roxo);
  }
  @media (max-width: 768px) {
    color: #fff;
    font-size: clamp(30px, 8vw, 44px);
    em {
      color: var(--turquesa);
    }
  }
`;
const HeroSub = styled.p`
  font-size: clamp(15px, 1.3vw, 17px);
  color: var(--cinza-medio);
  line-height: 1.75;
  margin-bottom: 28px;
  max-width: 480px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Bullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--cinza-escuro);
  font-weight: 500;
`;
const BulletIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--turquesa);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
`;
const CtaGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;
const BtnMain = styled.button`
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(93, 191, 176, 0.4);
  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 17px;
    padding: 17px 30px;
  }
`;
const BtnWaLink = styled.a`
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--turquesa);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    width: 100%;
    display: block;
  }
`;
const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SocialPill = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  color: var(--cinza-escuro);
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: 50px;
  padding: 6px 14px;
`;
const HeroImg = styled.div`
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/5;
  position: relative;
  @media (max-width: 900px) {
    aspect-ratio: 16/9;
    order: -1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 768px) {
    position: absolute;
    inset: 0;
    border-radius: 0;
    aspect-ratio: auto;
    order: 0;
    z-index: -1;
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(10, 9, 8, 0.88) 0%,
        rgba(10, 9, 8, 0.5) 55%,
        rgba(10, 9, 8, 0.2) 100%
      );
    }
    img {
      height: 100%;
      object-position: center top;
    }
  }
`;
const HeroImgBadge = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(26, 24, 21, 0.72);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 12px 16px;
  span:first-child {
    display: block;
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 800;
    color: var(--branco);
  }
  span:last-child {
    display: block;
    font-family: var(--font-display);
    font-size: 11px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── CONVÊNIOS STRIP ─── */
const scrollConv = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
const ConvStrip = styled.div`
  background: var(--branco);
  border-top: 1px solid var(--cinza-quente);
  border-bottom: 1px solid var(--cinza-quente);
  padding: 13px 0;
  overflow: hidden;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, var(--branco), transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, var(--branco), transparent);
  }
`;
const ConvTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scrollConv} 26s linear infinite;
`;
const ConvItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 32px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--cinza-medio);
  white-space: nowrap;
  border-right: 1px solid var(--cinza-quente);
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--turquesa);
    flex-shrink: 0;
  }
`;

/* ─── SHARED ─── */
const Section = styled.section`
  padding: 72px 28px;
  background: ${(p) => (p.$alt ? "var(--branco)" : "var(--creme)")};
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
const SectionLabel = styled.div`
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(p) => (p.$light ? "rgba(255,255,255,0.5)" : "var(--turquesa)")};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  &::before {
    content: "";
    width: 20px;
    height: 1px;
    background: currentColor;
  }
`;
const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(22px, 2.6vw, 38px);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: ${(p) => (p.$light ? "var(--branco)" : "var(--quase-preto)")};
  margin-bottom: 16px;
  max-width: 680px;
`;
const SectionText = styled.p`
  font-size: 16px;
  color: ${(p) => (p.$light ? "rgba(255,255,255,0.72)" : "var(--cinza-medio)")};
  line-height: 1.8;
  max-width: 640px;
  margin-bottom: 14px;
`;
const BtnCta = styled.button`
  display: inline-flex;
  align-items: center;
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  padding: 18px 42px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 4px 20px rgba(93, 191, 176, 0.35);
  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

/* ─── DESTAQUE ─── */
const DestaqueBox = styled.div`
  background: var(--turquesa-pale);
  border-left: 4px solid var(--turquesa);
  border-radius: 12px;
  padding: 18px 22px;
  margin: 22px 0 26px;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--quase-preto);
  max-width: 540px;
`;

/* ─── 3 MOTIVOS ─── */
const MotivosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const MotivoCard = styled.div`
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: var(--radius);
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  &:hover {
    border-color: var(--turquesa-light);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(93, 191, 176, 0.1);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--grad);
  }
  h3 {
    font-family: var(--font-display);
    font-size: 17px;
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
const MotivoIcon = styled.div`
  font-size: 28px;
  margin-bottom: 16px;
`;
const MotivoNum = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--turquesa-pale);
  color: var(--turquesa);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
`;

/* ─── DEPOIMENTOS ─── */
const DepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 32px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const DepCard = styled.div`
  background: var(--branco);
  border-radius: var(--radius);
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid var(--cinza-quente);
  .stars {
    color: #f59e0b;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .text {
    font-size: 14px;
    color: var(--cinza-escuro);
    line-height: 1.7;
    font-style: italic;
    flex: 1;
  }
`;
const DepFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const DepAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  color: var(--branco);
  flex-shrink: 0;
`;
const DepInfo = styled.div`
  .name {
    font-family: var(--font-display);
    font-size: 13px;
    font-weight: 700;
    color: var(--quase-preto);
  }
  .tag {
    font-size: 11px;
    color: var(--cinza-medio);
  }
`;

/* ─── LOCALIZAÇÃO ─── */
const LocGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  margin-top: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const MapWrap = styled.div`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--cinza-quente);
  aspect-ratio: 4/3;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;
const LocInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const LocItem = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;
const LocIcon = styled.div`
  width: 38px;
  height: 38px;
  min-width: 38px;
  border-radius: 10px;
  background: var(--turquesa-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;
const LocText = styled.div`
  h4 {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 700;
    color: var(--quase-preto);
    margin-bottom: 3px;
  }
  p {
    font-size: 14px;
    color: var(--cinza-medio);
    line-height: 1.6;
  }
  a {
    color: var(--turquesa);
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ─── EQUIPE BADGES ─── */
const EquipeGroupPhoto = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 32px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center 35%;
    display: block;
  }
  @media (max-width: 600px) {
    img {
      height: 240px;
    }
  }
`;
const EquipeBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`;
const EquipeBadge = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--turquesa);
  background: var(--turquesa-pale);
  border-radius: 50px;
  padding: 7px 16px;
`;

/* ─── GALERIA ESPAÇO ─── */
const GaleriaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 260px 260px;
  gap: 12px;
  margin-top: 32px;
  border-radius: var(--radius);
  overflow: hidden;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
const GaleriaFoto = styled.div`
  overflow: hidden;
  border-radius: 8px;
  &:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  &:hover img {
    transform: scale(1.03);
  }
  @media (max-width: 600px) {
    &:first-child {
      grid-column: auto;
      grid-row: auto;
    }
    img {
      height: 220px;
    }
  }
`;

/* ─── FAQ ─── */
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
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
  padding: 17px 20px;
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
  &:hover {
    color: var(--turquesa);
  }
`;
const FaqIcon = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--roxo-pale);
  color: var(--roxo);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
  transition: transform 0.3s;
  transform: ${(p) => (p.$open ? "rotate(45deg)" : "none")};
`;
const FaqA = styled.div`
  max-height: ${(p) => (p.$open ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;
const FaqAInner = styled.div`
  padding: 0 20px 16px;
  font-size: 14px;
  color: var(--cinza-medio);
  line-height: 1.75;
`;

/* ─── CTA FINAL ─── */
const CtaSection = styled.section`
  padding: 80px 28px;
  background: var(--roxo-deep);
  text-align: center;
  h2 {
    font-family: var(--font-display);
    font-size: clamp(24px, 2.8vw, 38px);
    font-weight: 700;
    color: var(--branco);
    margin-bottom: 14px;
    line-height: 1.15;
  }
  p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 32px;
  }
`;
const CtaBtns = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`;
const BtnWhite = styled.button`
  display: inline-flex;
  align-items: center;
  background: var(--branco);
  color: var(--quase-preto);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }
`;
const BtnWaOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25d366;
  color: white;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  padding: 14px 26px;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    background: #22c55e;
    transform: translateY(-1px);
  }
`;
const CtaTrust = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  font-family: var(--font-display);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
`;
const UrgencyText = styled.p`
  margin-top: 16px !important;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55) !important;
`;

/* ─── FOOTER / WA ─── */
const FooterMin = styled.footer`
  background: var(--quase-preto);
  padding: 22px;
  text-align: center;
  font-family: var(--font-display);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    margin: 0 6px;
    &:hover {
      color: var(--turquesa);
    }
  }
`;
const WaFloat = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 300;
  background: #25d366;
  color: var(--branco);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  svg {
    width: 28px;
    height: 28px;
  }
`;

const DEPOIMENTOS = [
  {
    initials: "AT",
    name: "André Teixeira",
    tag: "10 meses atrás · Google",
    text: '"Eu me curei de uma hérnia cervical com indicação cirúrgica de dois médicos na Innova. Se você deseja melhorar sua saúde e bem estar, não existe lugar melhor para estar!"',
  },
  {
    initials: "AA",
    name: "Adriana Araújo",
    tag: "8 meses atrás · Google",
    text: '"Comecei com dores na coluna que me impediam de trabalhar. Após 3 meses de Pilates Clínico na Innova, recuperei minha qualidade de vida. A atenção dos fisioterapeutas faz toda a diferença."',
  },
  {
    initials: "LH",
    name: "Ligia Horacio",
    tag: "9 meses atrás · Google",
    text: '"Há alguns anos estou na Innova e tenho conseguido excelentes resultados. Me livrei de uma cirurgia no joelho. Muita gratidão a toda equipe pelo cuidado, atenção e carinho."',
  },
];

const FAQS = [
  {
    q: "Em quanto tempo vou sentir resultado?",
    a: "A maioria dos clientes relata perceber diferença após a primeira sessão — já sentem que trabalharam algo diferente, que nunca tinham sentido. Resultados consistentes aparecem ao longo do primeiro mês, dependendo da condição e frequência.",
  },
  {
    q: "Como funciona a avaliação?",
    a: "60 minutos com um fisioterapeuta. Avalia postura, mobilidade, força, funcionalidade, padrões de movimento, histórico e objetivos. Você sai com uma recomendação clara, sem compromisso de continuidade.",
  },
  {
    q: "Qual a diferença para um estúdio de pilates convencional?",
    a: "Duas coisas principais: aqui quem conduz são fisioterapeutas, não instrutores — e os 4 sócios atuam na formação de outros profissionais da área, o que garante que toda a equipe se mantenha atualizada. Isso significa que quem conduz suas aulas entende o corpo de forma clínica e aplica o Pilates como ferramenta terapêutica, não como exercício genérico.",
  },
  {
    q: "Vocês atendem por convênio ou Wellhub?",
    a: "Sim, aceitamos alguns convênios e somos parceiros do Wellhub (antigo Gympass). Entre em contato pelo WhatsApp informando o seu plano para verificarmos em tempo real.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "Para Pilates Clínico, não. Você agenda diretamente. Se tiver exames ou laudos, traga, eles ajudam no planejamento do seu tratamento.",
  },
  {
    q: "Quanto dura uma sessão?",
    a: "As sessões têm duração de 50 minutos. O tempo é inteiramente dedicado a você — sem espera, sem compartilhamento de atenção.",
  },
  {
    q: "Como é a primeira aula?",
    a: "A primeira aula acontece logo após a avaliação. Com base no que foi identificado, o fisioterapeuta já conduz uma sessão inicial adaptada ao seu quadro — você sai do primeiro dia sabendo exatamente o que vai trabalhar e por quê.",
  },
];

const CONVS = [
  "Wellhub",
  "Pró-Social",
  "TRT Saúde",
  "ASLEMG",
  "Wellhub",
  "Pró-Social",
  "TRT Saúde",
  "ASLEMG",
];

function handlePhone(e, setForm) {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length <= 2) v = v.replace(/^(\d{0,2})/, "($1");
  else if (v.length <= 7) v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  else if (v.length <= 11)
    v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  else v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  setForm((f) => ({ ...f, whatsapp: v }));
}

export default function PilatesAdsB() {
  const [modal, setModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ nome: "", whatsapp: "", horario: "" });
  const convAll = [...CONVS, ...CONVS];

  useEffect(() => {
    document.title =
      "Pilates Clínico em BH com Fisioterapeutas | INNOVA MOVIMENTO";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Pilates Clínico conduzido por fisioterapeutas em BH. Turmas de no máximo 3 alunos. 5.0 no Google. Agende agora.";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, nofollow";
    const handleKey = (e) => {
      if (e.key === "Escape") setModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
  }, [modal]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) return;
    setLoading(true);
    await sendLead({ nome: form.nome, whatsapp: form.whatsapp, objetivo: form.horario ? `Horário preferido: ${form.horario}` : '' });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'generate_lead', pagina: '/pilates-google-b' });
    const msg = `Olá, INNOVA MOVIMENTO! Me cadastrei pelo site para o Pilates Clínico.\n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nHorário preferido: ${form.horario || "Qualquer horário"}`;
    window.location.href = waLink(msg);
  }

  const openModal = () => {
    setSubmitted(false);
    setLoading(false);
    setModal(true);
  };

  return (
    <>
      {/* MODAL */}
      <Overlay
        $open={modal}
        onClick={(e) => e.target === e.currentTarget && setModal(false)}
      >
        <ModalBox $open={modal}>
          <ModalClose onClick={() => setModal(false)}>×</ModalClose>
          {loading ? (
            <LoadingState>
              <SpinnerRing />
              <LoadingText>Enviando seus dados...</LoadingText>
            </LoadingState>
          ) : !submitted ? (
            <>
              <ModalTitle>Garanta sua vaga</ModalTitle>
              <ModalSub>
                A INNOVA entra em contato no mesmo dia pelo WhatsApp
              </ModalSub>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label>Seu nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={form.nome}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, nome: e.target.value }))
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label>WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(31) 9 9999-9999"
                    value={form.whatsapp}
                    onChange={(e) => handlePhone(e, setForm)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Horário preferido</label>
                  <select
                    value={form.horario}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, horario: e.target.value }))
                    }
                  >
                    <option value="">Qual horário funciona melhor?</option>
                    <option>Manhã cedo (7h–9h)</option>
                    <option>Manhã (9h–12h)</option>
                    <option>Hora do almoço (12h–14h)</option>
                    <option>Tarde (14h–17h)</option>
                    <option>Final da tarde (17h–20h)</option>
                    <option>Qualquer horário</option>
                  </select>
                </FormGroup>
                <BtnForm type="submit" disabled={loading}>
                  {loading ? "Enviando..." : "Quero minha vaga"}
                </BtnForm>
                <FormNote>
                  🔒 Seus dados estão seguros. Sem compromisso.
                </FormNote>
              </form>
            </>
          ) : (
            <FormSuccess>
              <div className="icon">✅</div>
              <h3>Recebemos seus dados!</h3>
              <p>
                A INNOVA vai entrar em contato pelo WhatsApp em breve para confirmar sua
                vaga e horário.
              </p>
              <BtnWASuccess
                href={waLink(
                  `Olá, INNOVA MOVIMENTO! Acabei de preencher o formulário. Nome: ${form.nome}. Quero confirmar minha vaga no Pilates Clínico.`,
                )}
                target="_blank"
              >
                Confirmar pelo WhatsApp agora
              </BtnWASuccess>
            </FormSuccess>
          )}
        </ModalBox>
      </Overlay>

      <TrustBar>
        <TBI>
          <em>★ 5.0</em> no Google
        </TBI>
        <Sep>|</Sep>
        <TBI>📍 Santo Agostinho, BH</TBI>
        <Sep>|</Sep>
        <TBI>⏱ Respondemos em até 2h</TBI>
      </TrustBar>

      <Nav>
        <NavInner>
          <img src={logo} alt="INNOVA MOVIMENTO" />
          <NavCta onClick={openModal}>Agendar Avaliação</NavCta>
        </NavInner>
      </Nav>

      {/* HERO */}
      <HeroSection>
        <HeroGrid>
          <div>
            <UrgencyPill>
              <UrgencyDot /> Turmas de no máximo 3 alunos · Santo Agostinho, BH
            </UrgencyPill>
            <HeroBadge>
              <span />
              Pilates Clínico · Santo Agostinho · BH
            </HeroBadge>
            <H1>
              No Pilates Clínico você entende por que a dor volta.
              <br />
              <em>E como parar.</em>
            </H1>
            <HeroSub>
              Os 4 sócios são fisioterapeutas especialistas com referência em grandes
              clubes esportivos de BH e atuam na formação de outros profissionais da área.
              A maioria dos pacientes sente diferença nas primeiras sessões.
            </HeroSub>
            <BulletList>
              <Bullet>
                <BulletIcon>✓</BulletIcon>4 sócios especialistas presentes e
                envolvidos no seu tratamento
              </Bullet>
              <Bullet>
                <BulletIcon>✓</BulletIcon>Fisioterapeutas com especialização
                em Pilates Clínico
              </Bullet>
              <Bullet>
                <BulletIcon>✓</BulletIcon>Referência em fisioterapia nos
                principais clubes esportivos de BH
              </Bullet>
            </BulletList>
            <CtaGroup>
              <BtnMain onClick={openModal}>Garantir minha vaga</BtnMain>
            </CtaGroup>
            <SocialRow>
              <SocialPill>★ 5.0 no Google</SocialPill>
              <SocialPill>+10 anos de clínica</SocialPill>
              <SocialPill>+1.000 pacientes</SocialPill>
            </SocialRow>
          </div>
          <HeroImg>
            <img
              src={equipeImg}
              alt="4 sócios fisioterapeutas da INNOVA MOVIMENTO"
              fetchPriority="high"
            />
            <HeroImgBadge>
              <span>4 sócios</span>
              <span>Professores de Pós-Grad</span>
            </HeroImgBadge>
          </HeroImg>
        </HeroGrid>
      </HeroSection>

      {/* CONVÊNIOS */}
      <ConvStrip>
        <ConvTrack>
          {convAll.map((c, i) => (
            <ConvItem key={i}>
              <span />
              {c}
            </ConvItem>
          ))}
        </ConvTrack>
      </ConvStrip>

      {/* DOR + SOLUÇÃO */}
      <Section $alt>
        <Container>
          <SectionLabel>Por que a dor volta</SectionLabel>
          <SectionTitle>
            Você já fez tratamento. E a dor voltou. Isso tem explicação.
          </SectionTitle>
          <SectionText>
            Fisioterapia em tempo limitado, pilates em grupo sem avaliação,
            exercícios genéricos sem entender o que causa a dor. Quando o
            tratamento não é feito para o seu caso, o alívio é temporário.
          </SectionText>
          <SectionText>
            No Pilates Clínico da INNOVA, o ponto de partida é a avaliação
            clínica. O fisioterapeuta entende o que está causando o problema
            antes de definir qualquer exercício. O resultado não é alívio
            provisório. É resolução.
          </SectionText>
          <DestaqueBox>
            A maioria dos pacientes sente diferença nas primeiras 3 a 4 sessões.
          </DestaqueBox>
          <BtnCta onClick={openModal}>Agendar Minha Avaliação</BtnCta>
        </Container>
      </Section>

      {/* 3 MOTIVOS */}
      <Section>
        <Container>
          <SectionLabel>Por que a INNOVA</SectionLabel>
          <SectionTitle>
            3 razões para escolher o Pilates Clínico da INNOVA
          </SectionTitle>
          <MotivosGrid>
            <MotivoCard>
              <MotivoIcon>🎓</MotivoIcon>
              <MotivoNum>1</MotivoNum>
              <h3>Fisioterapeutas, não instrutores</h3>
              <p>
                Quem conduz suas sessões tem formação em fisioterapia e
                pós-graduação especializada. Eles enxergam o que está errado no
                seu movimento e sabem corrigir.
              </p>
            </MotivoCard>
            <MotivoCard>
              <MotivoIcon>🎯</MotivoIcon>
              <MotivoNum>2</MotivoNum>
              <h3>Máximo 3 alunos por turma</h3>
              <p>
                Não abrimos turmas cheias. Escolhemos trabalhar assim: no máximo
                3 alunos por turma, porque atenção real não funciona com 10
                pessoas ao mesmo tempo.
              </p>
            </MotivoCard>
            <MotivoCard>
              <MotivoIcon>📋</MotivoIcon>
              <MotivoNum>3</MotivoNum>
              <h3>Exercício prescrito para você</h3>
              <p>
                Antes de começar, você passa por avaliação fisioterápica. Os
                exercícios são adaptados ao seu histórico, não ao padrão da
                aula.
              </p>
            </MotivoCard>
          </MotivosGrid>
        </Container>
      </Section>

      {/* EQUIPE */}
      <Section $alt>
        <Container>
          <SectionLabel>A equipe</SectionLabel>
          <SectionTitle>
            4 sócios que formam quem te atende
          </SectionTitle>
          <SectionText>
            Os sócios são fisioterapeutas, mestres e especialistas em Pilates e referência
            em fisioterapia em grandes clubes esportivos de BH. Além da prática clínica,
            atuam na formação de outros profissionais, sendo responsáveis pelo treinamento
            contínuo da equipe INNOVA — para que você receba um atendimento seguro,
            atualizado e de alto nível.
          </SectionText>
          <EquipeGroupPhoto>
            <img
              src={equipeImg}
              alt="4 sócios fisioterapeutas da INNOVA MOVIMENTO"
              loading="lazy"
            />
          </EquipeGroupPhoto>
          <EquipeBadges>
            <EquipeBadge>4 sócios fisioterapeutas</EquipeBadge>
            <EquipeBadge>Formadores de profissionais da área</EquipeBadge>
            <EquipeBadge>Formação em Pilates</EquipeBadge>
            <EquipeBadge>Referência em clubes esportivos</EquipeBadge>
            <EquipeBadge>Formam e treinam a equipe</EquipeBadge>
          </EquipeBadges>
        </Container>
      </Section>

      {/* GALERIA ESPAÇO */}
      <Section>
        <Container>
          <SectionLabel>O espaço</SectionLabel>
          <SectionTitle>
            Equipamentos profissionais. Ambiente projetado para o seu tratamento.
          </SectionTitle>
          <GaleriaGrid>
            <GaleriaFoto>
              <img src={espacoSalaGeral} alt="Sala principal INNOVA MOVIMENTO com Cadillac e Reformer" />
            </GaleriaFoto>
            <GaleriaFoto>
              <img src={espacoCadillac} alt="Cadillac profissional INNOVA MOVIMENTO" />
            </GaleriaFoto>
            <GaleriaFoto>
              <img src={espacoReformer} alt="Reformer profissional INNOVA MOVIMENTO" />
            </GaleriaFoto>
            <GaleriaFoto>
              <img src={espacoSalaReformers} alt="Sala de Pilates Clínico INNOVA MOVIMENTO" />
            </GaleriaFoto>
          </GaleriaGrid>
        </Container>
      </Section>

      {/* DEPOIMENTOS */}
      <Section>
        <Container>
          <SectionLabel>Depoimentos</SectionLabel>
          <SectionTitle>
            Quem estava com dor. Agora se move com liberdade.
          </SectionTitle>
          <DepsGrid>
            {DEPOIMENTOS.map((d, i) => (
              <DepCard key={i}>
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
          </DepsGrid>
        </Container>
      </Section>

      {/* LOCALIZAÇÃO */}
      <Section $alt>
        <Container>
          <SectionLabel>Onde estamos</SectionLabel>
          <SectionTitle>Santo Agostinho, Belo Horizonte</SectionTitle>
          <LocGrid>
            <MapWrap>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.35!2d-43.9378!3d-19.9378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzE2LjEiUyA0M8KwNTYnMTYuMSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                allowFullScreen=""
                loading="lazy"
                title="Localização INNOVA MOVIMENTO"
              />
            </MapWrap>
            <LocInfo>
              <LocItem>
                <LocIcon>📍</LocIcon>
                <LocText>
                  <h4>Endereço</h4>
                  <p>
                    Rua Araguari, 1750, Sala 800
                    <br />
                    Santo Agostinho, Belo Horizonte, MG
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rua+Araguari+1750+Belo+Horizonte"
                    target="_blank"
                  >
                    Ver no Google Maps ↗
                  </a>
                </LocText>
              </LocItem>
              <LocItem>
                <LocIcon>🗺</LocIcon>
                <LocText>
                  <h4>Como chegar</h4>
                  <p>
                    Vizinho à Justiça Federal. Fácil acesso pela Av. do Contorno
                    e Av. Afonso Pena.
                  </p>
                </LocText>
              </LocItem>
              <LocItem>
                <LocIcon>📞</LocIcon>
                <LocText>
                  <h4>Contato direto</h4>
                  <p>
                    <a href="tel:+5531983444371">(31) 98344-4371</a>
                  </p>
                </LocText>
              </LocItem>
              <LocItem>
                <LocIcon>🕐</LocIcon>
                <LocText>
                  <h4>Horário</h4>
                  <p>Segunda a sexta: 7h às 20h</p>
                </LocText>
              </LocItem>
            </LocInfo>
          </LocGrid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionLabel>Dúvidas</SectionLabel>
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <FaqList>
            {FAQS.map((f, i) => (
              <FaqItem key={i}>
                <FaqQ onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q} <FaqIcon $open={openFaq === i}>+</FaqIcon>
                </FaqQ>
                <FaqA $open={openFaq === i}>
                  <FaqAInner>{f.a}</FaqAInner>
                </FaqA>
              </FaqItem>
            ))}
          </FaqList>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <CtaSection>
        <Container>
          <h2>
            Vaga disponível esta semana.
            <br />
            Garanta a sua agora.
          </h2>
          <p>Avaliação sem compromisso (gratuita). Turmas de no máximo 3 alunos.</p>
          <CtaBtns>
            <BtnWhite onClick={openModal}>Garantir minha vaga</BtnWhite>
            <BtnWaOutline as="button" onClick={openModal}>
              Preencher formulário
            </BtnWaOutline>
          </CtaBtns>
          <CtaTrust>
            <span>★ 5.0 no Google</span>
            <span>·</span>
            <span>Santo Agostinho, BH</span>
            <span>·</span>
            <span>Respondemos em até 2h</span>
          </CtaTrust>
          <UrgencyText>
            Vagas limitadas por turno · turmas fecham com 3 alunos
          </UrgencyText>
        </Container>
      </CtaSection>

      <FooterMin>
        INNOVA MOVIMENTO · Rua Araguari, 1750, Sl 800 · Santo Agostinho · BH ·
        <a href="tel:+5531983444371">(31) 98344-4371</a> · CREFITO/MG: RE 007640 · © 2026
      </FooterMin>

      <WaFloat
        as="button"
        onClick={openModal}
        aria-label="Agendar avaliação"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </WaFloat>
    </>
  );
}
