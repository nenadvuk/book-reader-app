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
  --main: #e1dcc5;
  --brown: #503321;
  --hover: #E22B35;
  /* Box shadow */
  --shadow: 5px 5px 10px #503321;
  /* Fonts */
  --fontSuperBig: 2.5rem;
  --fontBig: 2rem;
  --fontMed: 1.5rem;
  --fontSmall: 1.2rem;
  --fontVerySmall: 0.8rem;
  /* Padding */
  --padding: 0 40px;

}

* {
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;  
}

a {
  text-decoration:none;
}

body {  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--main);
  
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

.slideInDown {
  animation-name: slide;
  animation-duration: .6s;
  animation-fill-mode: both;
  }
  @keyframes slide {
  0% {
  transform: translateY(-200%);
  opacity:0;
  }
  100% {
  opacity:1;
  transform: translateY(0);
  }
  } 

  .zoomIn {
  animation: zoomIn;
  animation-delay:.8s;
  animation-duration: .8s;
  animation-fill-mode: both;
  }
  @keyframes zoomIn {
  0% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
}

`;
