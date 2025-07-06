import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './section/HeroSection'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import MessageSection from './section/MessageSection'
import Flavour from './section/Flavour'
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
            <NavBar/>
      <HeroSection/>
      <MessageSection/>
      <Flavour/>
      <div className='h-dvh border-2 bg-yellow-400'></div>
    </main>
  )
}

export default App