import './style.css'

export const Modal = ({fecharModal, openModal}) =>{

  return openModal ? (
    <div className="fade_modal">
      <div className="container_modal">
        <div>
          <p className='name'>Lucky Sky walker:</p>
          <p>species:</p>
          <p>eye_color:</p>
          <p>gender:</p>
          <p>height:</p>
          <p>mass:</p>
          <p>homeworld:</p>
          <p>films:</p>
        </div>
        <div>
          <button className='button_back' onClick={fecharModal}>Voltar</button>
        </div>
      </div>
    </div>
  ): null
}

