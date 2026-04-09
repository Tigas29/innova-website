import styled from 'styled-components';
import { Section, Inner, Label, Title } from '../pageStyles';

const LocGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 40px; align-items: start; margin-top: 32px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const MapWrap = styled.div`
  border-radius: 16px; overflow: hidden;
  border: 1px solid var(--cinza-quente); aspect-ratio: 4/3;
  iframe { width: 100%; height: 100%; border: none; display: block; }
`;

const LocInfo = styled.div`
  display: flex; flex-direction: column; gap: 18px;
`;

const LocItem = styled.div`
  display: flex; gap: 14px; align-items: flex-start;
`;

const LocIcon = styled.div`
  width: 38px; height: 38px; min-width: 38px;
  border-radius: 10px; background: var(--turquesa-pale);
  display: flex; align-items: center; justify-content: center; font-size: 17px;
`;

const LocText = styled.div`
  h4 { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--quase-preto); margin-bottom: 3px; }
  p { font-size: 14px; color: var(--cinza-medio); line-height: 1.6; }
  a { color: var(--turquesa); text-decoration: none; font-weight: 600; font-size: 13px; &:hover { text-decoration: underline; } }
`;

export default function Localizacao() {
  return (
    <Section $alt>
      <Inner>
        <Label>Onde estamos</Label>
        <Title>Santo Agostinho, Belo Horizonte</Title>
        <LocGrid>
          <MapWrap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.35!2d-43.9378!3d-19.9378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzE2LjEiUyA0M8KwNTYnMTYuMSJX!5e0!3m2!1spt-BR!2sbr!4v1"
              allowFullScreen=""
              loading="lazy"
              title="Localização INNOVA MOVIMENTO"
            />
          </MapWrap>
          <LocInfo>
            <LocItem>
              <LocIcon>📍</LocIcon>
              <LocText>
                <h4>Endereço</h4>
                <p>Rua Araguari, 1750, Sala 800<br />Santo Agostinho, Belo Horizonte, MG</p>
                <a href="https://maps.google.com/?q=Rua+Araguari+1750+Belo+Horizonte" target="_blank" rel="noreferrer">Ver no Google Maps ↗</a>
              </LocText>
            </LocItem>
            <LocItem>
              <LocIcon>🗺</LocIcon>
              <LocText>
                <h4>Como chegar</h4>
                <p>Perto da Assembleia Legislativa de MG. Fácil acesso pela Av. do Contorno.</p>
              </LocText>
            </LocItem>
            <LocItem>
              <LocIcon>🕐</LocIcon>
              <LocText>
                <h4>Horário</h4>
                <p>Segunda a sexta: 7h às 20h</p>
              </LocText>
            </LocItem>
          </LocInfo>
        </LocGrid>
      </Inner>
    </Section>
  );
}
