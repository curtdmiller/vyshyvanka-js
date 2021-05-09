import CellGroup from "../components/CellGroup";
import { interpolateGreys } from "d3-scale-chromatic";
import Fabric from "../components/Fabric";
import React from "react";

export default function NoiseSquare() {
  const width = 50;
  const matrix = [...Array(width)].map((_) =>
    [...Array(width)].map((_) => interpolateGreys(Math.random()))
  );
  const bwMatrix = [...Array(width)].map((_) =>
    [...Array(width)].map((_) => interpolateGreys(Math.round(Math.random())))
  );
  return (
    <React.Fragment>
      <Fabric gridSize={[width, width]}>
        <CellGroup matrix={matrix} x={0} y={0} />
      </Fabric>
      <Fabric gridSize={[width, width]}>
        <CellGroup matrix={bwMatrix} x={0} y={0} />
      </Fabric>
    </React.Fragment>
  );
}
