import { Container } from "./styled"
import Image from 'next/image';
import logo from "../../../public/logo.svg"
import Link from "next/link";

export const Header = () => {
    return(
        <Container>
            <Link href={"/"}><Image src={logo} alt="" width={113.98} height={48.78} /></Link>
        
            <nav>
                <ul>
                    <Link className="link" href={"/characters"}>
                        <li>Characters</li>
                    </Link>
                    <Link className="link" href={"/planets"}>
                        <li>Planets</li>
                    </Link>
                    <Link className="link" href={"/starships"}>
                        <li>StarShips</li>
                    </Link>
                    <Link className="link" href={"/films"}>
                        <li>Films</li>
                    </Link>
                </ul>
            </nav>
        </Container>
    )
}