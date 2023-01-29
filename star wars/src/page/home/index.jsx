import React, { useEffect, useState } from "react"
import './style.css'
import { Cards } from "../../components/Cards"
import { Modal } from "../../components/Modal"
import api from "../../service/api"

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [peopleData, setPeoplesData] = useState([])
  
  useEffect(()=>{
    api.get('/people/')
    .then(res => setPeoplesData(res.data.results))
    .catch(err => console.log(err))
  },[])

  const abrirModal = () => {
    setOpenModal(true)
  }

  const fecharModal = () => {
    setOpenModal(false)
  }

    return (
      <main className='container'>
        <header className='header_title'>
          <img className="logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="logo" />
        </header>
        <Cards abrirModal={abrirModal} peopleData={peopleData}/>
        <Modal
          fecharModal={fecharModal}
          openModal={openModal}
        />
      </main>
  )
}

export default HomePage