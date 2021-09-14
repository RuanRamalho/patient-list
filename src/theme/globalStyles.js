import { createGlobalStyle } from 'styled-components';
import { colors } from '../tokens';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.gray};
  }
`;

export default GlobalStyle;
