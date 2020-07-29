import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  titleVcard: ({maxWidth, noWrap}) => ({
    margin: 0,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 800,
    overflow: noWrap ? 'hidden' : null,
    maxWidth: maxWidth || '100%',
    whiteSpace: noWrap ? 'nowrap' : null,
    textOverflow: noWrap ? 'ellipsis' : null,
  }),
  buttomBack: {
    width: 50,
    height: 50,
    marginBottom: 5,
    backgroundSize: 50,
    backgroundImage: `url(${require("../Icons/App/net_back_icon.png")})`,
    backgroundRepeat: "no-repeat",

    "&:focus": {
      backgroundImage: `url(${require("../Icons/App/net_back_icon_focus.png")})`,
      backgroundSize: 55,
      marginBottom: 0,
      height: 55,
      width: 55
    },
  },
  contentTitle: ({position}) => ({
    display: 'flex', 
    flexDirection: 'column',
    top: 0,
    position: position || null
  })
}));

const TitleVcard = ({ title, onClose = null, position, maxWidth, noWrap = false }) => {

  const classes = useStyles({ title, onClose, position, maxWidth, noWrap });

  return (
    <div className={classes.contentTitle}>
      {onClose && 
      <div
        className={`${classes.buttomBack} focusable`} 
        tabIndex="0"
        onClick={(e) => {e.preventDefault(); onClose();}}
      />}
      <h4 className={classes.titleVcard}>
        {title}
      </h4>
    </div>
  );
}
export default React.memo(TitleVcard);