import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Translator from "../../../requests/apa/Translator";
import Assets from "../../../requests/apa/Asset";

const getProperties = ({ type }) => {
  switch (type) {
    case "back":
      return {
        className: "transparent",
        image: require("../Icons/App/net_back_icon.png"),
        focus: require("../Icons/App/net_back_icon_focus.png"),
      };
    case "episodes":
      return {
        image: require("../Icons/Player/Episodes.svg"),
      };
    case "replay":
      return {
        image: require("../Icons/Player/Back10s.png"),
      };
    case "previewSong":
      return {
        image: Assets.get("player_controls_step_backward_icon"),
      };
    case "stepBackward":
      return {
        image: require("../Icons/Player/Back10s.png"),
        focus: require("../Icons/Player/Back10s.png"),
      };
    case "play":
      return {
        className: "transparent",
        image: require("../Icons/Player/Play.svg"),
        focus: require("../Icons/Player/PlayFoco.svg"),
      };
    case "pause":
      return {
        className: "transparent",
        image: require("../Icons/Player/Pause.svg"),
        focus: Assets.get("net_player_controls_pauseFoco_icon"),
      };
    case "stepForward":
      return {
        image: require("../Icons/Player/Forward10s.svg"),
        focus: require("../Icons/Player/Forward10s.svg"),
      };
    case "next":
      return {
        image: require("../Icons/Player/Forward10s.svg"),
      };
    case "nextSong":
      return {
        image: Assets.get("player_controls_step_forward_icon"),
      };
    case "language":
      return {
        image: require("../Icons/Player/Subtitles.svg"),
      };
    case "skipIntro":
      return {
        text: Translator.get("skip_intro_player", "Omitir intro"),
        className: "focusable focusable-skip skip-control-btn action",
        image: Assets.get("player_controls_epg_icon"),
      };
    case "record":
      return {
        className: "player-ui-button action",
        image: Assets.get("player_controls_record_icon"),
      };
    case "favorite":
    default:
      return {};
  }
};

const useStyles = makeStyles((theme) => ({
  containerControls: {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), black)",
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
  },
  contentTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    margin: 0,
  },
  buttons: ({ image }) => ({
    width: 48,
    height: 48,
    margin: "0 10px",
    borderRadius: "50%",
    backgroundImage: `url(${image})`,
    backgroundSize: 48,
    backgroundPosition: "center",

    "&:focus": {
      background: theme.palette.primary.main,
      backgroundImage: `url(${image})`,
      backgroundSize: 48,
      backgroundPosition: "center",
    },
  }),
  contentButtons: {
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Button = React.memo(
  ({ text, classButton, type, image, onClick = () => {} }) => {
    const data = getProperties({ type });
    const classes = useStyles({ image: data.image, focus: data.focus, type });

    return (
      <div
        className={`${classes.buttons} ${data.className} focusable`}
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {text && text}
      </div>
    );
  }
);

const DefaultButtons = ({
  title,
  subTitle,
  back,
  progresBar,
  className,
  play,
  episodes,
  stepBackward,
  stepForward,
  onShowEpisodes,
  isPause,
  handlePausePlay,
  useLanguages,
  onShowLanguages,
  handleBackwardForward = () => {},
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {back}
      <div className={classes.contentTitle}>
        <h3 className={classes.title}>{title}</h3>
        <h3 className={classes.subTitle}>{subTitle}</h3>
      </div>
      <div className={classes.containerControls}>
        {progresBar}

        <div className={classes.contentButtons}>
          {episodes && <Button type="episodes" onClick={onShowEpisodes} />}
          {stepBackward && (
            <Button
              type="stepBackward"
              onClick={() => handleBackwardForward(true)}
            />
          )}
          {play &&
            (isPause ? (
              <Button
                classButton={classes.player}
                type="play"
                onClick={handlePausePlay}
              />
            ) : (
              <Button type="pause" onClick={handlePausePlay} />
            ))}
          {stepForward && (
            <Button
              type="stepForward"
              onClick={() => handleBackwardForward()}
            />
          )}
          {useLanguages && <Button type="language" onClick={onShowLanguages} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(DefaultButtons);
