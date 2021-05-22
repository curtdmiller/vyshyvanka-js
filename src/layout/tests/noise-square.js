import React from "react";
import { interpolateGreys } from "d3-scale-chromatic";
import Fabric from "../../components/Fabric";
import ShapeBase from "../../components/shapes/ShapeBase";

export default function NoiseSquare() {
  const width = 50;
  const [grayNoise, setGrayNoise] = React.useState([]);
  const [bwNoise, setBwNoise] = React.useState([]);

  React.useEffect(() => {
    const tmp = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < width; y++) {
        tmp.push({ fill: interpolateGreys(Math.random()), x, y });
      }
    }
    setGrayNoise(tmp);

    const bwtmp = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < width; y++) {
        bwtmp.push({ fill: interpolateGreys(Math.round(Math.random())), x, y });
      }
    }
    setBwNoise(bwtmp);
  }, [width]);

  return (
    <React.Fragment>
      <Fabric gridSize={[width, width]}>
        <ShapeBase stitches={grayNoise} x={0} y={0} />
      </Fabric>
      <Fabric gridSize={[width, width]}>
        <ShapeBase stitches={bwNoise} x={0} y={0} />
      </Fabric>
    </React.Fragment>
  );
}
