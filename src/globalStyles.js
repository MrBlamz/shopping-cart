import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }

 body {
     font-family: 'Poppins', sans-serif;
     background-color: rgb(249, 249, 249);
 }
`;

export default GlobalStyle;
