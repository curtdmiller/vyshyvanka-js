import G from "../G";
import Line from "./Line";

export default function Star({ center, color, width }) {
  const w = width % 2 === 0 ? width - 1 : width;
  const dwidth = w > 15 ? w - Math.floor(w / 3.5) : w - Math.floor(w / 5);
  const dw = dwidth % 2 === 0 ? dwidth - 1 : dwidth;
  return (
    <G x={center[0]} y={center[1]}>
      <Line length={w} angle="horizontal" color={color} x={Math.ceil(-w / 2)} />
      <Line length={w} angle="vertical" color={color} y={Math.ceil(-w / 2)} />
      <Line
        length={dw}
        angle="diagonal-down"
        color={color}
        x={Math.ceil(-dw / 2)}
        y={Math.ceil(-dw / 2)}
      />
      <Line
        length={dw}
        angle="diagonal-up"
        color={color}
        x={Math.ceil(-dw / 2)}
        y={Math.ceil(-dw / 2)}
      />
    </G>
  );
}
