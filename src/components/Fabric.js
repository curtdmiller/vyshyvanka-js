import { makeStyles } from "@material-ui/styles";
import React from "react";
import { AppContext } from "../App";

const useStyles = makeStyles({
  root: {
    backgroundColor: ({ backgroundColor }) => backgroundColor
  }
});

/** SVG Element with optional background color to fill the area with squares */
export default function Fabric({
  gridSize,
  backgroundColor,
  showGrid,
  gridColor,
  children
}) {
  const classes = useStyles({ backgroundColor });
  const { cellSize } = React.useContext(AppContext);

  return (
    <svg
      className={classes.root}
      viewBox={`0 0 ${gridSize[0] * cellSize + 1} ${
        gridSize[1] * cellSize + 1
      }`}
    >
      <defs>
        <pattern
          id="fabric-grid"
          x="0"
          y="0"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke={gridColor ? gridColor : "white"}
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke={gridColor ? gridColor : "white"}
          />
        </pattern>
      </defs>
      {showGrid && <rect width="100%" height="100%" fill="url(#fabric-grid)" />}
      {children}
    </svg>
  );
}
