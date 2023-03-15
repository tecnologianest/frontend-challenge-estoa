import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Search } from "../../components/Search";
import Card from "react-bootstrap/Card";
import "./home.css";

export const Home = () => {
   const [dropdownValue, setDropdownValue] = useState("Buscar por");

   const chanceValue = (value) => {
      setDropdownValue(value);
   };

   return (
      <Container className="mt-4">
         <Row>
            <Search dropdownValue={dropdownValue} chanceValue={chanceValue} />
         </Row>
         <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="mt-2">
               <Card>
                  <Card.Img variant="top" src="https://placeimg.com/300/120/any" />
               </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mt-2">
               <Card>
                  <Card.Img variant="top" src="https://placeimg.com/300/120/any" />
               </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mt-2">
               <Card>
                  <Card.Img variant="top" src="https://placeimg.com/300/120/any" />
               </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mt-2">
               <Card>
                  <Card.Img variant="top" src="https://placeimg.com/300/120/any" />
               </Card>
            </Col>
         </Row>
      </Container>
   );
};
