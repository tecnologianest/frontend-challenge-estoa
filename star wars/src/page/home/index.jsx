import React from "react"
import './style.css'
import { Cards } from "../../components/cards"

export const Home = () =>{
  return (
    <main className='container'>
      <header className='header_title'>
        <h1 className='title'>Star Wars</h1>
        <Cards />
      </header>
    </main>
  )
}