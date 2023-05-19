import styled from "styled-components";
import {motion} from "framer-motion"

export const Container = styled(motion.div)`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 1rem 2rem;
    height: 521px;
    display: flex;
    align-items: center;
    `

export const Content = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    color: var(--text-color);

    @media (max-width: 767px){
        flex-direction: column;
    }
    
    .text{
        width: 237px;
        p{
            font-size: 1.5rem;
        }
    }

    .category{
        display: flex;
        gap: 10rem;
        align-items: center;
        
        @media (max-width: 767px){
            flex-direction: column;
            display: none;
        }
    }
`