import * as Tone from "tone";
export const synth = new Tone.PolySynth({
  maxPolyphony: 32,
  envelope: {
    attack: 0.01,
    sustain: 1,
    decay: 0.3,
    release: 0.8
  },
  volume: -10
}).toDestination();

export function synthTone() {
  synth.set({ detune: -1200 });
  //pluckSynth = new Tone.PluckSynth({
  //volume: 0,
  //}).toMaster();

  synth.triggerAttackRelease(["128"], 0.001, 0.2);

  synth.triggerAttackRelease(["256"], 0.001, 0.3);

  synth.triggerAttackRelease(["384"], 0.001, 0.4);
  synth.triggerAttackRelease(["512"], 0.001, 0.5);
  synth.triggerAttackRelease(["640"], 0.001, 0.6);
  synth.triggerAttackRelease(["768"], 0.001, 0.7);

  synth.triggerAttackRelease(["128", "256", "384", "512"], [4, 3, 2, 1], "+1");
  //pluckSynth.triggerAttackRelease('f6', '16n', //0.4);
}
