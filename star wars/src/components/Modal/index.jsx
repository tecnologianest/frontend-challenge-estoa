import './style.css'

export const Modal = ({fecharModal, openModal, infoCard }) =>{

  return openModal ? (
    <div className="fade_modal">
      <div className="container_modal">
        <div>
          <p className='name'>{infoCard.name}:</p>
          <p>Ano do nascimento: {infoCard.birth_year}</p>
          <p>Espécie: {infoCard.species.name}</p>
          <p>Cor do olho: {infoCard.eye_color}</p>
          <p>Gênero: {infoCard.gender}</p>
          <p>Cor do cabelo: {infoCard.hair_color}</p>
          <p>Altura: {infoCard.height}</p>
          <p>Peso: {infoCard.mass}</p>
          <p>Cor de pele: {infoCard.skin_color}</p>
          <p>Planeta: {infoCard.homeworld.name}</p>
          <p>filmes: {infoCard.films.map(el => el.title).join(', ')}</p>
        </div>
        <div>
          <button className='button_back' onClick={fecharModal}>Voltar</button>
        </div>
      </div>
    </div>
  ): null
}

