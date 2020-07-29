import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const defaultImage = require("./images/default-image.svg");

const useStyles = makeStyles((theme) => ({
  containerCard: ({ height, width, minWidth }) => ({
    minHeight: height + height * 0.13,
    minWidth: width + (minWidth || 2) + width * 0.06,
    display: "flex",
    alignItems: "center",
  }),
  landscape: ({
    width,
    height,
    bgSize,
    borderRadius,
    image,
    bgSizeFocus,
    border,
    withContent,
    notDefaultImg,
    minWidth,
    padding,
    marginFoco,
  }) => ({
    backgroundImage: `url(${image})`,
    position: "relative",
    //margin: height * 0.06,
    margin: marginFoco,
    backgroundSize: bgSize || 230,
    padding: padding ? 10 : null,
    //border: border ? `1px solid ${theme.palette.primary.main}` : null,
    borderRadius: borderRadius || 12,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    //boxSizing: "border-box",
    height: height || 136,
    width: width || 230,
    display: "flex",
    overflow: "hidden",
    justifyContent: withContent ? "flex-start" : "flex-end",
    flexDirection: withContent ? "column" : "row",
    alignItems: "flex-start",

    "&::before": {
      content: `''`,
      position: "absolute",
      zIndex: -1,
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      background: theme.palette.optional.main,
      backgroundImage: `url(${notDefaultImg || defaultImage})`,
      backgroundSize: 80,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    "&:focus": {
      //width: width + width * 0.06,
      //height: height + height * 0.13,
      //backgroundSize: bgSizeFocus || "cover",
      //boxShadow: "inset 0 0px 8px 2px rgba(0, 0, 0, .3)",
      boxShadow: "0 4px 8px 2px rgba(0, 0, 0, .3)",
      border: border ? `4px solid white` : null,
      margin: 0,
    },
  }),
  backgroundOpacity: () => ({
    background: "rgba(0, 0, 0, 0.7)",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
  }),
  category: ({ bgSizeFocus }) => ({
    height: 100,
    width: 190,
    marginRight: 10,

    "&:focus": {
      backgroundSize: bgSizeFocus || "cover",
      width: 190 + 190 * 0.11,
      height: 100 + 100 * 0.14,
      margin: 0,
      marginTop: 2,
    },
  }),
  paper: {
    background: "transparent",
  },
  chip: {
    borderRadius: "12px",
    height: 25,
    lineHeight: "20px",
    fontSize: 20,
    textTransform: "lowercase",
    background: theme.palette.secondary.main,
    padding: 0,
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.5)",

    "& span": {
      margin: 0,
    },
  },
  typography: ({ width }) => ({
    color: "white",
    marginTop: 10,
    marginLeft: 15,
    width: width || 290,
  }),
}));

const CardLandscape = ({
  marginFoco = 4,
  minWidth,
  padding = null,
  notDefaultImg = null,
  isSerie = false,
  novo = false,
  height = 130,
  width = 250,
  bgSize,
  bgSizeFocus,
  borderRadius,
  title = false,
  image,
  children,
  focusHandler,
  data = {},
  clickHandler,
  clickHandlerNew,
  history,
  border = true,
  match,
  sendToPlay,
  scrollToTop = false,
  opacity = null,
  isFocusable,
  isLast = false,
  isFirst = false,
  indexRibbon,
  withContent = false,
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  focusHandlerDown = () => {},
}) => {
  const classes = useStyles({
    withContent,
    width,
    height,
    bgSize,
    borderRadius,
    image,
    bgSizeFocus,
    border,
    minWidth,
    notDefaultImg,
    padding,
    marginFoco,
  });
  const [foco, setFoco] = useState(false);

  // cargar imagen full en paralelo
  useEffect(() => {
    const imgObj = new Image();
    imgObj.src = data.imageFull;
  }, []);
  //console.log("RENDER CARD SIMPLE")
  return (
    <div
      className={data.href ? null : classes.containerCard}
      style={isSerie ? { flexDirection: "column" } : null}
    >
      <div
        id={id}
        className={`${classes.landscape} ${isFocusable ? "focusable" : ""} ${
          foco ? "active" : ""
        } ${data.href && !data.provider ? classes.category : ""}`}
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault();

          if (data.sendToPlay) {
            sendToPlay(data.group_id);
          } else if (clickHandler) {
            return clickHandler();
          } else if (clickHandlerNew) {
            return clickHandlerNew(data);
          } else {
            history.push({
              pathname: data.href || `/vcard/${data.group_id}`,
              state: { menuSelect: match.url },
            });
          }
        }}
        onFocus={(e) => {
          if (scrollToTop) {
            let item =
              e.currentTarget.parentNode.parentNode.parentNode.parentNode;

            if (indexRibbon == 0 && isSerie) {
              item =
                e.currentTarget.parentNode.parentNode.parentNode.parentNode
                  .parentNode;
            }

            item.scrollIntoView(true);
          }

          // setFoco(true);
          focusHandler(data);
        }}
        onKeyUp={(e) => {
          focusHandler(data);
        }}
        onKeyDown={(e) => {
          focusHandlerDown(e);
        }}
        // data-sn-left={index === 0 ? "@nav_down" : null}
        data-sn-up={snUp}
        data-sn-down={snDown}
        data-sn-right={isLast ? "" : null}
        data-sn-left={isFirst ? (snLeft !== null ? snLeft : "@nav_down") : null}
      >
        <Paper elevation={0} className={classes.paper}>
          {novo && <Chip label="NOVO" className={classes.chip} />}
        </Paper>
        {opacity ? <div className={classes.backgroundOpacity} /> : null}
        {children}
      </div>
      {isSerie && (
        <Typography className={classes.typography} variant="body1" noWrap>
          {title}
        </Typography>
      )}
    </div>
  );
};
export default React.memo(withRouter(CardLandscape));
