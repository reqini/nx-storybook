import React, { useCallback } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  resumeMetadata: ({ marginTop }) => ({
    //marginTop: marginTop || null,
    fontSize: 21,
    margin: 0,
    fontWeight: 300,
    width: "100%",
    display: "flex",
    padding: 0,
  }),
  resumeWeta: {
    marginBottom: 10,
    marginRight: 10,
    listStyle: "none",
    overflow: "hidden",
  },
  noWrap: {
    maxWidth: 180,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  tagNetflex: {
    border: "1px solid white",
    padding: "0 5px",
    color: "white",
    margin: "0 5px",
    borderRadius: 2,
    lineHeight: "20px",
    fontSize: 15,
    height: 18.4,
    marginTop: 1,
  },
  tagBold: {
    fontWeight: 500,
  },
  resumeColor: {
    borderRadius: 3,
    fontSize: 16,
    height: 21,
    marginTop: 1.5,
    width: 32,
    textAlign: "center",
    lineHeight: "22px",
  },
}));

const Info = ({
  isLive,
  schedule,
  year,
  rating,
  category,
  seasonsText,
  duration,
  season,
  episode,
  title_episode,
  hasReminder,
  leg,
  language,
  resolution,
  marginTop,
  isModalProps = false,
}) => {
  const classes = useStyles({ marginTop });
  const { t, i18n } = useTranslation();

  const colorRating = () => {
    const color = rating;
    switch (color) {
      case "L":
        return "#02AF52";
        break;
      case "10":
        return "#02CCFF";
        break;
      case "12":
        return "#FFCC01";
        break;
      case "14":
        return "#FF6600";
        break;
      case "16":
        return "#FF0000";
        break;
      case "18":
        return "#000000";
        break;
      default:
        return null;
        break;
    }
  };

  const formatDuration = useCallback((duration = "00:00:00") => {
    duration = moment.duration(duration);
    return duration.hours() !== 0 && duration.minutes() === 0
      ? `${duration.hours()}h`
      : duration.hours() && duration.minutes() !== 0
      ? `${duration.hours()}h ${duration.minutes()}min`
      : `${duration.minutes()}min`;
  }, []);

  return (
    <React.Fragment>
      {!isLive && (
        <ul className={classes.resumeMetadata}>
          {window.location.href.includes("node/nx_claro_") === true ||
          !isModalProps
            ? season && (
                <li className={`${classes.resumeWeta} ${classes.noWrap}`}>
                  <b>{`${t("season", "Temporada")} ${season}`}</b>
                </li>
              )
            : season && (
                <li className={`${classes.resumeWeta} ${classes.noWrap}`}>
                  <b>
                    T{season}:E{episode} {`- ${title_episode}`}
                  </b>
                </li>
              )}
          {schedule && <li className={classes.resumeWeta}>{schedule}</li>}

          {year && <li className={classes.resumeWeta}>{year}</li>}

          {rating && (
            <li
              className={`${classes.resumeWeta} ${classes.resumeColor}`}
              style={{ background: colorRating() }}
            >
              {rating}
            </li>
          )}

          {category && (
            <li className={`${classes.resumeWeta} ${classes.noWrap}`}>
              {category}
            </li>
          )}

          {seasonsText && <li className={classes.resumeWeta}>{seasonsText}</li>}

          {duration && (
            <li className={classes.resumeWeta}>{formatDuration(duration)}</li>
          )}

          {hasReminder && (
            <li className={classes.resumeWeta}>
              <i className="fa fa-clock-o" aria-hidden="true" />
            </li>
          )}
          {leg && (
            <li className={`${classes.resumeWeta} ${classes.tagNetflex}`}>
              Leg
            </li>
          )}

          {language && (
            <li className={`${classes.resumeWeta} ${classes.tagNetflex}`}>
              Dub
            </li>
          )}

          {resolution && (
            <li
              className={`${classes.resumeWeta} ${classes.tagBold} ${classes.tagNetflex}`}
            >
              HD
            </li>
          )}
        </ul>
      )}
    </React.Fragment>
  );
};
export default React.memo(Info);
