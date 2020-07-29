import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { makeStyles } from "@material-ui/core/styles";

import { translate } from "../../../../utils/Translate";
import Translator from "../../../../requests/apa/Translator";

import RibbonSimple from "../../../../components/2020/Ribbon/RibbonsPrueba";
import TitleRibbons from "../../../../components/2020/Typography/TitleRibbons";

import { Modal } from "../../../../containers/App/Modal";

import BuyPlan from "./Buy";

const useStyles = makeStyles((theme) => ({
  global: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    height: "100%",
    padding: 20,
    paddingRight: 25,
    boxSizing: "border-box",
  },
  contentSearch: {
    display: "flex",
    justifyContent: "center",
    height: 100,
    "& p": {
      fontSize: 26,
      maxWidth: 560,
      textAlign: "center",
      marginTop: 25,
      lineHeight: "38px",
    },
  },
  info: {
    height: "320px",
    width: "100%",
  },
}));

const PlansPage = ({
  info = false,
  listPlans = [],
  listAddons = [],
  onClose,
  isPopup = false,
  refresh = () => {},
  playFullMedia = () => {},
}) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titlePlanos = Translator.get("net_planos_menu_vertical", "planos");
  const titleOutrosConteudos = Translator.get(
    "net_planos_outro_contenido",
    "outros conteudos"
  );

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div className={classes.global}>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {({ setFocus }) => {
            return (
              <BuyPlan
                setFocus={setFocus}
                isPopup={isPopup}
                price={isModalOpen.totalPrice}
                item={isModalOpen}
                onClose={closeModal}
                refresh={refresh}
                playFullMedia={playFullMedia}
                info={info}
              />
            );
          }}
        </Modal>
      )}

      <div className={classes.contentSearch}>
        <p>{translate("net_planos_description")}</p>
      </div>

      <div className={`${classes.info}`}>
        {listPlans.length === 0 ? (
          <div className="ribbon">
            <div className="ribbon-container error-rents-message">
              <TitleRibbons title={titlePlanos} spanTag marginB={0} />
              <p>
                <b>
                  {Translator.get(
                    "net_alugados_sin_contenido_",
                    "não há dados"
                  )}
                </b>
              </p>
            </div>
          </div>
        ) : (
          <RibbonSimple
            index={0}
            handleDownDisable={true}
            snDown={"#-1-0"} // adonde ir cuando voy hacia abajo ( ir al primer elemento del ribbon)
            blockSnLeft={isPopup}
            key={1}
            type="plans"
            title={titlePlanos}
            items={listPlans.map((item, i) => {
              let price =
                String(item.totalPrice.amount).length > item.totalPrice.scale
                  ? String(item.totalPrice.amount)
                  : String(item.totalPrice.amount).padStart(
                      item.totalPrice.scale + 1,
                      0
                    );

              const period = get(item, "validity.period");
              const duration = get(item, "validity.duration");
              const unlimited = get(item, "items");
              let recurrence = [];

              for (const i in unlimited) {
                recurrence = unlimited[i];
              }

              return {
                id: item.catalogId,
                countItems: get(item, "items.length"),
                live: get(item, "LIVE.length"),
                planTitle: item.name,
                imageCard: get(item, "offerParameters.BANNER_URL"),
                price: {
                  wholeNumber: String(price).slice(0, -item.totalPrice.scale),
                  decimals: String(price).slice(-item.totalPrice.scale),
                  currency: Translator.get("net_planos_precio", "R$"),
                },
                channels: item.items.filter((item, i) => i < 5),
                duration: period === "DAY" && duration ? "/" + duration : "",
                period:
                  period === "MONTH" && duration && recurrence.recurrent
                    ? Translator.get("net_planos_mes", "/mes")
                    : period === "MONTH" &&
                      duration === 1 &&
                      recurrence.recurrent === false
                    ? Translator.get("net_planos_mes", "/mes") +
                      " (s/recorrência)"
                    : period === "DAY" &&
                      duration &&
                      recurrence.recurrent === false
                    ? " dias (s/recorrência)"
                    : " dias",
                unlimited: recurrence.recurrent,
                clickHandler: () => {
                  setIsModalOpen({ ...item, type: "plan" });
                },
              };
            })}
          />
        )}
      </div>
      <div className={`${classes.info}`}>
        {listAddons.length === 0 ? (
          <div className="ribbon">
            <div className="ribbon-container error-rents-message">
              <TitleRibbons title={titleOutrosConteudos} spanTag marginB={0} />
              <p>
                <b>
                  {Translator.get(
                    "net_alugados_sin_contenido_",
                    "não há dados"
                  )}
                </b>
              </p>
            </div>
          </div>
        ) : (
          <RibbonSimple
            index={1}
            snUp={"#-0-0"} // adonde ir cuando voy hacia arriba ( ir al primer elemento del ribbon)
            handleDownDisable={true}
            blockSnLeft={isPopup}
            key={2}
            type="plans-channels"
            title={titleOutrosConteudos}
            items={listAddons.map((item) => {
              let price =
                String(item.totalPrice.amount).length > item.totalPrice.scale
                  ? String(item.totalPrice.amount)
                  : String(item.totalPrice.amount).padStart(
                      item.totalPrice.scale + 1,
                      0
                    );

              const period = get(item, "validity.period");
              const duration = get(item, "validity.duration");
              const unlimited = get(item, "items");
              let recurrence = [];

              for (const i in unlimited) {
                recurrence = unlimited[i];
              }

              return {
                id: item.catalogId,
                countItems: item.items.length,
                imageCard: get(
                  item,
                  "items[0].composition.systemParameters.IMAGE_URL"
                ),
                planTitle:
                  item.offerParameters &&
                  item.offerParameters.SHORT_DESCRIPTION,
                price: {
                  wholeNumber: String(price).slice(0, -item.totalPrice.scale),
                  decimals: String(price).slice(-item.totalPrice.scale),
                  currency: Translator.get("net_planos_precio", "R$"),
                },
                channels: [get(item, "items[0]")], // solo el primer logo
                duration: period === "DAY" && duration ? "/ " + duration : "",
                period:
                  period === "MONTH" && duration && recurrence.recurrent
                    ? Translator.get("net_planos_mes", "/mes")
                    : period === "MONTH" &&
                      duration === 1 &&
                      recurrence.recurrent === false
                    ? Translator.get("net_planos_mes", "/mes") +
                      " (s/recorrência)"
                    : period === "DAY" &&
                      duration &&
                      recurrence.recurrent === false
                    ? " dias (s/recorrência)"
                    : Translator.get("net_planos_day", "/dia"),
                unlimited: recurrence.recurrent,
                clickHandler: () => {
                  setIsModalOpen({ ...item, type: "plan-channel" });
                },
              };
            })}
            slidesToShow={4.1}
          />
        )}
      </div>
    </div>
  );
};

export default PlansPage;
