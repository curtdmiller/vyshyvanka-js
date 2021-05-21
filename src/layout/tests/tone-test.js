import { makeStyles } from "@material-ui/core";
import React from "react";
import * as Tone from "tone";
import { polySketchInC } from "../../components/tonejs/polysketchinC";

const useStyles = makeStyles({
  root: {
    "& button": {
      display: "block"
    }
  }
});

export default function ToneTest() {
  const classes = useStyles();
  const loopBeat = React.useRef(new Tone.Loop(polySketchInC, "16n"));
  const [loopOn, setLoopOn] = React.useState(false);

  React.useEffect(() => {
    loopOn ? loopBeat.current.start(0) : loopBeat.current.stop(0);
    return () => loopBeat.current.stop(0);
  }, [loopOn]);

  function handleClick() {
    setLoopOn(!loopOn);
  }

  return (
    <div className={classes.root}>
      <button onClick={handleClick}>Toggle Beat</button>
    </div>
  );
}
