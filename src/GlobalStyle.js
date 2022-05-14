import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  /* Size */
  --maxWidth: 1280px; 
  /* Colors */
  --white: #fff;
  --lightGrey: #eee;
  --medGrey: #353535; 
  --darkGrey: #1c1c1c;
  --background: #e1dcc5;
  --violet: #1c0833;
  --hover: #E22B35;
  /* Fonts */
  --fontSuperBig: 2.5rem;
  --fontBig: 2rem;
  --fontMed: 1.5rem;
  --fontSmall: 1.2rem;
  --fontVerySmall: 0.8rem;

}

* {
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;  
}

body {  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--background);
  
}

/* Animations */
.fadeIn{
  animation-name: fadeIn;
  animation-fill-mode: both;
  animation-duration: 1.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
`;
