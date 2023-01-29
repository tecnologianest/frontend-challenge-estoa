import React from "react"
import './style.css'
import { Cards } from "../../components/Cards"

const HomePage = () => (
    <main className='container'>
      <header className='header_title'>
        <img className="logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="logo" />
      </header>
      <Cards />
    </main>
)

export default HomePage