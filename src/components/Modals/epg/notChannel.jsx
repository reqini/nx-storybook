import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGeneric from "../../Buttons/ButtonGeneric";
import Translator from "../../../../requests/apa/Translator";
import Asset from "../../../../requests/apa/Asset";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0 0 0",
    fontSize: "37px",
  },
  content: {
    marginTop: "25px",
    fontSize: "25px",
    lineHeight: "0px",
    fontWeight: "400",
    color: "gray",
  },
  contentLogo: {
    position: "absolute",
    top: 20,
    left: 20,
  }
}));

const showError = ({ channel, onClose = () => {} }) => {
  const classes = useStyles();
  const history = useHistory();

  const { number, image, name } = channel;
  const imageLogo = require('../../Icons/App/net_launch_logo_claro.png');
  const msg = `${Translator.get(
    "net_canal_bloqueado",
    "Este canal não faz parte de seu plano de assinatura "
  )}`;

  return (
    <div className={classes.container}>
      <div className={classes.contentLogo}>
        <img
          src={imageLogo}
          alt="netflex"
          style={{ height: 40 }}
        />
      </div>

      <h3 className={classes.title}>
        {number}
        <img
          style={{ padding: 0, margin: "0 20px", width: "90px" }}
          src={image || ""}
          alt={name || ""}
        />
      </h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split(".").join(". <br/>"),
        }}
      />
      <ButtonGeneric
        href="javascript:void(0)"
        onClick={(e) => {
          onClose();
          history.push({
            pathname: "/plans",
            state: { channel: channel },
          });
        }}
        title={'ver planos'}
      />
      <ButtonGeneric
        href="javascript:void(0)"
        onClick={(e) => onClose()}
        title={Translator.get("net_back_registro_dispositivo", "Cerrar")}
      />
    </div>
  );
};

export default showError;
