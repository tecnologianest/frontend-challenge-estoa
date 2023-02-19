import React, { useEffect } from 'react';
import logo from '../logo_star_wars.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import '../Home.css';
import '../App.css';

export default function Home() {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#000' }, []);

    return(
        <Container className='align-center'>
            <img src={logo} alt='Star Wars Logo' className='z-index' style={{width: '100%', maxWidth:'800px'}} />
            <h2 className='frase-banner z-index'>A long time ago in a galaxy far, far away...</h2>
            <div class="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
        </Container>
    );
}