import './style.css'

export const LiCard = (props) =>{
  
  return(
    <li className='liCard'>
      <div className='div_texto'>
        <p className='description'>Olá guerreiro, me chamo</p>
        <p className='infos'>{props.people.name}</p>
        <p className='description'>nascido em</p>
        <p className='infos'>{props.people.birth_year}</p>
        <p className='description'>sou da espécie</p>
        <p className='infos'>{props.people.species}</p>
      </div>
      <div className='div_button'>
        <p className='description_fim'>Quer saber mais?</p>
        <button className='button_card'>Clique aqui!</button>
      </div>
    </li>
  )
}