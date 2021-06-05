import React from "react";
import * as Tone from "tone";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import { colors } from "../theme/colors";
import OuterTriangles from "./star-interface/OuterTriangles";
import InnerTriangles from "./star-interface/InnerTriangles";
import OuterDiamonds from "./star-interface/OuterDiamonds";
import CornerStars from "./star-interface/CornerStars";
import CenterStar from "./star-interface/CenterStar";
import { IconButton, makeStyles } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import InfoDialog from "./star-interface/InfoDialog";

const useStyles = makeStyles({
  labelWrapper: {
    display: "flex",
    justifyContent: "space-between"
  },
  label: {
    margin: 0
  },
  infoButton: {
    position: "fixed",
    top: 5,
    right: 5,
    color: "#333"
  }
});

export const StarContext = React.createContext({
  pitchShiftPitch: 0,
  setPitchShiftPitch: () => {},
  delayMute: true,
  setDelayMute: () => {},
  reverbMute: true,
  setReverbMute: () => {},
  volumeLevel: -6,
  setVolumeLevel: () => {},
  synthChannel: {},
  diamondChannel: {}
});

export default function StarDiamond() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const volume = React.useMemo(() => new Tone.Volume(-6).toDestination(), []);
  const pitchShift = React.useMemo(
    () => new Tone.PitchShift().connect(volume),
    []
  );

  const delayGain = React.useMemo(
    () => new Tone.Gain(0).connect(pitchShift),
    []
  );
  const delay = React.useMemo(
    () =>
      new Tone.FeedbackDelay({
        maxDelay: 2,
        feedback: 0.5,
        wet: 0.5
      }).connect(delayGain),
    []
  );

  const reverbGain = React.useMemo(
    () => new Tone.Gain(0).connect(pitchShift),
    []
  );
  const reverb = React.useMemo(
    () => new Tone.Reverb({ decay: 4, wet: 1 }).connect(reverbGain),
    []
  );

  const synthChannel = React.useMemo(
    () => new Tone.Channel({ volume: 0 }).fan(delay, reverb, pitchShift),
    []
  );
  const diamondChannel = React.useMemo(
    () => new Tone.Channel({ volume: 0 }).fan(reverb, pitchShift),
    []
  );

  const [pitchShiftPitch, setPitchShiftPitch] = React.useState(0);
  const [delayMute, setDelayMute] = React.useState(true);
  const [reverbMute, setReverbMute] = React.useState(true);
  const [volumeLevel, setVolumeLevel] = React.useState(-6);

  React.useEffect(() => {
    Tone.Transport.bpm.value = 160;
    return () => {
      synthChannel.dispose();
      diamondChannel.dispose();
      pitchShift.dispose();
      delay.dispose();
      reverb.dispose();
      volume.dispose();
      delayGain.dispose();
      reverbGain.dispose();
    };
  }, []);

  React.useEffect(() => {
    pitchShift.pitch = pitchShiftPitch;
  }, [pitchShiftPitch]);

  React.useEffect(() => {
    delayGain.gain.rampTo(delayMute ? 0 : 0.9, 1);
  }, [delayMute]);

  React.useEffect(() => {
    reverbGain.gain.rampTo(reverbMute ? 0 : 0.9, 0.5);
  }, [reverbMute]);

  React.useEffect(() => {
    volume.volume.rampTo(volumeLevel, 0.5);
  }, [volumeLevel]);

  return (
    <>
      <IconButton
        size="medium"
        fontSize="large"
        onClick={() => setOpen(true)}
        className={classes.infoButton}
      >
        <Info />
      </IconButton>
      <InfoDialog open={open} setOpen={setOpen} />
      <div className={classes.labelWrapper}>
        <p className={classes.label}>Tempo -</p>
        <p className={classes.label}>Tempo +</p>
      </div>
      <StarContext.Provider
        value={{
          pitchShiftPitch,
          setPitchShiftPitch,
          delayMute,
          setDelayMute,
          reverbMute,
          setReverbMute,
          volumeLevel,
          setVolumeLevel,
          synthChannel,
          diamondChannel
        }}
      >
        <Fabric gridSize={[37, 37]}>
          <OuterTriangles />
          <OuterDiamonds />
          <InnerTriangles />
          <CenterStar />
          <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
          <CornerStars />
        </Fabric>
      </StarContext.Provider>
      <div className={classes.labelWrapper}>
        <p className={classes.label}>Volume -</p>
        <p className={classes.label}>Volume +</p>
      </div>
    </>
  );
}
