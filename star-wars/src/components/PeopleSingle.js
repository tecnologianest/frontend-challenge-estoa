import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';

const PeopleSingle = (props) => {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
 

    return(
        <>

            <Modal
                show={props.show}
                cancel={props.close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                {props.show == true &&
                    <Modal.Body>
                        <h1>{props.people[id].name}</h1>
                        <h3><b>Birth:</b> {props.people[id].birth_year}</h3>
                        <h3><b>Eye:</b> {props.people[id].eye_color}</h3>
                        <h3><b>Gender:</b> {props.people[id].gender}</h3>
                        <h3><b>Hair:</b> {props.people[id].hair_color}</h3>
                        <h3><b>Heigth:</b> {props.people[id].heigth}</h3>
                        <h3><b>Mass:</b> {props.people[id].mass}</h3>
                        <h3><b>Skin:</b> {props.people[id].skin_color}</h3>
                        <h3><b>Homeworld:</b> {props.people[id].homeworld}</h3>
                        <h3><b>Films:</b> {props.people[id].films}</h3>
                        <h3><b>Species:</b> {props.people[id].species}</h3>
                    </Modal.Body>
                }
                <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PeopleSingle;