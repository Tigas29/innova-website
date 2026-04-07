import styled from 'styled-components';
import sala4 from '../../assets/sala4.jpg';

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  background: var(--grad);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${sala4}) center/cover;
    opacity: 0.08;
  }

  @media (max-width: 600px) {
    padding: 80px 24px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 660px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Label = styled.div`
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: rgba(255,255,255,0.7);
  }
`;

const H2 = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 700;
  color: var(--branco);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
`;

const P = styled.p`
  font-size: 17px;
  color: rgba(255,255,255,0.8);
  line-height: 1.75;
  margin-bottom: 36px;
`;

const CtaGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const BtnWhite = styled.a`
  display: inline-flex;
  align-items: center;
  background: var(--branco);
  color: var(--roxo-deep);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
  box-shadow: 0 0 16px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.15);

  &:hover {
    box-shadow: 0 0 24px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const BtnOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--branco);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  padding: 16px 30px;
  border-radius: 50px;
  text-decoration: none;
  border: 2px solid rgba(255,255,255,0.5);
  transition: var(--transition);

  &:hover {
    border-color: var(--branco);
    background: rgba(255,255,255,0.1);
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Note = styled.p`
  margin-top: 20px;
  font-family: var(--font-display);
  font-size: 13px;
  color: rgba(255,255,255,0.6);
`;

export default function CTAFinal() {
  return (
    <Section>
      <Content>
        <Label className="reveal">Próximo passo</Label>
        <H2 className="reveal">Você já esperou tempo suficiente.</H2>
        <P className="reveal">
          Se você leu até aqui, provavelmente está cansado de conviver com uma dor que não passa. A INNOVA existe para mudar isso. Não prometemos milagre. Prometemos atenção real, diagnóstico honesto e tratamento feito para você.
        </P>
        <CtaGroup className="reveal">
          <BtnWhite
            href="https://wa.me/5531XXXXXXXX?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita."
            target="_blank"
          >
            Agendar Avaliação Gratuita
          </BtnWhite>
          <BtnOutline
            href="https://wa.me/5531XXXXXXXX?text=Tenho%20interesse%20no%20Gyrotonic.%20Podem%20me%20passar%20mais%20informa%C3%A7%C3%B5es?"
            target="_blank"
          >
            Conhecer o Gyrotonic
          </BtnOutline>
        </CtaGroup>
        <Note className="reveal">Sem custo. Sem compromisso. Avaliação completa e gratuita.</Note>
      </Content>
    </Section>
  );
}
