import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Asset from "../../../requests/apa/Asset";

import Info from "./Info";
import Description from "./Dascription";
import SimpleImage from "../Image/SimpleImage";
import TitleVcard from "../Typography/TitleVcard";
//import GradientLanding from "../Gradients/GradientLanding";

import imageDefault from "./images/placeholder_background.jpg";

//import "./resume.css";

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
    flexDirection: "column",
    alignItems: "flex-start",
    height: "400px",
    margin: "auto",
  },
  imgChannelResume: {
    position: "absolute",
    right: 0,
    top: 20,
  },
  globalIntro: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
  },
  global: {
    backgroundColor: "black",
    height: 720,
    position: "absolute",
    boxSizing: "border-box",
    overflow: "hidden",
    top: 0,
    left: 0,
    width: 1280,
    //paddingLeft: 20
  },
  contentRibbons: {
    height: 360,
    width: theme.sizeBody.hd.width - 20,
    position: "relative",
    bottom: 0,
    paddingLeft: 20,
    overflow: "hidden",

    "& h2": {
      padding: 0,
      margin: 0,
      marginBotton: 15,
    },
  },
  infoVcard: {
    width: "40%",
    height: 405,
    boxSizing: "border-box",
  },
  contInfoResume: {
    zIndex: 1,
    height: 320,
    width: 600,
    top: 30,
    left: 20,
    position: "absolute",
  },
  wrapImageBackground: {
    width: "60%",
    height: 405,
    position: "relative",
    backgroundSize: 1280,
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
  },
  backgroundVcard: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  },
  contentRibonns: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    overflow: "hidden",
  },
  description: {
    fontSize: 20,
    lineHeight: "26px",
    fontWeight: "300!important",
    textAlign: "left",
    maxWidth: 700,
    height: "auto",
    maxHeight: 100,
    overflow: "hidden",
  },
  infoRented: {
    "& p": {
      color: theme.palette.colorRented.main,
      margin: 0,
      marginTop: 5,
      fontSize: 20,
    },
  },
}));

const ResumeNew = ({
  children,
  item: {
    season = "",
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
  onClose = null,
  className,
  favoriteButton,
  code = "",
  buttons,
  hasLanguages,
}) => {
  const classes = useStyles();

  const srcImage =
    cover ||
    imageFull ||
    imageCard ||
    image_background ||
    previewImage ||
    image_still;

  return (
    <div className={`${classes.global}`}>
      <div className={`${classes.globalIntro}`}>
        <div className={`${classes.infoVcard}`}>
          <div className={classes.contInfoResume}>
            <TitleVcard title={title} />
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
            <Description description={description} />
            {infoRented && (
              <div className={classes.infoRented}>
                <p>{`assista até ${infoRented}`}</p>
              </div>
            )}
            {(buttons || favoriteButton) &&
              (!hasLanguages ? (
                <React.Fragment>
                  <div className={classes.infoRented}>
                    <p>{`este conteúdo não está disponível`}</p>
                  </div>
                  <div
                    className="resume-action-buttons"
                    style={{ display: "flex" }}
                  >
                    {buttons}
                    {favoriteButton}
                  </div>
                </React.Fragment>
              ) : (
                <div
                  className="resume-action-buttons"
                  style={{ display: "flex" }}
                >
                  {buttons}
                  {favoriteButton}
                </div>
              ))}
          </div>
        </div>
        <div
          className={classes.wrapImageBackground}
          style={{ backgroundImage: `url(${imageDefault})` }}
        >
          <div
            className={classes.backgroundVcard}
            style={{
              boxShadow: "inset 8em -5em 6em 0em #000",
              //boxShadow: "inset 14em -5em 14em 0em #000",
              //boxShadow: 'inset 1em 0em 4em 4em #000',
              backgroundImage: `url(${srcImage || imageDefault})`,
            }}
          >
            {/* <GradientLanding width={"40%"} /> */}
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
      {children}
    </div>
  );
};
export { Info };
export default ResumeNew;
