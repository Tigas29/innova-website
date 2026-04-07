import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle, SectionSub } from '../../styles/shared';

const Section = styled.section`
  background: var(--creme);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--branco);
  border-radius: 20px;
  padding: 32px 28px;
  border: 1px solid var(--cinza-quente);
  transition: var(--transition);

  &:hover {
    border-color: var(--turquesa-light);
    box-shadow: 0 8px 32px rgba(93,191,176,0.1);
    transform: translateY(-3px);
  }
`;

const Icon = styled.div`
  font-size: 36px;
  margin-bottom: 16px;
`;

const H3 = styled.h3`
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 15px;
  color: var(--cinza-medio);
  line-height: 1.7;
  margin-bottom: 16px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    font-family: var(--font-display);
    font-size: 11px;
    font-weight: 600;
    background: var(--turquesa-pale);
    color: #2E897A;
    border: 1px solid var(--turquesa-light);
    padding: 4px 10px;
    border-radius: 50px;
  }
`;

const encaminhadores = [
  {
    icon: '🦴',
    title: 'Médicos',
    desc: 'Especialistas que precisam de fisioterapia como extensão clínica, não como encaminhamento genérico. A Innova fecha o círculo do tratamento.',
    tags: ['Ortopedista', 'Reumatologista', 'Médico do Esporte'],
  },
  {
    icon: '🏋️',
    title: 'Personal Trainers e Treinadores',
    desc: 'Para alunos com dor, limitação de movimento ou histórico de lesão que precisam de avaliação clínica antes de evoluir o treino.',
    tags: ['Dor durante treino', 'Histórico de lesão', 'Limitação de movimento'],
  },
  {
    icon: '🦷',
    title: 'Dentistas',
    desc: 'Pacientes com bruxismo e disfunção de ATM que já fazem tratamento odontológico e precisam de abordagem complementar em fisioterapia.',
    tags: ['Bruxismo', 'Disfunção de ATM', 'Tensão mandibular'],
  },
];

export default function Encaminhadores() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">Quem indica a Innova</SectionLabel>
        <SectionTitle className="reveal">
          A Innova é destino de encaminhamento<br />para especialistas que levam resultado a sério.
        </SectionTitle>
        <SectionSub className="reveal">
          Profissionais de saúde e esporte de BH confiam na Innova para continuar o que iniciaram com seus pacientes.
        </SectionSub>
        <Grid>
          {encaminhadores.map((item, i) => (
            <Card key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <Icon>{item.icon}</Icon>
              <H3>{item.title}</H3>
              <P>{item.desc}</P>
              <Tags>
                {item.tags.map((tag, j) => <span key={j}>{tag}</span>)}
              </Tags>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
