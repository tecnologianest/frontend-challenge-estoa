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

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: #254451;
        padding: 3rem;
        position: relative;
        border-radius: 5px;
        outline: none;
        color: #fff;
        
        .close{
            cursor: pointer;
        }

        div{
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            p{
                display: flex;
                flex-direction: column;
                text-align: left;
            }
        }

        span{
            font-weight: bold;
        }

        h2{
            color: #FFC500;
        }
        h4{
            margin-top:2rem ;
            margin-bottom: .5rem;
            color: #FFC500;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover{
            filter: brightness(0.9);
        }
    }
    
`