import styled from "styled-components";
import {motion} from "framer-motion"

export const Container = styled(motion.footer)`
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;

    .img{
        margin: 0 1rem 0 0;
    }
`
