import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";

import Translator from "../../../../requests/apa/Translator";

import Gradient from "../../Gradients/Gradient";
import ButtonGeneric from "../../Buttons/ButtonGeneric";
import ButtonBack from "../../Buttons/ButtonBack";
import imageLogo from "../../Icons/App/net_launch_logo_claro.png";

const useStyles = makeStyles((theme) => ({
  container03: {
    width: 900,
    height: theme.sizeBody.hd.height,
    position: "absolute",
    //padding: "30px 70px",
    padding: "30px 70px 0 70px",
    boxSizing: "border-box",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    "& h2": {
      fontSize: 28,
      fontWeight: "400",
      margin: "10px 0",
    },

    "& h3": {
      fontSize: 24,
      paddingTop: 20,
      margin: 0,
    },
  },
  contChannelsItems: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
  itemList: {
    padding: 0,
    margin: 0,
    marginTop: 5,
    boxSizing: "border-box",

    "& li": {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      width: 90,
      float: "left",
      margin: 8,
    },
  },
  item: {
    textDecoration: "none",
    boxSizing: "border-box",

    "& img": {
      height: 50,
    },

    "&:focus": {
      "& div": {
        background: theme.palette.primary.main, // tratemos de manejar el theme "#47536b",
      },
    },
  },
  itemImage: {
    background: "hsla(0,7%,77%,.3)",
    borderRadius: "50%",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    height: 90,
  },
  itemTitle: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    //textTransform: "lowercase",
  },
  ButtonContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    background: theme.palette.colorModal.main,
    right: 0,
    top: 0,
    height: theme.sizeBody.hd.height,
  },
  ButtonTitle: {
    width: "100%",
    boxSizing: "border-box",
    textAlign: "left",
    padding: "0 50px",
    lineHeight: "40px",
    fontSize: 28,
    fontWeight: "400",
    margin: 0,
  },
  pricePlans: {
    textAlign: "left",
    width: "100%",
    padding: "0 50px",
    boxSizing: "border-box",
    color: "white",
    position: "relative",

    "& p": {
      margin: "10px 0",

      "& b": {
        fontSize: 28,
        fontWeight: 500,
        verticalAlign: "middle", // ojo con estos aprametros y los nvegadores ,
      },
    },
  },
}));

const BuyPlan = ({
  SetScreen,
  onClose,
  item,
  priceStart,
  priceEnd,
  RenderButtonBuy,
  info,
}) => {
  const classes = useStyles();
  const purchased = item.purchased || false;
  const titleTrans =
    item.type !== "plan" ? "net_deseja_assinar" : "net_deseja_assinar_o_plano";
  const unlimited = get(item, "items");
  let recurrence = [];
  for (const i in unlimited) {
    recurrence = unlimited[i];
  }

  return (
    <div>
      <div
        style={{
          height: 720,
          width: 900,
          backgroundImage: `url(${item.offerParameters.BANNER_URL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.2,
          position: "absolute",
          zIndex: 0,
        }}
      />
      {item.type !== "plan" ? (
        <div className={classes.container03}>
          {/* item.items.length > 12 && <Gradient /> */}
          <div style={{ display: "flex" }} id="modalButtons">
            {purchased && (
              <ButtonBack
                id="list-channel-back"
                onClick={() => {
                  onClose();
                }}
              />
            )}
            <img
              src={imageLogo}
              alt="netflex"
              style={{ width: "auto", height: 40, marginBottom: 20 }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <img
              src={item.offerParameters.LOGO_URL}
              alt={item.offerParameters.SHORT_DESCRIPTION}
            />
          </div>
          <h2>{item.offerParameters.SHORT_DESCRIPTION}</h2>
        </div>
      ) : (
        <div className={classes.container03}>
          {/* item.items.length > 12 && <Gradient /> */}
          <div style={{ display: "flex" }} id="modalButtons">
            {purchased && (
              <ButtonBack
                id="list-channel-back"
                tabIndex="0"
                onClick={() => {
                  onClose();
                }}
              />
            )}
            <img
              src={imageLogo}
              alt="netflex"
              style={{ width: "auto", height: 40, marginBottom: 30 }}
            />
          </div>
          <h2>{item.name}</h2>
          <h3>{item.offerParameters.SHORT_DESCRIPTION}</h3>
          <div className={classes.contChannelsItems}>
            <h3>
              {Translator.get("net_planos_outro_contenido", "outros conteudos")}
            </h3>
            <ul className={classes.itemList} style={{ overflow: "visible" }}>
              {item.SVOD &&
                item.SVOD.map((data, id) => {
                  return (
                    <li key={id}>
                      <a
                        href="#"
                        //className={`${classes.item} focusable`}
                        className={`${classes.item}`}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className={classes.itemImage}>
                          <img
                            src={data.composition.systemParameters.IMAGE_URL}
                            alt={data.composition.systemParameters.DISPLAY_NAME}
                          />
                        </div>
                        <Typography
                          className={classes.itemTitle}
                          noWrap
                          variant="h5"
                          component="h5"
                        >
                          {data.composition.systemParameters.DISPLAY_NAME}
                        </Typography>
                      </a>
                    </li>
                  );
                })}
            </ul>
            <h3>{`canais ${item.name}`}</h3>
            <ul className={classes.itemList}>
              {item.LIVE &&
                item.LIVE.map((data, id) => {
                  return (
                    <li key={id}>
                      <a
                        href="#"
                        //className={`${classes.item} focusable`}
                        className={`${classes.item}`}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className={classes.itemImage}>
                          <img
                            src={data.composition.systemParameters.IMAGE_URL}
                            alt={data.composition.systemParameters.DISPLAY_NAME}
                          />
                        </div>
                        <Typography
                          className={classes.itemTitle}
                          noWrap
                          variant="h5"
                          component="h5"
                        >
                          {data.composition.systemParameters.DISPLAY_NAME}
                        </Typography>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      {purchased ? (
        <div className={`${classes.ButtonContainer}`}>
          <h2>
            {Translator.get("net_planos_already_bought_title", "ya comprado")}
          </h2>
          <h3>
            {Translator.get(
              "net_planos_already_bought_info",
              "mensaje ya comprado"
            )}
          </h3>
        </div>
      ) : (
        <div
          id="modalButtons"
          className={`${classes.ButtonContainer} default-item`}
        >
          <h2 className={classes.ButtonTitle}>
            {info.title
              ? `${Translator.get(titleTrans, "Deseja assinar")} ${
                  item.name
                }${Translator.get("net_dejeja_assinar_signo_pregunta", "?")}`
              : Translator.get(
                  "net_assinatura_confirmacion1",
                  "A compra ser\u00e1 feita no valor de"
                )}
          </h2>
          <div className={classes.pricePlans}>
            <p>
              {Translator.get("net_planos_precio", "R$")}
              <b>{priceStart === "" ? 0 : priceStart}</b>,{priceEnd}
              {item.validity.period === "MONTH" &&
              item.validity.duration &&
              recurrence.recurrent
                ? Translator.get("net_planos_mes", "/mes")
                : item.validity.period === "MONTH" &&
                  item.validity.duration === 1 &&
                  recurrence.recurrent === false
                ? Translator.get("net_planos_mes", "/mes") + " (s/recorrência)"
                : item.validity.period === "DAY" &&
                  item.validity.duration &&
                  recurrence.recurrent === false
                ? "/ " + item.validity.duration + " dias (s/recorrência)"
                : "/ " + item.validity.duration + " dias"}
            </p>
          </div>
          <ButtonGeneric
            onClick={(e) => {
              SetScreen(2);
            }}
            title={Translator.get("net_assinar", "assinar")}
          />
          <ButtonGeneric
            onClick={(e) => onClose()}
            title={Translator.get("btn_modal_cancel", "Cancelar")}
          />
        </div>
      )}
    </div>
  );
};

export default BuyPlan;
