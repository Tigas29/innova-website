import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';

const Section = styled.section`
  background: var(--creme);
  padding: 96px 0;
`;

const EtapasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 56px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    border-radius: 16px;
  }
`;

const Etapa = styled.div`
  background: var(--branco);
  padding: 40px 32px 36px;
  border: none;
  text-align: left;
  transition: var(--transition);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--grad);
  }

  &:hover {
    background: var(--roxo-pale);
  }
`;

const EtapaNum = styled.span`
  font-family: var(--font-display);
  font-size: 80px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  display: block;

  @media (max-width: 900px) {
    font-size: 56px;
  }
`;

const EtapaH3 = styled.h3`
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
`;

const EtapaP = styled.p`
  font-size: 15px;
  color: var(--cinza-medio);
  line-height: 1.75;
`;

const EtapaDetalhe = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--turquesa);
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 16px;
    height: 1px;
    background: var(--turquesa);
  }
`;

const CtaWrap = styled.div`
  text-align: center;
  margin-top: 56px;
`;

const BtnPrimary = styled.a`
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
  box-shadow: 0 0 16px rgba(93,191,176,0.5), 0 0 32px rgba(93,191,176,0.25), 0 4px 16px rgba(0,0,0,0.2);

  &:hover {
    box-shadow: 0 0 24px rgba(93,191,176,0.8), 0 0 60px rgba(93,191,176,0.4);
    transform: translateY(-2px);
  }
`;

export default function Etapas() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">O processo</SectionLabel>
        <SectionTitle className="reveal">
          Três etapas. Sem burocracia.<br />Com comprometimento real.
        </SectionTitle>
        <EtapasGrid>
          <Etapa className="reveal">
            <EtapaNum>01</EtapaNum>
            <EtapaH3>Avaliação Completa</EtapaH3>
            <EtapaP>Uma conversa clínica completa, sem pressa e sem compromisso. Entendemos o que você sente, o que já fez, o que funcionou e o que não funcionou. Explicamos com honestidade o que é possível.</EtapaP>
            <EtapaDetalhe>Sem compromisso</EtapaDetalhe>
          </Etapa>
          <Etapa className="reveal reveal-delay-1">
            <EtapaNum>02</EtapaNum>
            <EtapaH3>Plano Individual</EtapaH3>
            <EtapaP>Com base na avaliação, montamos um plano de tratamento feito para o seu caso: método definido, frequência adequada e metas reais. Nada de protocolo genérico.</EtapaP>
            <EtapaDetalhe>Feito para você</EtapaDetalhe>
          </Etapa>
          <Etapa className="reveal reveal-delay-2">
            <EtapaNum>03</EtapaNum>
            <EtapaH3>Tratamento e Evolução</EtapaH3>
            <EtapaP>Você começa acompanhado pelos mesmos profissionais do início ao fim. Ajustamos o plano conforme você evolui. Te mantemos informado a cada etapa.</EtapaP>
            <EtapaDetalhe>Acompanhamento real</EtapaDetalhe>
          </Etapa>
        </EtapasGrid>
        <CtaWrap className="reveal">
          <BtnPrimary
            href="https://wa.me/5531XXXXXXXX?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o."
            target="_blank"
          >
            Agendar Avaliação
          </BtnPrimary>
        </CtaWrap>
      </Container>
    </Section>
  );
}
