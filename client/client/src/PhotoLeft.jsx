import { useState } from 'react'

import './PhotoLeft.css'

function PhotoLeft({photo,blurb,title}) {

  return (
    <div className='card1'>
      <div className='photoContainer1'>
        <img src={photo} alt="Example" className='photo1' />
      </div>
      <div className='textContainer1'>
        <h2 className='title1'>{title}</h2>
        <p className='description1'>{blurb}</p>
      </div>
    </div>
  );
};

export default PhotoLeft