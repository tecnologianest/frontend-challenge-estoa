import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PeopleSingle from './PeopleSingle';

export default function People(props) {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    const [showLogin, setShowLogin] = useState(false);

    function aumentaPagina(){
        props.paginaAumenta(props.page+1);
    }

    console.log(props.pagina);
    return(
        <Container>
            <h1 style={{textAlign: 'center', marginBottom: '50px', marginTop: '10px'}}>Explore our universe, by character</h1>
            <Row xs={1} md={3} className="g-4">
                {props.data.map((people, i) => { 
                    return (
                        <Container>
                            <Col key={i}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{people.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted" >Species: {people.species}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Birth: {people.birth_year}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Planet: {people.homeworld}</Card.Subtitle>
                                        <Link to={`/people/?id=${i}`}>
                                            <Button onClick={() => setShowLogin(true)}>See more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <PeopleSingle people={props.data} show={showLogin} close={() => setShowLogin(false)}></PeopleSingle>
                        </Container>
                    )
                })}
            </Row>
            <Button onClick={aumentaPagina()}>Next</Button>
        </Container>
    );
}