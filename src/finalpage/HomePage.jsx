import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../Pages/LandingPage'
import CloudGame from '../Pages/CloudGame'
import GameLibrary from '../Pages/GameLibrary'
import Pricing from '../Pages/Pricing'
import Footer from '../components/Footer'
import GameForm from '../Pages/GameForm'

const HomePage = () => {
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

export default HomePage
