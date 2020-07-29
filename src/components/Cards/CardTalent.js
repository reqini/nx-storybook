import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const imageDefault = require("./images/placeholder-actor.png");

const useStyles = makeStyles((theme) => ({
  containerCardTalent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 100,
    marginRight: 15,
    minHeight: 160,
  },
  contentDefaultTalent: ({ width }) => ({
    backgroundImage: `url(${imageDefault})`,
    position: "relative",
    //padding: 5,
    backgroundSize: width || 100,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }),
  cardTalent: ({ width, height, bgSize, borderRadius, image }) => ({
    backgroundImage: `url(${image})`,
    position: "relative",
    /* margin: height * 0.06, */
    margin: 4,
    backgroundSize: bgSize || "cover",
    backgroundPosition: "center",
    borderRadius: borderRadius || "50%",
    height: height || 110,
    width: width || 110,
    //boxSizing: "border-box",

    /*  "&:hover": {
      width: width + width * 0.13,
      height: height + height * 0.13,
      backgroundSize: bgSize + bgSize * 0.13,
      //border: `2px solid ${theme.palette.primary.main}`,
      margin: 0,
    }, */
    "&:focus": {
      border: `4px solid white`,
      /* width: width + width * 0.13,
      height: height + height * 0.13, */
      //backgroundSize: bgSize + bgSize * 0.13,
      margin: 0,
    },
  }),
  infoCard: {
    textAlign: "center",
  },
  typographyTitle: ({ width }) => ({
    color: "white",
    //marginTop: 5,
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
  title,
  image,
  children,
  infoTalent = false,
  focusHandler,
  data,
  clickHandler,
  history,
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

  const aTitle = title && title.split(" ");

  const name = aTitle.slice(0, aTitle.length - 1).join(" ");
  const lastName = aTitle.slice(aTitle.length - 1, aTitle.length);

  return (
    <div className={classes.containerCardTalent}>
      <div className={classes.contentDefaultTalent}>
        <div
          id={id}
          className={`${classes.cardTalent} ${isFocusable ? "focusable" : ""}`}
          tabIndex="0"
          onClick={(e) => {
            e.preventDefault();

            if (data.sendToPlay) {
              sendToPlay(data.group_id);
            } else if (clickHandler) {
              return clickHandler();
            } else {
              history.push(data.href || `/vcard/${data.group_id}`);
            }
          }}
          // data-sn-right={`#i .focusable`}
          // data-sn-left={`#i .focusable`}
          onFocus={(e) => {
            if (scrollToTop) {
              const item =
                e.currentTarget.parentNode.parentNode.parentNode.parentNode
                  .parentNode;

              item.scrollIntoView(true);
            }

            focusHandler(data);
          }}
          // onKeyUp={(e) => {
          //   focusHandler(data);
          // }}
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
          {children}
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
          {lastName}
        </Typography>
        {false && infoTalent && (
          <Typography className={classes.typographyRol} variant="body2" noWrap>
            {infoTalent}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default React.memo(withRouter(CardTalent));
