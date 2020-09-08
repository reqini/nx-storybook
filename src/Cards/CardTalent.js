import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const imageDefault = require("./images/placeholder-actor.svg");

const useStyles = makeStyles((theme) => ({
  containerCardTalent: ({width}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width || 100,
    marginRight: 15,
    minHeight: 160,
  }),
  contentDefaultTalent: ({ width }) => ({
    backgroundImage: `url(${imageDefault})`,
    position: "relative",
    backgroundSize: width || 100,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }),
  avatar: ({ width, height, bgSize, borderRadius, image }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    backgroundSize: bgSize || "cover",
    backgroundPosition: "center",
    borderRadius: borderRadius || "50%",
    height: height || 110,
    width: width || 110,
    fontSize: 45,
    fontWeight: 500,
    letterSpacing: 0,
    background: "#212224",
    color: "#c0c0c0",
    "&:focus": {
      border: `4px solid white`,
      margin: 0,
    },
  }),
  cardTalent: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image})`,
    position: "relative",
    margin: 4,
    backgroundSize: bgSize || "cover",
    backgroundPosition: "center",
    borderRadius: borderRadius || "50%",
    height: height || 110,
    width: width || 110,

    "&:hover": {
      border: `4px solid white`,
      margin: 0,
    },
    "&:focus": {
      border: `4px solid white`,
      margin: 0,
    },
  }),
  infoCard: {
    textAlign: "center",
  },
  typographyTitle: ({ width }) => ({
    color: "white",
    fontSize: 18,
    textAlign: "center",
    width: width,
    marginTop: 5,
  }),
  typographyRol: ({ width }) => ({
    color: "white",
    fontSize: 12,
    textAlign: "center",
    width: width,
  }),
}));

const CardTalent = ({
  width,
  height,
  bgSize,
  borderRadius,
  title = "",
  image,
  children,
  infoTalent = false,
  focusHandler,
  data,
  clickHandler,
  sendToPlay,
  isFocusable,
  isLast = false,
  isFirst = false,
  scrollToTop = true,
  focusUp = null,
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  focusHandlerDown = () => {},
}) => {
  const classes = useStyles({ width, height, bgSize, borderRadius, image });

  const aTitle = title.split(" ") || [];

  const name = aTitle.slice(0, aTitle.length - 1).join(" ");
  const lastName = aTitle.slice(aTitle.length - 1, aTitle.length);

  const nameToInitials = useCallback((name) => {
    if (!name) {
      return "";
    }

    name = name + "";

    return name
      .split(" ")
      .map((item) => item.charAt(0))
      .join("")
      .toUpperCase();
  }, []);

  return (
    <div className={classes.containerCardTalent}>
      <div className={classes.contentDefaultTalent}>
        <div
          id={id}
          className={`${image ? classes.cardTalent : classes.avatar} ${
            isFocusable ? "focusable" : ""
          }`}
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
              const item =
                e.currentTarget.parentNode.parentNode.parentNode.parentNode
                  .parentNode;

              item.scrollIntoView(true);
            }

            focusHandler(data);
          }}
          onKeyDown={(e) => {
            focusHandlerDown(e);
          }}
          data-sn-right={isLast ? "" : null}
          data-sn-left={
            isFirst ? (snLeft !== null ? snLeft : "@nav_down") : null
          }
          data-sn-up={snUp}
          data-sn-down={snDown}
        >
          {image ? (
            children
          ) : (
            <div>{`${nameToInitials(name)}${nameToInitials(lastName)}`}</div>
          )}
        </div>
      </div>
      <div className={classes.infoCard}>
        <Typography className={classes.typographyTitle} noWrap variant="body1">
          {name}
        </Typography>
        <Typography
          className={classes.typographyTitle}
          noWrap
          variant="body1"
          style={{ marginTop: "-5px" }}
        >
          {name}{lastName}
        </Typography>
      </div>
    </div>
  );
};
export default React.memo(CardTalent);
