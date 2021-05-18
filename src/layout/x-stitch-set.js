import * as React from "react";
import Fabric from "../components/Fabric";
import X from "../components/shapes/X";

export default function XStitchSet() {
  return (
    <Fabric showGrid gridSize={[20, 20]} gridColor="black">
      <X width={3} fill="red" x={0} y={2} />
      <X width={5} fill="red" x={5} y={1} />
      <X width={7} fill="red" x={12} y={0} />

      <X width={4} fill="red" x={0} y={12} />
      <X width={6} fill="red" x={5} y={11} />
      <X width={8} fill="red" x={12} y={10} />
    </Fabric>
  );
}
