import { createContext, useEffect, useState } from 'react'
import api from '../service/api'

export const UseContextAll = createContext({})

const AuthProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)
  const [peopleData, setPeoplesData] = useState([])
  const [infoCard, setInfoCard] = useState([])

  useEffect(() => {
    api
      .get('people/')
      .then(async res => {
        let peoples = await Promise.all(
          res.data.results.map(async people => {
            people.species = await Promise.all(
              people.species.map(
                async specie_url =>
                  (await api.get(specie_url, { baseURL: '' })).data
              )
            )

            people.homeworld = (await api.get(people.homeworld, { baseURL: '' })).data

            people.films = await Promise.all(
              people.films.map(
                async film_url =>
                  (await api.get(film_url, { baseURL: '' })).data
              )
            )

            return people
          })
        )

        setPeoplesData(peoples)
      })
      .catch(err => console.log(err))
  }, [])
  
  const abrirModal = () => {
    setOpenModal(true)
  }

  const fecharModal = () => {
    setOpenModal(false)
  }

  return (
    <UseContextAll.Provider
      value={{
        openModal,
        peopleData,
        abrirModal,
        fecharModal,
        infoCard,
        setInfoCard,
      }}
    >
      {children}
    </UseContextAll.Provider>
  )
}

export default AuthProvider
