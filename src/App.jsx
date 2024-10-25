import React from 'react'
import Footer from './components/Footer'
import GameForm from './Pages/GameForm'
import Pricing from './Pages/Pricing'
import LandingPage from './Pages/LandingPage'
import Navbar from './components/Navbar'
import CloudGame from './Pages/CloudGame'
import GameLibrary from './Pages/GameLibrary'

const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <CloudGame/>
      <GameLibrary/>
      <Pricing/>
      <GameForm/>
      <Footer/>
    </div>
  )
}

export default App
