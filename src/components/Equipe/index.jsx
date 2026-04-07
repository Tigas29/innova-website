import styled from 'styled-components';
import { Container, SectionLabel, SectionTitle, SectionSub } from '../../styles/shared';
import luciana from '../../assets/luciana-signorini-final.jpg';
import gustavo from '../../assets/gustavo-amaral-final.jpg';
import cristiane from '../../assets/cristiane-vasconcelos-final.jpg';
import mariana from '../../assets/mariana-weschenfelder-final.jpg';

const Section = styled.section`
  background: var(--roxo-pale);
  padding: 96px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--branco);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--roxo-soft);
  transition: var(--transition);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(128,112,160,0.15);
  }

  &.ref {
    opacity: 0.92;
  }
`;

const Foto = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, var(--turquesa-pale), var(--roxo-pale));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }
`;

const Info = styled.div`
  padding: 20px 24px 24px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 50px;
  margin-bottom: 8px;

  &.atende {
    background: #E6F9F2;
    color: #1E7D4A;
    border: 1px solid #A8D9BC;

    &::before {
      content: '●';
      font-size: 7px;
      color: #2E9D5E;
    }
  }

  &.ref {
    background: var(--roxo-pale);
    color: var(--roxo);
    border: 1px solid var(--roxo-soft);

    &::before {
      content: '◆';
      font-size: 7px;
    }
  }
`;

const H3 = styled.h3`
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 2px;
`;

const Esp = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  color: var(--turquesa);
  font-weight: 500;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 14px;
  color: var(--cinza-medio);
  line-height: 1.65;
`;

const SubTitulo = styled.div`
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--turquesa);
  margin-top: 48px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 10px;

  &.sec {
    color: var(--roxo-deep);
  }
`;

const SubDesc = styled.p`
  font-size: 15px;
  color: var(--cinza-medio);
  max-width: 680px;
  line-height: 1.75;
  margin-bottom: 4px;
`;

const Nota = styled.p`
  text-align: center;
  margin-top: 44px;
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--cinza-medio);

  strong {
    color: var(--roxo);
  }
`;

export default function Equipe() {
  return (
    <Section>
      <Container>
        <SectionLabel className="reveal">A equipe</SectionLabel>
        <SectionTitle className="reveal">
          Formados nos melhores espaços do esporte.<br />Agora focados 100% em você.
        </SectionTitle>
        <SectionSub className="reveal">
          Os 4 sócios vieram do Minas Tênis Clube, referência nacional em fisioterapia esportiva. Essa bagagem é o padrão de cada atendimento na INNOVA.
        </SectionSub>

        <SubTitulo className="reveal">✦ Quem atende na clínica</SubTitulo>
        <Grid>
          <Card className="reveal">
            <Foto><img src={luciana} alt="Luciana Signorini" loading="lazy" /></Foto>
            <Info>
              <Badge className="atende">Atende na clínica</Badge>
              <H3>Luciana Signorini</H3>
              <Esp>Especialista em Fisioterapia Esportiva</Esp>
              <P>Mais de 15 anos de prática clínica, sendo mais de 10 no Minas Tênis Clube. Professora em Pós-Graduação, palestrante nacional e professora do curso de formação em Pilates da UFMG.</P>
            </Info>
          </Card>
          <Card className="reveal reveal-delay-1">
            <Foto><img src={gustavo} alt="Gustavo Amaral" loading="lazy" /></Foto>
            <Info>
              <Badge className="atende">Atende na clínica</Badge>
              <H3>Gustavo Amaral</H3>
              <Esp>Fisioterapeuta · Acupunturista</Esp>
              <P>Pós-graduado em Movimento Humano. 15 anos de prática clínica, sendo 8 no Minas Tênis Clube. Professor de curso de formação em Pilates.</P>
            </Info>
          </Card>
        </Grid>

        <SubTitulo className="sec reveal">✦ A expertise que capacita toda a equipe</SubTitulo>
        <SubDesc className="reveal">
          Cristiane e Mariana não atendem diretamente na clínica, mas é a experiência delas que eleva o nível de todos os atendimentos. Por meio de treinamentos e capacitação contínua, o conhecimento que acumularam nos maiores espaços do esporte brasileiro está presente em cada sessão da INNOVA.
        </SubDesc>
        <Grid>
          <Card className="ref reveal">
            <Foto><img src={cristiane} alt="Cristiane Vasconcelos" loading="lazy" /></Foto>
            <Info>
              <Badge className="ref">Referência técnica</Badge>
              <H3>Cristiane Vasconcelos</H3>
              <Esp>Mestre em Ciências da Reabilitação · Gerente Técnica Minas Tênis Clube</Esp>
              <P>Pós-graduação em Gestão Empresarial (FGV e FDC). Professora de Pós-Graduação e curso de formação em Pilates da UFMG. Sua expertise fundamenta os protocolos da INNOVA.</P>
            </Info>
          </Card>
          <Card className="ref reveal reveal-delay-1">
            <Foto><img src={mariana} alt="Mariana Weschenfelder" loading="lazy" /></Foto>
            <Info>
              <Badge className="ref">Referência técnica</Badge>
              <H3>Mariana Weschenfelder</H3>
              <Esp>Mestre em Reabilitação · Especialista SONAFE · Bahia FC Série A</Esp>
              <P>Mais de 15 anos no esporte de alto rendimento: Seleção Brasileira de Ginástica Artística e Minas Tênis Clube. Atualmente fisioterapeuta da equipe profissional masculina do Bahia FC.</P>
            </Info>
          </Card>
        </Grid>

        <Nota className="reveal">
          Quatro sócios. Um padrão. A base técnica que veio do Minas Tênis Clube está em cada atendimento.<br />
          <strong>Na INNOVA, você não é recebido por estagiário.</strong>
        </Nota>
      </Container>
    </Section>
  );
}
