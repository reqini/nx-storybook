import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";
import { useTranslation } from "react-i18next";

import RibbonsVertical from "../../../components/2020/Ribbon/RibbonsVertical";
import TitleVcard from "../../../components/2020/Typography/TitleVcard";
import { getItemProperties, resizeImage } from "../resizeTmp";

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
  getBookmark = async () => {},
  width,
  height,
  info,
  data: contentSerie = [],
  onClick = false,
  user,
  season = 1,
  episode = 1,
}) => {
  const classes = useStyles({ width, height });
  const { t, i18n } = useTranslation();
  const refContainer = useRef();

  const [data, setData] = useState([]);
  const [seasons, setSeasons] = useState(get(contentSerie, "seasons", []));
  const [episodes, setEpisodes] = useState(
    get(contentSerie, `seasons.${parseInt(season - 1, 10)}.episodes`, [])
  );

  const [seasonActive, setSeasonActive] = useState(parseInt(season, 10));

  useEffect(() => {
    getBook();

    window.SpatialNavigation.add("episodes", {
      selector: `#containerEpisodes .focusable`,
      enterTo: ".episodeActive",
      defaultElement: ".episodeActive",
    });
    window.SpatialNavigation.makeFocusable("episodes");

    window.SpatialNavigation.add("seasons", {
      selector: `#containerSeasons .focusable`,
      enterTo: ".seasonActive",
      defaultElement: ".seasonActive",
    });
    window.SpatialNavigation.makeFocusable("seasons");

    setTimeout(() => {
      window.SpatialNavigation.focus(`#episode-${season}-${episode}`);
    }, 300);
  }, []);

  const getBook = async () => {
    let contentSerie2 = await Promise.all(
      contentSerie.seasons.map(async (season) => {
        const episodes = season.episodes.map((item) => item.id);
        const dataAll = await getBookmark(episodes.join(","), user);
        const data = get(dataAll, "response.groups", []);

        return {
          ...season,
          episodes: season.episodes.map((episode) => {
            const vistime = get(
              data.find((item) => item.id === episode.id),
              "vistime",
              {}
            );

            return {
              ...episode,
              vistime,
            };
          }),
        };
      })
    );

    const result = { ...contentSerie, seasons: contentSerie2 };
    setData(result);
    setSeasons(get(result, "seasons", []));
    setEpisodes(get(result, `seasons.${seasonActive - 1}.episodes`, []));
  };

  useEffect(() => {
    refContainer.current.scrollTop = 0;
  }, [seasonActive]);

  return (
    <div className={`${classes.containerSeasons} ${classes.vertical}`}>
      <div
        id="containerSeasons"
        className={`${classes.contentSeasonsVertical}`}
      >
        <div className={classes.contentModalTitle}>
          <TitleVcard title={info.title} noWrap maxWidth={365} />
        </div>
        <ul className={`${classes.verticalList}`}>
          {seasons.map((season, i) => {
            const isLast = i === seasons.length - 1;
            return (
              <li>
                <a
                  id={`season-${parseInt(season.number, 10)}`}
                  key={i}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    if (seasonActive !== season.number) {
                      setSeasonActive(parseInt(season.number, 10));
                      setEpisodes(season.episodes);
                    }
                  }}
                  onKeyUp={(e) => {
                    e.preventDefault();

                    if (seasonActive !== season.number) {
                      setSeasonActive(parseInt(season.number, 10));
                      setEpisodes(season.episodes);
                    }
                  }}
                  className={`focusable ${classes.buttom} ${
                    seasonActive === parseInt(season.number, 10)
                      ? `${classes.activeClass} seasonActive`
                      : ""
                  }`}
                  data-sn-up={i === 0 ? "" : null}
                  data-sn-down={isLast ? "" : null}
                  data-sn-left={""}
                  data-sn-right={"@episodes"}
                >
                  {`${t("season", "Temporada")} ${season.number}`}
                  <span>{season.episodes.length} Capitulos</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id="containerEpisodes"
        ref={refContainer}
        className={`${classes.contentEpisodesVertical}`}
      >
        <RibbonsVertical
          focusHandler={() => {}}
          scrollToTop={false}
          snLeft={"@seasons"}
          snRight={""}
          title="episodes"
          isSerie={true}
          items={episodes.map((item) => {
            const itemFinal = getItemProperties({
              item,
              version: "v5.86",
            });
            const imaCard = get(
              item,
              "external.gracenote.assets.iconic_16_9_e"
            );

            return {
              ...itemFinal,
              vistime: item.vistime,
              dubbed: get(item, "media.language.dubbed"),
              subbed: get(item, "media.language.subbed"),
              imageCard: imaCard && resizeImage(imaCard, 290),
              title: item.title_episode,
              clickHandler: () => {
                onClick(itemFinal.group_id);
              },
            };
          })}
        />
      </div>
    </div>
  );
};

export default React.memo(Seasons);
