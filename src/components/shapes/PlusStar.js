import G from "../G";
import Plus from "./Plus";

/**
 * ### PlusStar
 * Compound shape of four plusses in a diamond
 * @param {Object} props
 * @param {string[]} props.colors - colors of each plus [top, right, bottom, left]
 */
export default function PlusStar({ colors, x, y }) {
  return (
    <G x={x} y={y}>
      <Plus diameter={3} lineWidth={1} stroke={colors[0]} x={1} y={3} />
      <Plus diameter={3} lineWidth={1} stroke={colors[1]} x={3} y={1} />
      <Plus diameter={3} lineWidth={1} stroke={colors[2]} x={5} y={3} />
      <Plus diameter={3} lineWidth={1} stroke={colors[3]} x={3} y={5} />
    </G>
  );
}
