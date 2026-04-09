import styled from 'styled-components';
import logo from '../../../assets/logo.png';

const NavWrap = styled.nav`
  background: rgba(247,245,242,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cinza-quente);
  padding: 0 28px;
  margin-top: 36px;
  position: sticky; top: 36px; z-index: 100;
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
    <NavWrap>
      <NavInner>
        <img src={logo} alt="INNOVA MOVIMENTO" />
        <NavCta onClick={onCtaClick}>Agendar Avaliação</NavCta>
      </NavInner>
    </NavWrap>
  );
}
