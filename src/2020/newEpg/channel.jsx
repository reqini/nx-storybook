import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import SimpleImage from "../Image/SimpleImage";
import defaultImage from "./images/net_epg_candado_2.svg";

const useStyles = makeStyles((theme) => ({
  channelNumber: {
    fontSize: 18,
    fontWeight: 500,
  },
  eventChannel: ({ width, background, height, eventHeight }) => ({
    position: "relative",
    boxSizing: "border-box",
    borderRight: "4px solid black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    width: width || 153,
    height: height || eventHeight,
    background: theme.palette.epg.main,
    color: "white",
    "&:focus": {
      background: `${theme.palette.epg.focus}!important`,
    },
    "&:hover": {
      background: `${theme.palette.epg.focus}!important`,
    },
  }),
  channelActive: () => ({
    background: `${theme.palette.epg.focus}!important`,
  }),
  channelActiveBlock: () => ({
    color: "#7f7f7f!important",
    background: `${theme.palette.epg.focusBlock}!important`,
  }),
  imageBlock: ({ imageBlock }) => ({
    position: "absolute",
    backgroundImage: `url(${imageBlock || defaultImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 25,
    height: 25,
    right: 5,
    top: 5,
  }),
}));

const rowChannel = ({
  paddingVertical = true,
  key,
  style,
  number,
  canPlay,
  image,
  paddingRow,
  active,
  eventHeight,
}) => {
  const classes = useStyles({ eventHeight });

  const styleImage = React.useMemo(
    () => ({
      opacity: !canPlay ? 0.5 : 1,
    }),
    [canPlay]
  );

  return (
    <div
      key={key}
      id={`channel-number-${number}`}
      className={`${classes.eventChannel} ${
        active
          ? !canPlay
            ? classes.channelActiveBlock
            : classes.channelActive
          : ""
      } ${!canPlay && classes.eventBlock}
      `}
      style={{
        padding: paddingRow,
        ...style,
        height: style.height - (paddingVertical ? paddingRow : 0),
        width: style.width - paddingRow,
      }}
    >
      {!canPlay && <div className={classes.imageBlock} />}
      <Typography className={classes.channelNumber} variant="body2">
        {number}
      </Typography>
      <SimpleImage image={image} height={60} style={styleImage} />
    </div>
  );
};

export default React.memo(rowChannel);
