import { createContext, useEffect, useState } from "react";
import api from "../service/api";

export const UseContextAll = createContext({})

const AuthProvider = ({ children }) => {

  const [openModal, setOpenModal] = useState(false)
  const [peopleData, setPeoplesData] = useState([])
  const [infoCard, setInfoCard] = useState([])
  
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

  return(
    <UseContextAll.Provider value={{
      openModal,
      peopleData,
      abrirModal,
      fecharModal,
      infoCard,
      setInfoCard
    }}>
      {children}
    </UseContextAll.Provider>
  )
}

export default AuthProvider