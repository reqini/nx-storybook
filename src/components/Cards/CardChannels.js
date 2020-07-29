import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";

import CardLandscape from "./CardLandscape";

const useStyles = makeStyles((theme) => ({
  channels: {
    display: "flex",
    position: "relative",
    alignItems: "flex-start",

    "& img": {
      height: 40,
      marginRight: 5,
    },
    "& p": {
      color: "white",
      width: "100%",
      margin: "0 5px",
      whiteSpace: "break-spaces",
      boxSizing: "border-box",
    },
  },
  gradient: {
    width: 10,
    height: 40,
    background: "linear-gradient(45deg, #469FFF, #A39AF9)",
    marginRight: 10,
  },
  contentImage: {
    overflow: "hidden",
    width: 60,
  },
  pricePlans: {
    textAlign: "center",
    width: "100%",
    padding: 0,
    color: "white",
    position: "relative",

    "& b": {
      fontSize: 28,
      fontWeight: 500,
    },
  },
}));

const CardChannels = ({
  price,
  period = "DAY",
  planTitle,
  duration,
  imageCard = "",
  channels = [],
  clickHandler = () => {},
  focusHandler = () => {},
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  isLast,
  focusHandlerDown = () => {},
}) => {
  const classes = useStyles();

  return (
    <CardLandscape
      isLast={isLast}
      id={id}
      withContent
      padding
      isFocusable={true}
      bgSize={"cover"}
      borderRadius={12}
      height={150}
      image={imageCard}
      width={262}
      opacity
      clickHandler={clickHandler}
      focusHandler={focusHandler}
      focusHandlerDown={focusHandlerDown}
      snUp={snUp}
      snDown={snDown}
      snLeft={snLeft}
    >
      <div className={classes.channels}>
        <div className={classes.gradient} />
        <div className={classes.contentImage}>
          {channels.map((ch, i) => {
            if (get(ch, "composition.systemParameters.IMAGE_URL")) {
              return (
                <img
                  key={i}
                  src={get(ch, "composition.systemParameters.IMAGE_URL")}
                  alt={get(ch, "composition.systemParameters.DISPAY_NAME")}
                />
              );
            }
          })}
        </div>
        <div>
          <p>{planTitle}</p>
        </div>
      </div>
      <div className={classes.pricePlans}>
        <p>
          {price.currency}
          <b>{price.wholeNumber}</b>,{price.decimals}
          {duration}
          {period}
        </p>
      </div>
    </CardLandscape>
  );
};

export default React.memo(CardChannels);
