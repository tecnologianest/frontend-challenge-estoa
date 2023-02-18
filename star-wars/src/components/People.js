import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';

export default function People({data}) {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    /* CREATES THE PAGINATION ITEMS */ 
    let active = 1;
    let items = [];
    for (let number = 1; number <= 7; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }

    return(
        <Container>
            <h1 style={{textAlign: 'center', margin: '20px'}}>Explore our universe, by character</h1>
            <Row xs={1} md={3} className="g-4">
                {data.map((people, i) => ( 
                    <Col key={i}>
                        <Card>
                        <Card.Body>
                            <Card.Title>{people.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" >Species: {people.species}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Birth: {people.birth_year}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Planet: {people.homeworld}</Card.Subtitle>
                            <Button variant="primary">See more</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Container className='align-center'>
                <Pagination>{items}</Pagination>
            </Container>
        </Container>
    );
}