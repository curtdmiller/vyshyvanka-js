import { makeStyles } from "@material-ui/core";
import * as React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import { RightTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";

const useStyles = makeStyles({
  triangle: {
    opacity: 1,
    "&.clicked": {
      opacity: 0.5
    }
  }
});

export default function OuterTriangles() {
  const { volume } = React.useContext(AppContext);
  const [vol, setVol] = React.useState(volume.volume.value);
  const classes = useStyles();
  const topRightEl = React.useRef(null);
  const topLeftEl = React.useRef(null);
  const bottomRightEl = React.useRef(null);
  const bottomLeftEl = React.useRef(null);

  React.useEffect(() => {
    volume.volume.rampTo(vol, 0.5);
  }, [vol]);

  function blink(el) {
    el.classList.toggle("clicked");
    setTimeout(() => el.classList.toggle("clicked"), 50);
  }

  function tempoDown(e) {
    if (!e.shiftKey) {
      blink(topLeftEl.current);
    }
    Tone.Transport.bpm.value = Tone.Transport.bpm.value - 5;
  }

  function tempoUp(e) {
    if (!e.shiftKey) {
      blink(topRightEl.current);
    }
    Tone.Transport.bpm.value = Tone.Transport.bpm.value + 5;
  }

  function volumeUp(e) {
    if (!e.shiftKey) {
      blink(bottomRightEl.current);
    }
    if (vol < -4) {
      setVol(vol + 2);
    }
  }

  function volumeDown(e) {
    if (!e.shiftKey) {
      blink(bottomLeftEl.current);
    }
    setVol(vol - 2);
  }

  return (
    <g>
      <g onClick={tempoDown} className={classes.triangle} ref={topLeftEl}>
        <RightTriangle
          orientation="SE"
          sideLength={16}
          fill={colors.gray}
          x={0}
          y={0}
        />
      </g>
      <g onClick={tempoUp} className={classes.triangle} ref={topRightEl}>
        <RightTriangle
          orientation="SW"
          sideLength={16}
          fill={colors.gray}
          x={21}
          y={0}
        />
      </g>
      <g onClick={volumeUp} className={classes.triangle} ref={bottomRightEl}>
        <RightTriangle
          orientation="NW"
          sideLength={16}
          fill={colors.gray}
          x={21}
          y={21}
        />
      </g>
      <g onClick={volumeDown} className={classes.triangle} ref={bottomLeftEl}>
        <RightTriangle
          orientation="NE"
          sideLength={16}
          fill={colors.gray}
          x={0}
          y={21}
        />
      </g>
    </g>
  );
}
