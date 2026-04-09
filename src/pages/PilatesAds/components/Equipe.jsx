import styled from 'styled-components';
import { Section, Inner, Label, Title, Text } from '../pageStyles';

const Badges = styled.div`
  display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px;
`;

const Badge = styled.div`
  font-family: var(--font-display);
  font-size: 13px; font-weight: 600;
  color: var(--turquesa); background: var(--turquesa-pale);
  border-radius: 50px; padding: 8px 18px;
`;

export default function Equipe() {
  return (
    <Section $alt>
      <Inner>
        <Label>A equipe</Label>
        <Title>4 sócios que formam quem te atende</Title>
        <Text>
          Os sócios são fisioterapeutas, mestres e especialistas em Pilates e referência em
          fisioterapia em grandes clubes esportivos. Além da prática clínica, atuam na formação de
          outros profissionais, sendo responsáveis pelo treinamento contínuo da equipe INNOVA —
          para que você receba um atendimento seguro, atualizado e de alto nível.
        </Text>
        <Badges>
          <Badge>13 fisioterapeutas</Badge>
          <Badge>Referência em grandes clubes esportivos</Badge>
          <Badge>Palestrantes nacionais</Badge>
          <Badge>Formação contínua em evidência científica</Badge>
        </Badges>
      </Inner>
    </Section>
  );
}
