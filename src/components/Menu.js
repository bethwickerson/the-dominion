import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { Link } from "react-router-dom"

import {
  menuShow,
  menuHide,
  staggerLinks,
  textIntro,
  hoverLink,
  hoverExit
} from './Animate'

const Menu = ({ state }) => {
  //create refs for our DOM elements

  let menuWrapper = useRef(null)
  let show1 = useRef(null)
  let show2 = useRef(null)
  let info = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      menuHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([show1, show2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      menuShow(show1, show2);
      textIntro(info);
      staggerLinks(line1, line2, line3);
    }
  }, [state])

  return (
    <div ref={(el) => (menuWrapper = el)} className="hamburger-menu">
      <div
        ref={(el) => (show1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (show2 = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/info"
                    >
                      info
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/links"
                    >
                      links
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/visuals"
                    >
                      visuals
                    </Link>
                  </li>

                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <p>
                  The Dominion is a set of tools for generating highly accurate conic sections from fundamental mathematical equations. Download for free on <a href="https://www.food4rhino.com/en/app/dominion" target="_blank" rel="noreferrer">Food4Rhino</a>. Join our <a href="https://www.patreon.com/The_Dominion" target="_blank" rel="noreferrer">Patreon</a> for technical support.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu