import React from "react";
import * as Tone from "tone";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import Square from "../components/shapes/Square";
import Star from "../components/shapes/Star";
import Single from "../components/shapes/Single";
import { IsoTriangle } from "../components/shapes/Triangles";
import { colors } from "../theme/colors";
import OuterTriangles from "./star-interface/OuterTriangles";
import InnerTriangles from "./star-interface/InnerTriangles";

const delay = new Tone.FeedbackDelay({
  maxDelay: 2,
  feedback: 0.8,
  wet: 0.2
}).toDestination();

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

export default function StarDiamond() {
  return (
    <Fabric gridSize={[37, 37]}>
      <OuterTriangles patterns={[pattern1, pattern2, pattern3]} />

      {/* outer diamonds */}
      <Diamond diameter={37} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={35} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={33} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={31} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={29} cx={18} cy={18} stroke={colors.offWhite} />
      <Diamond diameter={27} cx={18} cy={18} stroke={colors.darkGray} />

      <InnerTriangles />

      {/* The Star */}
      <Star width={19} color={colors.orange} center={[18, 18]} />
      {/* Inner Diamond */}
      <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
      {/* Inner squares */}
      <Square width={3} x={17} y={17} stroke={colors.yellow} />
      <Single x={18} y={18} stroke={colors.gray} />

      {/* West Diamond */}
      <Diamond
        diameter={5}
        cx={7}
        cy={18}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={7} y={18} fill={colors.yellow} />
      {/* East Diamond */}
      <Diamond
        diameter={5}
        cx={29}
        cy={18}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={29} y={18} fill={colors.yellow} />

      {/* North Diamond */}
      <Diamond
        diameter={5}
        cx={18}
        cy={7}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={18} y={7} fill={colors.yellow} />

      {/* South Diamond */}
      <Diamond
        diameter={5}
        cx={18}
        cy={29}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={18} y={29} fill={colors.yellow} />
    </Fabric>
  );
}
