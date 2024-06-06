import { useState } from 'react'

import './PhotoRight.css'

function PhotoRight({photo,blurb}) {


  return (
    <>
     <h2>{blurb}</h2>
     <img src={photo}></img>
    </>
  )
}

export default PhotoRight