import { useState } from 'react';
import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';

const Section = styled.section`
  background: var(--creme);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  background: var(--branco);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--cinza-quente);
`;

const Question = styled.div`
  padding: 18px 22px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--quase-preto);
  user-select: none;
  transition: var(--transition);

  &:hover {
    color: var(--roxo);
  }
`;

const Icon = styled.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
  background: var(--creme);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--roxo);
  transition: var(--transition);

  ${Item}.open & {
    transform: rotate(45deg);
    background: var(--grad);
    color: var(--branco);
  }
`;

const Answer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;

  ${Item}.open & {
    max-height: 300px;
  }
`;

const AnswerInner = styled.div`
  padding: 0 22px 18px;
  font-size: 15px;
  color: var(--cinza-medio);
  line-height: 1.75;
`;

const faqs = [
  {
    q: 'A avaliação é realmente gratuita?',
    a: 'Sim, sem custo e sem pegadinha. A avaliação inclui anamnese completa, avaliação postural e funcional, e pode durar mais de uma hora, dependendo do caso. Não existe venda de pacote durante a avaliação. Você sai com informação real, independente de qualquer decisão.',
  },
  {
    q: 'Vocês atendem por convênio?',
    a: 'Não. A INNOVA é particular. Essa escolha foi intencional. O plano de saúde padrão exige de 4 a 5 sessões por semana com tempo limitado por sessão. É volume, não resultado. Na INNOVA, o tratamento segue a frequência certa para o seu caso, com toda a atenção necessária. Para entregar esse nível, precisamos dessa liberdade. Mas atendemos alguns convênios específicos. Consulte a seção de Convênios e Parcerias.',
  },
  {
    q: 'Por que vale a pena o investimento?',
    a: 'Quando você compara com o custo acumulado de tratamentos que não resolvem, em tempo, dinheiro e qualidade de vida perdida , a diferença fica clara. Mais de 1.000 clientes e 60 avaliações 5.0★ no Google são o melhor argumento. Para entender os valores, agende a avaliação gratuita.',
  },
  {
    q: 'Onde fica? Tem estacionamento?',
    a: 'Rua Araguari, 1750, Sala 800, Santo Agostinho, Belo Horizonte. Vizinho à Justiça Federal, região central da Zona Sul, fácil acesso pela Av. do Contorno. Há estacionamentos próximos; nossa equipe indica no agendamento.',
  },
  {
    q: 'Atendem idosos ou casos delicados?',
    a: 'Sim, com muita atenção. Trabalhamos com pacientes de todas as idades: quedas, perda de mobilidade, pós-operatório, condições crônicas. O plano é sempre adaptado para a realidade de cada paciente. Se quiser trazer um familiar, venha junto na avaliação.',
  },
  {
    q: 'Preciso de encaminhamento médico?',
    a: 'Não. Você agenda diretamente, sem encaminhamento ou laudo prévio. Se tiver exames ou laudos, traga. Ajudam muito. Mas não são obrigatórios para começar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">Dúvidas comuns</SectionLabel>
        <SectionTitle className="reveal">
          Perguntas diretas.<br />Respostas honestas.
        </SectionTitle>
        <Grid>
          {faqs.map((faq, i) => (
            <Item
              key={i}
              className={`${openIndex === i ? 'open' : ''} reveal${i % 2 !== 0 ? ' reveal-delay-1' : ''}`}
            >
              <Question onClick={() => toggle(i)}>
                {faq.q}
                <Icon>+</Icon>
              </Question>
              <Answer>
                <AnswerInner>{faq.a}</AnswerInner>
              </Answer>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
