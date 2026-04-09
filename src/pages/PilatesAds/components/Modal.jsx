import { useState } from 'react';
import styled from 'styled-components';
import { WA_PHONE, LEADS_API } from '../constants';

async function sendLead(data) {
  try {
    await fetch(LEADS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, pagina: '/pilates-google' }),
    });
  } catch (_) { /* silently fail — não bloqueia o fluxo */ }
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(26,24,21,0.6);
  backdrop-filter: blur(4px);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: ${p => p.$open ? 1 : 0};
  pointer-events: ${p => p.$open ? 'all' : 'none'};
  transition: opacity 0.25s ease;
`;

const Box = styled.div`
  background: var(--branco);
  border-radius: 20px;
  padding: 40px 36px;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.2);
  transform: ${p => p.$open ? 'translateY(0)' : 'translateY(16px)'};
  transition: transform 0.3s ease;
  position: relative;
  @media (max-width: 500px) { padding: 28px 22px; }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px; right: 16px;
  background: var(--creme);
  border: none;
  width: 32px; height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: var(--cinza-medio);
  display: flex; align-items: center; justify-content: center;
  &:hover { background: var(--cinza-quente); }
`;

const ModalTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 20px; font-weight: 700;
  color: var(--quase-preto);
  margin-bottom: 6px;
`;

const ModalSub = styled.p`
  font-size: 14px; color: var(--cinza-medio);
  margin-bottom: 24px;
`;

const Field = styled.div`
  margin-bottom: 14px;
  label {
    display: block;
    font-family: var(--font-display);
    font-size: 12px; font-weight: 600;
    color: var(--cinza-escuro);
    margin-bottom: 5px;
    text-transform: uppercase; letter-spacing: 0.05em;
  }
  input, select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--cinza-quente);
    border-radius: 10px;
    font-family: var(--font-body);
    font-size: 15px; color: var(--quase-preto);
    background: var(--creme); outline: none;
    transition: border-color 0.2s;
    &:focus { border-color: var(--turquesa); background: var(--branco); }
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  background: var(--grad); color: var(--branco);
  font-family: var(--font-display);
  font-weight: 700; font-size: 16px;
  padding: 16px; border: none; border-radius: 50px;
  cursor: pointer; margin-top: 8px;
  box-shadow: 0 4px 24px rgba(93,191,176,0.4);
  &:hover { opacity: 0.92; }
`;

const Note = styled.p`
  text-align: center; font-size: 12px;
  color: var(--cinza-medio); margin-top: 10px;
`;

export default function Modal({ open, onClose }) {
  const [form, setForm] = useState({ nome: '', whatsapp: '', objetivo: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    // Salva no Notion (fire-and-forget, não bloqueia o WA)
    sendLead(form);
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome}. Gostaria de agendar minha avaliação de Pilates Clínico. Objetivo: ${form.objetivo}.`
    );
    window.open(`https://wa.me/${WA_PHONE}?text=${msg}`, '_blank');
    onClose();
  }

  return (
    <Overlay $open={open} onClick={e => e.target === e.currentTarget && onClose()}>
      <Box $open={open}>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        <ModalTitle>Agende sua avaliação</ModalTitle>
        <ModalSub>Respondemos em até 2 horas pelo WhatsApp</ModalSub>
        <form onSubmit={handleSubmit}>
          <Field>
            <label>Nome completo *</label>
            <input
              type="text" required placeholder="Seu nome"
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
            />
          </Field>
          <Field>
            <label>WhatsApp com DDD *</label>
            <input
              type="tel" required placeholder="(31) 99999-9999"
              value={form.whatsapp}
              onChange={e => setForm({ ...form, whatsapp: e.target.value })}
            />
          </Field>
          <Field>
            <label>Principal objetivo *</label>
            <select
              required
              value={form.objetivo}
              onChange={e => setForm({ ...form, objetivo: e.target.value })}
            >
              <option value="">Selecione...</option>
              <option>Aliviar dor</option>
              <option>Reabilitação pós-cirúrgica</option>
              <option>Prevenir lesões</option>
              <option>Melhorar mobilidade e postura</option>
              <option>Ainda não sei</option>
            </select>
          </Field>
          <SubmitBtn type="submit">Quero Agendar Minha Avaliação →</SubmitBtn>
          <Note>🔒 Seus dados estão seguros. Sem compromisso.</Note>
        </form>
      </Box>
    </Overlay>
  );
}
