import styled from 'styled-components';

const Bar = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  background: var(--quase-preto);
  padding: 9px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Item = styled.span`
  font-family: var(--font-display);
  font-size: 12px; font-weight: 500;
  color: rgba(255,255,255,0.72); white-space: nowrap;
  em { color: var(--turquesa); font-style: normal; font-weight: 700; }
`;

const Sep = styled.span`
  color: rgba(255,255,255,0.2);
  @media (max-width: 500px) { display: none; }
`;

export default function TrustBar() {
  return (
    <Bar>
      <Item><em>★ 5.0</em> no Google · +60 avaliações</Item>
      <Sep>|</Sep>
      <Item>📍 Santo Agostinho, BH</Item>
      <Sep>|</Sep>
      <Item>⏱ Respondemos em até 2h</Item>
    </Bar>
  );
}
