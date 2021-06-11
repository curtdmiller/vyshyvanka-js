import React from "react";
import Fabric from "../../components/Fabric";
import G from "../../components/G";
import Line from "../../components/shapes/Line";
import Plus from "../../components/shapes/Plus";
import { colors } from "../../theme/colors";

export default function Spirals() {
  const iterations = 6;
  function renderIterations() {
    const arr = [];
    for (let i = 0; i < iterations; i++) {
      arr.push(<Pattern x={i * 12} />);
    }
    return arr;
  }
  return (
    <Fabric gridSize={[iterations * 12 - 1, 15]} backgroundColor="black">
      <G y={1}>{renderIterations()}</G>
    </Fabric>
  );
}

function Pattern({ x }) {
  const plusColors = [colors.yellow, colors.red, colors.green];
  return (
    <G x={x}>
      {plusColors.map((color, i) => (
        <>
          <Line length={2} angle="vertical" color="white" x={i * 4 - 1} y={2} />
          <Line length={2} angle="vertical" color="white" x={i * 4} y={1} />
          <Line length={2} angle="vertical" color="white" x={i * 4 + 1} y={0} />
          <Line length={2} angle="vertical" color="white" x={i * 4 + 2} y={1} />
          <Plus diameter={3} lineWidth={1} stroke={color} x={i * 4} y={5} />
          <Line length={2} angle="vertical" color="white" x={i * 4 - 1} y={9} />
          <Line length={2} angle="vertical" color="white" x={i * 4} y={10} />
          <Line
            length={2}
            angle="vertical"
            color="white"
            x={i * 4 + 1}
            y={11}
          />
          <Line
            length={2}
            angle="vertical"
            color="white"
            x={i * 4 + 2}
            y={10}
          />
        </>
      ))}
    </G>
  );
}
