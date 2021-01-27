import { createGlobalStyle } from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');
import githubBackground from "../assets/bg.svg";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: #f8f8f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;

  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 48px 28px;
  }
  button {
    cursor:pointer;
  }
`;
