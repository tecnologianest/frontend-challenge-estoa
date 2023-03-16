import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";

export const Header = () => {
   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="/">
               <p className="logo">@</p>
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
