import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WA_LINK_BASE = 'https://wa.me/5531999476615?text=';

// ─── Layout ───────────────────────────────────────────────────────────
const Container = styled.div`
  max-width: 1060px; margin: 0 auto; padding: 0 24px;
`;

// ─── HEADER MÍNIMO ───────────────────────────────────────────────────
const HeaderAds = styled.header`
  padding: 16px 0;
  background: var(--branco);
  border-bottom: 1px solid var(--cinza-quente);
  text-align: center;
  img { height: 44px; width: auto; }
`;

// ─── HERO ─────────────────────────────────────────────────────────────
const HeroAds = styled.section`
  background: var(--creme); padding: 60px 0 80px;
  @media (max-width: 600px) { padding: 40px 0 56px; }
`;
const HeroInner = styled.div`
  display: grid; grid-template-columns: 1fr 420px; gap: 56px; align-items: center;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const UrgencyPill = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  background: #FEF3C7; color: #92400E;
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
  padding: 6px 14px; border-radius: 50px; margin-bottom: 20px;
`;
const UrgencyDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%; background: #EF4444;
  animation: pulse 1.5s infinite;
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
`;
const H1 = styled.h1`
  font-size: clamp(1.9rem, 3.5vw, 2.9rem);
  font-weight: 700; color: var(--quase-preto); line-height: 1.15; margin-bottom: 20px;
  em { font-style: normal; color: var(--roxo); }
`;
const HeroSub = styled.p`
  font-size: 17px; color: var(--cinza-medio); line-height: 1.7; margin-bottom: 28px;
`;
const HeroBullets = styled.ul`
  list-style: none; margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px;
  li { display: flex; align-items: flex-start; gap: 10px; font-size: 15px; color: var(--cinza-escuro); }
`;
const BulletIcon = styled.span`
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--turquesa); color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 2px;
`;

// ─── FORM CARD ───────────────────────────────────────────────────────
const FormCard = styled.div`
  background: var(--branco); border-radius: 20px;
  padding: 36px 32px;
  box-shadow: 0 8px 48px rgba(0,0,0,0.12), 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--cinza-quente); position: relative;
  &::before {
    content: '🔒 Suas informações são seguras';
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
    background: var(--branco); border: 1px solid var(--cinza-quente);
    font-size: 11px; font-weight: 600; color: var(--cinza-medio);
    padding: 4px 14px; border-radius: 50px; white-space: nowrap;
  }
`;
const FormTitle = styled.div`
  font-size: 18px; font-weight: 700; color: var(--quase-preto); margin-bottom: 6px; text-align: center;
`;
const FormSub = styled.p`
  font-size: 13px; color: var(--cinza-medio); text-align: center; margin-bottom: 24px;
`;
const FormGroup = styled.div`
  margin-bottom: 16px;
  label { display: block; font-size: 12px; font-weight: 600; color: var(--cinza-escuro); margin-bottom: 6px; }
  input, select {
    width: 100%; padding: 12px 16px;
    border: 1.5px solid var(--cinza-quente); border-radius: 10px;
    font-family: var(--font-display); font-size: 15px; color: var(--cinza-escuro);
    background: var(--branco); outline: none; -webkit-appearance: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    &:focus { border-color: var(--turquesa); box-shadow: 0 0 0 3px rgba(93,191,176,0.18); }
    &::placeholder { color: #bbb; }
  }
`;
const BtnForm = styled.button`
  width: 100%; padding: 15px;
  background: var(--grad); color: var(--branco);
  border: none; border-radius: 50px; cursor: pointer;
  font-family: var(--font-display); font-weight: 700; font-size: 16px;
  box-shadow: 0 4px 20px rgba(93,191,176,0.5);
  transition: var(--transition); margin-top: 8px;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(93,191,176,0.65); }
`;
const FormFooter = styled.p`
  text-align: center; margin-top: 12px; font-size: 12px; color: var(--cinza-medio);
`;
const FormSuccess = styled.div`
  text-align: center; padding: 32px;
  .icon { font-size: 48px; margin-bottom: 16px; }
  h3 { font-size: 20px; font-weight: 700; color: var(--quase-preto); margin-bottom: 8px; }
  p { font-size: 14px; color: var(--cinza-medio); margin-bottom: 20px; }
`;
const BtnWASuccess = styled.a`
  display: inline-flex; align-items: center; gap: 8px;
  background: #25D366; color: white; font-weight: 700; font-size: 15px;
  padding: 13px 24px; border-radius: 50px; text-decoration: none;
  transition: var(--transition);
  &:hover { background: #22c55e; transform: translateY(-1px); }
`;

// ─── TRUST BAR ───────────────────────────────────────────────────────
const TrustBar = styled.div`
  background: var(--roxo-deep); padding: 20px 0;
`;
const TrustBarInner = styled.div`
  display: flex; align-items: center; justify-content: center;
  gap: 40px; flex-wrap: wrap;
  @media (max-width: 900px) { gap: 20px; }
`;
const TrustItem = styled.div`
  display: flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 600;
  .icon { color: var(--turquesa-light); font-size: 18px; }
`;
const TrustDivider = styled.div`
  width: 1px; height: 24px; background: rgba(255,255,255,0.15);
  @media (max-width: 900px) { display: none; }
`;

// ─── MOTIVOS ─────────────────────────────────────────────────────────
const MotivosSection = styled.section`
  padding: 72px 0; background: var(--branco);
`;
const MotivosGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const MotivoCard = styled.div`
  background: var(--creme); border-radius: var(--radius); padding: 32px 24px; text-align: center;
  h3 { font-size: 16px; font-weight: 700; color: var(--quase-preto); margin-bottom: 10px; }
  p { font-size: 14px; color: var(--cinza-medio); line-height: 1.65; }
`;
const MotivoNum = styled.div`
  display: inline-flex; align-items: center; justify-content: center;
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--grad); color: white;
  font-weight: 700; font-size: 18px; margin-bottom: 16px;
`;
const SecLabel = styled.div`
  font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--turquesa); margin-bottom: 12px; text-align: center;
`;
const SecTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 700;
  color: var(--quase-preto); text-align: center; margin-bottom: 48px; line-height: 1.25;
`;

// ─── DEPOIMENTOS ─────────────────────────────────────────────────────
const DepsSection = styled.section`
  padding: 72px 0; background: var(--creme);
`;
const DepsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
const DepCard = styled.div`
  background: var(--branco); border-radius: var(--radius);
  padding: 28px 24px; display: flex; flex-direction: column; gap: 14px;
  border: 1px solid var(--cinza-quente);
  .stars { color: #F59E0B; font-size: 15px; letter-spacing: 2px; }
  .text { font-size: 14px; color: var(--cinza-escuro); line-height: 1.7; font-style: italic; flex: 1; }
`;
const DepFooter = styled.div`
  display: flex; align-items: center; gap: 10px;
`;
const DepAvatar = styled.div`
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--grad); display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 13px; color: white; flex-shrink: 0;
`;

// ─── CTA REPEAT ──────────────────────────────────────────────────────
const CTARepeat = styled.section`
  padding: 80px 0; background: var(--roxo-deep); text-align: center;
  h2 { font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 700; color: white; margin-bottom: 14px; }
  p { font-size: 16px; color: rgba(255,255,255,0.75); margin-bottom: 32px; }
`;
const CTARepeatGroup = styled.div`
  display: flex; gap: 16px; justify-content: center; align-items: center; flex-wrap: wrap;
  @media (max-width: 600px) { flex-direction: column; }
`;
const BtnWA = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: #25D366; color: white; font-weight: 700; font-size: 15px;
  padding: 14px 28px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5); transition: var(--transition);
  &:hover { transform: translateY(-2px); background: #22c55e; }
`;
const BtnFormRepeat = styled.button`
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); color: white;
  border: 1.5px solid rgba(255,255,255,0.25);
  font-family: var(--font-display); font-weight: 600; font-size: 14px;
  padding: 13px 24px; border-radius: 50px; cursor: pointer;
  transition: var(--transition);
  &:hover { background: rgba(255,255,255,0.2); }
`;
const UrgencyText = styled.p`
  margin-top: 20px; font-size: 13px; color: rgba(255,255,255,0.55);
`;

// ─── FOOTER MÍNIMO ───────────────────────────────────────────────────
const FooterAds = styled.footer`
  background: var(--quase-preto); padding: 24px 0;
  text-align: center; color: rgba(255,255,255,0.5); font-size: 13px;
  a { color: rgba(255,255,255,0.5); text-decoration: none; }
  a:hover { color: var(--turquesa); }
`;

// ─── WA FLOAT ─────────────────────────────────────────────────────────
const WAFloat = styled.a`
  position: fixed; bottom: 24px; right: 24px; z-index: 200;
  width: 56px; height: 56px; border-radius: 50%;
  background: #25D366; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5); text-decoration: none;
  transition: var(--transition);
  &:hover { transform: scale(1.08); }
  svg { width: 28px; height: 28px; fill: white; }
`;

function WAIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function PilatesAds() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nome: '', whatsapp: '', horario: '' });

  useEffect(() => {
    document.title = 'Pilates Clínico em BH — Vaga disponível esta semana | INNOVA MOVIMENTO';
    window.scrollTo(0, 0);
  }, []);

  const handlePhone = (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length <= 2) v = v.replace(/^(\d{0,2})/, '($1');
    else if (v.length <= 7) v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    else if (v.length <= 11) v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    else v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    setForm(f => ({ ...f, whatsapp: v }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) {
      alert('Por favor, preencha nome e WhatsApp para continuar.');
      return;
    }
    setSubmitted(true);
    const horarioLabel = form.horario || 'Qualquer horário';
    const msg = encodeURIComponent(
      `Olá Luciana! Me cadastrei pelo site para garantir minha vaga no Pilates Clínico.\n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nHorário preferido: ${horarioLabel}`
    );
    setTimeout(() => window.open(`https://wa.me/5531999476615?text=${msg}`, '_blank'), 1500);
  };

  const scrollToForm = () => {
    document.getElementById('form-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const waLink = (msg) => `${WA_LINK_BASE}${encodeURIComponent(msg)}`;

  return (
    <>
      {/* HEADER MÍNIMO */}
      <HeaderAds>
        <Link to="/" aria-label="INNOVA MOVIMENTO">
          <img src="/images/logo.png" alt="INNOVA MOVIMENTO — Pilates Clínico em BH" />
        </Link>
      </HeaderAds>

      {/* HERO + FORM */}
      <HeroAds aria-label="Pilates Clínico em Belo Horizonte">
        <Container>
          <HeroInner>
            <div>
              <UrgencyPill>
                <UrgencyDot /> Vagas limitadas — turmas de no máximo 3 alunos
              </UrgencyPill>
              <H1>Pilates Clínico em BH —<br /><em>Vaga disponível esta semana</em></H1>
              <HeroSub>
                Conduzido por fisioterapeutas especializados.<br />
                Avaliação gratuita para quem garantir vaga agora.
              </HeroSub>
              <HeroBullets>
                <li><BulletIcon>✓</BulletIcon><span>Turmas de no máximo 3 alunos — atenção que você não encontra em academia</span></li>
                <li><BulletIcon>✓</BulletIcon><span>Exercício prescrito para o seu corpo, não protocolo genérico</span></li>
                <li><BulletIcon>✓</BulletIcon><span>5.0★ no Google · +1.000 clientes · Santo Agostinho, BH</span></li>
              </HeroBullets>
            </div>

            <FormCard id="form-card">
              {!submitted ? (
                <>
                  <FormTitle>Garanta sua vaga agora</FormTitle>
                  <FormSub>Preencha e a Luciana entra em contato hoje</FormSub>
                  <form onSubmit={handleSubmit} noValidate>
                    <FormGroup>
                      <label htmlFor="nome">Seu nome *</label>
                      <input type="text" id="nome" placeholder="Como podemos te chamar?" required autoComplete="name"
                        value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="whatsapp">WhatsApp *</label>
                      <input type="tel" id="whatsapp" placeholder="(31) 9 9999-9999" required autoComplete="tel"
                        value={form.whatsapp} onChange={handlePhone} />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="horario">Horário preferido</label>
                      <select id="horario" value={form.horario} onChange={e => setForm(f => ({ ...f, horario: e.target.value }))}>
                        <option value="">Qual horário funciona melhor?</option>
                        <option value="Manhã cedo (7h–9h)">Manhã cedo (7h–9h)</option>
                        <option value="Manhã (9h–12h)">Manhã (9h–12h)</option>
                        <option value="Hora do almoço (12h–14h)">Hora do almoço (12h–14h)</option>
                        <option value="Tarde (14h–17h)">Tarde (14h–17h)</option>
                        <option value="Final da tarde (17h–20h)">Final da tarde (17h–20h)</option>
                        <option value="Qualquer horário">Qualquer horário</option>
                      </select>
                    </FormGroup>
                    <BtnForm type="submit">Quero minha vaga →</BtnForm>
                  </form>
                  <FormFooter>Sem compromisso · Sua avaliação é gratuita</FormFooter>
                </>
              ) : (
                <FormSuccess>
                  <div className="icon">✅</div>
                  <h3>Recebemos seus dados!</h3>
                  <p>A Luciana vai te chamar no WhatsApp em breve para confirmar sua vaga e horário.</p>
                  <BtnWASuccess href={waLink(`Olá Luciana! Acabei de preencher o formulário. Nome: ${form.nome}. Quero confirmar minha vaga no Pilates Clínico.`)} target="_blank" rel="noopener">
                    <WAIcon size={18} /> Confirmar pelo WhatsApp agora
                  </BtnWASuccess>
                </FormSuccess>
              )}
            </FormCard>
          </HeroInner>
        </Container>
      </HeroAds>

      {/* TRUST BAR */}
      <TrustBar aria-label="Números da INNOVA MOVIMENTO">
        <Container>
          <TrustBarInner>
            <TrustItem><span className="icon">★</span> 5.0 no Google</TrustItem>
            <TrustDivider />
            <TrustItem><span className="icon">✓</span> +1.000 clientes atendidos</TrustItem>
            <TrustDivider />
            <TrustItem><span className="icon">✓</span> 13 profissionais especializados</TrustItem>
            <TrustDivider />
            <TrustItem><span className="icon">📍</span> Santo Agostinho, Belo Horizonte</TrustItem>
          </TrustBarInner>
        </Container>
      </TrustBar>

      {/* 3 MOTIVOS */}
      <MotivosSection aria-labelledby="motivos-title">
        <Container>
          <SecLabel>Por que a INNOVA</SecLabel>
          <SecTitle id="motivos-title">3 razões para escolher o<br />Pilates Clínico da INNOVA</SecTitle>
          <MotivosGrid>
            <MotivoCard>
              <MotivoNum>1</MotivoNum>
              <h3>Fisioterapeutas, não instrutores</h3>
              <p>Quem conduz suas sessões tem formação em fisioterapia e pós-graduação especializada. Eles enxergam o que está errado no seu movimento — e sabem corrigir.</p>
            </MotivoCard>
            <MotivoCard>
              <MotivoNum>2</MotivoNum>
              <h3>Máximo 3 alunos por turma</h3>
              <p>Não abrimos turmas cheias. Vagas são limitadas por design — porque atenção real não funciona com 10 pessoas ao mesmo tempo. Você é visto e corrigido a cada sessão.</p>
            </MotivoCard>
            <MotivoCard>
              <MotivoNum>3</MotivoNum>
              <h3>Exercício prescrito para você</h3>
              <p>Antes de começar, você passa por avaliação fisioterápica. Os exercícios são adaptados ao seu histórico e suas limitações — não ao padrão da aula.</p>
            </MotivoCard>
          </MotivosGrid>
        </Container>
      </MotivosSection>

      {/* DEPOIMENTOS */}
      <DepsSection aria-labelledby="deps-title">
        <Container>
          <SecLabel>O que dizem os alunos</SecLabel>
          <SecTitle id="deps-title">Quem estava com dor.<br />Agora se move com liberdade.</SecTitle>
          <DepsGrid>
            {[
              { initials: 'AT', name: 'André Teixeira', time: '10 meses atrás · Google', text: '"Eu me curei de uma hérnia cervical com indicação cirúrgica de dois médicos na Innova. Se você deseja Innovar sua saúde e bem estar, não existe lugar para estar, a não ser lar!"' },
              { initials: 'AA', name: 'Adriana Araújo', time: '8 meses atrás · Google', text: '"Comecei com dores na coluna que me impediam de trabalhar. Após 3 meses de Pilates Clínico na Innova, recuperei minha qualidade de vida. A atenção dos fisioterapeutas faz toda a diferença."' },
              { initials: 'LH', name: 'Ligia Horacio', time: '9 meses atrás · Google', text: '"Há alguns anos estou na Innova e tenho conseguido excelentes resultados. Me livrei de uma cirurgia no joelho. Muita gratidão a toda equipe pelo cuidado, atenção e carinho."' },
            ].map((d, i) => (
              <DepCard key={i}>
                <div className="stars">★★★★★</div>
                <p className="text">{d.text}</p>
                <DepFooter>
                  <DepAvatar>{d.initials}</DepAvatar>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--quase-preto)' }}>{d.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--cinza-medio)' }}>{d.time}</div>
                  </div>
                </DepFooter>
              </DepCard>
            ))}
          </DepsGrid>
        </Container>
      </DepsSection>

      {/* CTA REPETIDO */}
      <CTARepeat aria-labelledby="cta-rep-title">
        <Container>
          <h2 id="cta-rep-title">Vaga disponível esta semana.<br />Garanta a sua agora.</h2>
          <p>Avaliação gratuita. Sem compromisso. Turmas de no máximo 3 alunos.</p>
          <CTARepeatGroup>
            <BtnWA href={waLink('Olá Luciana! Vi o anúncio do Pilates Clínico e quero garantir minha vaga esta semana.')} target="_blank" rel="noopener">
              <WAIcon /> Chamar no WhatsApp
            </BtnWA>
            <BtnFormRepeat onClick={scrollToForm}>
              Preencher formulário ↑
            </BtnFormRepeat>
          </CTARepeatGroup>
          <UrgencyText>Vagas limitadas por turno — turmas fecham com 3 alunos</UrgencyText>
        </Container>
      </CTARepeat>

      {/* FOOTER MÍNIMO */}
      <FooterAds>
        <Container>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>INNOVA MOVIMENTO</strong> · Rua Araguari, 1750, Sl 800, Santo Agostinho, Belo Horizonte - MG ·{' '}
            <a href="tel:+5531999476615">(31) 99947-6615</a>
          </p>
          <p style={{ marginTop: 8 }}>
            <a href="/">Conheça todos os serviços</a> · <a href="/pilates">Página Pilates Clínico</a>
          </p>
        </Container>
      </FooterAds>

      {/* WA FLOAT */}
      <WAFloat href={waLink('Olá! Quero garantir minha vaga no Pilates Clínico.')} target="_blank" rel="noopener" aria-label="WhatsApp INNOVA MOVIMENTO">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </WAFloat>
    </>
  );
}
