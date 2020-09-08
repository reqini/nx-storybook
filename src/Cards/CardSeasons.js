import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const defaultImage = require("./images/default-image.svg");

const useStyles = makeStyles((theme) => ({
  tagNetflex: {
    border: "1px solid white",
    padding: "0 5px",
    color: "white",
    margin: "5px",
    borderRadius: 2,
    lineHeight: "20px",
    fontSize: 15,
    height: 18.4,
    marginTop: 1,
  },

  containerCard: {
    display: "flex",
    marginTop: 4,
  },
  cardSeasons: ({
    width,
    height,
    bgSize,
    borderRadius,
    image,
    bgSizeFocus,
    border,
    withContent,
    notDefaultImg,
  }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    position: "relative",
    /* margin: height * 0.06, */
    margin: 4,
    backgroundSize: bgSize || 230,
    padding: 10,
    //border: border ? `1px solid transparent` : null,
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
      /* width: width + width * 0.06,
      height: height + height * 0.13, */
      //backgroundSize: bgSizeFocus || "cover",
      border: "4px solid white",
      boxShadow: "0 4px 8px 2px rgba(0, 0, 0, .3)",
      margin: 0,
    },
    /* "&:hover": {
      width: width + width * 0.06,
      height: height + height * 0.13,
      backgroundSize: bgSizeFocus || "cover",
      border: '4px solid white',
      boxShadow: "0 4px 8px 2px rgba(0, 0, 0, .3)",
      margin: 2,
    }, */
  }),
  contentDescrip: {
    width: 425 - 10,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",

    "& span": {
      /* padding: 0,
      margin: 0, */
      marginBottom: 0,
      // fontStyle: "italic",
    },

    "& h2": {
      padding: 0,
      margin: 0,
      textAlign: "left",
      fontSize: 20,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },

    "& p": {
      width: "100%",
      margin: 0,
      marginTop: 0,
      whiteSpace: "break-spaces",
      lineHeight: "27px",
      fontSize: 16,
      overflow: "hidden",
      maxHeight: 85,
    },
  },
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
  contentChildren: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
}));

const CardSeasons = ({
  isActive = false,
  notDefaultImg = null,
  isSerie = false,
  novo = false,
  durationSeason = null,
  numberSeason = null,
  height = 130,
  width = 250,
  bgSize,
  tags,
  description = null,
  bgSizeFocus,
  borderRadius,
  title = false,
  image,
  children,
  focusHandler,
  data = {},
  clickHandler,
  season,
  border = true,
  match,
  sendToPlay,
  scrollToTop = true,
  opacity = null,
  isFocusable,
  isLast = false,
  isFirst = false,
  indexRibbon,
  withContent = false,
  snUp = null,
  snDown = null,
  snLeft = null,
  snRight = null,
  dubbed = false,
  subbed = false,
}) => {
  const classes = useStyles({
    withContent,
    numberSeason,
    season,
    tags,
    durationSeason,
    description,
    width,
    height,
    bgSize,
    borderRadius,
    image,
    bgSizeFocus,
    border,
    notDefaultImg,
  });
  // cargar imagen full en paralelo
  useEffect(() => {
    const imgObj = new Image();
    imgObj.src = data.imageFull;
  }, []);

  return (
    <div className={classes.containerCard}>
      <div
        id={`episode-${parseInt(season, 10)}-${parseInt(data.episode, 10)}`}
        className={`${classes.cardSeasons} ${isFocusable ? "focusable" : ""} ${
          isActive ? "episodeActive" : ""
        } ${data.href && !data.provider ? classes.category : ""}`}
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault();

          if (data.sendToPlay) {
            sendToPlay(data.group_id);
          } else if (clickHandler) {
            return clickHandler();
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

          focusHandler(data);
        }}
        onKeyUp={(e) => {
          focusHandler(data);
        }}
        // data-sn-left={index === 0 ? "@nav_down" : null}
        data-sn-up={snUp}
        data-sn-down={snDown}
        data-sn-right={isLast ? (snRight !== null ? snRight : "") : snRight}
        data-sn-left={
          isFirst ? (snLeft !== null ? snLeft : "@nav_down") : snLeft
        }
      >
        <Paper elevation={0} className={classes.paper}>
          {novo && <Chip label="nova temporada" className={classes.chip} />}
        </Paper>
        {opacity ? <div className={classes.backgroundOpacity} /> : null}
        <div className={classes.contentChildren}>{children}</div>
      </div>
      <div className={classes.contentDescrip}>
        <h2>{`T${season}: E${numberSeason} - ${title}`}</h2>
        <p>
          <span>{`${durationSeason} `}</span>
          {dubbed && <span className={classes.tagNetflex}>Dub</span>}
          {subbed && <span className={classes.tagNetflex}>Leg</span>}
        </p>
        <p>{description && description}</p>
      </div>
    </div>
  );
};
export default React.memo(CardSeasons);
