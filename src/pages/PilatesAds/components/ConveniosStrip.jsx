import styled, { keyframes } from 'styled-components';
import { convenios } from '../constants';

const scrollAnim = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Strip = styled.div`
  background: var(--branco);
  border-top: 1px solid var(--cinza-quente);
  border-bottom: 1px solid var(--cinza-quente);
  padding: 14px 0;
  overflow: hidden;
  position: relative;
  &::before, &::after {
    content: ''; position: absolute;
    top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
  }
  &::before { left: 0; background: linear-gradient(to right, var(--branco), transparent); }
  &::after { right: 0; background: linear-gradient(to left, var(--branco), transparent); }
`;

const Track = styled.div`
  display: flex; gap: 0;
  width: max-content;
  animation: ${scrollAnim} 28s linear infinite;
`;

const Item = styled.div`
  display: flex; align-items: center; gap: 8px;
  padding: 0 36px;
  font-family: var(--font-display);
  font-size: 13px; font-weight: 600;
  color: var(--cinza-medio);
  white-space: nowrap;
  border-right: 1px solid var(--cinza-quente);
  span.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--turquesa); flex-shrink: 0; }
`;

export default function ConveniosStrip() {
  const all = [...convenios, ...convenios];
  return (
    <Strip>
      <Track>
        {all.map((c, i) => (
          <Item key={i}><span className="dot" />{c}</Item>
        ))}
      </Track>
    </Strip>
  );
}
