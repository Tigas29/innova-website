import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';
import sala4 from '../../assets/sala4.jpg';
import atend3 from '../../assets/atend3.jpg';
import sala5 from '../../assets/sala5.jpg';
import atend5 from '../../assets/atend5.jpg';
import sala2 from '../../assets/sala2.jpg';

const Section = styled.section`
  background: var(--creme);
  padding: 80px 0;
`;

const GaleriaGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 220px 220px;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GaleriaItem = styled.div`
  border-radius: var(--radius);
  overflow: hidden;

  &.tall {
    grid-row: span 2;

    @media (max-width: 900px) {
      grid-row: span 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;

    @media (max-width: 900px) {
      height: 200px;
    }
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

export default function Galeria() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">O espaço</SectionLabel>
        <SectionTitle className="reveal">
          Ambiente criado para<br />quem leva saúde a sério.
        </SectionTitle>
        <GaleriaGrid className="reveal">
          <GaleriaItem className="tall">
            <img src={sala4} alt="Estúdio INNOVA MOVIMENTO" loading="lazy" />
          </GaleriaItem>
          <GaleriaItem>
            <img src={atend3} alt="Atendimento INNOVA" loading="lazy" />
          </GaleriaItem>
          <GaleriaItem>
            <img src={sala5} alt="Equipamentos INNOVA" loading="lazy" />
          </GaleriaItem>
          <GaleriaItem>
            <img src={atend5} alt="Sessão INNOVA" loading="lazy" />
          </GaleriaItem>
          <GaleriaItem>
            <img src={sala2} alt="Espaço INNOVA" loading="lazy" />
          </GaleriaItem>
        </GaleriaGrid>
      </Container>
    </Section>
  );
}
