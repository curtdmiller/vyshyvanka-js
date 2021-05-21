import * as React from "react";
import { RightTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";

export default function OuterTriangles({ patterns }) {
  const [topLeftSelected, setTopLeftSelected] = React.useState(false);
  const [topRightSelected, setTopRightSelected] = React.useState(false);

  React.useEffect(() => {
    if (topLeftSelected) {
      patterns[0].start(0);
    } else {
      patterns[0].stop(0);
    }
    return () => patterns[0].stop(0);
  }, [topLeftSelected]);
  React.useEffect(() => {
    if (topRightSelected) {
      patterns[1].start(0);
    } else {
      patterns[1].stop(0);
    }
    return () => patterns[0].stop(0);
  }, [topRightSelected]);

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
      />
      <RightTriangle
        orientation="NE"
        sideLength={16}
        fill={colors.gray}
        x={0}
        y={21}
      />
    </g>
  );
}
