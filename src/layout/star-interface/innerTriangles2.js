import * as React from "react";
import * as Tone from "tone";
import { synthNode } from "../../app-context";
import { IsoTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";
import { defaultFMSettings } from "../../tone/synth-defaults";

const neQuadrantSynth = new Tone.FMSynth(defaultFMSettings).connect(synthNode);
const seQuadrantSynth = new Tone.FMSynth({
  ...defaultFMSettings,
  volume: 0
}).connect(synthNode);
const swQuadrantSynth = new Tone.FMSynth(defaultFMSettings).connect(synthNode);
const nwQuadrantSynth = new Tone.FMSynth(defaultFMSettings).connect(synthNode);

const patternNW = new Tone.Pattern(
  function (time, note) {
    nwQuadrantSynth.triggerAttackRelease(note, "16n", time);
  },
  ["D4", "F4", "D4"],
  "up"
);

const patternNE = new Tone.Pattern(
  function (time, note) {
    neQuadrantSynth.triggerAttackRelease(note, "16n", time);
  },
  ["D4", "E4", "Eb4", "E4", "D4"],
  "up"
);

const patternSE = new Tone.Pattern(
  function (time, note) {
    seQuadrantSynth.triggerAttackRelease(note, "16n", time);
  },
  ["D2"],
  "up"
);

const patternSW = new Tone.Pattern(
  function (time, note) {
    swQuadrantSynth.triggerAttackRelease(note, "16n", time);
  },
  ["D4", "Eb4", "D4", "Eb4", "D4", "Eb4", "D4"],
  "down"
);

export default function InnerTriangles() {
  const [selectedNW, setSelectedNW] = React.useState(false);
  const [selectedNE, setSelectedNE] = React.useState(false);
  const [selectedSE, setSelectedSE] = React.useState(false);
  const [selectedSW, setSelectedSW] = React.useState(false);

  React.useEffect(() => {
    if (selectedNW) {
      patternNW.start(0);
    } else {
      patternNW.stop(0);
    }
    return () => patternNW.stop(0);
  }, [selectedNW]);

  React.useEffect(() => {
    if (selectedNE) {
      patternNE.start(0);
    } else {
      patternNE.stop(0);
    }
    return () => patternNE.stop(0);
  }, [selectedNE]);

  React.useEffect(() => {
    if (selectedSE) {
      patternSE.start(0);
    } else {
      patternSE.stop(0);
    }
    return () => patternSE.stop(0);
  }, [selectedSE]);

  React.useEffect(() => {
    if (selectedSW) {
      patternSW.start(0);
    } else {
      patternSW.stop(0);
    }
    return () => patternSW.stop(0);
  }, [selectedSW]);

  return (
    <g>
      <g>
        <IsoTriangle
          orientation="north"
          size={9}
          fill={colors.red}
          x={8}
          y={13}
          selected={selectedNW}
          setSelected={setSelectedNW}
        />
        <IsoTriangle
          orientation="west"
          size={9}
          fill={colors.red}
          x={13}
          y={8}
          selected={selectedNW}
          setSelected={setSelectedNW}
        />
      </g>
      <g>
        <IsoTriangle
          orientation="east"
          size={9}
          fill={colors.red}
          x={19}
          y={8}
          selected={selectedNE}
          setSelected={setSelectedNE}
        />
        <IsoTriangle
          orientation="north"
          size={9}
          fill={colors.red}
          x={20}
          y={13}
          selected={selectedNE}
          setSelected={setSelectedNE}
        />
      </g>
      <g>
        <IsoTriangle
          orientation="south"
          size={9}
          fill={colors.red}
          x={8}
          y={19}
          selected={selectedSW}
          setSelected={setSelectedSW}
        />
        <IsoTriangle
          orientation="west"
          size={9}
          fill={colors.red}
          x={13}
          y={20}
          selected={selectedSW}
          setSelected={setSelectedSW}
        />
      </g>
      <g>
        <IsoTriangle
          orientation="east"
          size={9}
          fill={colors.red}
          x={19}
          y={20}
          selected={selectedSE}
          setSelected={setSelectedSE}
        />
        <IsoTriangle
          orientation="south"
          size={9}
          fill={colors.red}
          x={20}
          y={19}
          selected={selectedSE}
          setSelected={setSelectedSE}
        />
      </g>
    </g>
  );
}
