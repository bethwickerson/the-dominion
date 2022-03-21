import React from 'react'
import videoSource from './renders/video-1628811402.mp4'
 
// const images = [
//     'https://media0.giphy.com/media/i67uIY4a61ejm/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media3.giphy.com/media/SVqgwI1EIrjLfZyyfD/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media0.giphy.com/media/iCiyEytDbvR62GFfbb/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media0.giphy.com/media/i67uIY4a61ejm/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media3.giphy.com/media/SVqgwI1EIrjLfZyyfD/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media0.giphy.com/media/iCiyEytDbvR62GFfbb/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media0.giphy.com/media/i67uIY4a61ejm/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media3.giphy.com/media/SVqgwI1EIrjLfZyyfD/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
//     'https://media0.giphy.com/media/iCiyEytDbvR62GFfbb/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif'
// ]

const Renders = () => {
  return (
    <div className="Renders">
      <video autoPlay="autoplay" muted playsInline>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
    // <div className='gallery-container'>
    //     {images.map((image) => (
    //       <figure>
    //           <img src={image} style={{width: '100%' }} alt="the dominion render"/>
    //       </figure>
    //     ))}
    //   </div>
  );
}

export default Renders;