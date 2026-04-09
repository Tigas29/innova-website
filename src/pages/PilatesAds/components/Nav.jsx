import styled from 'styled-components';
import logo from '../../../assets/logo.png';

const CrefBar = styled.div`
  background: var(--quase-preto);
  color: rgba(255,255,255,0.7);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-align: center;
  padding: 5px 16px;
  position: sticky; top: 0; z-index: 101;
`;

const NavWrap = styled.nav`
  background: rgba(247,245,242,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cinza-quente);
  padding: 0 28px;
  position: sticky; top: 28px; z-index: 100;
`;

const NavInner = styled.div`
  max-width: 1100px; margin: 0 auto;
  height: 64px; display: flex;
  align-items: center; justify-content: space-between;
  img { height: 38px; width: auto; display: block; }
`;

const NavCta = styled.button`
  background: var(--grad); color: var(--branco);
  font-family: var(--font-display);
  font-weight: 600; font-size: 14px;
  padding: 10px 22px; border-radius: 50px;
  border: none; cursor: pointer; white-space: nowrap;
  box-shadow: 0 4px 16px rgba(93,191,176,0.35);
  &:hover { opacity: 0.9; }
`;

export default function Nav({ onCtaClick }) {
  return (
    <>
      <CrefBar>CREFITO/MG: RE 007640</CrefBar>
      <NavWrap>
        <NavInner>
          <img src={logo} alt="INNOVA MOVIMENTO" />
          <NavCta onClick={onCtaClick}>Agendar Avaliação</NavCta>
        </NavInner>
      </NavWrap>
    </>
  );
}
