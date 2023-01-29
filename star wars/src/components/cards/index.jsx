import {LiCard } from './LiCard'
import './style.css'

export const Cards = ({abrirModal, peopleData}) =>{

  return (
    <section className='section_list_cards'>
      <ul className='list'>
        {peopleData.map(item => 
          <LiCard key={item.name} people={item} abrirModal={abrirModal}/>
        )}
      </ul>
    </section>
  )
}