import styled from 'styled-components';
import { Section, Inner, Label, Title } from '../pageStyles';

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 32px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: var(--creme);
  border: 1px solid var(--cinza-quente);
  border-radius: var(--radius); padding: 26px 22px;
`;

const Num = styled.div`
  font-family: var(--font-display);
  font-size: 34px; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700;
  color: var(--quase-preto); margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 14px; color: var(--cinza-medio); line-height: 1.7;
`;

export default function Processo() {
  return (
    <Section>
      <Inner>
        <Label>Como funciona</Label>
        <Title>Da primeira mensagem à primeira sessão</Title>
        <Steps>
          <Card>
            <Num>01</Num>
            <CardTitle>Você agenda pelo WhatsApp ou formulário</CardTitle>
            <CardText>Em menos de 2 horas, respondemos e confirmamos o melhor horário.</CardText>
          </Card>
          <Card>
            <Num>02</Num>
            <CardTitle>Avaliação com um fisioterapeuta</CardTitle>
            <CardText>40 minutos. Avalia postura, mobilidade, histórico e objetivos. Sem compromisso.</CardText>
          </Card>
          <Card>
            <Num>03</Num>
            <CardTitle>Seu plano começa</CardTitle>
            <CardText>2 a 3 vezes por semana. Cada sessão ajustada conforme sua evolução.</CardText>
          </Card>
        </Steps>
      </Inner>
    </Section>
  );
}
