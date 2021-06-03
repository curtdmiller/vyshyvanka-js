import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles
} from "@material-ui/core";
import square from "../../assets/center-square.png";
import effectDiamond from "../../assets/effect-diamond.png";
import greenDiamond from "../../assets/green-diamond.png";
import outerTriangle from "../../assets/outer-triangle.png";
import star from "../../assets/star.png";

const useStyles = makeStyles({
  title: {
    "& .MuiTypography-root": {
      fontFamily: "neuzeit-grotesk, sans-serif"
    }
  },
  content: {
    fontFamily: "neuzeit-grotesk, sans-serif"
  },
  mediaText: {
    textAlign: "center",
    maxWidth: "25em",
    margin: "0 auto",
    borderTop: "1px solid #ddd",
    padding: 10,
    "& img": {
      maxWidth: 80
    }
  }
});

export default function InfoDialog({ open, setOpen }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle className={classes.title}>
        How to Use the Interface
      </DialogTitle>
      <DialogContent className={classes.content}>
        <p>
          The shapes that make up this embroidery pattern can also be used as an
          interface to control sounds generated in the browser. To interact with
          the interface, select shapes within the image by clicking on a square
          within the shape. See below for details.
        </p>
        <div className={classes.mediaText}>
          <img src={star} />
          <p>
            Selecting shapes within the inner star activates a variety of
            possible synth patterns. Patterns can be played simultaneously by
            seleting multiple shapes
          </p>
        </div>
        <div className={classes.mediaText}>
          <img src={effectDiamond} />
          <p>
            Smaller stars on each corner of the central star control effects:
            delay, reverb, and pitch shift.
          </p>
        </div>
        <div className={classes.mediaText}>
          <img src={square} />
          <p>
            To reset all effects, select the yellow square at the center of the
            interface.
          </p>
        </div>
        <div className={classes.mediaText}>
          <img src={greenDiamond} />
          <p>
            The outer green diamond controls a separate synth sequence with its
            own effects.
          </p>
        </div>
        <div className={classes.mediaText}>
          <img src={outerTriangle} />
          <p>
            The four outer triangles control global parameters: volume and
            tempo.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
