import { useState } from 'react'

import './PhotoRight.css'

function PhotoRight({photo,blurb,title}) {

  return (
    <div className='card'>
      <div className='textContainer'>
        <h2 className='title'>{title}</h2>
        <p className='description'>{blurb}</p>
      </div>
      <div className='photoContainer'>
        <img src={photo} alt="Example" className='photo' />
      </div>
    </div>
  );
};

export default PhotoRight