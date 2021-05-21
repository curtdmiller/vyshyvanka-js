import * as React from "react";
import Fabric from "../components/Fabric";
import Square from "../components/shapes/Square";
import G from "../components/G";

export default function SquareTest() {
  const cellSize = 10;
  const [emptySelected, setEmptySelected] = React.useState(false);
  const [solidSelected, setSolidSelected] = React.useState(false);
  const [redSelected, setRedSelected] = React.useState(false);
  const [groupSelected, setGroupSelected] = React.useState(false);

  return (
    <Fabric cellSize={cellSize} gridSize={[20, 20]}>
      <Square
        width={5}
        stroke="black"
        selected={emptySelected}
        setSelected={setEmptySelected}
      />
      <Square
        width={5}
        stroke="black"
        fill="black"
        x={6}
        selected={solidSelected}
        setSelected={setSolidSelected}
      />
      <Square
        width={5}
        stroke="black"
        fill="red"
        x={12}
        selected={redSelected}
        setSelected={setRedSelected}
      />
      <G x={0} y={6}>
        <Square
          width={12}
          stroke="black"
          selected={groupSelected}
          setSelected={setGroupSelected}
        />
        <Square
          width={9}
          stroke="black"
          x={8}
          y={5}
          selected={groupSelected}
          setSelected={setGroupSelected}
        />
      </G>
    </Fabric>
  );
}
