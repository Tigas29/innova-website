import styled, { keyframes } from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';

const Section = styled.section`
  background: var(--branco);
  padding: 96px 0;
`;

const ReviewsBar = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--turquesa-pale);
  border: 1px solid var(--turquesa-light);
  border-radius: 16px;
  padding: 18px 28px;
  margin-bottom: 44px;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    box-shadow: 0 4px 20px rgba(93,191,176,0.2);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
`;

const Stars = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  color: #F5A623;
`;

const ReviewsText = styled.div`
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--cinza-escuro);

  strong {
    color: var(--quase-preto);
    font-size: 18px;
  }
`;

const ReviewsCta = styled.span`
  font-size: 13px;
  color: var(--turquesa);
  font-weight: 600;
  margin-left: 8px;
`;

const scrollReviews = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CarouselWrap = styled.div`
  overflow: hidden;
  margin: 0 -28px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, var(--branco), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, var(--branco), transparent);
  }
`;

const Carousel = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 12px 28px;
  animation: ${scrollReviews} 48s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const RevCard = styled.div`
  background: var(--branco);
  border-radius: 16px;
  padding: 24px 28px;
  border: 1px solid var(--cinza-quente);
  width: 320px;
  flex-shrink: 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: var(--transition);

  &:hover {
    border-color: var(--roxo-soft);
    box-shadow: 0 8px 28px rgba(128,112,160,0.1);
    transform: translateY(-2px);
  }
`;

const RevStars = styled.div`
  font-size: 17px;
  color: #F5A623;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const RevText = styled.p`
  font-size: 14px;
  color: var(--cinza-escuro);
  line-height: 1.72;
  margin-bottom: 16px;
  font-style: italic;
`;

const RevFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RevName = styled.span`
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  color: var(--quase-preto);
`;

const RevTime = styled.span`
  font-family: var(--font-display);
  font-size: 12px;
  color: var(--cinza-medio);
`;

const ReviewsLink = styled.div`
  text-align: center;
  margin-top: 36px;

  a {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    color: var(--turquesa);
    text-decoration: none;
    border-bottom: 1px solid var(--turquesa-light);
    padding-bottom: 2px;
    transition: var(--transition);

    &:hover {
      color: var(--roxo);
      border-color: var(--roxo-soft);
    }
  }
`;

const reviews = [
  { text: '"Excelentes profissionais, todos muito cuidadosos. Ambiente muito agradável."', name: 'Rita Leal', time: '8 meses atrás' },
  { text: '"Uma clínica muito especial, desde os fisioterapeutas até a secretária, passando pelos aparelhos e o mobiliário, realmente tudo é espetacular! A capacidade técnica de todos os profissionais está bem acima dos que já conheci. Carinho, dedicação e competência não faltam! Super indico!!"', name: 'Ana Moregula', time: '9 meses atrás' },
  { text: '"Sou praticante de Pilates no Innova há três anos e, durante todo esse período, sempre encontrei uma equipe altamente qualificada, atenciosa e comprometida com a promoção da saúde e do bem-estar. Confio no trabalho realizado e recomendo!"', name: 'Eliane Hermont Paes', time: '9 meses atrás' },
  { text: '"Acompanho minha mãe de 85 anos e ela está adorando e sente melhoras a cada sessão."', name: 'Luiz Carlos Castro', time: '10 meses atrás' },
  { text: '"Eu me curei de uma hérnia cervical com indicação cirúrgica de dois médicos na Innova. Se você deseja Innovar sua saúde e bem estar, não existe lugar para estar, a não ser lar!"', name: 'André Teixeira', time: '10 meses atrás' },
  { text: '"Há alguns anos estou na Innova e tenho conseguido excelentes resultados. Me livrei de uma cirurgia no joelho devido a artrose e que poderia me limitar muito. Muita gratidão a toda equipe pelo cuidado, atenção e carinho que recebemos."', name: 'Ligia Horacio', time: '9 meses atrás' },
  { text: '"Boa localização, estrutura bem montada e profissionais competentes. Sentimos a melhora a cada sessão da fisioterapia, e a cada passo sentimos mais segurança no tratamento. Parabéns a Innova!"', name: 'Dario Pena', time: '9 meses atrás' },
];

export default function Depoimentos() {
  // Duplicar para o loop infinito
  const allReviews = [...reviews, ...reviews];

  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">O que dizem os pacientes</SectionLabel>
        <SectionTitle className="reveal">
          Quem passou pela Innova<br />voltou. E indicou.
        </SectionTitle>
        <ReviewsBar href="https://g.page/r/CVSnev81Vm1UEBM/review" target="_blank" className="reveal">
          <Stars>★★★★★</Stars>
          <ReviewsText>
            <strong>5.0</strong> no Google, avaliações verificadas
            <ReviewsCta>Deixar avaliação ↗</ReviewsCta>
          </ReviewsText>
        </ReviewsBar>

        <CarouselWrap className="reveal">
          <Carousel>
            {allReviews.map((rev, i) => (
              <RevCard key={i}>
                <RevStars>★★★★★</RevStars>
                <RevText>{rev.text}</RevText>
                <RevFooter>
                  <RevName>{rev.name}</RevName>
                  <RevTime>{rev.time}</RevTime>
                </RevFooter>
              </RevCard>
            ))}
          </Carousel>
        </CarouselWrap>

        <ReviewsLink className="reveal">
          <a href="https://g.page/r/CVSnev81Vm1UEBM/review" target="_blank">Ver todas as avaliações no Google ↗</a>
        </ReviewsLink>
      </Container>
    </Section>
  );
}
