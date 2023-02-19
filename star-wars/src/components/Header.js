import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='z-index'>
                <Container className='container'>
                    <Link to='/' className='link'>
                        <Navbar.Brand href="/home" className='title-font'>STAR WARS API</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-end'>
                        <Nav>
                            <Link to='/people' className='link'>
                                <Nav.Link href="/people">Characters</Nav.Link>
                            </Link>
                            <Link to='/films' className='link'>
                                <Nav.Link href="/films">Movies</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}