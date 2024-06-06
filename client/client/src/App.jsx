import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import './App.css'
import PhotoRight from './PhotoRight.jsx'

function App() {
  const [count, setCount] = useState(0)
 const thing = 'hello'
  return (
    <>
     <Navbar></Navbar>
     <PhotoRight photo={thing} blurb={thing}></PhotoRight>
    </>
  )
}

export default App
