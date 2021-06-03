import React from "react";
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

export default function StarDiamond() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
      <Fabric gridSize={[37, 37]}>
        <OuterTriangles />
        <OuterDiamonds />
        <InnerTriangles />
        <CenterStar />
        <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
        <CornerStars />
      </Fabric>
      <div className={classes.labelWrapper}>
        <p className={classes.label}>Volume -</p>
        <p className={classes.label}>Volume +</p>
      </div>
    </>
  );
}
