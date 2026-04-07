import { useState } from "react";
import styled from "styled-components";
import { Container, SectionLabel, SectionTitle } from "../../styles/shared";

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
    q: "Em quanto tempo vou sentir resultado?",
    a: "A maioria dos pacientes relata melhora entre a terceira e a quarta sessão. Resultados consistentes, como redução significativa da dor e ganho de mobilidade, costumam aparecer entre o primeiro e o terceiro mês, dependendo da condição.",
  },
  {
    q: "Como funciona a avaliação?",
    a: "Você agenda pelo WhatsApp ou formulário. Um fisioterapeuta avalia sua postura, mobilidade, histórico e objetivos em aproximadamente 40 minutos. O valor da avaliação pode variar conforme o serviço, entre em contato para saber as condições do seu caso. No final, você recebe uma recomendação personalizada, sem compromisso de continuidade.",
  },
  {
    q: "Vocês atendem por convênio ou Wellhub?",
    a: "Sim. Aceitamos alguns convênios e também somos parceiros do Wellhub (antigo Gympass). Para a maioria dos serviços, o atendimento é particular, o que garante sessões mais longas, sem limite de quantidade e com atenção individualizada. Entre em contato para verificar se o seu convênio é aceito.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "Depende do procedimento. Para alguns serviços, como fisioterapia convencional, o encaminhamento médico é necessário. Para Pilates Clínico e outros serviços, você agenda diretamente. Se tiver exames ou laudos, traga, eles ajudam no planejamento. Na dúvida, nossa equipe orienta você no momento do agendamento.",
  },
  {
    q: "Qual a diferença para um estúdio de pilates convencional?",
    a: "Aqui, quem conduz as sessões são fisioterapeutas, não instrutores. O plano é baseado em avaliação clínica, não em sequência padrão. É atendimento individual ou em trio, nunca grupo grande. E os sócios são professores de pós-graduação na área.",
  },
  {
    q: "Quais serviços vocês oferecem além do Pilates?",
    a: "Além do Pilates Clínico, trabalhamos com Fisioterapia especializada, Gyrotonic, RPG e reabilitação pós-operatória. Cada serviço é conduzido por fisioterapeutas especializados, com plano personalizado para a sua necessidade.",
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
          Perguntas diretas.
          <br />
          Respostas honestas.
        </SectionTitle>
        <Grid>
          {faqs.map((faq, i) => (
            <Item
              key={i}
              className={`${openIndex === i ? "open" : ""} reveal${i % 2 !== 0 ? " reveal-delay-1" : ""}`}
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
