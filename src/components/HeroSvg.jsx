// src/components/HeroSVG.jsx
import React from "react";
import ball from "@/assets/ball.svg";

const HeroSVG = () => <img
    src={ball} // make sure this is the optimized SVG path
    alt="ball background"
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-[25%]
      w-[70%]
      max-w-[800px]
      opacity-80
      blur-[1px]
      pointer-events-none
    "
  />;

export default HeroSVG;
