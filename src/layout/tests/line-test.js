import Line from "../../components/shapes/Line";
import Fabric from "../../components/Fabric";

export default function LineTest() {
  const cellSize = 10;
  return (
    <Fabric cellSize={10} gridSize={[20, 20]} showGrid gridColor="#eeeeee">
      <Line
        length={16}
        angle="horizontal"
        color="black"
        cellSize={cellSize}
        x={2}
      />
      <Line
        length={16}
        angle="vertical"
        color="black"
        cellSize={cellSize}
        y={2}
      />
      <Line
        length={16}
        angle="horizontal"
        color="black"
        cellSize={cellSize}
        x={2}
        y={19}
      />
      <Line
        length={16}
        angle="vertical"
        color="black"
        cellSize={cellSize}
        x={19}
        y={2}
      />
      <Line
        length={10}
        angle="diagonal-down"
        color="black"
        cellSize={cellSize}
        x={5}
        y={5}
      />
      <Line
        length={10}
        angle="diagonal-up"
        color="black"
        cellSize={cellSize}
        x={5}
        y={5}
      />
    </Fabric>
  );
}
