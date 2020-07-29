import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Translator from "../../../../requests/apa/Translator";
import ButtonGeneric from "../../Buttons/ButtonGeneric";
import LogoError from "./icons/icon_Alert_x1.png";

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
  const classes = useStyles();

  let msg = Translator.get(
    "net_error_conexion_internet",
    "Você está sem conexão com a intenert"
  );

  return (
    <div className={classes.container}>
      <img src={LogoError} alt="" height="100" />
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
          // onClose();
        }}
        title={"tentar novamente"}
      />
    </div>
  );
};

export default showError;
