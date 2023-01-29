import './style.css'

export const Modal = ({fecharModal, openModal, infoCard, }) =>{

  return openModal ? (
    <div className="fade_modal">
      <div className="container_modal">
        <div>
          <p className='name'>{infoCard.name}:</p>
          <p>species: {infoCard.species}</p>
          <p>eye_color: {infoCard.eye_color}</p>
          <p>gender: {infoCard.gender}</p>
          <p>height: {infoCard.height}</p>
          <p>mass: {infoCard.mass}</p>
          <p>homeworld: {infoCard.homeworld}</p>
          <p>films: {infoCard.films}</p>
        </div>
        <div>
          <button className='button_back' onClick={fecharModal}>Voltar</button>
        </div>
      </div>
    </div>
  ): null
}

