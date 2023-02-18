import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { goToHomePage } from "../routes/coordinator";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => goToHomePage(navigate)}>
            <Image src={logo} width="100px" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => goToHomePage(navigate)}>Home</Nav.Link>
            <Nav.Link href="mailto:maria-constance@hotmail.com" target="_blank">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};
