import {motion} from "framer-motion"
import styled from "styled-components"

export const Container = styled(motion.div)`
    width: 100%;
    max-width: 1440px;
    margin:2rem auto;
    padding: 0 2rem;
    text-align: left;
    border: 1px solid #203A43;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .container-table{
        width: 100%;
        max-width: 100%;

        @media (max-width: 767px){
            overflow-x: scroll;
            padding-bottom: 2rem ;
        }

        table{
            width: 100%;
            
            thead{
                background-color: rgba(44, 83, 100, 0.26);
                color: var(--text-color);
                
                @media (max-width: 767px){
                    th{
                        min-width: 200px;
    
                    }
                }
            }
        
            tbody{
                color: #fff;

                tr{
                    height: 1.8rem;
                }

                @media (max-width: 767px){
                    td{
                        min-width: 200px;
    
                    }
                }
            }
        }
    }

    div{
        display: flex;
        gap: 1rem;

        button{
            padding: .5rem 1rem;
            border: 1px solid var(--text-color);
            border-radius: 999px;
            background-color: transparent;
            color: var(--text-color);
            cursor: pointer;
            transition: background .2s;
            &:hover{
                background-color: var(--text-color);
                color: #fff;
            }
        }
    }
`