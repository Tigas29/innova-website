import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --roxo: #8070A0;
    --roxo-deep: #3D2E5E;
    --roxo-soft: #C4B8D8;
    --roxo-pale: #F0ECF7;
    --turquesa: #5DBFB0;
    --turquesa-light: #A8E0DA;
    --turquesa-pale: #EBF8F6;
    --creme: #F7F5F2;
    --cinza-quente: #E8E4DF;
    --cinza-medio: #7A7470;
    --cinza-escuro: #3A3633;
    --quase-preto: #1A1815;
    --branco: #FFFFFF;
    --grad: linear-gradient(135deg, #5DBFB0 0%, #8070A0 100%);
    --font-display: 'Outfit', sans-serif;
    --font-body: 'Outfit', sans-serif;
    --radius: 14px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body {
    font-family: var(--font-body);
    color: var(--cinza-escuro);
    background: var(--branco);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }

  @media (max-width: 600px) {
    body {
      overflow-x: hidden;
      max-width: 100vw;
    }
  }
`;

export const theme = {
  roxo: '#8070A0',
  roxoDeep: '#3D2E5E',
  roxoSoft: '#C4B8D8',
  roxoPale: '#F0ECF7',
  turquesa: '#5DBFB0',
  turquesaLight: '#A8E0DA',
  turquesaPale: '#EBF8F6',
  creme: '#F7F5F2',
  cinzaQuente: '#E8E4DF',
  cinzaMedio: '#7A7470',
  cinzaEscuro: '#3A3633',
  quasePreto: '#1A1815',
  branco: '#FFFFFF',
  grad: 'linear-gradient(135deg, #5DBFB0 0%, #8070A0 100%)',
  radius: '14px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};
