import { Button, makeStyles, TextField } from "@material-ui/core";
import * as React from "react";
import { AppContext } from "../App";
import Fabric from "../components/Fabric";
import G from "../components/G";

const useStyles = makeStyles({
  controls: {
    display: "flex",
    marginBottom: 20,
    marginTop: 20,
    "& button": {
      marginLeft: 20
    }
  },
  form: {}
});

export default function FreeDraw() {
  const classes = useStyles();
  const [size, setSize] = React.useState(20);
  const [text, setText] = React.useState("20");
  const [stitches, setStitches] = React.useState([]);
  const svgRef = React.useRef();

  React.useEffect(() => {
    const temp = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        temp.push({ fill: "transparent", x, y });
      }
    }
    setStitches(temp);
  }, [size]);

  function submitHandler(e) {
    e.preventDefault();
    setSize(Number(text));
  }
  function handleChange(e) {
    const num = Number(e.target.value);
    if (e.target.value == "" || (num > 0 && num < 51)) setText(e.target.value);
  }

  function resetHandler(e) {
    setStitches(stitches.map((stitch) => ({ ...stitch, fill: "transparent" })));
  }
  function exportHandler(e) {
    if (svgRef.current) {
      const data = new XMLSerializer().serializeToString(svgRef.current);
      const svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svg);
      const a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "download");
      a.setAttribute("download", "vyshyvanka-freedraw.svg");
      a.click();
    }
  }
  return (
    <div>
      <div className={classes.controls}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
          className={classes.form}
        >
          <TextField
            id="grid-size"
            label="Grid Size"
            size="small"
            variant="outlined"
            value={text}
            onChange={handleChange}
            type="number"
          />
        </form>
        <Button variant="outlined" color="secondary" onClick={resetHandler}>
          Reset
        </Button>
        <Button variant="outlined" color="primary" onClick={exportHandler}>
          Export SVG
        </Button>
      </div>

      <Fabric ref={svgRef} gridSize={[size, size]} gridColor="#eaeaea" showGrid>
        {stitches && <ShapeBaseFreeDraw stitches={stitches} x={0} y={0} />}
      </Fabric>
    </div>
  );
}

function ShapeBaseFreeDraw({ stitches, x, y, selected, setSelected }) {
  const { cellSize, selectFill } = React.useContext(AppContext);
  const [stitchState, setStitchState] = React.useState(
    stitches.map((stitch) => ({
      ...stitch,
      selected: false,
      originalFill: stitch.fill
    }))
  );

  React.useEffect(() => {
    setStitchState(
      stitches.map((stitch) => ({
        ...stitch,
        selected: false,
        originalFill: stitch.fill
      }))
    );
  }, [stitches]);

  function shapeClickHandler(event) {
    if (event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  function stitchClickHandler(event) {
    if (!event.shiftKey) {
      const newStitches = [...stitchState];
      const cur = newStitches[event.currentTarget.dataset.id];
      if (cur.fill != cur.originalFill && cur.fill != selectFill) {
        cur.fill = selectFill;
      } else {
        cur.selected = !cur.selected;
        cur.fill = cur.selected ? selectFill : cur.originalFill;
      }
      setStitchState(newStitches);
    }
  }

  return (
    <G x={x} y={y} fillOpacity={selected ? 0.5 : 1} onClick={shapeClickHandler}>
      {stitchState.map((stitch, i) => (
        <rect
          width={cellSize}
          height={cellSize}
          fill={stitch.fill}
          x={stitch.x * cellSize + 0.5}
          y={stitch.y * cellSize + 0.5}
          onClick={stitchClickHandler}
          data-id={i}
          key={`stitch-${i}`}
        />
      ))}
    </G>
  );
}
