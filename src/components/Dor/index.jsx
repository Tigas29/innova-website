import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';
import atend2 from '../../assets/atend2.jpg';

const Section = styled.section`
  background: var(--branco);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Foto = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  position: relative;

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
  }
`;

const FotoBadge = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: var(--branco);
  border-radius: var(--radius);
  padding: 14px 18px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
`;

const Stars = styled.div`
  font-size: 16px;
`;

const BadgeLabel = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  color: var(--cinza-escuro);
  margin-top: 4px;
`;

const TextCol = styled.div`
  p {
    font-size: 17px;
    color: var(--cinza-escuro);
    margin-bottom: 20px;
    line-height: 1.75;
  }
`;

const HighlightBox = styled.div`
  background: var(--turquesa-pale);
  border-left: 3px solid var(--turquesa);
  padding: 18px 22px;
  border-radius: 0 var(--radius) var(--radius) 0;
  margin: 24px 0;
  font-style: italic;
  color: var(--cinza-escuro);
  font-size: 16px;
`;

export default function Dor() {
  return (
    <Section>
      <Container>
        <Grid>
          <Foto className="reveal">
            <img src={atend2} alt="Atendimento na INNOVA MOVIMENTO" loading="lazy" />
            <FotoBadge>
              <Stars>★★★★★</Stars>
              <BadgeLabel>5.0 ★ no Google</BadgeLabel>
            </FotoBadge>
          </Foto>
          <TextCol>
            <SectionLabel className="reveal">O problema real</SectionLabel>
            <SectionTitle className="reveal">Você não está exagerando. A dor que volta é um problema real.</SectionTitle>
            <div className="reveal">
              <p>Duas semanas de melhora, depois tudo volta ao mesmo lugar. Você já conhece esse ciclo.</p>
              <p>Já fez fisioterapia antes. Talvez mais de uma vez. Aplicaram corrente, passaram ultrassom, te mandaram com lista de exercícios. A dor cedeu. E voltou.</p>
              <HighlightBox>
                Não é falta de disciplina. É o que acontece quando o tratamento é construído para uma média de pacientes, não para você.
              </HighlightBox>
              <p>A diferença entre quem resolve e quem convive com a dor por anos costuma ser simples: o nível de atenção que o tratamento recebe.</p>
            </div>
          </TextCol>
        </Grid>
      </Container>
    </Section>
  );
}
