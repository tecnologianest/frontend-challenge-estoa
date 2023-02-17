import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import '../Home.css';

export default function Home() {
    useEffect(() => { document.body.style.backgroundColor = '#000' }, []) 

    return(
        <Container>
            <img src={logo} />
            <div class="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
        </Container>
    );
}