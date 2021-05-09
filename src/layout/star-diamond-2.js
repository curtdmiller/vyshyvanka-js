import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import Square from "../components/shapes/Square";
import Star from "../components/shapes/Star";
import React from "react";
import G from "../components/G";

function Shape(props) {
  return (
    <G x={props.x} y={props.y}>
      <Diamond diameter={37} cx={13} cy={13} fill="red" filled />
      <Diamond diameter={29} cx={13} cy={13} stroke="#fff" />
      <Diamond diameter={27} cx={13} cy={13} stroke="#000" fill="#000" filled />
      <Star width={19} color="orange" center={[13, 13]} />
      <Diamond diameter={25} cx={13} cy={13} stroke="orange" />
      <Square width={3} x={12} y={12} stroke="green" />
      <Square width={1} x={13} y={13} stroke="#000" />
      <Diamond diameter={5} cx={3} cy={13} stroke="orange" />
      <Diamond diameter={5} cx={2} cy={13} stroke="black" fill="black" filled />
      <Square width={1} x={2} y={13} stroke="orange" />

      <Diamond diameter={5} cx={23} cy={13} stroke="orange" />
      <Diamond
        diameter={5}
        cx={24}
        cy={13}
        stroke="black"
        fill="black"
        filled
      />
      <Square width={1} x={24} y={13} stroke="orange" />

      <Diamond diameter={5} cx={13} cy={3} stroke="orange" />
      <Diamond diameter={5} cx={13} cy={2} stroke="black" fill="black" filled />
      <Square width={1} x={13} y={2} stroke="orange" />

      <Diamond diameter={5} cx={13} cy={23} stroke="orange" />
      <Diamond
        diameter={5}
        cx={13}
        cy={24}
        stroke="black"
        fill="black"
        filled
      />
      <Square width={1} x={13} y={24} stroke="orange" />
    </G>
  );
}

export default function StarDiamond2() {
  return (
    <React.Fragment>
      <Fabric gridSize={[27, 27]} showGrid gridColor="#aaa">
        <Shape />
      </Fabric>
      <Fabric gridSize={[60, 60]} showGrid gridColor="#aaa">
        <Shape />
        <Shape x={34} />
        <Shape y={34} />
        <Shape x={34} y={34} />
        <Shape x={17} y={17} />
      </Fabric>
    </React.Fragment>
  );
}
