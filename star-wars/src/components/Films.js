import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function People({data}) {
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []) 
    /* CONSTANTS TO HANDLE MODAL OPENING */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function sayHello(films) {
        alert(`hello, ${films.title}`);
        }
    function call(films){
        sayHello(films);
        handleShow(); /* TODO: ARRUMAR RETORNO ERRADO */
    }
    return(
        <Container>
            <h1 style={{textAlign: 'center', margin: '20px'}}>Explore our universe, by movie</h1>
            <Row xs={1} md={3} className="g-4">
                {data.map((films, i) => (
                <Col key={i}>
                    <Card style={{margin: '10px'}}>
                    <Card.Body>
                        <Card.Title>{films.title}</Card.Title>
                        <Button variant="primary" onClick={() => call(films)}>
                            See more
                        </Button>
                    </Card.Body>
                    </Card>
                    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{films.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                
                ))}
            </Row>
        </Container>
    );
}