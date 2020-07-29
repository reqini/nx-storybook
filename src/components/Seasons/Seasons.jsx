import React, { useState, useEffect, useContext, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";

import RibbonsVertical from "../../../components/2020/Ribbon/RibbonsVertical";
import RibbonsSimple from "../../../components/2020/Ribbon/RibbonsSimple";
import TitleVcard from "../../../components/2020/Typography/TitleVcard";
import Description from "../../../components/2020/Resume/Dascription";
import { getItemProperties, resizeImage } from "../../../containers/resizeTmp";

import Translator from "../../../requests/apa/Translator";

import { Context } from "../../../containers/App/Layout";

const useStyles = makeStyles((theme) => ({
  containerSeasons: ({ width, height }) => ({
    width: width || theme.sizeBody.hd.width,
    height: height || theme.sizeBody.hd.height,
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 40px",
    boxSizing: "border-box",
    overflow: "hidden",

    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
  }),
  contentSeasonsVertical: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
    width: "30%",
    height: 530,
    marginTop: 100,
    position: "relative",
    flexDirection: "column",

    "& li": {
      width: "100%",
    },
  },
  contentSeasonsHorizontal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden",
    width: "100%",

    "& li": {
      width: "100%",
    },
  },
  buttom: {
    width: "100%",
    height: 48,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 6,
    textAlign: "center",
    //transition: ".5s",
    fontSize: 23,
    color: "white",
    textDecoration: "none",

    "&:focus": {
      background: theme.palette.primary.main,

      "& span": {
        color: "white",
      },
    },

    "&:active": {
      background: theme.palette.secondary.main,

      "& span": {
        color: "white",
      },
    },

    "& span": {
      color: "transparent",
    },

    "&:hover": {
      background: theme.palette.primary.main,

      "& span": {
        color: "white",
      },
    },
  },
  activeClass: {
    background: theme.palette.secondary.main,

    "& span": {
      color: "white",
    },
  },
  vertical: {
    flexDirection: "row",
  },
  verticalList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    "& li": {
      margin: "10px 0",
    },
  },
  portada: {
    position: "absolute",
    top: 0,
    left: 40,
  },
  horizontal: {
    flexDirection: "column",
  },
  horizontalList: {
    display: "flex",
    flexDirection: "row",
    width: "100%",

    "& li": {
      margin: "0 10px",
    },
  },
  contentEpisodesVertical: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    alignItems: "center",
    width: "70%",
    height: "100%",
  },
  contentEpisodesHorizontal: {
    overflow: "hidden",
    width: "100%",
  },
  itemExample: {
    width: 300,
    height: 183,
    background: "white",
    float: "left",
    margin: 10,
  },
  contentModalTitle: {
    width: 365,
    //minHeight: 110,
    top: 56,
    position: "fixed",
    background: "black",
  },
}));

const Seasons = ({
  width,
  height,
  onClose,
  info,
  data: newData,
  onClick = false,
  user,
}) => {
  const { setContext } = useContext(Context);
  const classes = useStyles({ width, height });

  const [vertical, setVertical] = useState(true);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [seasonActive, setSeasonActive] = useState(1);

  useEffect(() => {
    setSeasonActive(parseInt(info.season, 10)); // radix
    setSeasons(get(newData, "seasons", []));
    setEpisodes(
      get(
        newData,
        `seasons.${parseInt(get(info, "season", 1) - 1, 10)}.episodes`, // radix
        []
      )
    );
  }, []);

  let ribbon = {
    title: "episodes",
    isSerie: true,
    items: episodes.map((item) => {
      const isSerie = Boolean(get(item, "is_series"));

      const itemFinal = getItemProperties({
        item,
        version: "v5.86",
      });
      const imaCard = get(item, "external.gracenote.assets.iconic_16_9");

      // cambiar el player directamente
      const extraProps = {};
      if (onClick) {
        extraProps.clickHandler = () => {
          onClick({
            groupId: itemFinal.group_id,
            item: {
              ...itemFinal,
              episodeTitle: isSerie ? get(item, "title_episode") : null,
              episode: get(item, "episode_number"),
            },
          });
        };
      }

      return {
        ...itemFinal,
        dubbed: get(item, "media.dubbed"),
        subbed: get(item, "media.subbed"),
        imageCard: imaCard && resizeImage(imaCard, 290),
        title: item.title_episode,
        ...extraProps,
      };
    }),
  };

  const handleVcard = useCallback((item) => {
    onClose();

    setContext({
      isOpen: true,
      user: user,
      gropupId: item.group_id || item.id,
      // onClose: setFocusContainer,
    });
  }, []);

  return (
    <div
      className={`seasons ${classes.containerSeasons} ${
        vertical ? classes.vertical : classes.horizontal
      }`}
    >
      {!vertical && (
        <div className={classes.portada}>
          <TitleVcard title={info.episodeTitle} />
          <Description description={info.description} />
        </div>
      )}

      <div
        className={`${
          vertical
            ? classes.contentSeasonsVertical
            : classes.contentSeasonsHorizontal
        }`}
      >
        <div className={classes.contentModalTitle}>
          <TitleVcard title={info.title} noWrap maxWidth={365} />
        </div>
        <ul
          className={`${
            vertical ? classes.verticalList : classes.horizontalList
          }`}
        >
          {seasons.map((season, i) => {
            const isLast = i === seasons.length - 1;
            return (
              <li>
                <a
                  key={i}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    setSeasonActive(parseInt(season.number, 10)); // radix
                    setEpisodes(season.episodes);
                  }}
                  className={`focusable ${classes.buttom} ${
                    seasonActive === parseInt(season.number, 10) // radix
                      ? classes.activeClass
                      : ""
                  }`}
                  data-sn-down={isLast ? "" : null}
                >
                  {`${Translator.get("season", "Temporada")} ${season.number}`}
                  {vertical && <span>{season.episodes.length} Episodios</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${
          vertical
            ? classes.contentEpisodesVertical
            : classes.contentEpisodesHorizontal
        }`}
      >
        {vertical && (
          <RibbonsVertical
            {...ribbon}
            scrollToTop={false}
            focusHandler={(data) => {}}
            handleVcard={handleVcard}
            // sendToPlay={() => {}}
          />
        )}
        {!vertical && (
          <RibbonsSimple
            {...ribbon}
            scrollToTop={false}
            focusHandler={(data) => {}}
            // sendToPlay={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(Seasons);
