import styled from 'styled-components';

export const Section = styled.section`
  padding: 72px 28px;
  background: ${p => p.$alt ? 'var(--branco)' : 'var(--creme)'};
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Label = styled.div`
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

export const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(22px, 2.6vw, 38px);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--quase-preto);
  margin-bottom: 16px;
  max-width: 680px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--cinza-medio);
  line-height: 1.8;
  max-width: 640px;
  margin-bottom: 14px;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  background: var(--grad);
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  padding: 14px 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 4px 20px rgba(93,191,176,0.35);
  &:hover { opacity: 0.92; transform: translateY(-1px); }
`;
