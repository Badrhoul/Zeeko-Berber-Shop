import { useState } from 'react'

import './PhotoRight.css'

function PhotoRight({photo,blurb}) {

  return (
    <div className='card'>
      <div className='textContainer'>
        <h2 className='title'>Title</h2>
        <p className='description'>This is an example of a photo with text on the right. Hover over the photo or text to see the effects.</p>
      </div>
      <div className='photoContainer'>
        <img src={photo} alt="Example" className='photo' />
      </div>
    </div>
  );
};

export default PhotoRight