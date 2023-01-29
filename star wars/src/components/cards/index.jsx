import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import './style.css'

export const Cards = () =>{

  const [peopleData, setPeoplesData] = useState([])
  
  useEffect(()=>{
    api.get('/people/')
    .then(res => setPeoplesData(res.data.results))
    .catch(err => console.log(err))
  },[])

  return (
    <div className=''>

    </div>
  )
}