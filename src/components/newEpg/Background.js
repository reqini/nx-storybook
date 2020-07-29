import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Resume from "../Resume/Resume";

const useStyles = makeStyles((theme) => ({
  epgContentResume: () => ({
    height: 200,
    background: "red",
  }),
}));

const Background = ({ item }) => {
  if (!item) {
    return null;
  }
  const { image, title, description, year, rating, language, duration } = item;
  const classes = useStyles();
  return (
    <div
      style={{
        top: "0px",
        left: "0px",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Resume
        className="epg-resume"
        item={{
          title,
          cover: image || false,
          description,
          //year,
          //rating,
          //duration,
          lenguage: language,
        }}
        isLive={false}
      />
    </div>
  );
};

export default React.memo(Background);
