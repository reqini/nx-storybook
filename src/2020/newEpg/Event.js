import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  event: ({ width, background, height, eventHeight }) => ({
    boxSizing: "border-box",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    marginRight: 1,
    height: height || eventHeight,
    background: `${theme.palette.epg.main}`,
    "&:focus": {
      background: `${background || theme.palette.epg.focus}!important`,
    },
    "&:hover": {
      background: `${background || theme.palette.epg.focus}!important`,
    },
  }),
  eventActive: () => ({
    background: `${theme.palette.epg.active}!important`,
  }),
  eventActiveBlock: () => ({
    background: `${theme.palette.epg.activeBlock}!important`,
  }),
  eventBlock: () => ({
    color: "#7f7f7f!important",
    "&:focus": {
      background: `${theme.palette.epg.focusBlock}!important`,
    },
    "&:hover": {
      background: `${theme.palette.epg.focusBlock}!important`,
    },
  }),
}));

const Event = ({
  style,
  index,
  paddingRow = 3,
  eventHeight,
  setShowInfo,
  changeChannel,
  event,
  current,
  onFocus = () => {},
  onKeyDown = () => {},
}) => {
  const classes = useStyles({ eventHeight });
  let keysProps = {};

  // cargar imagen full en paralelo
  const imgObj = new Image();
  imgObj.src = event.image;

  if (current) {
    let prevCh = parseInt(event.channel.index) - 1;
    let nextCh = parseInt(event.channel.index) + 1;

    keysProps = {
      "data-sn-up": `[data-ch-index="${prevCh}"][data-current="true"]`,
      "data-sn-down": `[data-ch-index="${nextCh}"][data-current="true"]`,
    };
  }

  if (event.last) {
    keysProps = { ...keysProps, "data-sn-right": "" };
  }

  const clickHandler = React.useCallback(() => {
    setShowInfo({ show: false });
    changeChannel({
      channel: event.channel,
      event: { ...event, current },
    });
  }, []);

  const styleFinal = React.useMemo(() => {
    const { height, width } = style;
    return {
      ...style,
      padding: paddingRow - 7,
      height: height - paddingRow,
      width: width - paddingRow,
    };
  }, []);

  const style01 = React.useMemo(
    () => ({ fontSize: 20, fontWeight: 500, width: "100%" }),
    []
  );

  const style02 = React.useMemo(() => ({ fontSize: 20 }), []);

  return (
    <div
      id={`event-number-${index}`}
      tabIndex={0}
      data-ch-index={event.channel.index}
      data-current={current}
      className={`focusable ${classes.event} ${
        current
          ? !event.channel.canPlay
            ? classes.eventActiveBlock
            : classes.eventActive
          : ""
      }
      ${!event.channel.canPlay && classes.eventBlock}
      `}
      style={styleFinal}
      onClick={clickHandler}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      {...keysProps}
    >
      <Typography noWrap style={style01} variant="h2">
        {event.title}
      </Typography>
      <Typography style={style02} noWrap variant="body2">
        {event.time}
      </Typography>
    </div>
  );
};

export default React.memo(Event);
