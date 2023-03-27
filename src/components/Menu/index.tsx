import { Container } from "react-bootstrap";
import StarWarsLogo from "@/assets/imgs/logo.svg";

import Nav from "react-bootstrap/Nav";

import "./index.scss";

export function Menu() {
  return (
    <div className="header-container">
      <Container>
        <Nav activeKey="1">
          <Nav.Item>
            <Nav.Link eventKey="1" href="/">
              <img src={StarWarsLogo} alt="Star Wars - APP" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}
