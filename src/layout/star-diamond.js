import React from "react";
import * as Tone from "tone";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import Square from "../components/shapes/Square";
import Star from "../components/shapes/Star";
import Single from "../components/shapes/Single";
import { colors } from "../theme/colors";
import OuterTriangles from "./star-interface/OuterTriangles";
import InnerTriangles from "./star-interface/InnerTriangles";
import OuterDiamonds from "./star-interface/OuterDiamonds";
import CornerStars from "./star-interface/CornerStars";
import { AppContext } from "../app-context";

export default function StarDiamond() {
  const { delay } = React.useContext(AppContext);
  const synthA = new Tone.FMSynth({
    oscillator: {
      type: "sawtooth"
    },
    modulationIndex: 11,
    modulation: {
      type: "square"
    },
    envelope: {
      attack: 0.01,
      decay: 0.2,
      sustain: 0.2,
      release: 2,
      attackCurve: "sine"
    }
  }).connect(delay);

  var pattern1 = new Tone.Pattern(
    function (time, note) {
      synthA.triggerAttackRelease(note, 0.1);
    },
    ["D4", "F4", "D4"],
    "up"
  );
  var pattern2 = new Tone.Pattern(
    function (time, note) {
      synthA.triggerAttackRelease(note, 0.1);
    },
    ["D4", "E4", "Eb4", "E4", "D4"],
    "up"
  );
  var pattern3 = new Tone.Pattern(
    function (time, note) {
      synthA.triggerAttackRelease(note, 0.1);
    },
    ["D4", "Eb4", "D4", "Eb4", "D4", "Eb4", "D4"],
    "down"
  );
  return (
    <Fabric gridSize={[37, 37]}>
      <OuterTriangles patterns={[pattern1, pattern2, pattern3]} />
      <OuterDiamonds />
      <InnerTriangles />

      {/* The Star */}
      <Star width={19} color={colors.orange} center={[18, 18]} />
      {/* Inner Diamond */}
      <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
      {/* Inner squares */}
      <Square width={3} x={17} y={17} stroke={colors.yellow} />
      <Single x={18} y={18} stroke={colors.gray} />

      <CornerStars />
    </Fabric>
  );
}
