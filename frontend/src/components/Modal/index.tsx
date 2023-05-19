
import Modal from 'react-modal'
import { StarWarsCharacter } from "@/types/characters"
import close from '../../../public/Close.svg'
import { Container } from './styles';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void,
    details: StarWarsCharacter
}

export const ModalComponent = ({isOpen, onRequestClose, details}: ModalProps) => {
    return(
        <Container>
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <Image src={close} alt='close' className='close'/>
                </button>
                
                <h2>{details.name}</h2>
                <div>
                    <p>Nascimento<span>{details.birth_year}</span></p>
                    <p>Genero<span>{details.gender}</span></p>
                </div>

                <h4>characteristics</h4>
                <div>
                    <p>Cor dos Olhos<span>{details.eye_color}</span></p>
                    <p>Cor do cabelo<span>{details.hair_color}</span></p>
                    <p>Altura<span>{details.height}</span></p>
                    <p>Peso<span>{details.mass}</span></p>
                    <p>Cor da pele<span>{details.skin_color}</span></p>
                </div>
                
            </Modal>
        </Container>
    )
}