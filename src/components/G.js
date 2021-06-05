import React from "react";
import { AppContext } from "../App";
/**
 * <g> with cellSize based translate
 * @param {Object} props
 */
export default function G({ x, y, children, ...rest }) {
  const { cellSize } = React.useContext(AppContext);
  return (
    <g
      transform={`translate(${x ? x * cellSize : 0}, ${y ? y * cellSize : 0})`}
      {...rest}
    >
      {children}
    </g>
  );
}
