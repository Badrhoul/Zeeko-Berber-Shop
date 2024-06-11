import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import './App.css'
import PhotoRight from './PhotoRight.jsx'
import PhotoLeft from './PhotoLeft.jsx'
import WorkingHours from './workingHours.jsx'

function App() {
  
  const lineUp = 'lineUpArt.jpg'
  const lineupDesc = 'Need clean lines in these hard times? Look no further. We offer simple to elegant designs that match your needs.'
  const lineupTitle = 'Crisp Lines'

  const fade = 'crispyFade.jpg'
  const fadeDesc = `Experience the sharpest fade in town with our expert men's haircut service. Elevate your style with precision cuts that blend seamlessly for a look that's effortlessly cool. Step into confidence and sophistication with every snip.`
  const fadeTitle = "Sharpest Fade in Town"
  
  const beard = 'beard.jpg'
  const beardDesc =  `Transform your look with our premier men's haircut and beard grooming service. Achieve the perfect blend of style and sophistication with precision cuts and expertly sculpted beards. Unleash your confidence and charm with every visit.`
  const beardTitle = `Style and Sophistication Unleashed`

  return (
    <>
      <Navbar></Navbar>
      <PhotoRight photo={fade} blurb={fadeDesc} title = {fadeTitle}></PhotoRight>
      <PhotoLeft photo={lineUp} blurb={lineupDesc} title = {lineupTitle}></PhotoLeft>
      <PhotoRight photo={beard} blurb={beardDesc} title = {beardTitle}></PhotoRight>
      <WorkingHours></WorkingHours>

    </>
  )
}

export default App
