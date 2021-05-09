import * as Tone from "tone";

let bassSynth;
let counter;
let amSynth;
let fmSynth;
let pluckSynth;

counter = 0;
pluckSynth = new Tone.PluckSynth().toDestination();
amSynth = new Tone.AMSynth({
  harmonicity: 1.04,
  detune: 0,
  oscillator: {
    type: "sine"
  }, //carrier
  envelope: {
    attack: 0.001,
    sustain: 1,
    decay: 0.1,
    release: 0.01
  },
  modulation: {
    type: "square"
  },
  modulationEnvelope: {
    attack: 0.001,
    decay: 0.1,
    sustain: 1,
    release: 0.5
  }
}).toDestination();
fmSynth = new Tone.FMSynth({
  harmonicity: 1.5,
  detune: 0,
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.001,
    sustain: 1,
    decay: 0.1,
    release: 0.01
  },
  modulation: {
    type: "sawtooth"
  },
  modulationEnvelope: {
    attack: 0.001,
    decay: 0.1,
    sustain: 1,
    release: 0.5
  }
}).toDestination();
bassSynth = new Tone.MembraneSynth().toDestination();

const cymbalSynth = new Tone.MetalSynth({
  envelope: {
    attack: 0.001,
    decay: 0.1,
    release: 0.01
  },
  harmonicity: 5.1,
  modulationIndex: 32,
  octaves: 0.5,
  resonance: 8000,
  frequency: 900
}).toDestination();
Tone.Transport.bpm.value = 130;

export function song(time) {
  if (counter % 4 === 0) {
    bassSynth.triggerAttackRelease("F#1", "8n", time, 1);
  }
  cymbalSynth.envelope.decay = 0.5;
  if (counter % 4 !== 1) {
    if (counter === 3 || counter === 12) {
      cymbalSynth.envelope.decay = 0.5;
    } else {
      cymbalSynth.envelope.decay = 0.01;
    }
    cymbalSynth.triggerAttackRelease("32n", time, 0.3);
  }
  if (counter === 0) {
    amSynth.triggerAttackRelease("a2", "16n", time, 1);
  }
  if (counter === 10) {
    amSynth.triggerAttackRelease("Bb2", "16n", time, 1);
  }
  if (counter === 0) {
    fmSynth.triggerAttackRelease("a2", "16n", time, 1);
  }
  if (counter === 10) {
    fmSynth.triggerAttackRelease("Bb2", "16n", time, 1);
  }
  if (counter === 0) {
    pluckSynth.triggerAttackRelease("b6", "16n", time, 0.4);
  } else {
    pluckSynth.triggerAttackRelease("G#6", "16n", time, 0.4);
  }
  counter = (counter + 1) % 16;
}
