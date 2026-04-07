import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle, SectionSub } from '../../styles/shared';

const Section = styled.section`
  background: var(--branco);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--creme);
  border-radius: 16px;
  padding: 26px 24px;
  border: 1px solid var(--cinza-quente);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    border-color: var(--turquesa-light);
    box-shadow: 0 8px 24px rgba(93,191,176,0.1);
  }

  &.destaque {
    background: var(--grad);
    border: none;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ConvIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  min-width: 42px;
  background: var(--grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const H3 = styled.h3`
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--quase-preto);
  line-height: 1.2;
`;

const P = styled.p`
  font-size: 14px;
  color: var(--cinza-medio);
  line-height: 1.65;
`;

const Tag = styled.span`
  display: inline-block;
  width: fit-content;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 50px;

  &.verde {
    background: #E8F8EC;
    color: #2E7D47;
    border: 1px solid #A8D9B5;
  }

  &.roxo {
    background: var(--roxo-pale);
    color: var(--roxo);
    border: 1px solid var(--roxo-soft);
  }

  &.turquesa {
    background: var(--turquesa-pale);
    color: #2E897A;
    border: 1px solid var(--turquesa-light);
  }
`;

const DestaqueIcon = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

const DestaqueH3 = styled.h3`
  color: var(--branco);
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
`;

const DestaqueP = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  margin-top: 8px;
`;

const BtnWhite = styled.a`
  margin-top: 16px;
  display: inline-block;
  background: var(--branco);
  color: var(--roxo-deep);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

export default function Convenios() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">Convenios e Parcerias</SectionLabel>
        <SectionTitle className="reveal">
          Atendemos alguns convenios<br />e temos parcerias especiais.
        </SectionTitle>
        <SectionSub className="reveal">
          Consulte as condicoes especificas de cada modalidade, alguns exigem pedido médico, outros não.
        </SectionSub>
        <Grid>
          <Card className="reveal">
            <CardHeader>
              <ConvIcon>💪</ConvIcon>
              <H3>Wellhub (Gympass)</H3>
            </CardHeader>
            <Tag className="verde">Sem pedido medico</Tag>
            <P>Aceito para Pilates em grupo no plano Diamond Plus. Confirme se seu beneficio cobre essa modalidade antes de agendar.</P>
          </Card>

          <Card className="reveal reveal-delay-1">
            <CardHeader>
              <ConvIcon>⚖️</ConvIcon>
              <H3>Pro-Social / Justica Federal</H3>
            </CardHeader>
            <Tag className="roxo">Exige pedido medico</Tag>
            <P>Atendemos servidores da Justica Federal e beneficiarios do Pro-Social. Necessario apresentar pedido medico para iniciar o atendimento.</P>
          </Card>

          <Card className="reveal reveal-delay-2">
            <CardHeader>
              <ConvIcon>🏛️</ConvIcon>
              <H3>TRT Saude</H3>
            </CardHeader>
            <Tag className="verde">Sem pedido medico</Tag>
            <P>Atendemos beneficiarios do TRT Saude sem necessidade de encaminhamento medico previo. Agende diretamente.</P>
          </Card>

          <Card className="reveal">
            <CardHeader>
              <ConvIcon>🤝</ConvIcon>
              <H3>ASLEMG</H3>
            </CardHeader>
            <Tag className="turquesa">Desconto + reembolso</Tag>
            <P>Associados da ASLEMG tem desconto no atendimento e podem solicitar reembolso parcial pelo plano. Traga sua carteira de associado.</P>
          </Card>

          <Card className="reveal reveal-delay-1">
            <CardHeader>
              <ConvIcon>🎽</ConvIcon>
              <H3>Parcerias Esportivas</H3>
            </CardHeader>
            <Tag className="roxo">10% de desconto</Tag>
            <P>Parceiros esportivos da Innova tem 10% de desconto no atendimento via indicacao direta. Fale com seu treinador ou clube para confirmar a parceria.</P>
          </Card>

          <Card className="destaque reveal reveal-delay-2">
            <DestaqueIcon>📞</DestaqueIcon>
            <DestaqueH3>Tem duvida sobre seu plano?</DestaqueH3>
            <DestaqueP>Fale pelo WhatsApp antes de vir. Confirmamos se seu benefício se aplica.</DestaqueP>
            <BtnWhite
              href="https://wa.me/5531XXXXXXXX?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20meu%20plano%20%C3%A9%20aceito%20na%20Innova."
              target="_blank"
            >
              Verificar meu plano
            </BtnWhite>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
