import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Translator from "../../../../requests/apa/Translator";

const useStyles = makeStyles((theme) => ({
  modalOverlay: {
    width: theme.sizeBody.hd.width,
    height: theme.sizeBody.hd.height,
    position: "fixed",
    zIndex: "9999",
    textAlign: "center",
    display: "table",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 1)",
    color: theme.palette.textColor.main,
  },
  modalContainer: {
    display: "table-cell",
    verticalAlign: "middle",
  },
  modalContent: {
    "& p": {
      "& b": {
        padding: "0px 10px 0px 0px",
      },
    },
  },
  modalText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 400,
    color: "gray",
  },
  containerButton: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
}));

const BuyRent = ({
  period,
  DurationRenta,
  priceStart,
  priceEnd,
  lastDigits,
  RenderButtonBuy,
}) => {
  let compra = `
    ${Translator.get(
      "net_confirm_compra",
      "A compra ser\u00e1 feita no valor de"
    )} ${priceStart === "" ? 0 : priceStart},${priceEnd}
    ${Translator.get(
      "net_confirm_compra2",
      "cobrado no seu cart\u00e3o, terminado em"
    )} ${lastDigits}`;

  let renta = `
    ${Translator.get(
      "net_confirm_renta",
      "A compra ser\u00e1 feita no valor de"
    )} ${DurationRenta}
    ${Translator.get("net_confirm_renta2", "horas por R$")} ${
    priceStart === "" ? 0 : priceStart
  },${priceEnd}
    ${Translator.get(
      "net_confirm_renta3",
      "e ser\u00e1 debitado no seu cart\u00e3o de cr\u00e9dito com final"
    )} ${lastDigits}`;

  const classes = useStyles();

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContainer}>
        <div className={classes.modalContent}>
          <p className={classes.modalText}>
            {period === "HOUR" ? renta : compra}
          </p>
        </div>
        <div className={classes.containerButton}>
          {RenderButtonBuy({ title: null, subTitle: null })}
        </div>
      </div>
    </div>
  );
};

export default BuyRent;
