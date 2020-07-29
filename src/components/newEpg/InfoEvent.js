import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  info: () => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    zIndex: 999,
    position: "absolute",
  }),
  title: {
    fontSize: 20,
    fontWeight: 500,
    width: "100%",
  },
  time: {
    fontSize: 20,
    width: "100%",
  },
}));

const InfoEvent = ({
  eventHeight = 100,
  paddingRow = 3,
  paddingVertical = true,
  showInfo,
  scrollTop,
  scrollLeft,
  miniEpg,
}) => {
  const classes = useStyles();

  const style01 = React.useMemo(
    () => ({
      height: eventHeight - (paddingVertical ? paddingRow : 0),
      color: showInfo.canPlay ? "#ffffff" : "#7f7f7f",
      backgroundColor: showInfo.canPlay ? "#4171B9" : "#223E67",
      // tengo que sumar lo que ocupa el div del canal y el div del horario y botones del header
      top: showInfo.top - scrollTop + (miniEpg ? 64 : 68),
      left: showInfo.left - scrollLeft + 151,
    }),
    [showInfo, miniEpg, scrollTop, scrollLeft]
  );

  return (
    <div className={classes.info} style={style01}>
      <Typography noWrap className={classes.title} variant="h2">
        {showInfo.title}
      </Typography>
      <Typography className={classes.time} variant="body2">
        {showInfo.time}
      </Typography>
    </div>
  );
};

export default React.memo(InfoEvent);
