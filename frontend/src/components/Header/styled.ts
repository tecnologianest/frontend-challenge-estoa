import styled from "styled-components";
import {motion} from "framer-motion"

export const Container = styled.header`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px){
        flex-direction: column;
    }
    
    .logo{
        width: 7rem;
    }

    ul{
        list-style: none;
        display: flex;
        gap: 2rem;
        cursor: pointer;

        @media (max-width: 767px){
            margin-top:1rem;
            gap: 1rem;
        }
        
        .link{
            color: var(--text-color);

        }
    }

`