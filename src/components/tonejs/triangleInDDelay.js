const pitchShift = new Tone.PitchShift(5).toMaster();
const delay = new Tone.FeedbackDelay({
  maxDelay: 2,
  feedback: 0.8
  //wet: 0.2
}).toMaster();
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
const synthB = new Tone.AMSynth({ portamento: 0.05 }).connect(delay);
const synthC = new Tone.Synth({ portamento: 0.05 }).connect(delay);

var pattern1 = new Tone.Pattern(
  function (time, note) {
    synthA.triggerAttackRelease(note, 0.1);
  },
  ["D4", "F4", "D4"],
  "up"
);
pattern1.start(0).stop(3);

var pattern2 = new Tone.Pattern(
  function (time, note) {
    synthA.triggerAttackRelease(note, 0.1);
  },
  ["D4", "E4", "Eb4", "E4", "D4"],
  "up"
);
pattern2.start(3).stop(10);

var pattern3 = new Tone.Pattern(
  function (time, note) {
    synthA.triggerAttackRelease(note, 0.1);
  },
  ["D4", "Eb4", "D4", "Eb4", "D4", "Eb4", "D4"],
  "down"
);
pattern3.start(10).stop(15);

Tone.Transport.start(1);
Tone.Transport.stop(3);
Tone.Transport.start(3);
Tone.Transport.stop(10);
Tone.Transport.start(10);
Tone.Transport.start(15);
Tone.Transport.bpm.value = 160;
