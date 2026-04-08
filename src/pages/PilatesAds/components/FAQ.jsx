import { useState } from 'react';
import styled from 'styled-components';
import { Section, Inner, Label, Title } from '../pageStyles';

const List = styled.div`
  display: flex; flex-direction: column;
  gap: 8px; margin-top: 28px;
`;

const Item = styled.div`
  background: var(--branco); border: 1px solid var(--cinza-quente);
  border-radius: var(--radius); overflow: hidden;
`;

const Question = styled.button`
  width: 100%; background: none; border: none;
  padding: 17px 20px; cursor: pointer;
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
  font-family: var(--font-display); font-size: 15px; font-weight: 600;
  color: var(--quase-preto); text-align: left;
  &:hover { color: var(--turquesa); }
`;

const Icon = styled.span`
  font-size: 20px; color: var(--turquesa); flex-shrink: 0;
  transition: transform 0.3s;
  transform: ${p => p.$open ? 'rotate(45deg)' : 'none'};
`;

const Answer = styled.div`
  max-height: ${p => p.$open ? '200px' : '0'};
  overflow: hidden; transition: max-height 0.35s ease;
`;

const AnswerInner = styled.div`
  padding: 0 20px 16px;
  font-size: 14px; color: var(--cinza-medio); line-height: 1.75;
`;

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section>
      <Inner>
        <Label>Dúvidas</Label>
        <Title>Perguntas frequentes</Title>
        <List>
          {faqs.map((f, i) => (
            <Item key={i}>
              <Question onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {f.q}
                <Icon $open={openIndex === i}>+</Icon>
              </Question>
              <Answer $open={openIndex === i}>
                <AnswerInner>{f.a}</AnswerInner>
              </Answer>
            </Item>
          ))}
        </List>
      </Inner>
    </Section>
  );
}
