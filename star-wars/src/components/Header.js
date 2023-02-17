import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {
    return(
    <Navbar className='z-index' bg="dark" variant="dark">
        <Container className='container'>
            <Link to='/' className='link'>
                <Navbar.Brand href="/home" className='title-font'>STAR WARS API</Navbar.Brand>
            </Link>
            <Nav className="justify-content-end">
                <Link to='/people' className='link'>
                    <Nav.Link href="/people">Characters</Nav.Link>
                </Link>
                <Link to='/films' className='link'>
                    <Nav.Link href="/films">Films</Nav.Link>
                </Link>
            </Nav>
        </Container>
    </Navbar>
    );
}