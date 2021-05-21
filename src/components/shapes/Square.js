import CellGroup from "../CellGroup";

export default function Square({
  width,
  x,
  y,
  stroke,
  fill,
  selected,
  setSelected
}) {
  const f = fill ? fill : null;
  const matrix = Array.from(Array(width), (_, i) =>
    Array.from(Array(width), (_, j) => {
      if (i === 0 || i === width - 1 || j === 0 || j === width - 1) {
        return stroke;
      }
      return f;
    })
  );
  return (
    <CellGroup
      matrix={matrix}
      x={x}
      y={y}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
