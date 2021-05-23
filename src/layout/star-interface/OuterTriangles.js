import * as React from "react";
import { AppContext } from "../../app-context";
import { RightTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";

export default function OuterTriangles({ patterns }) {
  const [topLeftSelected, setTopLeftSelected] = React.useState(false);
  const [topRightSelected, setTopRightSelected] = React.useState(false);
  const [bottomRightSelected, setBottomRightSelected] = React.useState(false);
  const [bottomLeftSelected, setBottomLeftSelected] = React.useState(false);

  React.useEffect(() => {}, [topLeftSelected]);
  React.useEffect(() => {}, [topRightSelected]);

  return (
    <g>
      <RightTriangle
        orientation="SE"
        sideLength={16}
        fill={colors.gray}
        x={0}
        y={0}
        selected={topLeftSelected}
        setSelected={setTopLeftSelected}
      />
      <RightTriangle
        orientation="SW"
        sideLength={16}
        fill={colors.gray}
        x={21}
        y={0}
        selected={topRightSelected}
        setSelected={setTopRightSelected}
      />
      <RightTriangle
        orientation="NW"
        sideLength={16}
        fill={colors.gray}
        x={21}
        y={21}
        selected={bottomRightSelected}
        setSelected={setBottomRightSelected}
      />
      <RightTriangle
        orientation="NE"
        sideLength={16}
        fill={colors.gray}
        x={0}
        y={21}
        selected={bottomLeftSelected}
        setSelected={setBottomLeftSelected}
      />
    </g>
  );
}
