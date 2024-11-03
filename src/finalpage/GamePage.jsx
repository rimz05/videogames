import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GameForm from '../Pages/GameForm'
import Game1 from '../Pages/Game1'
import Game2a from '../Pages/Game2a'
import Game2b from '../Pages/Game2b'
import Game2c from '../Pages/Game2c'

const GamePage = () => {
  return (
    <div>
      <Navbar/>
      <Game1/>
      <Game2a/>
      <Game2b/>
      <Game2c/>
      <GameForm/>
      <Footer/>
    </div>
  )
}

export default GamePage
