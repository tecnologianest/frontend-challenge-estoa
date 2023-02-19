import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PeopleSingle from './PeopleSingle';

export default function People(props) {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    const [showLogin, setShowLogin] = useState(false);

    return(
        <Container>
            <h1 className='title-style'>Explore our universe, by character</h1>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {props.data.map((people, i) => { 
                    return (
                        <>
                            <Col key={i}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{people.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted" >Species: {people.species}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Birth: {people.birth_year}</Card.Subtitle>
                                        <Link to={`/people/?id=${i}`}>
                                            <Button onClick={() => setShowLogin(true)}>See more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <PeopleSingle people={props.data} show={showLogin} close={() => setShowLogin(false)}></PeopleSingle>
                        </>
                    )
                })}
            </Row>
            {/* PAGINATION TO NAVIGATE CHARACTERS */}
            <Container className='pagination-spacing'>
                <ReactPaginate
                    className={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    activeClassName={'active'}
                    previousLabel={''}
                    nextLabel={''}
                    breakLabel={'break'}
                    pageCount={9}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={6}
                    onPageChange={props.page}
                    renderOnZeroPageCount={null}
                    forcePage={props.pagina-1}
                />
            </Container>
        </Container>
    );
}