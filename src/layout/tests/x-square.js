import React from "react";
import Fabric from "../../components/Fabric";
import G from "../../components/G";
import ShapeBase from "../../components/shapes/ShapeBase";
import Square from "../../components/shapes/Square";
import { IsoTriangle } from "../../components/shapes/Triangles";
import X from "../../components/shapes/X";
import { colors } from "../../theme/colors";
import image from "../../assets/about/square.jpg";

export default function XSquare() {
  return (
    <React.Fragment>
      <Fabric gridSize={[31, 31]} backgroundColor={colors.offWhite}>
        <Hooks x={9} y={1} rotate={0} />
        <Hooks x={30} y={9} rotate={90} />
        <Hooks x={22} y={30} rotate={180} />
        <Hooks x={1} y={22} rotate={-90} />
        <Square width={15} x={8} y={8} stroke={colors.darkGray} />
        <Square
          width={13}
          x={9}
          y={9}
          stroke={colors.red}
          fill={colors.red}
          filled
        />
        <Square width={9} x={11} y={11} stroke={colors.darkGray} />
        <X width={7} x={12} y={12} fill={colors.green} />
        <IsoTriangle
          orientation="east"
          size={5}
          fill={colors.lightOrange}
          x={12}
          y={13}
        />
        <IsoTriangle
          orientation="west"
          size={5}
          fill={colors.lightOrange}
          x={16}
          y={13}
        />
      </Fabric>
      <img src={image} />
    </React.Fragment>
  );
}

function Hooks({ x, y, rotate }) {
  const stitches = React.useMemo(() => {
    const outline = [
      [0, 4],
      [0, 3],
      [0, 2],
      [1, 1],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 1],
      [6, 2],
      [7, 1],
      [8, 0],
      [9, 0],
      [10, 0],
      [11, 1],
      [12, 2],
      [12, 3],
      [12, 4],
      [11, 5],
      [10, 4],
      [10, 3],
      [9, 2],
      [8, 3],
      [8, 4],
      [8, 5],
      [8, 6],
      [6, 3],
      [6, 4],
      [6, 5],
      [6, 6],
      [1, 5],
      [2, 3],
      [2, 4],
      [3, 2],
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6]
    ];
    const fill = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 2],
      [3, 1],
      [4, 1],
      [4, 2],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [5, 6],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      [8, 1],
      [8, 2],
      [9, 1],
      [10, 1],
      [10, 2],
      [11, 2],
      [11, 3],
      [11, 4]
    ];
    return outline
      .map((c) => ({
        fill: colors.darkGray,
        x: c[0],
        y: c[1]
      }))
      .concat(
        fill.map((f) => ({
          fill: colors.red,
          x: f[0],
          y: f[1]
        }))
      );
  }, []);

  return (
    <G x={x} y={y}>
      <g transform={`rotate(${rotate})`}>
        <ShapeBase stitches={stitches} />
      </g>
    </G>
  );
}
