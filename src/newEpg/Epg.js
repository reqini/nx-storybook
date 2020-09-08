import React, { useState, useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import Device from "../../../devices/device";

import EpgHeader from "./EpgHeader";
import Background from "./Background";
import ContainerEvents from "./ContainerEvents";

const keys = Device.getDevice().getKeys();
var time = false;
const hideTime = 6000;

var gShowEpg = false; // poruqe dentro del handleKey no cambia el showEpg
var gMiniEpg = false; // poruqe dentro del handleKey no cambia el showEpg

const useStyles = makeStyles((theme) => ({
  PlayerContainer: () => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  }),
  PlayerWrapper: () => ({
    display: "flex",
    flexFlow: "column",
    position: "absolute",
    width: "100%",
    bottom: 0,
  }),
  Hours: {
    display: "flex",
    height: 30,
    alignItems: "center",
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 153,
    overflow: "hidden",
  },
  Epg: () => ({
    flexDirection: "row",
  }),
}));

const Epg = ({
  loading,
  channels,
  events,
  currentChannel,
  changeChannel,
  greenHandler,
  yellowHandler,
  blueHandler,
  notHide,
  setEvent,
}) => {
  const classes = useStyles();

  const [item, setItem] = useState(null);
  const setItemCallback = useCallback((item) => setItem(item), []);

  const [miniEpg, setMiniEpg] = useState(true);
  const [showEpg, setShowEpg] = useState(false);

  const [currentEvent, setCurrentEvent] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // seteo event de tv, para posicionar foco cuando vuelve de lista de canales o a algun popup
    setEvent(item);
  }, [item]);

  useEffect(() => {
    setShowEpg(false);
    setMiniEpg(true);
    // if (!loading) {
    //   setShowEpg(true);
    //   setTime();
    // }

    const event = getCurrentEvent(events, { group_id: currentChannel });
    setCurrentEvent(event);
  }, [loading]);

  useEffect(() => {
    gShowEpg = showEpg;
  }, [showEpg]);

  useEffect(() => {
    if (!miniEpg) {
      clearTimeout(time);
    } else {
      setTime();
    }
    gMiniEpg = miniEpg;

    const event = getCurrentEvent(events, { group_id: currentChannel });
    setCurrentEvent(event);
  }, [miniEpg]);

  // no ocualtar cuando hay un modal, para al cerrar el modal vuelva a posicionarse donde estaba
  useEffect(() => {
    if (notHide) {
      clearTimeout(time);
    } else {
      setTime();
    }
  }, [notHide]);

  const setTime = () => {
    clearTimeout(time);
    time = setTimeout(() => {
      setShowEpg(false);
      setMiniEpg(true);
    }, hideTime);
  };

  const getCurrentEvent = React.useCallback((list, currentChannel) => {
    const eventFocus = list.find((item) => {
      if (item.channel.group_id === currentChannel.group_id) {
        const current = moment().isBetween(
          moment(item.date_begin, "YYYY/MM/DD HH:mm:ss"),
          moment(item.date_end, "YYYY/MM/DD HH:mm:ss"),
          null,
          "[)"
        );
        return current;
      }
    });
    return eventFocus;
  }, []);

  const handleKeyPress = (e) => {
    const currentKey = keys ? keys.getPressKey(e.keyCode) : null;

    if (!gShowEpg) {
      setShowEpg(true);

      e.preventDefault();
      e.stopPropagation();
    }

    if (gMiniEpg) {
      setTime();
    }

    switch (currentKey) {
      case "RED":
        e.preventDefault();
        e.stopPropagation();

        setMiniEpg((prevState) => !prevState);
        break;
    }
  };

  const redHandler = React.useCallback(() => {
    setMiniEpg((prevState) => !prevState);
  }, []);

  if (loading) {
    return false;
  }

  return (
    <div style={{ visibility: showEpg ? "visible" : "hidden" }}>
      {!miniEpg && <Background item={item} />}

      <div className={`${classes.PlayerContainer}`}>
        <div
          className={`${classes.PlayerWrapper}`}
          style={{
            background: miniEpg
              ? "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
              : "transparent",
          }}
        >
          <EpgHeader
            date={
              item && item.date_begin && moment(item.date_begin).format("LL")
            }
            type={miniEpg ? "MINI" : "FULL"}
            redHandler={redHandler}
            greenHandler={greenHandler}
            yellowHandler={yellowHandler}
            blueHandler={blueHandler}
          />

          {miniEpg && (
            <i
              className="fa fa-chevron-up"
              style={{ marginLeft: 70, marginBottom: 10 }}
            />
          )}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              height: miniEpg ? "97px" : "380px",
              marginBottom: 10,
            }}
          >
            {channels.size > 0 && showEpg && (
              <ContainerEvents
                showEpg={showEpg}
                miniEpg={miniEpg}
                channels={channels}
                events={events}
                setItem={setItemCallback}
                // setItem={setItem}
                currentChannel={currentChannel}
                changeChannel={changeChannel}
                currentEvent={currentEvent}
              />
            )}
          </div>
          {miniEpg && (
            <i
              className="fa fa-chevron-down"
              style={{ paddingBottom: "8px", marginLeft: 70 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Epg;
