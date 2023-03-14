import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/starwarsLogo.png";

export const Header = () => {
   return (
      <Navbar bg="dark" variant="dark">
         <Container fluid>
            <Navbar.Brand href="#home">
               <Image src={Logo} fluid width="40" height="40" className="d-inline-block align-center" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-NavBar" className="justify-content-end">
               <Nav>
                  <Nav.Link href="/" className="text-white">
                     Home
                  </Nav.Link>
                  <Nav.Link href="/about" className="text-white">
                     Sobre
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};
