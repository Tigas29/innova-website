import styled, { keyframes } from 'styled-components';
import { Section, Inner, Label, Title } from '../pageStyles';

const scrollAnim = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ReviewsBar = styled.div`
  display: flex; align-items: center; gap: 16px;
  background: var(--turquesa-pale);
  border: 1px solid var(--turquesa-light);
  border-radius: 14px; padding: 14px 22px;
  margin-bottom: 4px; flex-wrap: wrap;
`;

const ReviewsText = styled.div`
  font-family: var(--font-display);
  font-size: 15px; color: var(--cinza-escuro);
  strong { color: var(--quase-preto); font-size: 17px; }
`;

const CarouselWrap = styled.div`
  overflow: hidden; margin: 28px -28px 0;
  position: relative;
  &::before, &::after {
    content: ''; position: absolute;
    top: 0; bottom: 0; width: 80px;
    z-index: 2; pointer-events: none;
  }
  &::before { left: 0; background: linear-gradient(to right, var(--branco), transparent); }
  &::after { right: 0; background: linear-gradient(to left, var(--branco), transparent); }
`;

const Carousel = styled.div`
  display: flex; gap: 16px;
  width: max-content; padding: 8px 28px 16px;
  animation: ${scrollAnim} 52s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const RevCard = styled.div`
  background: var(--creme);
  border-radius: 14px; padding: 22px 24px;
  width: 290px; flex-shrink: 0;
`;

const Stars = styled.div`
  font-size: 13px; color: #F5A623;
  letter-spacing: 2px; margin-bottom: 10px;
`;

const RevText = styled.p`
  font-size: 14px; color: var(--cinza-escuro);
  line-height: 1.7; margin-bottom: 12px; font-style: italic;
`;

const RevFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center;
`;

const RevName = styled.span`
  font-family: var(--font-display);
  font-size: 13px; font-weight: 700; color: var(--quase-preto);
`;

const RevTime = styled.span`
  font-family: var(--font-display);
  font-size: 11px; color: var(--cinza-medio);
`;

export default function Depoimentos({ reviews }) {
  const allReviews = [...reviews, ...reviews];
  return (
    <Section>
      <Inner>
        <Label>Depoimentos</Label>
        <Title>Quem passou pela Innova voltou. E indicou.</Title>
        <ReviewsBar>
          <div style={{ fontSize: 18, color: '#F5A623', letterSpacing: 2 }}>★★★★★</div>
          <ReviewsText><strong>5.0</strong> no Google · +60 avaliações verificadas</ReviewsText>
        </ReviewsBar>
      </Inner>
      <CarouselWrap>
        <Carousel>
          {allReviews.map((rev, i) => (
            <RevCard key={i}>
              <Stars>★★★★★</Stars>
              <RevText>{rev.text}</RevText>
              <RevFooter>
                <RevName>{rev.name}</RevName>
                <RevTime>{rev.time}</RevTime>
              </RevFooter>
            </RevCard>
          ))}
        </Carousel>
      </CarouselWrap>
    </Section>
  );
}
