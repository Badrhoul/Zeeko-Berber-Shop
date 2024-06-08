import { useState } from 'react'

import './PhotoLeft.css'

function PhotoLeft({photo,blurb}) {

  return (
    <div className='card1'>
      <div className='photoContainer1'>
        <img src={photo} alt="Example" className='photo1' />
      </div>
      <div className='textContainer1'>
        <h2 className='title1'>Title</h2>
        <p className='description1'>This is an example of a photo with text on the right. Hover over the photo or text to see the effects.</p>
      </div>
    </div>
  );
};

export default PhotoLeft