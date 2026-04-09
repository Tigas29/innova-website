import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle } from '../../styles/shared';

const Section = styled.section`
  background: var(--roxo-pale);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
  margin-top: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Mapa = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  border: 1px solid var(--roxo-soft);

  iframe {
    display: block;
    width: 100%;
    height: 360px;
    border: none;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LocItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: var(--branco);
  border-radius: 14px;
  padding: 18px 20px;
  border: 1px solid var(--roxo-soft);
`;

const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 10px;
  background: var(--grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ItemLabel = styled.div`
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cinza-medio);
`;

const ItemValue = styled.div`
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--quase-preto);
  line-height: 1.4;

  a {
    color: var(--turquesa);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LocRef = styled.div`
  background: linear-gradient(135deg, var(--turquesa-pale), var(--roxo-pale));
  border: 1px solid var(--turquesa-light);
  border-radius: 14px;
  padding: 18px 20px;

  p {
    font-size: 14px;
    color: var(--cinza-escuro);
    line-height: 1.65;

    strong {
      color: var(--quase-preto);
    }
  }
`;

export default function Localizacao() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">Como chegar</SectionLabel>
        <SectionTitle className="reveal">
          Santo Agostinho, coracao<br />da Zona Sul de BH.
        </SectionTitle>
        <Grid>
          <Mapa className="reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.1487099937083!2d-43.93535629999999!3d-19.938543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696f2b68bd399%3A0xa0c1cedc6614bbf8!2sR.%20Araguari%2C%201750%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG%2C%2030190-110!5e0!3m2!1spt-BR!2sbr!4v1712436000000!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao INNOVA MOVIMENTO"
            />
          </Mapa>
          <Infos>
            <LocItem className="reveal">
              <ItemIcon>📍</ItemIcon>
              <ItemText>
                <ItemLabel>Endereco</ItemLabel>
                <ItemValue>
                  Rua Araguari, 1750, Sala 800<br />
                  Santo Agostinho · Belo Horizonte · MG
                </ItemValue>
              </ItemText>
            </LocItem>
            <LocItem className="reveal reveal-delay-1">
              <ItemIcon>🗺️</ItemIcon>
              <ItemText>
                <ItemLabel>Como chegar</ItemLabel>
                <ItemValue>
                  <a href="https://maps.google.com/?q=Rua+Araguari,+1750,+Santo+Agostinho,+Belo+Horizonte" target="_blank">
                    Abrir no Google Maps ↗
                  </a>
                </ItemValue>
              </ItemText>
            </LocItem>
            <LocItem className="reveal reveal-delay-2">
              <ItemIcon>⭐</ItemIcon>
              <ItemText>
                <ItemLabel>Google Meu Negócio</ItemLabel>
                <ItemValue>
                  <a href="https://share.google/U8IqU5GUJTeHUyCzA" target="_blank" rel="noopener noreferrer">
                    ★ 5.0 · Ver avaliações no Google ↗
                  </a>
                </ItemValue>
              </ItemText>
            </LocItem>
            <LocItem className="reveal reveal-delay-3">
              <ItemIcon>🚗</ItemIcon>
              <ItemText>
                <ItemLabel>Estacionamento</ItemLabel>
                <ItemValue>Opções de estacionamento próximas. Nossa equipe indica no agendamento.</ItemValue>
              </ItemText>
            </LocItem>
            <LocRef className="reveal reveal-delay-4">
              <p>📌 <strong>Ponto de referencia:</strong> o edificio fica perto da Assembleia Legislativa de MG, no bairro Santo Agostinho. Fácil acesso pela Avenida do Contorno.</p>
            </LocRef>
          </Infos>
        </Grid>
      </Container>
    </Section>
  );
}
