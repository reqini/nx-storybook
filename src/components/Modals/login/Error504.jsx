import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Translator from "../../../../requests/apa/Translator";
import Asset from "../../../../requests/apa/Asset";
import ButtonGeneric from "../../Buttons/ButtonGeneric";

const useStyles = makeStyles(() => ({
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

const showError = ({ onClose = () => {}, getData = () => {} }) => {

  const classes = useStyles();

  const imagePopcorn = require('../../Icons/Messages/net_contenido_alquilado_sin_contenido.png');

  let msg = Translator.get(
    "net_error_carga_alquilados",
    "Aconteceu um erro ao carregar o conteúdo"
  );

  return (
    <div className={classes.container}>
      <img
        src={imagePopcorn}
        alt=""
        height="160"
      />
      <h3 className={classes.title}>
        {Translator.get("net_alugados_contenido_no_disponible_ooops", "ooops!")}
      </h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split(".").join(". <br/>"),
        }}
      />
      <ButtonGeneric
        href="#"
        onClick={(e) => {
          e.preventDefault();
          getData();
        }}
        title={Translator.get("btn_menu_retry", "tentar novamente")}
      />
      <ButtonGeneric
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
        title={Translator.get("btn_modal_cancel", "cancelar")}
      />
    </div>
  );
};

export default showError;
