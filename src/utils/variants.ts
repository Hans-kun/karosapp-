export const fadeIn = (direction: string, delay: number, opacity: number) => {
  return {
    hidden: {
      y: direction === "up" ? 20 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 150 : direction === "right" ? -150 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: opacity,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show2: {
      y: 0,
      x: 0,
      opacity: opacity,
      transition: {
        delay: delay,
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show3: {
      y: 0,
      x: 0,
      opacity: opacity,
      transition: {
        delay: delay,
        type: "tween",
      },
    },
    show4: {
      y: 0,
      x: 0,
      opacity: opacity,
      transition: {
        duration: 0.3,
        delay: delay,
        type: "tween",
      },
    },
  };
};

export const fadeIn2 = (opacity: number, delay: number) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: opacity,
      transition: { duration: 1, delay: delay },
    },
  };
};

export const fadeInImage = () => {
  return {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.5,
        delay: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
};

export const bounceArrow = () => {
  return {
    hidden: {
      y: -50,
      transition: { duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] },
    },
    show: {
      y: 0,
      transition: {
        // type: "spring",
        // stiffness: 100,
        repeat: Infinity,
        delay: 0.5,
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
