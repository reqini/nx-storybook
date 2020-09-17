import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import ButtonGeneric from "../../Buttons/ButtonGeneric";

const Logo = ({ style }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 20 20">
      <title>alert</title>
      <path style={{ fill: "yellow" }} d="M19.64 16.36L11.53 2.3A1.85 1.85 0 0 0 10 1.21 1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z" />
    </svg>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    margin: "10px 0px 15px 0px !important",
    padding: "0px 20px",
    fontSize: "40px",
  },
  content: {
    margin: 0,
    fontSize: "25px",
    lineHeight: "36px",
    fontWeight: "400",
    color: "gray",
  },
}));

const ShowError = ({ onClose = () => {} }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const msg = t("net_error_conexion_internet", "Você está sem conexão com a intenert");

  return (
    <div className={classes.container}>
      <Logo alt="" style={{ height: 100 }} />
      <h3 className={classes.title}>{t("net_alugados_contenido_no_disponible_ooops", "ooops!")}</h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split(".").join(". <br/>"),
        }}
      />
      <ButtonGeneric
        onClick={(e) => {
          e.preventDefault();
          // onClose();
        }}
        title={"tentar novamente"}
      />
    </div>
  );
};

export default React.memo(ShowError);
