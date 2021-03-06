import Fabric from "../../components/Fabric";
import Plus from "../../components/shapes/Plus";

export default function PlusCross() {
  return (
    <Fabric cellSize={10} gridSize={[21, 21]}>
      <g>
        <Plus cellSize={10} diameter={21} lineWidth={1} stroke="#ff0000" />
        <Plus
          cellSize={10}
          diameter={3}
          lineWidth={1}
          stroke="#ff0000"
          x={9}
          y={1}
        />
        <Plus
          cellSize={10}
          diameter={3}
          lineWidth={1}
          stroke="#ff0000"
          x={9}
          y={17}
        />
        <Plus
          cellSize={10}
          diameter={3}
          lineWidth={1}
          stroke="#ff0000"
          x={1}
          y={9}
        />
        <Plus
          cellSize={10}
          diameter={3}
          lineWidth={1}
          stroke="#ff0000"
          x={17}
          y={9}
        />
      </g>
    </Fabric>
  );
}
