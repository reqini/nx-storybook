import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";

import RibbonSimple from "../../Ribbon/RibbonsPrueba";

import { getItemProperties } from "../../resizeTmp";

const useStyles = makeStyles({
  container: {
    width: "100%",
    position: "absolute",
    padding: "20px",
    boxSizing: "border-box",
  },
  resume: {
    height: "200px",
    margin: 0,
    padding: 0,
    marginLeft: 130,
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  containerBack: {
    width: 80,
  },
  flexElenco: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "40px",
  },
  title: {
    margin: "0 0 5px 0",
    fontSize: 40,
    padding: 0,
  },
  avatar: {
    width: 160,
    height: 160,
    fontSize: 45,
    marginRight: 30,
    fontWeight: 500,
    background: "#212224",
    color: "#c0c0c0",
  },
  image: () => ({
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundRepeat: "no-repeat",
    backgroundSize: 160,
    backgroundPosition: "center",
    marginRight: 30,
  }),
  info: {
    height: "250px",
    width: "100%",
  },
});

const nameToInitials = (name) => {
  if (!name) return "";

  return name
    .split(" ")
    .map((item) => item.charAt(0))
    .join("")
    .toUpperCase();
};

const ModalElenco = ({
  onClose = () => {},
  talent = {},
  charge,
  setFocus = () => {},
  handleVcard = () => {},
  api = () => {},
}) => {
  const classes = useStyles({ imageTalent });
  const { t, i18n } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const name =
    get(talent, "name") || get(talent, "first_name") || get(talent, "title");
  const lastName = get(talent, "surname") || get(talent, "last_name");
  const imageTalent =
    get(talent, "imageCard") || get(talent, "image") || get(talent, "cover");

  useEffect(() => {
    const getTalentData = async (id) => {
      if (id) {
        const data = await api.vertical(id, "TALENT");

        const result = get(data, "groups", []);
        setMovies(result.filter((item) => item.is_series === false));
        setSeries(result.filter((item) => item.is_series === true));
        setIsLoading(false);
      }
    };

    getTalentData(
      (talent.internal_ids && talent.internal_ids[0]) || talent.group_id
    );
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (setFocus) {
        setTimeout(() => {
          setFocus();
        }, 500);
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={`${classes.flexElenco}`}>
        {imageTalent ? (
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${imageTalent})` }}
          />
        ) : (
          <Avatar className={classes.avatar}>
            {`${nameToInitials(name)} ${nameToInitials(lastName)}`}
          </Avatar>
        )}
        <h2 className={classes.title}>{`${name || ""} ${lastName || ""}`}</h2>
      </div>
      <Grid container spacing={0}>
        {movies.length > 0 && (
          <div className={`${classes.info}`}>
            {movies.length > 0 && (
              <RibbonSimple
                isFirst={true}
                isLast={series.length === 0}
                api={api}
                prefixId={"talent"}
                index={0}
                snLeft=""
                key={0}
                type="landscape"
                title={t("net_elenco_filmes", "Filmes")}
                items={movies.map((item) => {
                  return {
                    ...getItemProperties({
                      item,
                      version: "v5.86",
                    }),
                    clickHandler: () => {
                      onClose();
                      handleVcard(item);
                      charge && charge(item.id);
                    },
                  };
                })}
              />
            )}
          </div>
        )}
        <div className={`${classes.info}`}>
          {series.length > 0 && (
            <RibbonSimple
              isFirst={movies.length === 0}
              isLast={true}
              api={api}
              prefixId={"talent"}
              index={1}
              snLeft=""
              key={1}
              type="landscape"
              title={t("net_elenco_series", "séries")}
              items={series.map((item) => {
                return {
                  ...getItemProperties({
                    item,
                    version: "v5.86",
                  }),
                  clickHandler: () => {
                    onClose();
                    handleVcard(item);
                    charge && charge(item.id);
                  },
                };
              })}
            />
          )}
        </div>
      </Grid>
    </div>
  );
};

export default ModalElenco;
