import { Button, makeStyles, TextField } from "@material-ui/core";
import * as React from "react";
import Fabric from "../components/Fabric";
import ShapeBase from "../components/shapes/ShapeBase";

const useStyles = makeStyles({
  controls: {
    display: "flex",
    marginBottom: 20
  },
  form: {
    marginRight: 20
  }
});

export default function FreeDraw() {
  const classes = useStyles();
  const [size, setSize] = React.useState(20);
  const [text, setText] = React.useState("20");
  const [stitches, setStitches] = React.useState([]);

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
      </div>

      <Fabric gridSize={[size, size]} gridColor="#eaeaea" showGrid>
        {stitches && <ShapeBase stitches={stitches} x={0} y={0} />}
      </Fabric>
    </div>
  );
}
