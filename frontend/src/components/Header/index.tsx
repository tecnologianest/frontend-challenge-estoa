import { Container } from "./styled";
import Image from 'next/image';
import logo from "../../../public/logo.svg"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    setSelectedTab(router.pathname);
  }, [router.pathname]);

  return (
    <Container>
      <Link href={"/"}><Image src={logo} alt="" width={113.98} height={48.78} /></Link>

      <nav>
        <ul>
          <Link href={"/characters"}>
            <li className={selectedTab === "/characters" ? "link selected" : "link"}>Characters</li>
          </Link>
          <Link href={"/planets"}>
            <li className={selectedTab === "/planets" ? "link selected" : "link"}>Planets</li>
          </Link>
          <Link href={"/starships"}>
            <li className={selectedTab === "/starships" ? "link selected" : "link"}>StarShips</li>
          </Link>
          <Link href={"/films"}>
            <li className={selectedTab === "/films" ? "link selected" : "link"}>Films</li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
}
