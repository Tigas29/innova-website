import styled from 'styled-components';
import logo from '../../assets/logo.png';

const FooterEl = styled.footer`
  background: var(--creme);
  padding: 36px 0;
  border-top: 1px solid var(--cinza-quente);

  @media (max-width: 600px) {
    overflow: hidden;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 44px;
    width: auto;
  }
`;

const Info = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--cinza-medio);
  text-align: center;
`;

const Contact = styled.div`
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--cinza-medio);
  text-align: right;

  @media (max-width: 900px) {
    text-align: center;
  }

  a {
    color: var(--turquesa);
    text-decoration: none;
  }
`;

const WaFloat = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 200;
  background: #25D366;
  color: var(--branco);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(37,211,102,0.4);
  transition: var(--transition);

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 12px 32px rgba(37,211,102,0.5);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterEl>
        <Inner>
          <LogoWrap>
            <img src={logo} alt="INNOVA MOVIMENTO" />
          </LogoWrap>
          <Info>
            Rua Araguari, 1750, Sl 800 · Santo Agostinho · BH<br />
            © 2026 INNOVA MOVIMENTO. Todos os direitos reservados
          </Info>
          <Contact>
            Fisioterapia Premium em BH<br />
            <a href="https://wa.me/5531983444371">Fale pelo WhatsApp</a>
          </Contact>
        </Inner>
      </FooterEl>

      <WaFloat
        href="https://wa.me/5531983444371?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20INNOVA%20MOVIMENTO."
        target="_blank"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </WaFloat>
    </>
  );
}
