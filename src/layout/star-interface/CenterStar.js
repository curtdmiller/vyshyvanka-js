import React from "react";
import * as Tone from "tone";
import Line from "../../components/shapes/Line";
import { colors } from "../../theme/colors";
import { defaultMonoSettings } from "../../tone/synth-defaults";
import { StarContext } from "../star-diamond";

export default function CenterStar() {
  return (
    <g>
      <Horizontal />
      <Vertical />
      <Descending />
      <Ascending />
    </g>
  );
}

function Vertical() {
  const [selected, setSelected] = React.useState(false);
  const { synthChannel } = React.useContext(StarContext);

  const synth = React.useMemo(
    () =>
      new Tone.MonoSynth({
        ...defaultMonoSettings,
        volume: -15
      }).connect(synthChannel),
    []
  );

  const pattern = React.useMemo(
    () =>
      new Tone.Pattern({
        callback: function (time, note) {
          synth.triggerAttackRelease(note, 0.8, time);
        },
        values: ["D4", "F4", "A4", "458"],
        pattern: "random",
        playbackRate: 0.25
      }),
    []
  );

  React.useEffect(() => {
    return () => {
      synth.dispose();
      pattern.dispose();
    };
  }, []);

  React.useEffect(() => {
    selected ? pattern.start(0) : pattern.stop(0);
    return () => pattern.stop(0);
  }, [selected]);

  return (
    <Line
      length={17}
      angle="vertical"
      color={colors.orange}
      x={18}
      y={10}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function Horizontal() {
  const [selected, setSelected] = React.useState(false);
  const { synthChannel } = React.useContext(StarContext);

  const synth = React.useMemo(
    () =>
      new Tone.MonoSynth({
        ...defaultMonoSettings,
        volume: -15
      }).connect(synthChannel),
    []
  );

  const pattern = React.useMemo(
    () =>
      new Tone.Pattern({
        callback: function (time, note) {
          synth.triggerAttackRelease(note, 0.8, time);
        },
        values: ["D4", "F4", "A4", "458"],
        pattern: "random",
        playbackRate: 0.25
      }),
    []
  );

  React.useEffect(() => {
    return () => {
      synth.dispose();
      pattern.dispose();
    };
  }, []);

  React.useEffect(() => {
    selected ? pattern.start(0) : pattern.stop(0);
    return () => pattern.stop(0);
  }, [selected]);

  return (
    <Line
      length={17}
      angle="horizontal"
      color={colors.orange}
      x={10}
      y={18}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function Ascending() {
  const [selected, setSelected] = React.useState(false);
  const { synthChannel } = React.useContext(StarContext);

  const synth = React.useMemo(
    () =>
      new Tone.MonoSynth({
        ...defaultMonoSettings,
        volume: -6
      }).connect(synthChannel),
    []
  );

  const pattern = React.useMemo(
    () =>
      new Tone.Pattern(
        function (time, note) {
          synth.triggerAttackRelease(note, 0.1, time);
        },
        ["D4", "F4", "G4", "A4", "458", "C4"],
        "up"
      ),
    []
  );

  React.useEffect(() => {
    return () => {
      synth.dispose();
      pattern.dispose();
    };
  }, []);

  React.useEffect(() => {
    selected ? pattern.start(0) : pattern.stop(0);
    return () => pattern.stop(0);
  }, [selected]);

  return (
    <Line
      length={11}
      angle="diagonal-up"
      color={colors.orange}
      x={13}
      y={13}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function Descending() {
  const [selected, setSelected] = React.useState(false);
  const { synthChannel } = React.useContext(StarContext);

  const synth = React.useMemo(
    () =>
      new Tone.MonoSynth({
        ...defaultMonoSettings,
        volume: -6
      }).connect(synthChannel),
    []
  );

  const pattern = React.useMemo(
    () =>
      new Tone.Pattern(
        function (time, note) {
          synth.triggerAttackRelease(note, 0.1, time);
        },
        ["C4", "D4", "E4", "G4", "A4", "458"],
        "down"
      ),
    []
  );

  React.useEffect(() => {
    return () => {
      synth.dispose();
      pattern.dispose();
    };
  }, []);

  React.useEffect(() => {
    selected ? pattern.start(0) : pattern.stop(0);
    return () => pattern.stop(0);
  }, [selected]);

  return (
    <Line
      length={11}
      angle="diagonal-down"
      color={colors.orange}
      x={13}
      y={13}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
