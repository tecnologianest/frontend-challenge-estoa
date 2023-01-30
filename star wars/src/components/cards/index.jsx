import { LiCard } from './LiCard'
import './style.css'

export const Cards = ({
  abrirModal,
  peopleData,
  setInfoCard,
}) => {

  const getSpecies = (item) => {
    if (item.species[0] === undefined){
          item.species.name = "Human"
    }else{
      item.species.name = item.species[0].name
    }
  }

  return (
    <section className="section_list_cards">
      <ul className="list">
        {peopleData.map(item => {
          getSpecies(item)
          return (
            <LiCard
              key={item.name}
              peopleData={peopleData}
              name={item.name}
              people={item}
              setInfoCard={setInfoCard}
              abrirModal={abrirModal}
            />
          )
        })}
      </ul>
    </section>
  )
}
