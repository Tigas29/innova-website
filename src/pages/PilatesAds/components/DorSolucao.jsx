import styled from 'styled-components';
import { Section, Inner, Label, Title, Text, Btn } from '../pageStyles';

const Destaque = styled.div`
  background: var(--turquesa-pale);
  border-left: 4px solid var(--turquesa);
  border-radius: 12px; padding: 18px 22px;
  margin: 22px 0 26px;
  font-family: var(--font-display);
  font-size: 16px; font-weight: 700;
  color: var(--quase-preto); max-width: 540px;
`;

export default function DorSolucao({ onCtaClick }) {
  return (
    <Section $alt>
      <Inner>
        <Label>Por que a dor volta</Label>
        <Title>Você já fez tratamento. E a dor voltou. Isso tem explicação.</Title>
        <Text>
          Fisioterapia convencional em tempo limitado, pilates em grupo sem avaliação,
          exercícios genéricos sem entender o que causa a dor. Quando o tratamento não é feito
          para o seu caso, o alívio é temporário.
        </Text>
        <Text>
          No Pilates Clínico da INNOVA, o ponto de partida é a avaliação clínica. O fisioterapeuta
          entende o que está causando o problema antes de definir qualquer exercício. O resultado
          não é alívio provisório. É resolução.
        </Text>
        <Destaque>A maioria dos pacientes sente diferença nas primeiras 3 a 4 sessões.</Destaque>
        <Btn onClick={onCtaClick}>Agendar Minha Avaliação →</Btn>
      </Inner>
    </Section>
  );
}
