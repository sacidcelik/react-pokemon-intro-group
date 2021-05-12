import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 1.125rem;
}

section {
  padding: 1rem 0;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
`;
