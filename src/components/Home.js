import React, { useEffect, useRef } from 'react';
import { ReactComponent as ReactLogo } from './home/dominion-logo.svg';
import { iconIntro } from "./Animate"

export default function Home() {

  let icon = useRef(null);

  //When the component mounts
  useEffect(() => {
    iconIntro(icon)

  });

  return (
    <div className="Home">
      <ReactLogo ref={(el) => (icon = el)} />
    </div>
  )
}
