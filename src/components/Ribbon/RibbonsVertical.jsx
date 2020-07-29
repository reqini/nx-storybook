import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Collection, AutoSizer } from "react-virtualized";
//import LinearProgress from "@material-ui/core/LinearProgress";
import get from "lodash/get";

import CardSeasons from "../Cards/CardSeasons";
import Gradient from "../Gradients/Gradient";

const Ribbon = ({
  id,
  type,
  title,
  items,
  isSerie,
  sendToPlay,
  index,
  snUp,
  snDown,
  scrollToTop,
  index: indexRibbon,
  handleVcard,
}) => {
  const [topIndex, setTopIndex] = useState(0);

  const focusHandler = (item) => {
    // console.log("jose focus", item);
    // setTopIndex(item.index);
  };

  const formatDuration = (duration = "00:00:00") => {
    duration = moment.duration(duration);
    return duration.hours() !== 0 && duration.minutes() === 0
      ? `${duration.hours()}h`
      : duration.hours() && duration.minutes() !== 0
      ? `${duration.hours()}h ${duration.minutes()}min`
      : `${duration.minutes()}min`;
  };

  if (!items.length) {
    return null;
  }

  return (
    <div>
      <div style={{ marginBottom: 0 }}>
        <div
          className="wrapScroll"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {items.map((item, index) => {
              let isLast = index === items.length - 1;
              let isFocusable = true;
              if (index === 0) {
                isFocusable = true;
              }

              return (
                <CardSeasons
                  snUp={snUp}
                  snDown={snDown}
                  isLast={isLast}
                  scrollToTop={scrollToTop}
                  minHeight={get(items, "0.item.href") ? 120 : 161}
                  indexRibbon={indexRibbon}
                  index={index}
                  isSerie={isSerie}
                  isFocusable={isFocusable}
                  key={`${id}-${index}`}
                  data={item}
                  title={item.title}
                  description={item.description}
                  notDefaultImg={id === "nx-providers" ? true : null}
                  // en vcard viene en cover
                  image={item.imageCard || item.cover}
                  novo={false}
                  clickHandler={item.clickHandler}
                  handleVcard={handleVcard}
                  focusHandler={focusHandler}
                  width={260}
                  height={136}
                  bgSize={"280px auto"}
                  sendToPlay={sendToPlay}
                  season={item.season}
                  dubbed={item.dubbed === "true"}
                  subbed={item.subbed === "true"}
                  numberSeason={item.episode}
                  durationSeason={formatDuration(item.duration)}
                >
                  {/* <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={get(item, "date_advance.porcent")}
                  /> */}
                </CardSeasons>
              );
            })}
          </div>
          <Gradient position={"fixed"} height={40} />
        </div>
      </div>
    </div>
  );
};

Ribbon.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      group_id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      provider: PropTypes.string,
      format_types: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  focusHandler: PropTypes.func,
  isSerie: PropTypes.bool,
};

Ribbon.defaultProps = {
  items: [],
  focusHandler: () => {},
  isSerie: false,
};

export default React.memo(Ribbon);
