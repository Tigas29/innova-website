import { useRef } from 'react';
import styled from 'styled-components';
import { Container, SectionLabel } from '../../styles/shared';
import pilates from '../../assets/procedimentos/pilates.png';
import fisioterapia from '../../assets/procedimentos/fisioterapia.png';
import reabPosCircurgica from '../../assets/procedimentos/fisioterapia_ortopedica.png';
import fisioOrtopedica from '../../assets/procedimentos/reabilitacao_ortopedica.png';
import osteopatia from '../../assets/procedimentos/osteopatia.png';
import gyrotonic from '../../assets/procedimentos/gyrotonic.png';
import pilatesGestantes from '../../assets/procedimentos/pilates_gestantes.png';
import atend60 from '../../assets/procedimentos/atendimento_60.png';
import rpg from '../../assets/procedimentos/rpg.png';
import acupuntura from '../../assets/procedimentos/acupuntura.png';
import domiciliar from '../../assets/procedimentos/atendimento_domiciliar.png';
import dorCronica from '../../assets/procedimentos/dor_cronica.png';

const ESPECIALIDADES = [
  { title: 'Pilates Clínico Trio', desc: 'Grupos de até 3 pessoas. Cada aluno com seu protocolo. Terapia + força + liberdade de movimento.', img: pilates },
  { title: 'Fisioterapia Esportiva', desc: 'Reabilitação após lesão + prevenção. Retorne ao esporte com segurança.', img: fisioterapia },
  { title: 'Reabilitação Pós-cirúrgica', desc: 'Recuperação segura após cirurgias. Planejamento semana a semana.', img: reabPosCircurgica },
  { title: 'Fisioterapia Ortopédica', desc: 'Para lesões de articulações, ossos e estruturas. Avaliação completa + plano de reabilitação.', img: fisioOrtopedica },
  { title: 'Osteopatia', desc: 'Avaliação integral do corpo + técnicas de liberação. Trata causa, não apenas sintoma.', img: osteopatia },
  { title: 'Gyrotonic', desc: 'Equipamento com poucos praticantes em BH. Mobilidade 3D do corpo inteiro.', img: gyrotonic },
  { title: 'Pilates para Gestantes', desc: 'Preparação para o parto + recuperação pós-parto. Força + segurança.', img: pilatesGestantes },
  { title: 'Atendimento 60+', desc: 'Mobilidade, força, equilíbrio, prevenção de quedas. Envelhecer em movimento.', img: atend60 },
  { title: 'RPG', desc: 'Reeducação postural. Ideal para quem passa muito tempo sentado.', img: rpg },
  { title: 'Acupuntura', desc: 'Técnica oriental para alívio de dor. Complementa terapias ocidentais.', img: acupuntura },
  { title: 'Atendimento Domiciliar', desc: 'Fisioterapia na comodidade da sua casa.', img: domiciliar },
  { title: 'Dor Crônica', desc: 'Tratamento multidisciplinar para dores que duram mais de 3 meses.', img: dorCronica },
];

const Section = styled.section`
  background: var(--roxo-deep);
  padding: 96px 0 80px;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(28px, 3vw, 46px);
  font-weight: 700;
  color: var(--branco);
  letter-spacing: -0.03em;
  line-height: 1.12;
  text-align: center;
  margin-bottom: 56px;

  em {
    font-style: normal;
    color: var(--turquesa);
  }

  @media (max-width: 600px) {
    font-size: clamp(26px, 7vw, 36px);
    margin-bottom: 36px;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 4px 28px 28px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  cursor: grab;
  &:active { cursor: grabbing; }
`;

const Card = styled.div`
  flex: 0 0 300px;
  scroll-snap-align: start;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(93,191,176,0.4);
  }

  @media (max-width: 600px) { flex: 0 0 260px; }
`;

const CardImg = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img { transform: scale(1.05); }
`;

const CardBody = styled.div`
  padding: 22px 22px 26px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--branco);
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
`;

const NavBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: var(--branco);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;

  &:hover {
    background: var(--turquesa);
    border-color: var(--turquesa);
  }
`;

export default function Especialidades() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <Section>
      <Container>
        <Heading className="reveal">
          Você encontra <em>12 especialidades</em><br />em um único lugar
        </Heading>
      </Container>
      <Track ref={trackRef}>
        {ESPECIALIDADES.map((item, i) => (
          <Card key={i}>
            <CardImg>
              <img src={item.img} alt={item.title} loading="lazy" />
            </CardImg>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.desc}</CardDesc>
            </CardBody>
          </Card>
        ))}
      </Track>
      <NavRow>
        <NavBtn onClick={() => scroll(-1)} aria-label="Anterior">&#8592;</NavBtn>
        <NavBtn onClick={() => scroll(1)} aria-label="Próximo">&#8594;</NavBtn>
      </NavRow>
    </Section>
  );
}
