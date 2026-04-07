import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
`;

export const SectionLabel = styled.div`
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--turquesa);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--turquesa);
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(28px, 3.2vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--quase-preto);
  margin-bottom: 16px;
`;

export const SectionSub = styled.p`
  font-size: 17px;
  color: var(--cinza-medio);
  max-width: 520px;
  line-height: 1.75;
`;

export const BtnPrimary = styled.a`
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
  white-space: nowrap;
  box-shadow: 0 0 16px rgba(93,191,176,0.5), 0 0 32px rgba(93,191,176,0.25), 0 4px 16px rgba(0,0,0,0.2);

  &:hover {
    box-shadow: 0 0 24px rgba(93,191,176,0.8), 0 0 60px rgba(93,191,176,0.4), 0 0 100px rgba(128,112,160,0.25);
    transform: translateY(-2px);
  }
`;

export const RevealElement = styled.div`
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
