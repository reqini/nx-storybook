import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import ButtonGeneric from "components/Atoms/Buttons/ButtonGeneric";

const useStyles = makeStyles(() => ({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  contentCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 550,
  },
  title: {
    fontWeight: 400,
  },
}));

const Exit = ({ onClose, logout = () => {} }) => {
  const { t, i18n } = useTranslation();
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
    try {
      const result = await logout();
    } catch (e) {
      console.error("[EXIT] -- ERROR:", e);
    }
  };

  return (
    <div className={classes.modalContainer}>
      <div className={classes.contentCenter}>
        <h2 className={classes.title}>{t("net_salir_confirmar", "sair")}</h2>
        <ButtonGeneric
          onClick={(e) => {
            handleLogout();
          }}
          title={t("exit_btn_exit_txt", "Sair")}
        />
        <ButtonGeneric
          onClick={(e) => onClose()}
          title={t("exit_btn_cancel_txt", "Cancelar")}
        />
      </div>
    </div>
  );
};

export default Exit;
