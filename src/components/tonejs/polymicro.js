//let pluckSynth;
let counter;
let loopBeat;
let synth;

function setup() {
  counter = 0;
  synth = new Tone.PolySynth({
    maxPolyphony: 32,
    envelope: {
      attack: 0.001,
      sustain: 0.2,
      decay: 0.2,
      release: 0.4
    },
    volume: 10
  }).toMaster();
  synth.set({ detune: -1200 });
  //pluckSynth = new Tone.PluckSynth().toMaster();

  loopBeat = new Tone.Loop(song, "16n");
  Tone.Transport.bpm.value = 140;
  Tone.Transport.start();
  loopBeat.start(0);
}
function song(time) {
  if (counter % 7 === 0) {
    synth.triggerAttackRelease(["261"], "16n", time, 0.2);
  }
  if (counter === 0) {
    synth.triggerAttackRelease(["299"], "16n", time, 0.5);
  }
  if (counter === 10) {
    synth.triggerAttackRelease(["349.1"], "16n", time, 0.4);
  }
  if (counter === 9) {
    synth.triggerAttackRelease(["449"], "16n", time, 0.3);
  }
  if (counter === 6) {
    synth.triggerAttackRelease(["520"], "16n", time, 0.3);
  }
  if (counter === 2) {
    synth.triggerAttackRelease(["587"], "16n", time, 0.3);
  }
  if (counter === 2) {
    synth.triggerAttackRelease(["440"], "16n", time, 0.3);
  }
  //synth.triggerAttackRelease(["256", "384", "512", "640"],'16', time, 0.4);
  //pluckSynth.triggerAttackRelease('120', '16n', 1);
  counter = (counter + 1) % 14;
}
