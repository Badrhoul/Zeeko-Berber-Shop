import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import './App.css'
import PhotoRight from './PhotoRight.jsx'
import PhotoLeft from './PhotoLeft.jsx'
import WorkingHours from './workingHours.jsx'

function App() {
  const [count, setCount] = useState(0)
  const thing = 'barberLogo.jpeg'
  return (
    <>
      <Navbar></Navbar>
      <PhotoRight photo={thing} blurb={thing}></PhotoRight>
      <PhotoLeft photo={thing} blurb={thing}></PhotoLeft>
      <PhotoRight photo={thing} blurb={thing}></PhotoRight>
      <WorkingHours></WorkingHours>

    </>
  )
}

export default App
