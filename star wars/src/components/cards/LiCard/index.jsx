import './style.css'

export const LiCard = ({people, setInfoCard, name, peopleData, abrirModal}) =>{

  const getCardWithName = () =>{
    peopleData.filter(item => {
      if(item.name === name){
        setInfoCard(item)
        abrirModal()
        return item
      }
      return{}
    })
  }

  return(
    <li className='liCard'>
      <div className='div_texto'>
        <p className='description'>Olá guerreiro, me chamo</p>
        <p className='infos'>{people.name}</p>
        <p className='description'>nascido em</p>
        <p className='infos'>{people.birth_year}</p>
        <p className='description'>sou da espécie</p>
        <p className='infos'>{people.species.name}</p>
      </div>
      <div className='div_button'>
        <p className='description_fim'>Quer saber mais?</p>
        <button className='button_card' onClick={getCardWithName}>Clique aqui!</button>
      </div>
    </li>
  )
}