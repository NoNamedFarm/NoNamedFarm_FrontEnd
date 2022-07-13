import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
    }
    
    html,
    body {
      padding: 0;
      margin: 0;

      max-width: 100vw;

      font-family: "Gowun";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      overflow-x: hidden;
      user-select: none;
    }

    img {
      pointer-events: none;
    }
  `;

export default GlobalStyle;
