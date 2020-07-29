import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Device from "../../../../devices/device";
import DeviceStorage from "../../../DeviceStorage/DeviceStorage";
import ButtonGeneric from "../../Buttons/ButtonGeneric";
import Translator from "../../../../requests/apa/Translator";
import { Logout } from "../../../../requests/loader";

const useStyles = makeStyles(() => ({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  contentCenter: {
    textAlign: "center",
    maxWidth: 550,
  },
  title: {
    //marginBottom: 100,
    fontWeight: 400,
  }
}));

const Exit = ({ onClose, user, history }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const getFocus = () => {
    setTimeout(() => {
      window.SpatialNavigation.focus("@modal-new");
    }, 200);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      getFocus();
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    getFocus();
  }, [loading]);

  if (loading) {
    return null;
  }

  const handleLogout = async () => {
    console.log('[EXIT] -- init.')
    try{
      const result = await Logout(); // api y storage
    }catch(e){
      console.error('[EXIT] -- ERROR:',e)
    }
    console.log('[EXIT] -- out.')
  };

  return (
    <div className={classes.modalContainer}>
      <div className={classes.contentCenter}>
        <h2 className={classes.title}>{Translator.get("net_salir_confirmar", "sair")}</h2>
        <ButtonGeneric
          href="javascript:void(0)"
          onClick={(e)=>{handleLogout()}}
          title={Translator.get("exit_btn_exit_txt", "Sair")}
        />
        <ButtonGeneric
          href="javascript:void(0)"
          onClick={(e) => onClose()}
          title={Translator.get("exit_btn_cancel_txt", "Cancelar")}
        />
      </div>
    </div>
  );
};

export default withRouter(Exit);
