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
    fontSize: "40px",
  },
  content: {
    width: "70%",
    textAlign: "center",
    margin: 0,
    fontSize: "25px",
    lineHeight: "36px",
    fontWeight: "400",
    color: "gray",
  },
}));

const BuyError = ({ text, content, onClose }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  let msg =
    content ||
    t(
      "net_error_firma_tarjeta",
      "- No cuentas con un medio de pago, para ingresar uno, abre la aplicacion desde un dispositivo movil"
    );

  const logo = t("asset.net_contenido_alquilado_contenido_removido");

  return (
    <div className={classes.container}>
      <img src={logo} alt="" height="150" />
      <h3 className={classes.title}>{t("net_ningun_resultado", "ooops!")}</h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split(".").join(". <br/>"),
        }}
      />
      <div className={`modal-buttons-horizontal`}>
        <ButtonGeneric
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          title={text || t("net_cerrar_sin_medio_de_pago", "Cerrar")}
        />
      </div>
    </div>
  );
};

export default BuyError;
