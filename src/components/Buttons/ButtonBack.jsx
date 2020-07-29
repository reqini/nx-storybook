import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  containerBack: {
    width: 80,
  },
  back: () => ({
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 1,
    width: 50,
    height: 50,
    backgroundSize: 50,
    backgroundImage: `url(${require("../Icons/App/net_back_icon.png")})`,
    backgroundRepeat: "no-repeat",
    "&:focus": {
      backgroundImage: `url(${require("../Icons/App/net_back_icon_focus.png")})`,
      backgroundSize: 55,
      height: 55,
      width: 55,
    },
  }),
}));

const ButtonBack = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerBack}>
      <div
        className={`${classes.back} focusable`}
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      />
    </div>
  );
};

export default ButtonBack;
