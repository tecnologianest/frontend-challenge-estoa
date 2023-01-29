import { LiCard } from './LiCard'
import './style.css'

export const Cards = ({ abrirModal, peopleData, setInfoCard, species }) => {

  return (
    <section className="section_list_cards">
      <ul className="list">
        {peopleData.map(item => {
          species.map(specie => {
            if(item.species.length === 0){
              item.species = "Human"
            }else if(item.species[0] === specie.url){
              item.species[0] = specie.name
            }
            return{}
          })
        return (
        <LiCard
            key={item.name}
            peopleData={peopleData}
            name={item.name}
            people={item}
            setInfoCard={setInfoCard}
            abrirModal={abrirModal}
          />)
        })}
      </ul>
    </section>
  )
}
