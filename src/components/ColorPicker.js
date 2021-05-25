import * as React from "react";
import { IconButton } from "@material-ui/core";
import { Palette } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { AppContext } from "../app-context";
import { CompactPicker } from "react-color";
import { colors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 5,
    "& .MuiIconButton-root": {
      color: "#333"
    }
  }
});

const customColorOptions = [
  "#000000",
  colors.darkGray,
  colors.gray,
  colors.offWhite,
  "#FFFFFF",
  colors.darkRed,
  colors.red,
  colors.lightRed,
  colors.darkOrange,
  colors.orange,
  colors.lightOrange,
  colors.darkYellow,
  colors.yellow,
  colors.lightYellow,
  colors.darkGreen,
  colors.green,
  colors.lightGreen,
  colors.darkBlue,
  colors.blue,
  colors.lightBlue
];

export default function ColorPicker() {
  const classes = useStyles();
  const { cellSize, selectFill, setSelectFill } = React.useContext(AppContext);
  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);

  function handleColorChange(color) {
    setSelectFill(color.hex);
    setColorPickerOpen(false);
  }

  return (
    <div className={classes.root}>
      <div style={{ display: colorPickerOpen ? "block" : "none" }}>
        <CompactPicker
          color={selectFill}
          colors={customColorOptions}
          onChangeComplete={handleColorChange}
        />
      </div>
      <IconButton
        size="small"
        fontSize="large"
        onClick={() => setColorPickerOpen(!colorPickerOpen)}
      >
        <Palette />
      </IconButton>
    </div>
  );
}
