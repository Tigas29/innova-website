import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 14px 0;
  transition: var(--transition);
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--cinza-quente), 0 4px 20px rgba(0,0,0,0.06);

  &.scrolled {
    background: rgba(255,255,255,0.99);
    padding: 10px 0;
    box-shadow: 0 1px 0 var(--cinza-quente), 0 4px 24px rgba(0,0,0,0.08);
  }
`;

const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const NavLogo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    height: 36px;
    width: auto;
    display: block;
  }
`;

const NavCta = styled.a`
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 13px;
  padding: 9px 18px;
  border-radius: 50px;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
  box-shadow: 0 0 10px rgba(93,191,176,0.35);

  &:hover {
    box-shadow: 0 0 20px rgba(93,191,176,0.7), 0 0 40px rgba(93,191,176,0.3);
    transform: translateY(-1px);
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Nav className={scrolled ? 'scrolled' : ''}>
      <NavInner>
        <NavLogo href="#">
          <img src={logo} alt="INNOVA MOVIMENTO" />
        </NavLogo>
        <NavCta
          href="https://wa.me/5531XXXXXXXX?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita."
          target="_blank"
        >
          Agendar Avaliação Gratuita
        </NavCta>
      </NavInner>
    </Nav>
  );
}
