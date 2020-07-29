import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";

import * as api from "../../../requests/loader";
import Device from "../../../devices/device";

import LinearProgress from "@material-ui/core/LinearProgress";
import CardRents from "../Cards/CardRents";

import ButtonBack from "../Buttons/ButtonBack";

const useStyles = makeStyles(() => ({
  constainer: {
    display: "flex",
    widht: "100%",
    height: "100%",
  },
  nextEpisode: () => ({
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: 300,
    height: 230,

    right: 0,
    marginRight: 30,
    marginBottom: 30,

    "&:focus": {
      backgroundSize: 55,
      height: 55,
      width: 55,
    },
  }),
}));

const getNextEpisode = (actualNumber, actualSeason, totalSeasons, episodes) => {
  if (episodes[actualSeason - 1].episodes.length > actualNumber) {
    return {
      episode: actualNumber + 1,
      season: actualSeason,
      item: episodes[actualSeason - 1].episodes[actualNumber],
    };
  } else {
    if (totalSeasons > actualSeason) {
      return {
        episode: 1,
        season: actualSeason + 1,
        item: episodes[actualSeason].episodes[0],
      };
    }
  }
  return false;
};

const getPayway = async (groupId) => {
  let payway = false;
  const offers = await api.GetOffersZUP({
    groupId: groupId,
  });

  offers.response.offers.map((e) => {
    if (!payway) {
      payway = e.purchase_data && e.purchase_data.payway_token_play;
    }
  });
  return payway;
};

const Buy = ({ id, onClose, handlePlay }) => {
  const classes = useStyles();

  const [payway, setPayway] = React.useState(false);
  const [nextItem, setNextItem] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [completed, setCompleted] = React.useState(0);

  const handleKeyPress = (e) => {
    const keys = Device.getDevice().getKeys();
    const currentKey = keys.getPressKey(e.keyCode) || null;

    switch (currentKey) {
      case "BACK":
        // e.preventDefault();
        // e.stopPropagation();
        onClose();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);

    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }
    setInterval(progress, 1000);

    async function fetchData() {
      const resultData = await api.contentData(id);
      const resultDataSerie = await api.contentSerie(id);

      const episode = get(
        resultData,
        "group.common.extendedcommon.media.episode"
      );

      const nextEpisode = getNextEpisode(
        Number(episode.number),
        Number(episode.season),
        Number(resultDataSerie.seasons_count),
        resultDataSerie.seasons
      );

      if (nextEpisode) {
        // if (!handlePlay) {
        const resultPayway = await getPayway(nextEpisode.item.id);

        setPayway(resultPayway);
        // }
        setNextItem({ ...nextEpisode.item, ...nextEpisode });
      }
      setCurrentItem(episode);
      setLoading(false);
      setTimeout(() => {
        window.SpatialNavigation.focus("@modal-new");
      }, 500);
    }

    fetchData();

    return () => {
      document.removeEventListener("keydown", handleKeyPress, true);
    };
  }, []);

  if (loading) {
    return null;
  }

  // if (!nextItem || !payway) {
  if (!nextItem) {
    onClose();
    return null;
  }

  if (completed == 100) {
    handlePlay(nextItem, payway);
    onClose();
  }

  return (
    <div className={classes.container} style={{ background: "transparent" }}>
      <ButtonBack
        onClick={() => {
          onClose();
        }}
      />
      <div className={classes.nextEpisode}>
        <CardRents
          isFocusable
          width={290}
          height={225}
          image={nextItem.image_large}
          title={`T:${currentItem.season} E:${nextItem.episode} - ${nextItem.title_episode}`}
          subTitle={`próximo episódio em ${10 - completed / 10} segundos`}
          clickHandler={() => {
            handlePlay(nextItem, payway);
          }}
          progressLine={
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={completed}
            />
          }
        />
      </div>
    </div>
  );
};

export default Buy;
