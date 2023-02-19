import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Films(props) {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    /* CUTS THE STRING FOR BETTER LAYOUT */
    //function cutString(str, count){
        //return str.slice(0, count) + (str.length > count ? "..." : "");
    //}

    return(
        <Container>
            <h1 className='title-style'>Explore our universe, by movie</h1>
            <Row xs={1} md={3} className="g-4">
                {props.data.map((films, i) => {
                    return(
                        <Container>
                            <Col key={i}>
                                <Card>
                                <Card.Body>
                                    <Card.Title>{films.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{films.opening_crawl}</Card.Subtitle>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Container>
                    )
                })}
            </Row>
        </Container>
    );
}