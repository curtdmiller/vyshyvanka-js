import React from "react";
import ShapeBase from "./ShapeBase";

function generateRightStitches(orientation, sidelength, fill) {
  const tmp = [];
  switch (orientation) {
    case "NE":
      for (let y = 0; y < sidelength; y++) {
        for (let x = 0; x < y + 1; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    case "SE":
      for (let y = 0; y < sidelength; y++) {
        for (let x = 0; x < sidelength - y; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    case "SW":
      for (let y = 0; y < sidelength; y++) {
        for (let x = y; x < sidelength; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    case "NW":
      for (let y = 0; y < sidelength; y++) {
        for (let x = sidelength - y - 1; x < sidelength; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    default:
      return [];
  }
}

export function RightTriangle({
  orientation,
  sideLength,
  fill,
  x,
  y,
  selected,
  setSelected
}) {
  const stitches = React.useMemo(
    () => generateRightStitches(orientation, sideLength, fill),
    [orientation, sideLength, fill]
  );

  return (
    <ShapeBase
      stitches={stitches}
      x={x}
      y={y}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function generateIsoStitches(orientation, baseWidth, fill) {
  const altitude = Math.ceil(baseWidth / 2);
  const center = altitude - 1;
  const tmp = [];
  switch (orientation) {
    case "north":
      for (let y = 0, n = 1; y < altitude; y++, n += 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x: center - y + i, y });
        }
      }
      return tmp;
    case "south":
      for (let y = 0, n = baseWidth; y < altitude; y++, n -= 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x: y + i, y });
        }
      }
      return tmp;
    case "east":
      for (let x = 0, n = baseWidth; x < altitude; x++, n -= 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x, y: x + i });
        }
      }
      return tmp;
    case "west":
      for (let x = 0, n = 1; x < altitude; x++, n += 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x, y: center - x + i });
        }
      }
      return tmp;
    default:
      return [];
  }
}

export function IsoTriangle({
  orientation,
  size,
  fill,
  x,
  y,
  selected,
  setSelected
}) {
  const baseWidth = size % 2 === 0 ? size - 1 : size;
  const stitches = React.useMemo(
    () => generateIsoStitches(orientation, baseWidth, fill),
    [orientation, baseWidth, fill]
  );

  return (
    <ShapeBase
      stitches={stitches}
      x={x}
      y={y}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
