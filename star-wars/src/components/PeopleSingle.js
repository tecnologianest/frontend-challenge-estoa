import React, {  useEffect } from 'react';
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
                        <h2>{props.people[id].name}</h2>
                        <h4><b>Birth:</b> {props.people[id].birth_year}</h4>
                        <h4><b>Eye:</b> {props.people[id].eye_color}</h4>
                        <h4><b>Gender:</b> {props.people[id].gender}</h4>
                        <h4><b>Hair:</b> {props.people[id].hair_color}</h4>
                        <h4><b>Heigth:</b> {props.people[id].height}</h4>
                        <h4><b>Mass:</b> {props.people[id].mass}</h4>
                        <h4><b>Skin:</b> {props.people[id].skin_color}</h4>
                        <h4><b>Homeworld:</b> {props.people[id].homeworld}</h4>
                        <h4><b>Films:</b> {props.people[id].films.join(', ')}</h4>
                        <h4><b>Species:</b> {props.people[id].species}</h4>
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