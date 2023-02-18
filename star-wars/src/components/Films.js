import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function People({data}) {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    /* CUTS THE STRING FOR BETTER LAYOUT */
    function cutString(str, count){
        return str.slice(0, count) + (str.length > count ? "..." : "");
    }


    return(
        <Container>
            <h1 style={{textAlign: 'center', margin: '20px'}}>Explore our universe, by movie</h1>
            <Row xs={1} md={3} className="g-4">
                {data.map((films, i) => (
                    <Col key={i}>
                        <Card>
                        <Card.Body>
                            <Card.Title>{films.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{cutString(films.opening_crawl, 100)}</Card.Subtitle>
                            <Button variant="primary">
                                See more
                            </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}