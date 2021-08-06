import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    background-color: #060606;
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`

export default GlobalStyle