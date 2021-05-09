import Fabric from "../components/Fabric";
import Square from "../components/shapes/Square";
import G from "../components/G";

export default function SquareTest() {
  const cellSize = 10;
  return (
    <Fabric cellSize={cellSize} gridSize={[20, 20]}>
      <Square cellSize={cellSize} width={5} stroke="black" />
      <Square cellSize={cellSize} width={5} stroke="black" fill="black" x={6} />
      <Square cellSize={cellSize} width={5} stroke="black" fill="red" x={12} />
      <G cellSize={cellSize} x={0} y={6}>
        <Square cellSize={cellSize} width={12} stroke="black" />
        <Square cellSize={cellSize} width={9} stroke="black" x={8} y={5} />
      </G>
    </Fabric>
  );
}
