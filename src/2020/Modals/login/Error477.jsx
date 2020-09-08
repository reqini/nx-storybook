import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import ButtonGeneric from "../../Buttons/ButtonGeneric";

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
    fontSize: "35px",
  },
  content: {
    textAlign: "center",
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
    "net_data_update",
    "Identificamos que você já é um cliente. Agora, precisamos atualizar seus dados. Acesse o aplicativo NX1 no seu celular para atualização!"
  );

  return (
    <div className={classes.container}>
      <img src={t("asset.net_vcard_renta_exito")} alt="" height="160" />
      <h3 className={classes.title}>
        {t("net_data_update_title", "que legal!")}
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
          onClose();
        }}
        title={t("net_cerrar_sin_medio_de_pago", "entendi")}
      />
    </div>
  );
};

export default showError;
