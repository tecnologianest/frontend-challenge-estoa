import React, {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import '../App.css';

const PeopleSingle = (props) => {
    /* SETS THE BACKGROUND COLOR OF THIS PAGE */
    useEffect(() => { document.body.style.backgroundColor = '#fff' }, []);

    /* GETS THE ID OF THE CHARACTER FROM THE URL TO OPEN THE MODAL */
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    return(
        <>
            <Modal
                className='modal-responsive'
                fullscreen={props.fullscreen}
                show={props.show}
                cancel={props.close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {props.show === true &&
                    <>
                        <Modal.Header>
                            <Modal.Title>{props.people[id].name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal-body'>
                            <ul>
                                <li><p><b>Birth:</b> {props.people[id].birth_year}</p></li>
                                <li><p><b>Eye:</b> {props.people[id].eye_color}</p></li>
                                <li><p><b>Gender:</b> {props.people[id].gender}</p></li>
                                <li><p><b>Hair:</b> {props.people[id].hair_color}</p></li>
                                <li><p><b>Heigth:</b> {props.people[id].height}</p></li>
                                <li><p><b>Mass:</b> {props.people[id].mass}</p></li>
                                <li><p><b>Skin:</b> {props.people[id].skin_color}</p></li>
                                <li><p><b>Homeworld:</b> {props.people[id].homeworld}</p></li>
                                <li><p><b>Films:</b> {props.people[id].films.join(', ')}</p></li>
                                <li><p><b>Species:</b> {props.people[id].species}</p></li>
                            </ul>
                        </Modal.Body>
                    </>
                }
                <Modal.Footer>
                    <Button onClick={props.close} variant="outline-primary">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default PeopleSingle;