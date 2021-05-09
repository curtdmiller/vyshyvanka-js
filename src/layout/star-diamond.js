import React from "react";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import Plus from "../components/shapes/Plus";
import Square from "../components/shapes/Square";
import Star from "../components/shapes/Star";

export default function StarDiamond() {
  const red = "rgb(149,57,45)";
  const green = "rgb(117,153,88)";
  const orange = "rgb(240,158,96)";
  return (
    <Fabric
      gridSize={[99, 99]}
      backgroundColor="#eee"
      showGrid
      gridColor="#333"
    >
      <Diamond diameter={99} stroke={red} cx={49} cy={49} />
      <Diamond diameter={97} stroke={red} cx={49} cy={49} />
      <Diamond diameter={95} stroke={red} cx={49} cy={49} />
      <Diamond diameter={93} stroke={red} cx={49} cy={49} />
      <Diamond diameter={91} stroke={red} cx={49} cy={49} />
      <Diamond diameter={89} stroke={red} cx={49} cy={49} />
      <Diamond diameter={87} stroke={red} cx={49} cy={49} />
      <Diamond diameter={85} stroke={red} cx={49} cy={49} />
      <Diamond diameter={83} stroke={red} cx={49} cy={49} />
      <Diamond diameter={79} stroke="#fff" cx={49} cy={49} />
      <Diamond diameter={77} stroke="#222" fill="#222" filled cx={49} cy={49} />
      <Star center={[49, 49]} color={orange} width={47} />
      <Square width={7} stroke={green} fill={green} x={46} y={46} />
      <Plus diameter={3} lineWidth={1} stroke="white" x={48} y={48} />
    </Fabric>
  );
}
