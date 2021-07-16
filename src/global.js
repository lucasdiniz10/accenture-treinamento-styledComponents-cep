import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root {
  --white: #ffffff;
  --white-line: #C4B6B6;
  --gray: #BFBFBF;
  --gray-bg:#DFDFDF;

  --green: #289B00; 
  --green-button: #18AC00; 

  --title-gray: #777777;
  --input-gray: #6C6C6C;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }
}

h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
  font-weight: 700;
}

body,
  input,
  textarea,
  select,
  button {
  font: 400 1rem "Roboto", Arial, sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
