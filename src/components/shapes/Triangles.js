import CellGroup from "../CellGroup";
import React from "react";

export function RightTriangle({ orientation, sideLength, fill, x, y }) {
  function generateMatrix(orientation) {
    switch (orientation) {
      case "NE":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) => (j <= i ? fill : null))
        );
      case "SE":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) =>
            j <= sideLength - 1 - i ? fill : null
          )
        );
      case "SW":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) => (j >= i ? fill : null))
        );
      case "NW":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) =>
            j >= sideLength - 1 - i ? fill : null
          )
        );
      default:
        return [];
    }
  }

  const matrix = generateMatrix(orientation);

  return <CellGroup matrix={matrix} x={x} y={y} />;
}

function generateIsoMatrix(orientation, baseWidth, fill) {
  const altitude = Math.ceil(baseWidth / 2);
  switch (orientation) {
    case "north":
      return Array.from(Array(altitude), (_, i) =>
        Array.from(Array(baseWidth), (_, j) => {
          if (j <= i + altitude - 1 && j + 1 >= altitude - i) {
            return fill;
          }
          return null;
        })
      );
    case "south":
      return Array.from(Array(altitude), (_, i) =>
        Array.from(Array(baseWidth), (_, j) => {
          if (j >= i && j < baseWidth - i) {
            return fill;
          }
          return null;
        })
      );
    case "east":
      return Array.from(Array(baseWidth), (_, i) =>
        Array.from(Array(altitude), (_, j) => {
          if (i >= j && i < baseWidth - j) {
            return fill;
          }
          return null;
        })
      );
    case "west":
      return Array.from(Array(baseWidth), (_, i) =>
        Array.from(Array(altitude), (_, j) => {
          if (i <= j + altitude - 1 && i + 1 >= altitude - j) {
            return fill;
          }
          return null;
        })
      );
    default:
      return [];
  }
}

export function IsoTriangle({ orientation, size, fill, x, y }) {
  const [baseWidth, setBaseWidth] = React.useState(
    size % 2 === 0 ? size - 1 : size
  );
  const [matrix, setMatrix] = React.useState(
    generateIsoMatrix(orientation, baseWidth, fill)
  );
  React.useEffect(() => {
    setBaseWidth(size % 2 === 0 ? size - 1 : size);
  }, [size]);
  React.useEffect(() => {
    setMatrix(generateIsoMatrix(orientation, baseWidth, fill));
  }, [orientation, baseWidth, fill]);

  return <CellGroup matrix={matrix} x={x} y={y} />;
}
