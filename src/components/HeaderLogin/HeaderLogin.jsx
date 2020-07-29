import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Translator from "./../../../requests/apa/Translator";

import imageLogo from "../Icons/App/net_launch_logo_claro.png";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "27px",
    left: "17px",
  },
  img: {
    position: "absolute",
    left: "20px",
    width: "100px",
  },
  title: {
    margin: 0,
    width: "91px",
    position: "absolute",
    left: "133px",
    top: "11px",
    fontWeight: "500",
  },
}));

const HeaderLogin = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.img} src={imageLogo} alt="Claro Logo" />
      <div>
        <h2 className={classes.title}>
          {Translator.get("net_usuario", "Login")}
        </h2>
      </div>
    </div>
  );
};

export default React.memo(HeaderLogin);
