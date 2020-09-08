import React, { Component } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import LinearProgress from "@material-ui/core/LinearProgress";

import CardRents from "../Cards/CardRents";
import CardLandscape from "../Cards/CardLandscape";
import CardTalent from "../Cards/CardTalent";
import CardSearch from "../Cards/CardSearch";
import CardPlans from "../Cards/CardPlans";
import CardAlugados from "../Cards/CardAlugados";
import CardChannels from "../Cards/CardChannels";
import TitleRibbons from "../Typography/TitleRibbons";
import { Modal } from "../Modals/Modal";
import Talent from "../Modals/talent/talent";

class RibbonsSimple extends Component {
  constructor(props) {
    super(props);

    const { items, visibleNumber } = props;

    this.state = {
      items: this.getVisibleItems(items, visibleNumber),
      isModalOpen: false,
    };
  }

  getVisibleItems = (items, visibleNumber) => {
    const visible = [];
    let currentIndex = null;

    for (let i = 0; i < items.length; i++) {
      if (items[i].current) {
        currentIndex = i;
        break;
      }
    }

    if (currentIndex !== null) {
      let fromCurrent = items.slice(currentIndex, currentIndex + visibleNumber);

      if (fromCurrent.length < visibleNumber) {
        const rest = items.slice(0, visibleNumber - fromCurrent.length);
        fromCurrent = fromCurrent.concat(rest);
      }

      for (let i = 0; i < fromCurrent.length; i++) {
        let index =
          currentIndex + i < items.length
            ? currentIndex + i
            : currentIndex + i - items.length;
        visible.push({ index, item: fromCurrent[i] });
      }
    } else {
      const lim = Math.min(items.length, visibleNumber);
      for (let i = 0; i < lim; i++) {
        visible.push({ index: i, item: items[i] });
      }
    }

    return visible;
  };

  focusHandler = (data) => {
    const focused = document.activeElement;

    focused.removeEventListener("sn:willmove", this.arrowHandler);
    focused.addEventListener("sn:willmove", this.arrowHandler);

    this.props.focusHandler(data);
  };

  arrowHandler = (e) => {
    const direction = e.detail.direction.toUpperCase();
    const { items } = this.state;

    if (items.length === 0) {
      return;
    }

    switch (direction) {
      case "LEFT":
        this.navigationLeft(items);
        e.preventDefault();
        e.stopPropagation();
        break;
      case "RIGHT":
        this.navigationRight(items);
        e.preventDefault();
        e.stopPropagation();
        break;
      default:
        return;
    }

    this.setState({ items: items });
  };

  navigationLeft = (items) => {
    if (items[0].index === 0) {
      let sel = document.querySelector(`.modal-overlay`);
      if (!sel && !this.props.blockSnLeft) {
        setTimeout(() => {
          window.SpatialNavigation.focus("nav_down");
        }, 100);
      }
      return;
    }

    const index =
      items[0].index === 0 ? this.props.items.length - 1 : items[0].index - 1;

    items.pop();
    items.unshift({ index, item: this.props.items[index] });
  };

  navigationRight = (items) => {
    const last = items[items.length - 1];

    const index =
      last.index === this.props.items.length - 1 ? 0 : last.index + 1;

    items.shift();
    items.push({ index, item: this.props.items[index] });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });

    setTimeout(() => {
      window.SpatialNavigation.focus("@container");
    }, 100);
  };

  render() {
    const {
      id,
      type,
      index: indexRibbon,
      title,
      episodeTitle,
      scrollToTop,
      sendToPlay,
      isSerie,
      snUp,
      snDown,
      clickHandler,
    } = this.props;
    const { items } = this.state;

    if (!items.length) {
      return null;
    }

    return (
      <div style={{ marginBottom: 10 }}>
        {title && (
          <TitleRibbons
            title={title.charAt(0).toLowerCase() + title.slice(1)}
          />
        )}

        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal}>
            {({ setFocus }) => (
              <Talent
                talent={this.state.isModalOpen}
                onClose={this.closeModal}
                setFocus={setFocus}
              />
            )}
          </Modal>
        )}

        <div
          className="wrapScroll"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          <div style={{ display: "inline-flex" }}>
            {items.map(({ item }, index) => {
              const typeFinal = item.type || type;
              let isLast = index === items.length - 1;
              let isFocusable = false;
              if (index === 0) {
                isFocusable = true;
              }
              if (typeFinal === "talent") {
                return (
                  <CardTalent
                    snUp={snUp}
                    snDown={snDown}
                    isLast={isLast}
                    scrollToTop={scrollToTop}
                    isFocusable={isFocusable}
                    key={`${id}-${index}`}
                    data={item}
                    width={110}
                    height={110}
                    title={item.title}
                    infoTalent={item.info}
                    // en vcard viene en cover
                    image={item.imageCard || item.cover}
                    novo={id === "destaque" ? true : false}
                    clickHandler={() => {
                      this.setState({ isModalOpen: item });
                    }}
                    focusHandler={this.focusHandler}
                    bgSize={"cover"}
                    sendToPlay={sendToPlay}
                  />
                );
              }
              if (typeFinal === "search") {
                return (
                  <CardRents
                    snUp={snUp}
                    snDown={snDown}
                    isLast={isLast}
                    isFocusable={isFocusable}
                    scrollToTop={scrollToTop}
                    key={`${id}-${index}`}
                    color="white"
                    data={item}
                    bgSize={"cover"}
                    width={260}
                    height={200}
                    image={item.imageCard}
                    title={item.title}
                    subTitle={null}
                    focusHandler={this.focusHandler}
                    clickHandler={item.clickHandler}
                  />
                );
              }
              /* if (id === "Continuar-Assistindo") {
                return (
                  <CardSearch
                    snUp={snUp}
                    snDown={snDown}
                    isLast={isLast}
                    isFocusable={isFocusable}
                    scrollToTop={scrollToTop}
                    key={`${id}-${index}`}
                    color="white"
                    data={item}
                    bgSize={"cover"}
                    width={260}
                    height={220}
                    image={item.imageCard}
                    title={item.title}
                    subTitle={item.title}
                    progressLine={
                      <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={get(item, "date_advance.porcent")}
                      />
                    }
                    focusHandler={this.focusHandler}
                    clickHandler={item.clickHandler}
                  />
                );
              } */
              if (typeFinal === "ao-vivo" || id === "nx-live-events") {
                return (
                  <CardSearch
                    snUp={snUp}
                    snDown={snDown}
                    notPlaceHolder
                    isLast={isLast}
                    scrollToTop={scrollToTop}
                    isFocusable={isFocusable}
                    key={`${id}-${index}`}
                    width={273}
                    height={225}
                    image={item.imageCard}
                    floatImage={item.image_channel}
                    title={item.title}
                    subTitle={item.subTitle}
                    data={item}
                    // clickHandler={item.clickHandler}
                    focusHandler={this.focusHandler}
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

              if (typeFinal === "plans") {
                return (
                  <CardPlans
                    {...item}
                    snUp={snUp}
                    snDown={snDown}
                    key={`${id}-${index}`}
                    isLast={isLast}
                    clickHandler={item.clickHandler}
                    focusHandler={this.focusHandler}
                  />
                );
              }

              if (typeFinal === "plans-channels") {
                return (
                  <CardChannels
                    {...item}
                    snUp={snUp}
                    snDown={snDown}
                    key={`${id}-${index}`}
                    isLast={isLast}
                    clickHandler={item.clickHandler}
                    focusHandler={this.focusHandler}
                  />
                );
              }

              if (typeFinal === "alugados") {
                return (
                  <CardAlugados
                    snUp={snUp}
                    snDown={snDown}
                    key={`${id}-${index}`}
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
                  snUp={snUp}
                  snDown={snDown}
                  isLast={isLast}
                  scrollToTop={scrollToTop}
                  minHeight={get(items, "0.item.href") ? 120 : 170}
                  indexRibbon={indexRibbon}
                  index={index}
                  isSerie={isSerie}
                  isFocusable={isFocusable}
                  key={`${id}-${index}`}
                  data={item}
                  title={item.title}
                  notDefaultImg={id === "nx-providers" ? true : null}
                  // en vcard viene en cover
                  image={item.imageCard || item.cover}
                  novo={false}
                  clickHandler={item.clickHandler}
                  clickHandlerNew={clickHandler}
                  focusHandler={this.focusHandler}
                  width={270}
                  height={149}
                  bgSize={
                    !get(items, "0.item.provider") && get(items, "0.item.href")
                      ? "190px 100px"
                      : "270px 150px"
                  }
                  bgSizeFocus={
                    !get(items, "0.item.provider") && get(items, "0.item.href")
                      ? "210px 113px"
                      : "286px 168px"
                  }
                  sendToPlay={sendToPlay}
                ></CardLandscape>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

RibbonsSimple.propTypes = {
  scrollToTop: PropTypes.bool,
  slidesToShow: PropTypes.number,
  visibleNumber: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      group_id: PropTypes.string,
      cover: PropTypes.string,
      provider: PropTypes.node,
      format_types: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  focusHandler: PropTypes.func,
  isSerie: PropTypes.bool,
};

RibbonsSimple.defaultProps = {
  slidesToShow: 4.2,
  visibleNumber: 5,
  items: [],
  focusHandler: () => {},
  isSerie: false,
  scrollToTop: true,
};

export default RibbonsSimple;
