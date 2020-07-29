import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import EventChannel from "./EventChannel";
import Event from "./Event";

const channels = [
  {
    name: "channel 01",
    number: "01",
    active: false,
    block: true,
    image: "",
    events: [
      {
        title: "Los Simpsons01",
        time: "12:30 - 13:45",
        width: 300,
        active: true
      },
      {
        title: "Casados con hijos01",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "01Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "01Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
      },
      {
        title: "01Los Simpsons",
        time: "12:30 - 13:45",
        width: 200
      },
      {
        title: "01Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "01Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "01Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
      }
    ]
  },
  {
    name: "channel 02",
    number: "02",
    active: true,
    block: true,
    image: "",
    events: [
      {
        title: "Los Simpsons-02",
        time: "12:30 - 13:45",
        width: 200,
        active: true
      },
      {
        title: "Casados con hijos-02",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "02Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "02Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
      },
      {
        title: "Los Simpsons-02",
        time: "12:30 - 13:45",
        width: 200
      },
      {
        title: "02-Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "02-Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "02-Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
      }
    ]
  },
  {
    name: "channel 03",
    number: "03",
    active: false,
    image: "",
    events: [
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200,
        active: true
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
      },
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
      }
    ]
  },
  {
    name: "channel 04",
    number: "04",
    active: false,
    image: "",
    events: [
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200,
        active: true
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
      },
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
      }
    ]
  },
  {
    name: "channel 05",
    number: "05",
    active: false,
    image: "",
    events: [
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200,
        active: true
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
      },
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
      }
    ]
  },
  {
    name: "channel 06",
    number: "06",
    active: false,
    image: "",
    events: [
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200,
        active: true
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
      },
      {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200
      },
      {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
      },
      {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
      }
    ]
  }
];

const useStyles = makeStyles(theme => ({
  ContainerChannels: {
    flexDirection: "column"
  },
  ContainerEvents: {
    flexDirection: "column",
    overflow: "hidden"
  },
  flex: {
    display: "flex"
  }
}));

const ContainerEvents = ({ data = [], setItem }) => {
  const classes = useStyles();

  console.log("jose render containerEvents");

  // useEffect(() => {
  //   setTimeout(() => {
  //     // posiciono la grilla al evento actual
  //     let element = document.getElementsByClassName("currentEvent");
  //     if (element && element.length > 0) {
  //       element[0].scrollIntoView();
  //     }
  //   }, 3000);
  // }, []);

  return (
    <div className={classes.flex}>
      <div className={classes.ContainerChannels}>
        {data.map((channel, i) => {
          return (
            <EventChannel
              image={channel.image || null}
              numberChannel={channel.number}
            />
          );
        })}
      </div>
      <div
        id="contentEvents"
        className={classes.ContainerEvents}
        // onScroll={e => {dataFinal
        //   let item = document.getElementById("rowHours");
        //   if (item) {
        //     item.scroll(e.currentTarget.scrollLeft, 0);
        //   }
        // }}
      >
        {data.map((channel, i) => {
          let lastChannel = data.length - 1 === i ? true : false;
          return (
            <div
              // className={`${classes.flex} ${lastChannel ? "eventsList" : ""}`}
              className={`${classes.flex} eventsList`}
              // data-count={i + 1}
              data-count={channel.number}
              // className={`${classes.flex}`}
            >
              {channel.events.map(
                (
                  {
                    block,
                    active,
                    title,
                    time,
                    duration,
                    width,
                    date_begin,
                    date_end
                  },
                  i
                ) => {
                  let isLast = false;
                  if (i === channel.events.length - 1) {
                    isLast = true;
                  }

                  // return (
                  //   <div style={{ height: "90px", width: "500px" }}>
                  //     alksdjf
                  //   </div>
                  // );
                  return (
                    <React.Suspense fallback={<div>loading...</div>}>
                      <Event
                        // width={duration * 5}
                        width={width}
                        channel={channel}
                        block={block}
                        active={active}
                        active={moment().isBetween(
                          moment(date_begin, "YYYY/MM/DD HH:mm:ss"),
                          moment(date_end, "YYYY/MM/DD HH:mm:ss"),
                          null,
                          "[)"
                        )}
                        title={title}
                        time={time}
                        isLast={isLast}
                        onFocus={number => {
                          setItem({ title });
                          const activeChannel = document.querySelectorAll(
                            ".channelItem"
                          );
                          activeChannel.forEach(channel => {
                            channel.setAttribute(
                              "style",
                              "background-color: '';"
                            );
                          });

                          document
                            .getElementById(`channel-number-${channel.number}`)
                            .setAttribute(
                              "style",
                              "background-color: rgb(65, 113, 185);"
                            );
                        }}
                      />
                    </React.Suspense>
                  );
                }
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ContainerEvents);
