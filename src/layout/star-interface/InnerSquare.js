import React from "react";
import Single from "../../components/shapes/Single";
import Square from "../../components/shapes/Square";
import { colors } from "../../theme/colors";

export default function InnerSquare({ resetClickHandler }) {
  return (
    <g onClick={resetClickHandler}>
      <Square width={3} x={17} y={17} stroke={colors.yellow} />
      <Single x={18} y={18} stroke={colors.gray} />
    </g>
  );
}
