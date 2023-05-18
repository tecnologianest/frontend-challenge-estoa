import Image from "next/image"
import { Container } from "./styled"

import disney from "../../../public/disney.svg"
import logoWhite from "../../../public/logo-white.svg"

export const Footer = () => {
    return(
        <Container>
            <Image className="img" src={disney} alt="" width={60} height={30}/>
            <Image className="img" src={logoWhite} alt="" width={60} height={30}/>
        </Container>
    )
}