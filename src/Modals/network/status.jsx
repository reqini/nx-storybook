import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import ButtonGeneric from "../../Buttons/ButtonGeneric";
import LogoError from "../../Icons/icon_Alert_x1.svg";

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

const showError = ({ onClose = () => {} }) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  let msg = t(
    "net_error_conexion_internet",
    "Você está sem conexão com a intenert"
  );

  return (
    <div className={classes.container}>
      <img src={LogoError} alt="" height="100" />
      <h3 className={classes.title}>
        {t("net_alugados_contenido_no_disponible_ooops", "ooops!")}
      </h3>
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

export default showError;
