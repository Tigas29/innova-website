import styled from 'styled-components';
import { Container } from '../../styles/shared';

const Section = styled.div`
  background: var(--roxo-pale);
  padding: 56px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  text-align: center;
  padding: 20px;
  border-right: 1px solid var(--roxo-soft);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 900px) {
    &:nth-child(2) { border-right: none; }
    &:nth-child(3) {
      border-right: 1px solid var(--roxo-soft);
      border-top: 1px solid var(--roxo-soft);
    }
    &:nth-child(4) { border-top: 1px solid var(--roxo-soft); }
  }
`;

const N = styled.div`
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
`;

const NL = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--cinza-medio);
  margin-top: 6px;
`;

const numeros = [
  { n: '+9.000', label: 'atendimentos por ano' },
  { n: '+1.000', label: 'clientes atendidos' },
  { n: '+10 anos', label: 'de experiência clínica' },
  { n: '5.0 ★', label: 'Google Reviews' },
];

export default function Numeros() {
  return (
    <Section>
      <Container>
        <Grid>
          {numeros.map((item, i) => (
            <Item key={i} className="reveal">
              <N>{item.n}</N>
              <NL>{item.label}</NL>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
