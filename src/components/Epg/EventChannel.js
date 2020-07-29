import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SimpleImage from "../Image/SimpleImage";

const useStyles = makeStyles(theme => ({
  eventChannel: ({ width, background, height }) => ({
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: width || 153,
    height: height || 90,
    background: background || theme.palette.epg.main,
    color: "white",

    "&:focus": {
      background: background || theme.palette.epg.focus
    },
    "&:hover": {
      background: background || theme.palette.epg.focus
    }
  }),
  eventActive: () => ({
    background: theme.palette.epg.focus
  }),
  eventBlock: () => ({
    color: "silver!important",

    "&:focus": {
      background: `${theme.palette.epg.focusBlock}!important`
    },
    "&:hover": {
      background: theme.palette.epg.focusBlock
    }
  }),
  imageBlock: ({ imageBlock }) => ({
    position: "absolute",
    backgroundImage:
      `url(${imageBlock})` &&
      "url(https://cdn.pixabay.com/photo/2017/03/19/03/47/material-icon-2155441_960_720.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 25,
    height: 25,
    right: 5,
    top: 5
  }),
  eventBlockActive: {
    background: theme.palette.epg.activeBlock,
    color: "silver!important"
  },
  channel: {
    fontSize: 20,
    fontWeight: 500
  }
}));

const EventChannel = ({
  image,
  numberChannel,
  height,
  width,
  background,
  imageBlock = null,
  block = false,
  active = false
}) => {
  const classes = useStyles({
    numberChannel,
    height,
    width,
    background,
    block,
    active,
    imageBlock
  });

  console.log("jose render eventChannel");

  return (
    <div
    id={`channel-number-${numberChannel}`}
      className={`channelItem ${classes.eventChannel} ${active &&
        classes.eventActive} ${block && classes.eventBlock}`}
    >
      {block && <div className={classes.imageBlock} />}
      <Typography className={classes.channel} variant="body2">
        {numberChannel}
      </Typography>
      <SimpleImage
        image={image || "https://netb.tmsimg.com/assets/s10021_lw_h3_ab.png"}
        height={50}
      />
    </div>
  );
};

export default React.memo(EventChannel);
