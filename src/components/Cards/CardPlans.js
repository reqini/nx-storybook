import React from "react";
import get from "lodash/get";
import { makeStyles } from "@material-ui/core/styles";

import CardLandscape from "./CardLandscape";
import ChipContainer from "../Chip";

const colorClasses = [
  "45deg,#0D9F70,#2574B4",
  /* "45deg,#6D51B8,#D44169", */
  /* "45deg,#AA00FF,#D89D2F", */
];

const useStyles = makeStyles((theme) => ({
  channelsPlans: {
    fontWeight: 900,
    fontSize: 20,
    margin: "3px 0 0 10px",
    color: "white",
    position: "relative",
  },
  pricePlans: {
    textAlign: "center",
    width: "100%",
    padding: 0,
    color: "white",
    position: "relative",

    "& p": {
      margin: "10px 0",

      "& b": {
        fontSize: 28,
        fontWeight: 500,
      },
    },
  },
  listChannelsPlans: {
    width: "100%",
    height: 50,
    padding: 0,
    margin: 0,
    marginTop: 15,
    listStyle: "none",
    overflow: "hidden",
    display: "flex",
    position: "relative",

    "& li": {
      height: 50,
      marginLeft: 6,

      "& img": {
        width: "100%",
        maxWidth: 45,
      },
    },
  },
}));

const CardPlans = ({
  width,
  height,
  bgSize,
  borderRadius,
  live,
  duration,
  price,
  imageCard = "http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg",
  period = "DAY",
  planTitle = "PLAN",
  channels = [],
  clickHandler = () => {},
  focusHandler = () => {},
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  isLast,
  focusHandlerDown = () => {},
  marginFoco,
}) => {
  const classes = useStyles({
    width,
    height,
    bgSize,
    borderRadius,
    marginFoco,
  });

  return (
    <CardLandscape
      marginFoco={marginFoco}
      isLast={isLast}
      id={id}
      minWidth={8}
      withContent
      padding
      isFocusable={true}
      bgSize={"cover"}
      borderRadius={12}
      height={199}
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
      <div style={{ margin: 10 }}>
        <ChipContainer
          title={planTitle.toUpperCase()}
          gradient={
            colorClasses[Math.floor(Math.random() * colorClasses.length)]
          }
        />
      </div>
      <div className={classes.channelsPlans}>{live} canais</div>
      <div className={classes.pricePlans}>
        <p>
          {price.currency}
          <b>{price.wholeNumber}</b>,{price.decimals}
          {duration}
          {period}
        </p>
      </div>
      <ul className={classes.listChannelsPlans}>
        {channels.map((ch, i) => {
          if (get(ch, "composition.systemParameters.IMAGE_URL")) {
            return (
              <li key={i}>
                <img
                  src={ch.composition.systemParameters.IMAGE_URL}
                  alt={ch.composition.systemParameters.DISPAY_NAME}
                />
              </li>
            );
          }
        })}
      </ul>
    </CardLandscape>
  );
};
export default React.memo(CardPlans);
