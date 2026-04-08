import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle, SectionSub } from '../../styles/shared';
import amb01 from '../../assets/ambiente-01-conv.jpg';
import amb02 from '../../assets/ambiente-02.jpg';
import amb03 from '../../assets/ambiente-03.jpg';
import amb04 from '../../assets/ambiente-04.jpg';
import atend4 from '../../assets/atend4.jpg';

const Section = styled.section`
  background: var(--creme);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const DiffList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 28px;
`;

const DiffItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 16px;
  color: var(--cinza-escuro);
  background: var(--branco);
  border-radius: var(--radius);
  padding: 16px 18px;
  border: 1px solid var(--cinza-quente);
  transition: var(--transition);

  &:hover {
    border-color: var(--turquesa-light);
    box-shadow: 0 4px 16px rgba(93,191,176,0.1);
  }
`;

const DiffItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DiffDesc = styled.p`
  font-size: 14px;
  color: var(--cinza-medio);
  line-height: 1.7;
  margin: 0;
`;

const DiffCheck = styled.div`
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  background: var(--grad);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;

  svg {
    width: 11px;
    height: 11px;
  }
`;

const FotoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FotoMain = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const FotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const FotoGridItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const diferenciais = [
  {
    title: 'Avaliação completa antes de qualquer decisão clínica',
    desc: 'Uma conversa clínica completa, sem pressa. Entendemos o que você sente, o que já fez, o que funcionou e o que não funcionou. Avaliação funcional, com testes padronizados que conseguimos mensurar algumas capacidades físicas. É assim que identificamos a causa do problema. Explicamos com honestidade o que é possível.',
  },
  { title: 'Plano de tratamento montado exclusivamente para o seu caso' },
  { title: 'Acompanhamento pelos mesmos profissionais, sem rotatividade' },
  { title: 'Turmas de no máximo 3 pessoas no Pilates Clínico' },
  { title: 'Gyrotonic exclusivo. Uma das poucas clínicas em BH' },
];

export default function Diferenciais() {
  return (
    <Section>
      <Container>
        <Grid>
          <div>
            <SectionLabel className="reveal">A diferença</SectionLabel>
            <SectionTitle className="reveal">Na INNOVA, você é o protocolo.</SectionTitle>
            <SectionSub className="reveal">
              A maioria das clínicas atende dezenas de pacientes com o mesmo roteiro. A INNOVA foi construída para funcionar diferente, desde o início.
            </SectionSub>
            <DiffList>
              {diferenciais.map((item, i) => (
                <DiffItem key={i} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                  <DiffCheck>
                    <svg viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2.2">
                      <polyline points="1.5,5.5 4.5,8.5 9.5,2.5" />
                    </svg>
                  </DiffCheck>
                  {item.desc ? (
                    <DiffItemBody>
                      <span>{item.title}</span>
                      <DiffDesc>{item.desc}</DiffDesc>
                    </DiffItemBody>
                  ) : item.title}
                </DiffItem>
              ))}
            </DiffList>
          </div>
          <FotoCol className="reveal">
            <FotoMain>
              <img src={amb01} alt="Atendimento INNOVA MOVIMENTO" loading="lazy" />
            </FotoMain>
            <FotoGrid>
              <FotoGridItem><img src={amb02} alt="Espaço INNOVA" loading="lazy" /></FotoGridItem>
              <FotoGridItem><img src={amb03} alt="Sessão INNOVA" loading="lazy" /></FotoGridItem>
              <FotoGridItem><img src={amb04} alt="Sala INNOVA" loading="lazy" /></FotoGridItem>
              <FotoGridItem><img src={atend4} alt="Tratamento INNOVA" loading="lazy" /></FotoGridItem>
            </FotoGrid>
          </FotoCol>
        </Grid>
      </Container>
    </Section>
  );
}
