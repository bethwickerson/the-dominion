import gsap from "gsap"

//Icon Intro
export const iconIntro = elem => {
  gsap.from(elem, {
    rotation: 180,
    opacity: 0,
    duration: 1.5,
    scale: -1,
    ease: "expo",
  });
};
//Text Intro
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
    scale: -1,
    ease: "expo",
  });
};

//Open menu
export const menuShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2,
    },
  })
}

//Close menu
export const menuHide = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07,
    },
  })
}

//Stagger links
export const staggerLinks = (elem1, elem2, elem3) => {
  gsap.from([elem1, elem2, elem3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3,
    },
  })
}

// Hover on the link
export const hoverLink = e => {
  gsap.set(e.target, {
    transformOrigin: "0 50%"
  });
  gsap.to(e.target, {
    duration: 0.4,
    y: 3,
    scale: 1.06,
    ease: "power2.inOut"
  });
};

// Hover away from the link
export const hoverExit = e => {
  gsap.to(e.target, {
    duration: 0.4,
    y: -3,
    scale: 1,
    ease: "power2.inOut"
  });
};