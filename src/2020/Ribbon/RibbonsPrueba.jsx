import React, { useState, useCallback, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collection, AutoSizer } from "react-virtualized";
import LinearProgress from "@material-ui/core/LinearProgress";
import get from "lodash/get";

// en este contexto estan las keys del device (cargado en app/app)
import ModalContext from "../Modals/ModalContext";

import { Modal } from "../Modals/Modal";
import Talent from "../Modals/talent/talent";

import TitleRibbons from "../Typography/TitleRibbons";

import CardLandscape from "../Cards/CardLandscape";
import CardTalent from "../Cards/CardTalent";
import CardSearch from "../Cards/CardSearch";
import CardPlans from "../Cards/CardPlans";
import CardAlugados from "../Cards/CardAlugados";
import CardChannels from "../Cards/CardChannels";

const heightOtrosContenidos = 220;
const heightTalent = 120;
const heightCard = 290;

const marginFoco = 4;

const useStyles = makeStyles((theme) => ({
  autoSizer: {
    overflow: "hidden!important",
    height: "100%!important",
    width: "100%!important",
  },
  collection: {
    overflow: "hidden!important",
  },
}));

const Ribbon = ({
  isFirst: isFirstRibbon = false,
  isLast: isLastRibbon = false,
  purchased,
  prefixId = "",
  id,
  type,
  title,
  items,
  isSerie,
  focusHandler = () => {},
  sendToPlay = () => {},
  snUp,
  snDown,
  snLeft = null,
  scrollToTop,
  index: indexRibbon,
  clickHandler,
  setFocus,
  api = () => {}, // para talents
}) => {
  const { keys } = useContext(ModalContext);
  const [topIndex, setTopIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const focusHandlerDown = useCallback(
    (e, snDown, snUp) => {
      const currentKey = keys ? keys.getPressKey(e.keyCode) : null;

      if (
        currentKey === "UP" &&
        (!isFirstRibbon || (snUp != false && snUp !== "" && snUp != undefined))
      ) {
        e.stopPropagation();

        setTopIndex(0);

        window.SpatialNavigation.focus(
          snUp || `#${prefixId}-${indexRibbon - 1}-0`
        );
      } else if (
        currentKey === "DOWN" &&
        (!isLastRibbon ||
          (snDown != false && snDown !== "" && snDown != undefined))
      ) {
        e.stopPropagation();

        setTopIndex(0);

        window.SpatialNavigation.focus(
          snDown || `#${prefixId}-${indexRibbon + 1}-0`
        );
      }
    },
    [topIndex]
  );

  var glX = 0;
  const cellSizeAndPositionGetter = useCallback(({ index }) => {
    const item = items[index];

    // doy el tamaño, tener en cuenta las categoris ej: accion, teen, y diferenciar los provider de la home
    const x = glX;
    const width =
      !get(item, "provider") && get(item, "href")
        ? heightOtrosContenidos
        : get(item, "type") === "talent"
        ? heightTalent
        : heightCard;
    const height = 155;
    glX = x + width;

    return {
      height: height,
      width: width,
      x: x,
      y: 0,
    };
  }, []);

  const cellRenderer = useCallback(({ index, key, style }) => {
    const item = items[index];

    if (!item) {
      return null;
    }

    const isLast = index === items.length - 1;
    const isFirst = index === 0;

    const typeFinal = get(item, "type") || type;
    let isFocusable = true;

    const getTypeCard = () => {
      if (typeFinal === "talent") {
        return (
          <CardTalent
            marginFoco={marginFoco}
            isLast={isLast}
            isFirst={index === 0}
            key={`${prefixId}-${indexRibbon}-${index}`}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            isLast={isLast}
            scrollToTop={scrollToTop}
            isFocusable={isFocusable}
            data={item}
            width={100}
            height={100}
            title={item.title}
            infoTalent={item.info}
            // en vcard viene en cover
            image={item.imageCard}
            novo={id === "destaque" ? true : false}
            clickHandler={() => {
              setIsModalOpen(item);
            }}
            focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
            focusHandler={(data) => {
              setTopIndex(index);
              focusHandler(data, topIndex);
            }}
            bgSize={"cover"}
            sendToPlay={sendToPlay}
          />
        );
      }

      if (typeFinal === "search") {
        return (
          <CardSearch
            marginFoco={marginFoco}
            isLast={isLast}
            isFirst={index === 0}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            isLast={isLast}
            isFocusable={isFocusable}
            scrollToTop={scrollToTop}
            key={`${prefixId}-${index}`}
            color="white"
            data={item}
            bgSize={"cover"}
            width={260}
            height={200}
            image={item.imageCard}
            title={item.title}
            subTitle={item.subTitle}
            focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
            focusHandler={(data) => {
              setTopIndex(index);
              focusHandler(data, topIndex);
            }}
            clickHandler={item.clickHandler}
          />
        );
      }

      if (typeFinal === "ao-vivo") {
        return (
          <CardSearch
            marginFoco={marginFoco}
            isLast={isLast}
            isFirst={index === 0}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            isLast={isLast}
            notPlaceHolder
            isLast={isLast}
            scrollToTop={scrollToTop}
            isFocusable={isFocusable}
            key={`${prefixId}-${index}`}
            width={273}
            height={225}
            image={item.imageCard}
            floatImage={item.image_channel}
            title={item.title}
            subTitle={item.subTitle}
            data={item}
            focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
            focusHandler={(data) => {
              setTopIndex(index);
              focusHandler(data, topIndex);
            }}
            sendToPlay={(group_id) => sendToPlay(group_id, true)}
            progressLine={
              <LinearProgress
                variant="determinate"
                color="secondary"
                value={get(item, "date_advance.porcent")}
              />
            }
          />
        );
      }

      if (id === "nx-talent") {
        return (
          <CardTalent
            marginFoco={marginFoco}
            isLast={isLast}
            isFirst={index === 0}
            key={`${prefixId}-${indexRibbon}-${index}`}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            isLast={isLast}
            scrollToTop={scrollToTop}
            isFocusable={isFocusable}
            data={item}
            width={100}
            height={100}
            title={item.title}
            infoTalent={item.info}
            // en vcard viene en cover
            image={item.imageCard}
            clickHandler={() => {
              setIsModalOpen(item);
            }}
            focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
            focusHandler={(data) => {
              setTopIndex(index);
              focusHandler(data, topIndex);
            }}
            bgSize={"cover"}
            sendToPlay={sendToPlay}
          />
        );
      }

      if (typeFinal === "plans") {
        return (
          <CardPlans
            purchased={purchased}
            marginFoco={marginFoco}
            {...item}
            isLast={isLast}
            isFirst={index === 0}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            key={`${prefixId}-${index}`}
            clickHandler={item.clickHandler}
            focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
            focusHandler={(data) => {
              setTopIndex(index);
              focusHandler(data, topIndex);
            }}
          />
        );
      }

      if (typeFinal === "plans-channels") {
        return (
          <CardChannels
            marginFoco={marginFoco}
            {...item}
            isLast={isLast}
            isFirst={index === 0}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            key={`${prefixId}-${index}`}
            clickHandler={item.clickHandler}
            focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
            focusHandler={(data) => {
              setTopIndex(index);
              focusHandler(data, topIndex);
            }}
          />
        );
      }

      if (typeFinal === "alugados") {
        return (
          <CardAlugados
            marginFoco={marginFoco}
            isLast={isLast}
            isFirst={index === 0}
            snUp={snUp}
            snDown={snDown}
            snLeft={snLeft}
            id={`${prefixId}-${indexRibbon}-${index}`}
            key={`${prefixId}-${index}`}
            isLast={isLast}
            width={270}
            height={230}
            isFocusable={isFocusable}
            image={item.imageCard || item.cover}
            title={item.title}
            subTitle={item.subTitle}
          />
        );
      }

      return (
        <CardLandscape
          marginFoco={marginFoco}
          id={`${prefixId}-${indexRibbon}-${index}`}
          isLast={isLast}
          isFirst={index === 0}
          snUp={snUp}
          snDown={snDown}
          snLeft={snLeft}
          isLast={isLast}
          scrollToTop={scrollToTop}
          minHeight={get(items, "0.item.href") ? 120 : 170}
          indexRibbon={indexRibbon}
          index={index}
          isSerie={isSerie}
          isFocusable={isFocusable}
          key={`${prefixId}-${indexRibbon}-${index}`}
          data={item}
          title={item.title}
          notDefaultImg={item.provider}
          image={item.imageCard}
          clickHandler={item.clickHandler}
          clickHandlerNew={clickHandler}
          focusHandlerDown={(e) => focusHandlerDown(e, snDown, snUp)}
          focusHandler={(data) => {
            setTopIndex(index);
            focusHandler(data, topIndex);
          }}
          width={269}
          height={149}
          bgSize={
            !get(item, "provider") && get(item, "href")
              ? "190px 100px"
              : "270px 150px"
          }
          sendToPlay={sendToPlay}
        ></CardLandscape>
      );
    };

    return (
      <div key={key} style={style}>
        {getTypeCard()}
      </div>
    );
  }, []);

  if (!items.length) {
    return null;
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false);

    setTimeout(() => {
      if (setFocus) {
        setFocus();
      } else {
        window.SpatialNavigation.focus("@container");
      }
    }, 100);
  }, []);

  const classes = useStyles();

  return (
    <AutoSizer className={classes.autoSizer}>
      {({ height, width }) => {
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {isModalOpen && (
              <Modal onClose={closeModal}>
                {({ setFocus }) => (
                  <Talent
                    api={api}
                    handleVcard={clickHandler}
                    talent={isModalOpen}
                    onClose={closeModal}
                    setFocus={setFocus}
                  />
                )}
              </Modal>
            )}

            {title && (
              <TitleRibbons
                title={title.charAt(0).toLowerCase() + title.slice(1)}
                marginL={marginFoco}
              />
            )}

            <Collection
              className={classes.collection}
              scrollToAlignment={"auto"}
              scrollToCell={topIndex}
              cellCount={items.length}
              cellSizeAndPositionGetter={cellSizeAndPositionGetter}
              cellRenderer={cellRenderer}
              horizontalOverscanSize={100}
              height={height}
              width={width}
            />
          </div>
        );
      }}
    </AutoSizer>
  );
};

export default React.memo(Ribbon);
