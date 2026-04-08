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
        <Title>Quem cuida de você ensina quem cuida dos outros</Title>
        <Text>
          São 3 sócios-fundadores que são professores de pós-graduação em fisioterapia. Essa equipe
          de 13 fisioterapeutas trata pacientes de manhã e dá aula na universidade à noite. Quando
          você agenda aqui, o profissional que te atende está na fronteira da pesquisa.
        </Text>
        <Badges>
          <Badge>13 fisioterapeutas</Badge>
          <Badge>3 professores de pós-graduação</Badge>
          <Badge>Palestrantes nacionais</Badge>
          <Badge>Formação contínua em evidência científica</Badge>
        </Badges>
      </Inner>
    </Section>
  );
}
