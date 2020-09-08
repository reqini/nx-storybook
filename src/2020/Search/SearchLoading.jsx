import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import LoadingComponent from "../Loading/LoadingComponent";
import Message from "../Messages/message";
import TextMessages from "../Typography/TextMessages";

import imagePopcorn from "../Icons/Messages/net_contenido_alquilado_sin_contenido.svg";
import imagePopcornInicio from "../Icons/Messages/net_vcard_renta_exito.svg";

const useStyles = makeStyles((theme) => ({
  searchNoResult: {
    fontWeight: 500,
    top: 0,
    left: 0,
  },
  messageTwo: {
    minWidth: 500,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    paddingBottom: 15,
  },
  subTitle: {
    color: theme.palette.titleMessages.main,
    fontSize: 23,

    "& strong": {
      color: "#fff",
      fontSize: 23,
    },
  },
  contentLoadingSearch: {
    position: "relative",
    width: "100%",
    height: 300,
  },
}));

const RenderLoading = ({ result, input, loading }) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();

  if (loading) {
    return (
      <div className={classes.contentLoadingSearch}>
        <LoadingComponent background="transparent" title="Buscando" />
      </div>
    );
  }

  if (!input || input.length === 0) {
    return (
      <div className={`${classes.searchNoResult}`}>
        <Message image={imagePopcornInicio} height={300}>
          <TextMessages
            title={t("net_ningun_resultado123", "busque e descubra")}
            textContent={t(
              "search_result_no_resultado3123",
              "Encontre o que você quer assitir"
            )}
          />
        </Message>
      </div>
    );
  }

  return (
    <div className={`${classes.searchNoResult} results`}>
      {(!result || result.length === 0) && (
        <Message image={imagePopcorn} height={300}>
          <p className={classes.messageTwo}>
            <span className={classes.title}>
              <strong>{t("net_ningun_resultado", "ooops!")}</strong>
            </span>
            <span className={classes.subTitle}>
              {t("search_result_no_resultado2", "Não encontramos nada sobre ")}
              <strong>{input}</strong>
            </span>
            <span className={classes.subTitle}>
              {t(
                "search_result_no_resultado3",
                "Tente uma nova busca com outro nome."
              )}
            </span>
          </p>
        </Message>
      )}
    </div>
  );
};

export default RenderLoading;
