import './style.css'
import { Cards } from '../../components/Cards'
import { Modal } from '../../components/Modal'
import { useContext } from 'react'
import { UseContextAll } from '../../context/ContextAll'

const HomePage = () => {
  const {
    abrirModal,
    peopleData,
    openModal,
    fecharModal,
    setInfoCard,
    infoCard
  } = useContext(UseContextAll)

  return (
    <main className="container">
      <header className="header_title">
        <img
          className="logo"
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt="logo"
        />
      </header>
      <Cards
        abrirModal={abrirModal}
        peopleData={peopleData}
        setInfoCard={setInfoCard}
      />
      <Modal
        fecharModal={fecharModal}
        openModal={openModal}
        infoCard={infoCard}
        peopleData={peopleData}
      />
    </main>
  )
}

export default HomePage
