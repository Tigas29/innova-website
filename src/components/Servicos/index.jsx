import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';

const Section = styled.section`
  background: var(--branco);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 20px;
  padding: 32px 28px;
  border: 1px solid var(--cinza-quente);
  transition: var(--transition);
  background: var(--branco);

  &:hover {
    border-color: var(--roxo-soft);
    box-shadow: 0 16px 48px rgba(128,112,160,0.12);
    transform: translateY(-4px);
  }

  &.destaque {
    background: var(--grad);
    border-color: transparent;
    color: var(--branco);

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 60px rgba(93,191,176,0.3);
    }
  }
`;

const ServicoTag = styled.div`
  display: inline-block;
  background: rgba(255,255,255,0.2);
  color: var(--branco);
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 50px;
  margin-bottom: 18px;
`;

const ServicoIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
`;

const ServicoH3 = styled.h3`
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 6px;
  letter-spacing: -0.01em;

  .destaque & {
    color: var(--branco);
  }
`;

const ServicoSubtitle = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--roxo);
  font-weight: 500;
  margin-bottom: 14px;

  .destaque & {
    color: rgba(255,255,255,0.8);
  }
`;

const ServicoP = styled.p`
  font-size: 15px;
  color: var(--cinza-medio);
  line-height: 1.7;
  margin-bottom: 18px;

  .destaque & {
    color: rgba(255,255,255,0.75);
  }
`;

const ServicoPara = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  color: var(--cinza-medio);
  padding-top: 14px;
  border-top: 1px solid var(--cinza-quente);

  .destaque & {
    color: rgba(255,255,255,0.6);
    border-top-color: rgba(255,255,255,0.2);
  }
`;

export default function Servicos() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">Tratamentos</SectionLabel>
        <SectionTitle className="reveal">
          Três caminhos. Um objetivo:<br />você se movendo do jeito que merece.
        </SectionTitle>
        <Grid>
          <Card className="reveal">
            <ServicoIcon>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 2a3 3 0 100 6 3 3 0 000-6z"/>
                <path d="M15 16a3 3 0 100 6 3 3 0 000-6z"/>
                <path d="M9 8l6 8"/>
              </svg>
            </ServicoIcon>
            <ServicoH3>Fisioterapia Ortopédica</ServicoH3>
            <ServicoSubtitle>Para quem quer resolver, não só suportar.</ServicoSubtitle>
            <ServicoP>Atendimento individual com avaliação clínica completa, diagnóstico funcional e plano específico. Indicado para dores musculares, articulares, pós-operatório, lesões esportivas e condições crônicas.</ServicoP>
            <ServicoPara>Ideal para: dor lombar, cervical, ombro, joelho, hérnia de disco, pós-cirurgia</ServicoPara>
          </Card>

          <Card className="reveal reveal-delay-1">
            <ServicoIcon>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="5" r="2"/>
                <path d="M12 7v6M9 10l-3 4M15 10l3 4M9 20l3-4 3 4"/>
              </svg>
            </ServicoIcon>
            <ServicoH3>Pilates Clínico Trio</ServicoH3>
            <ServicoSubtitle>A atenção do individual. A dinâmica do grupo, sem a lotação.</ServicoSubtitle>
            <ServicoP>Turmas de no máximo 3 pessoas conduzidas por fisioterapeuta. Cada exercício adaptado ao seu histórico, suas limitações e seus objetivos. Não é Pilates convencional.</ServicoP>
            <ServicoPara>Ideal para: reabilitação, prevenção, postura, mobilidade contínua</ServicoPara>
          </Card>

          <Card className="destaque reveal reveal-delay-2">
            <ServicoTag>✦ Exclusivo em BH</ServicoTag>
            <ServicoIcon>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10"/>
                <path d="M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5"/>
                <path d="M12 12h5"/>
              </svg>
            </ServicoIcon>
            <ServicoH3>Gyrotonic</ServicoH3>
            <ServicoSubtitle>Uma das poucas clínicas credenciadas em BH.</ServicoSubtitle>
            <ServicoP>Método que trabalha o corpo em padrões circulares e tridimensionais, com aparelhos específicos. Combina natação, dança, ioga e ginástica. Resulta em mobilidade e consciência corporal de outro nível.</ServicoP>
            <ServicoPara>Ideal para: performance, prevenção, atletas, quem busca diferenciação</ServicoPara>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
