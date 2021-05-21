import * as React from "react";
import Fabric from "../components/Fabric";
import Plus from "../components/shapes/Plus";

export default function NestedPlus() {
  const [selectAll, setSelectAll] = React.useState(false);
  return (
    <Fabric cellSize={10} gridSize={[21, 21]}>
      <g>
        <Plus
          cellSize={10}
          diameter={21}
          lineWidth={9}
          stroke="#ff0000"
          selected={selectAll}
          setSelected={setSelectAll}
        />
        <Plus
          cellSize={10}
          diameter={21}
          lineWidth={5}
          stroke="#ffffff"
          selected={selectAll}
          setSelected={setSelectAll}
        />
        <Plus
          cellSize={10}
          diameter={3}
          lineWidth={1}
          stroke="#ff0000"
          x={9}
          y={9}
          selected={selectAll}
          setSelected={setSelectAll}
        />
      </g>
    </Fabric>
  );
}
