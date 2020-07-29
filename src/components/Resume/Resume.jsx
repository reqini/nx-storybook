import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Asset from "../../../requests/apa/Asset";

import Info from "./Info";
import Description from "./Dascription";
import GradientHome from "../Gradients/GradientHome";
import SimpleImage from "../Image/SimpleImage";
import TitleVcard from "../Typography/TitleVcard";

import imageDefault from "./images/placeholder_background.jpg";

// import "./resume.css";

const useStyles = makeStyles((theme) => ({
  resume: {
    display: "flex",
    flexFlow: "column",
    overflow: "hidden",
    width: "100%",
    minHeight: "200px",
    paddingLeft: "15px",
  },
  resumeDataContainer: {
    display: "flex",
    alignItems: "flex-start",
    height: "400px",
    margin: "auto",
  },
  imgChannelResume: {
    position: "absolute",
    right: 0,
    top: 20,
  },
}));

const Resume = ({
  children,
  item: {
    season = false,
    episode = "",
    episodeTitle = "",
    isLive,
    schedule,
    year,
    rating,
    category,
    duration,
    hasReminder,
    description,
    title,
    subtitle,
    leg,
    language,
    resolution,
    showActionBtns,
    previewImage,
    image_still,
    image_background,
    imageFull,
    imageCard,
    cover,
    infoRented,
  },
  className,
  favoriteButton,
  code = "",
  buttons,
}) => {
  const classes = useStyles();

  const srcImage =
    cover ||
    imageFull ||
    imageCard ||
    image_background ||
    previewImage ||
    image_still;

  // conflicto en epg
  // React.useEffect(() => {
  //   let sel = document.querySelector(`.modal-overlay`);
  //   if (!sel) {
  //     setTimeout(() => {
  //       window.SpatialNavigation.focus("@container");
  //     }, 500);
  //   }
  // }, []);

  return (
    <div
      className={`${className} ${classes.resume}`}
      style={{ backgroundImage: `url(${imageDefault})` }}
    >
      {srcImage && (
        <div
          className="resume-preview-fullwidth"
          style={{
            backgroundImage: `url(${
              srcImage || "/images/placeholder_background.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="background-gradient" />
        </div>
      )}
      <GradientHome />
      <div className={"resume-container fullWidth"}>
        <div className={`${isLive && "live"} ${classes.resumeDataContainer}`}>
          <div className={`resume-data-large`}>
            <TitleVcard title={title} />
            <div className="resume-info">
              <Info
                isLive={isLive}
                schedule={schedule}
                year={year}
                rating={rating}
                category={category}
                season={season}
                episode={episode}
                title_episode={episodeTitle}
                duration={duration}
                reminder={hasReminder}
                leg={leg || subtitle}
                language={language}
                resolution={resolution}
              />

              {description && <Description description={description} />}

              {infoRented && (
                <div className="info-rented">
                  <p>{`assista até ${infoRented}`}</p>
                </div>
              )}

              {(buttons || favoriteButton) && (
                <div
                  className="resume-action-buttons"
                  style={{ display: "flex" }}
                >
                  {buttons}
                  {favoriteButton}
                </div>
              )}

              {code.includes("nx_") && (
                <div className={classes.imgChannelResume}>
                  <SimpleImage
                    image={Asset.get(`net_icon_${code}`)}
                    alt="channel"
                    height={100}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export { Info };
export default Resume;
