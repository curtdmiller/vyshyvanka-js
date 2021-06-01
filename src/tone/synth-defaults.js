export const defaultFMSettings = {
  oscillator: {
    type: "sine"
  },
  modulationIndex: 20,
  modulation: {
    type: "sawtooth"
  },
  envelope: {
    attack: 0.01,
    decay: 0.2,
    sustain: 0.2,
    release: 2,
    attackCurve: "sine"
  },
  volume: -9
};
export const defaultMonoSettings = {
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.001, decay: 0.1, release: 0.5, sustain: 0.5 },
  filter: {
    Q: 1,
    rolloff: -12,
    type: "lowpass"
  },
  filterEnvelope: {
    attack: 0.4,
    baseFrequency: 150,
    decay: 0.2,
    exponent: 2,
    octaves: 3,
    release: 2,
    sustain: 0.5
  },
  volume: -12
};
