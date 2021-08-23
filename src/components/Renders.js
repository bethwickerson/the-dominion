import React from 'react'
import videoSource from './renders/video-1628811402.mp4'

const Renders = () => {
  return (
    <div className="Renders">
      <video autoPlay="autoplay" muted playsInline>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
}

export default Renders;