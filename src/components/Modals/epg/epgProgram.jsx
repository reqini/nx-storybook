import React, { useState } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

import TitleRibbons from "../../Typography/TitleRibbons";
import { Info } from "../../Resume/Resume";

import imageDefault from "../../Resume/images/placeholder_background.jpg";

const useStyles = makeStyles((theme) => ({
  containerFuture: {
    width: "100%",
    height: theme.sizeBody.hd.height,
    padding: 20,
    backgroundSize: "cover",
    position: "relative",
    textAlign: "initial",
  },
  imgLogo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,

    '& span': {
      fontSize: 30,
      fontWeight: 500,
      marginRight: 10
    },
    '& img': {
      height: 50
    }
  },
  contentFutureTime: {
    color: theme.palette.epg.focus
  },
  descrip: {
    width: 600
  }
}));

const Program = ({ channel, event, onClose }) => {
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const getFocus = () => {
    setTimeout(() => {
      window.SpatialNavigation.focus("@modal-new");
    }, 200);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      getFocus();
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    getFocus();
  }, [loading]);

  const { number, image: logo } = channel;
  const {
    title,
    description,
    image,
    isLive,
    schedule,
    year,
    rating,
    // category,
    genre,
    seasonsText,
    hasReminder,
    recordable,
    eventStatus,
    subtitle,
    language,
    resolution,
  } = event;

  // const category = (event.genres && event.genres.sub_genre_name) || false;

  const date_time = `Hoje ${moment(
    event.date_begin,
    "YYYY/MM/DD HH:mm:ss"
  ).format("HH:mm")} - ${moment(event.date_end, "YYYY/MM/DD HH:mm:ss").format(
    "HH:mm"
  )}`;
  const duration = moment
    .utc()
    .startOf("day")
    .add(event.duration, "minutes")
    .format("hh:mm:ss");

  const DataMoldal = () => {
    return (
      <div
        onClick={(e) => onClose()}
        className={`content-future ${classes.containerFuture}`}
        style={{ backgroundImage: `url(${image || imageDefault})` }}
      >
        {/* image && <div className="background-gradient" /> */}
        <div className="resume fromVMenu">
          <div className={"resume-container fullWidth"}>
            <div className={classes.imgLogo}>
              <span>{number}</span>
              <img src={logo} alt={title} />
            </div>
            <div className={`resume-data-container`}>
              <div className={`resume-data-large`}>
                <TitleRibbons title={title} marginB={15} marginL={0} />
                <div className={classes.descrip}>
                  <Info
                    isLive={isLive}
                    schedule={schedule}
                    year={year}
                    rating={rating}
                    // category={category}
                    category={genre}
                    season={seasonsText}
                    duration={duration}
                    reminder={hasReminder}
                    recordable={recordable}
                    eventStatus={eventStatus}
                    subtitle={subtitle}
                    language={language}
                    resolution={resolution}
                  />
                  <div className="resume-description block-with-text">
                    <p>{description}</p>
                  </div>
                  <h4 className={classes.contentFutureTime}>{date_time}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal-overlay">
      <div className={`modal-container-new program-future`}>
        <DataMoldal />
        {/* <div className="modal-buttons-horizontal" style={{ paddingTop: 56 }}>
          <a
            style={{
              height: 48,
              textAlign: 'center'
            }}
            className="modal-button focusable modal-default-item"
            href="javascript:void(0)"
            onClick={(e) => onClose()}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <img
                style={{ height: 20, marginRight: 10 }}
                src={imageClose}
              />{" "}
              {Translator.get("btn_menu_back123", "fechar")}
            </span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Program;
