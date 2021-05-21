import * as React from "react";
import Fabric from "../components/Fabric";
import X from "../components/shapes/X";

export default function XStitchSet() {
  const [sel1, setSel1] = React.useState(false);
  const [sel2, setSel2] = React.useState(false);
  const [sel3, setSel3] = React.useState(false);
  const [sel4, setSel4] = React.useState(false);
  const [sel5, setSel5] = React.useState(false);
  const [sel6, setSel6] = React.useState(false);
  return (
    <Fabric showGrid gridSize={[20, 20]} gridColor="black">
      <X
        width={3}
        fill="red"
        x={0}
        y={2}
        selected={sel1}
        setSelected={setSel1}
      />
      <X
        width={5}
        fill="red"
        x={5}
        y={1}
        selected={sel2}
        setSelected={setSel2}
      />
      <X
        width={7}
        fill="red"
        x={12}
        y={0}
        selected={sel3}
        setSelected={setSel3}
      />

      <X
        width={4}
        fill="red"
        x={0}
        y={12}
        selected={sel4}
        setSelected={setSel4}
      />
      <X
        width={6}
        fill="red"
        x={5}
        y={11}
        selected={sel5}
        setSelected={setSel5}
      />
      <X
        width={8}
        fill="red"
        x={12}
        y={10}
        selected={sel6}
        setSelected={setSel6}
      />
    </Fabric>
  );
}
