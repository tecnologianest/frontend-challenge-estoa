import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Text>Designed by: Maria Constance</Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="https://www.linkedin.com/in/mariaconstance"
              target="_blank"
            >
              Linkedin
            </Nav.Link>
            <Nav.Link href="https://www.github.com/constance03" target="_blank">
              Github
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/heydearmaria"
              target="_blank"
            >
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
