import { LiCard } from './LiCard'
import './style.css'

export const Cards = ({ abrirModal, peopleData, setInfoCard }) => {

  return (
    <section className="section_list_cards">
      <ul className="list">
        {peopleData.map(item => (
          <LiCard
            key={item.name}
            peopleData={peopleData}
            name={item.name}
            people={item}
            setInfoCard={setInfoCard}
            abrirModal={abrirModal}
          />
        ))}
      </ul>
    </section>
  )
}
