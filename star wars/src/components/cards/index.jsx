import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import {LiCard } from './LiCard'
import './style.css'

export const Cards = () =>{

  const [peopleData, setPeoplesData] = useState([])
  
  useEffect(()=>{
    api.get('/people/')
    .then(res => setPeoplesData(res.data.results))
    .catch(err => console.log(err))
  },[])

  return (
    <section className='section_list_cards'>
      <ul className='list'>
        {peopleData.map(item => 
          <LiCard key={item.name} people = {item}/>
        )}
      </ul>
    </section>
  )
}