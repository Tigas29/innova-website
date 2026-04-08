import styled from 'styled-components';
import atend1 from '../../../assets/atend1.jpg';

const HeroSection = styled.section`
  background: var(--creme);
  padding: 60px 28px 72px;

  @media (max-width: 900px) {
    min-height: 90vh;
    padding: 48px 24px 56px;
    display: flex;
    align-items: center;
  }
`;

const Grid = styled.div`
  max-width: 1100px; margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px; align-items: center;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 32px; width: 100%; }
`;

const HeroImg = styled.div`
  border-radius: 20px; overflow: hidden;
  aspect-ratio: 4/5; position: relative;
  @media (max-width: 900px) { aspect-ratio: 16/9; }
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;

const ImgBadge = styled.div`
  position: absolute; bottom: 20px; left: 20px;
  background: rgba(26,24,21,0.75);
  backdrop-filter: blur(8px);
  border-radius: 12px; padding: 12px 16px;
  display: flex; flex-direction: column; gap: 2px;
  span:first-child {
    font-family: var(--font-display); font-size: 22px; font-weight: 800;
    color: var(--branco);
  }
  span:last-child {
    font-family: var(--font-display); font-size: 11px; font-weight: 500;
    color: rgba(255,255,255,0.6); letter-spacing: 0.08em; text-transform: uppercase;
  }
`;

const Badge = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(93,191,176,0.4);
  padding: 6px 14px; border-radius: 50px;
  font-family: var(--font-display); font-size: 11px; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--turquesa); margin-bottom: 22px; width: fit-content;
  span { width: 5px; height: 5px; border-radius: 50%; background: var(--turquesa); }
`;

const H1 = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(28px, 3.2vw, 48px);
  font-weight: 700; line-height: 1.1;
  letter-spacing: -0.03em; color: var(--quase-preto);
  margin-bottom: 18px;
`;

const Sub = styled.p`
  font-size: clamp(15px, 1.3vw, 17px);
  color: var(--cinza-medio); line-height: 1.75;
  margin-bottom: 28px; max-width: 480px;
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex; flex-direction: column;
  gap: 10px; margin-bottom: 32px;
`;

const Bullet = styled.li`
  display: flex; align-items: flex-start;
  gap: 10px; font-family: var(--font-display);
  font-size: 15px; color: var(--cinza-escuro); font-weight: 500;
  .check { color: var(--turquesa); font-weight: 700; font-size: 16px; flex-shrink: 0; }
`;

const CtaGroup = styled.div`
  display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
`;

const BtnMain = styled.button`
  background: var(--grad); color: var(--branco);
  font-family: var(--font-display);
  font-weight: 700; font-size: 16px;
  padding: 16px 32px; border-radius: 50px;
  border: none; cursor: pointer;
  box-shadow: 0 4px 24px rgba(93,191,176,0.4);
  &:hover { opacity: 0.92; transform: translateY(-1px); }
`;

const BtnWa = styled.a`
  font-family: var(--font-display);
  font-size: 14px; font-weight: 600;
  color: var(--turquesa); text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const SocialRow = styled.div`
  display: flex; gap: 12px; flex-wrap: wrap;
  margin-top: 28px;
`;

const SocialPill = styled.div`
  font-family: var(--font-display);
  font-size: 12px; font-weight: 600;
  color: var(--cinza-escuro);
  background: var(--branco);
  border: 1px solid var(--cinza-quente);
  border-radius: 50px; padding: 6px 14px;
`;

export default function Hero({ onCtaClick, waUrl }) {
  return (
    <HeroSection>
      <Grid>
        <div>
          <Badge><span />Pilates Clínico · Santo Agostinho · BH</Badge>
          <H1>A dor que não passa tem um motivo. E tem solução.</H1>
          <Sub>
            Pilates Clínico conduzido por fisioterapeutas que são professores de pós-graduação.
            Cada sessão parte da sua avaliação clínica, não de uma sequência genérica.
          </Sub>
          <BulletList>
            <Bullet><span className="check">✓</span> Sessões individuais ou em trio, nunca turma grande</Bullet>
            <Bullet><span className="check">✓</span> Plano montado a partir de avaliação clínica</Bullet>
            <Bullet><span className="check">✓</span> 13 fisioterapeutas, 3 são professores de pós-graduação</Bullet>
          </BulletList>
          <CtaGroup>
            <BtnMain onClick={onCtaClick}>Agendar Avaliação →</BtnMain>
            <BtnWa href={waUrl} target="_blank">ou fale pelo WhatsApp</BtnWa>
          </CtaGroup>
          <SocialRow>
            <SocialPill>★ 5.0 no Google</SocialPill>
            <SocialPill>+10 anos de clínica</SocialPill>
            <SocialPill>+1.000 pacientes</SocialPill>
          </SocialRow>
        </div>
        <HeroImg>
          <img
            src={atend1}
            alt="Fisioterapeuta conduzindo sessão de Pilates Clínico na INNOVA MOVIMENTO"
            fetchPriority="high"
          />
          <ImgBadge>
            <span>+1.000</span>
            <span>pacientes atendidos</span>
          </ImgBadge>
        </HeroImg>
      </Grid>
    </HeroSection>
  );
}
