import React from 'react'
import '../App.css'
import Navbar from '../Comp/Navbar/Navbar'
import Hero from './Hero'
const HeroContainer = () => {
  return (
    <div className='min-h-screen  min-w-full  App   '> 
     <Navbar/>
      <Hero/>
    </div>
  )
}

export default  React.memo( HeroContainer)