import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import Message from "../../../../components/2020/Messages/message";
import TextMessages from "../../../../components/2020/Typography/TextMessages";
import ButtonGeneric from "../../../../components/2020/Buttons/ButtonGeneric";

import ImageMessage from "../../Icons/Messages/net_contenido_alquilado_sin_contenido.svg";

const useStyles = makeStyles((theme) => ({
  landscape: () => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
  }),
  title: () => ({
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 10,
    margin: 0,
    marginLeft: 7,
  }),
}));

const ErrorApi = ({ getData = () => {}, title = false }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.landscape}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <Message image={ImageMessage}>
        <TextMessages
          title={t("net_ningun_resultado", "ooops!")}
          textContent={t(
            "net_error_carga_alquilados",
            "Aconteceu um erro ao carregar o conteúdo"
          )}
          action={
            <ButtonGeneric
              href="#"
              onClick={(e) => {
                e.preventDefault();
                getData();
              }}
              title={t("btn_menu_retry", "intentar de nuevo")}
            />
          }
        />
      </Message>
    </div>
  );
};

export default ErrorApi;
