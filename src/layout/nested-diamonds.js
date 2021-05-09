import React from "react";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";

export default function NestedDiamonds() {
  return (
    <React.Fragment>
      <Fabric
        gridSize={[41, 41]}
        backgroundColor="#fff"
        // showGrid
        // gridColor="#333"
      >
        <Diamond
          diameter={41}
          filled
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={31}
          filled
          fill="#ffffff"
          stroke="#ffffff"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={21}
          filled
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={11}
          filled
          fill="#ffffff"
          stroke="#ffffff"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={3}
          filled
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
      </Fabric>
      <Fabric
        gridSize={[41, 41]}
        backgroundColor="#fff"
        // showGrid
        // gridColor="#333"
      >
        <Diamond
          diameter={41}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={39}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={37}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={33}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={25}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={21}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond
          diameter={17}
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
        <Diamond diameter={7} fill="#ff0000" stroke="#ff0000" cx={20} cy={20} />
        <Diamond
          diameter={3}
          filled
          fill="#ff0000"
          stroke="#ff0000"
          cx={20}
          cy={20}
        />
      </Fabric>
    </React.Fragment>
  );
}
