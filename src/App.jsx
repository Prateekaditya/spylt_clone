import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './section/HeroSection'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
            <NavBar/>
      <HeroSection/>
      <div className='h-dvh border-2 bg-yellow-400'></div>
    </main>
  )
}

export default App