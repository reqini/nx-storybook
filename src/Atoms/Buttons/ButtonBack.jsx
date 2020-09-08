import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import backButton from "../Icons/App/net_back_icon.svg";
import backButtonFocus from "../Icons/App/net_back_icon_focus.svg";

const useStyles = makeStyles(() => ({
  containerBack: {
    width: 80,
  },
  back: ({ hidden }) => ({
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 1,
    width: 50,
    height: 50,
    visibility: hidden ? "hidden" : null,
    backgroundSize: 50,
    backgroundImage: `url(${backButton})`,
    backgroundRepeat: "no-repeat",
    "&:focus": {
      backgroundImage: `url(${backButtonFocus})`,
      backgroundSize: 55,
      height: 55,
      width: 55,
    },
  }),
}));

const ButtonBack = ({ onClick, snDown = null, hidden = false }) => {
  const classes = useStyles({ hidden });

  return (
    <div className={classes.containerBack}>
      <div
        className={`${classes.back} focusable`}
        tabIndex="0"
        data-sn-down={snDown}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      />
    </div>
  );
};

export default React.memo(ButtonBack);
