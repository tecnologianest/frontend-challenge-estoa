import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --text-color: #FFC500;
    }
    
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family:"Inter", sans-serif;
        text-decoration: none;
    }
    
    body{
        background-image: radial-gradient(circle, #2C5364,  #203A43, #0F2027 );
        height: 100vh;
    }

    
`