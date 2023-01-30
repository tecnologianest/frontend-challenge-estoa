import './style.css'

export const Modal = ({fecharModal, openModal, infoCard, planets }) =>{

  return openModal ? (
    <div className="fade_modal">
      <div className="container_modal">
        <div>
          <p className='name'>{infoCard.name}:</p>
          <p>birth_year: {infoCard.birth_year}</p>
          <p>species: {infoCard.species}</p>
          <p>eye_color: {infoCard.eye_color}</p>
          <p>gender: {infoCard.gender}</p>
          <p>hair_color: {infoCard.hair_color}</p>
          <p>height: {infoCard.height}</p>
          <p>mass: {infoCard.mass}</p>
          <p>skin_color: {infoCard.skin_color}</p>
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

