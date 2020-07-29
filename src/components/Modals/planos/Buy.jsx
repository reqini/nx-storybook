import React from "react";
import { CircularProgress } from "@material-ui/core";
import get from "lodash/get";

import ButtonGeneric from "../../Buttons/ButtonGeneric";
import Translator from "../../../../requests/apa/Translator";
import * as api from "../../../../requests/loader";
import ZUPUtils from "../../../../utils/ZUPUtils";

import BuyError from "./BuyError";
import BuySuccess from "./BuySuccess";
import ErrorCreditCard from "./ErrorCreditCard";
import BuySubscription01 from "./BuySubscripton01";
import BuySubscription02 from "./BuySubscripton02";
import BuyRent from "./BuyRent";

const RenderButtonBuy = ({
  title,
  subTitle,
  item,
  onClose,
  loadingButton,
  setLoadingButton,
  setResult,
  methodID,
  info,
}) => {
  const imageUrly =
    get(info, "imageSmall") || get(item, "offerParameters.BANNER_URL");

  const contentDescription =
    get(info, "title") || get(item, "offerParameters.SHORT_DESCRIPTION");
  const period = get(item, "validity.period") || "MONTH";
  const duration = get(item, "validity.duration");
  const unlimited = get(item, "items");
  const catalogId = get(item, "items.0.id");
  const zupId = item.id;
  const zupItem = get(item, "items.0.id");

  const contentId = get(info, "id");

  let recurrence = [];

  for (const i in unlimited) {
    recurrence = unlimited[i];
  }

  if (loadingButton) {
    return (
      <div className={"modal-buttons-horizontal"}>
        {title}
        {subTitle}

        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={"modal-buttons-horizontal"}>
      {title}
      {subTitle}

      <ButtonGeneric
        onClick={async (e) => {
          let resp = 0;

          setLoadingButton(true);

          if (period === "MONTH" || period === "DAY") {
            if (contentId) {
              resp = await api.CheckoutBuy(
                zupId,
                methodID,
                imageUrly,
                contentDescription
              );
            } else {
              resp = await api.CheckoutBuyPlan(
                zupId,
                methodID,
                imageUrly,
                contentDescription,
                zupItem,
                catalogId
              );
            }
          } else if (period === "HOUR") {
            resp = await api.CheckoutRenta(
              zupId,
              methodID,
              imageUrly,
              contentDescription,
              zupItem,
              contentId
            );
          }

          setLoadingButton(false);
          if (resp.status > 300) {
            setResult(false);
          } else {
            setResult(true);
          }
        }}
        title={Translator.get("net_confirm_payment", "confirmar")}
      />
      <ButtonGeneric
        onClick={(e) => onClose()}
        title={Translator.get("btn_modal_cancel", "Cancelar")}
      />
    </div>
  );
};

const Buy = ({
  setFocus = false,
  isPopup = false,
  item = {},
  price,
  info = {},
  onClose = () => {},
  playFullMedia = () => {},
  refresh = () => {},
  isSVOD = true,
}) => {
  const [loadingButton, setLoadingButton] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [card, setCard] = React.useState(null);
  const [screen, SetScreen] = React.useState(1);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const result = await api.CardCredit();
      setCard(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (setFocus) {
      setFocus();
    } else {
      window.SpatialNavigation.focus("@modal-new");
    }
  }, [loading, result, screen]);

  if (loading) {
    return <div></div>;
  }

  // seleccion de tarjetas y verificaciones
  let selectedCard, methodID, lastDigits;
  try {
    // card.data.creditCardResults=[]; // --- debug no tiene tarjetas
    if (card.data.creditCardResults.length) {
      // hay tarjetas
      selectedCard = ZUPUtils.getCreditCard(card.data.creditCardResults);
      methodID = get(selectedCard, "creditCardId", null);
      lastDigits = get(selectedCard, "lastDigits", null);
    } else {
      // no hay tarjetas
      return <ErrorCreditCard onClose={onClose} />;
    }
  } catch (error) {
    return <ErrorCreditCard onClose={onClose} />;
  }

  let priceData = price.amount.toString();
  let priceStart = priceData.slice(0, -price.scale);
  let priceEnd = priceData.slice(-price.scale);
  let durationRenta = item.validity.duration;
  let period = item.validity.period;

  const BuyButton = ({ title, subTitle }) => {
    return RenderButtonBuy({
      title,
      subTitle,
      item,
      loadingButton,
      setLoadingButton,
      onClose,
      setResult,
      methodID,
      info,
    });
  };

  if (result !== null) {
    if (result === false) {
      return <BuyError onClose={onClose} />;
    } else {
      return (
        <BuySuccess
          isVcard={isPopup}
          onClose={onClose}
          isSVOD={isSVOD}
          groupId={info.id}
          playFullMedia={playFullMedia}
          refresh={refresh}
        />
      );
    }
  }

  if (screen == 2) {
    return (
      <BuySubscription02
        card={card}
        item={item}
        priceStart={priceStart}
        priceEnd={priceEnd}
        RenderButtonBuy={BuyButton}
      />
    );
  }

  if (!isSVOD) {
    return (
      <BuyRent
        period={period}
        DurationRenta={durationRenta}
        priceStart={priceStart}
        priceEnd={priceEnd}
        lastDigits={lastDigits}
        RenderButtonBuy={BuyButton}
      />
    );
  }

  return (
    <BuySubscription01
      priceStart={priceStart}
      priceEnd={priceEnd}
      item={item}
      onClose={onClose}
      SetScreen={SetScreen}
      info={info}
    />
  );
};

export default Buy;
