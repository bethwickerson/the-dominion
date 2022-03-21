import React from 'react'
import videoSource from './renders/video-1628811402.mp4'
 
const images = [
    '/renders/the-dominion-1.png',
    '/renders/the-dominion-7.png',
    '/renders/the-dominion-3.png',
    '/renders/the-dominion-4.jpg',
    '/renders/the-dominion-5.png',
    '/renders/the-dominion-6.jpg',
    '/renders/the-dominion-2.png',
    '/renders/the-dominion-8.jpg',
    '/renders/the-dominion-9.jpg',
    '/renders/the-dominion-10.jpg',
    '/renders/the-dominion-11.png',
    '/renders/the-dominion-12.png',
    '/renders/the-dominion-13.png',
    '/renders/the-dominion-14.png',
    '/renders/the-dominion-15.jpg',
    '/renders/the-dominion-16.png',
    '/renders/the-dominion-17.png',
    '/renders/the-dominion-18.png',
    '/renders/the-dominion-19.jpg',
    '/renders/the-dominion-20.png',
    '/renders/the-dominion-21.png',
    '/renders/the-dominion-22.png',
    '/renders/the-dominion-23.png',
    '/renders/the-dominion-24.png',
    '/renders/the-dominion-25.jpg',
    '/renders/the-dominion-26.png',
    '/renders/the-dominion-27.jpg',
    '/renders/the-dominion-28.png',
    '/renders/the-dominion-29.jpg',
    '/renders/the-dominion-30.png',
    '/renders/the-dominion-31.png',
    '/renders/the-dominion-32.png',
    '/renders/the-dominion-33.png',
    '/renders/the-dominion-34.png',
    '/renders/the-dominion-35.png',
    '/renders/the-dominion-36.png',
    '/renders/the-dominion-37.png'
]

const Renders = () => {
  return (
    <>
      <div className="Renders">
        <video autoPlay="autoplay" muted playsInline>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className='copyright'>
        <p>All images copyright Peter Davis, Daniel Christev, Michael Wickerson</p>
        <i class="gg-chevron-down"></i>
      </div>
      <div className='gallery-container'>
        {images.map((image) => (
          <figure>
            <img src={image} style={{width: '100%' }} alt="the dominion render"/>
          </figure>
        ))}
      </div>
    </>
  );
}

export default Renders;