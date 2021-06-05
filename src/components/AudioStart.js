import React from "react";
import * as Tone from "tone";
import { AppContext } from "../App";
import { IconButton, makeStyles } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
    display: ({ isAudioStarted }) => (isAudioStarted ? "none" : "flex"),
    justifyContent: "center",
    alignItems: "center"
  },
  startButton: {
    color: "rgba(255,255,255,1)",
    "&:hover": {
      color: "rgba(255,255,255,0.9)"
    },
    "& .MuiSvgIcon-root": {
      fontSize: "6em"
    }
  }
});

export default function AudioStartButton() {
  const { isAudioStarted, setIsAudioStarted } = React.useContext(AppContext);
  const classes = useStyles({ isAudioStarted });

  async function handleAudioStart() {
    if (!isAudioStarted) {
      await Tone.start();
      setIsAudioStarted(true);
    }
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleAudioStart} className={classes.startButton}>
        <PlayCircleOutline />
      </IconButton>
    </div>
  );
}
