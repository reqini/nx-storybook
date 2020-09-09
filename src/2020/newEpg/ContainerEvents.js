import React, { useState, useEffect, useCallback, useRef } from 'react'
import get from 'lodash/get'
import moment from 'moment'
import { Collection, ScrollSync, AutoSizer } from 'react-virtualized'
import { makeStyles } from '@material-ui/core/styles'

import ListTime from './ListTime'
import ListChannels from './ListChannels'
import InfoEvent from './InfoEvent'
import Event from './Event'

const paddingRow = 3
const eventHeight = 90
const epgFullHeight = 360
const minHeightShowInfo = 250
const widthChannel = 153

const useStyles = makeStyles(theme => ({
  collection: {
    overflow: 'hidden!important'
  },
  Epg: () => ({
    flexDirection: 'row'
  }),
  flex: {
    display: 'flex'
  }
}))

const CollectionExample = ({
  keys,
  miniEpg,
  channels,
  events,
  currentEvent,
  changeChannel,
  setItem,
  showEpg
}) => {
  const classes = useStyles()

  const refScroll = useRef()
  const keyPress = useRef() // se usa en onFocus para saber si viene de usar la tecla DOWN o UP

  const [positionCellChannel, setPositionCellChannel] = useState(get(currentEvent, 'channel.number', 1)) // donde posiciona el foco de channels

  const [positionCell, setPositionCell] = useState(get(currentEvent, '', { index: 1 })) // donde posiciona la grilla(nro de index) y datos del evento activo

  const [resetPosition, setResetPosition] = useState(false)
  const [useNavigationNew, setUseNavigationNew] = useState(false)

  const [showInfo, setShowInfo] = useState({})
  const [charged, setCharged] = useState(false)

  var columnYMap = [] // se usa para ir guardando el width de cada row a medida que agrega eventos

  useEffect(() => {
    setFocusCurrentEvent(currentEvent)

    setTimeout(() => {
      setCharged(true)
    }, 200)
  }, [])

  const setFocusCurrentEvent = currentEvent => {
    setUseNavigationNew(false)
    setResetPosition(true)
    setPositionCell(currentEvent)

    setTimeout(() => {
      let modal = document.getElementById(`modalNew`)
      let sel = document.getElementById(`event-number-${currentEvent.index}`)
      if (sel && !modal) {
        window.SpatialNavigation.focus(sel)
      }
    }, 50)
  }

  useEffect(() => {
    // solo si ya esta inicializado
    if (charged) {
      setFocusCurrentEvent(currentEvent)

      // corrige error de abrir y cerrar fullEpg y desplazarte hacia abajo en la miniEpg
      setTimeout(() => {
        setUseNavigationNew(true)
        setResetPosition(false)
      }, 200)
    }
  }, [miniEpg])

  const current = useCallback(
    event =>
      moment().isBetween(
        moment(event.date_begin, 'YYYY/MM/DD HH:mm:ss'),
        moment(event.date_end, 'YYYY/MM/DD HH:mm:ss'),
        null,
        '[)'
      ),
    []
  )

  const getCurrentEvent = useCallback((list, { group_id }) => {
    const eventFocus = list.find(item => {
      if (item.channel.group_id === group_id) {
        const current = moment().isBetween(
          moment(item.date_begin, 'YYYY/MM/DD HH:mm:ss'),
          moment(item.date_end, 'YYYY/MM/DD HH:mm:ss'),
          null,
          '[)'
        )
        return current
      }
    })
    return eventFocus
  }, [])

  const onKeyDown = useCallback(({ e, event, style, miniEpg }) => {
    const currentKey = keys ? keys.getPressKey(e.keyCode) : null
    const scroll = refScroll.current.state

    keyPress.current = currentKey

    const resultTop = style.top - scroll.scrollTop
    if (currentKey === 'DOWN') {
      // ir al inicio
      if (event.channel.index === channels.size - 1) {
        e.stopPropagation()

        const event = getCurrentEvent(events, channels.get(0))
        if (event.index) {
          setResetPosition(false)
          setUseNavigationNew(false)
          setPositionCell(event)
          setTimeout(() => {
            window.SpatialNavigation.focus(`#event-number-${event.index}`)
          }, 50)
        }
      } else {
        // solo para full epg, scrollea, llevando el evento al top
        if (!miniEpg) {
          if (resultTop + eventHeight + paddingRow > epgFullHeight) {
            setResetPosition(true)
            setUseNavigationNew(true)
            refScroll.current._onScroll({
              ...scroll,
              scrollTop: style.top + eventHeight + paddingRow
            })
          }
        }
      }
    } else if (currentKey === 'UP') {
      // ir al final
      if (event.channel.index === 0) {
        e.stopPropagation()
        const event = getCurrentEvent(events, channels.get(channels.size - 1))
        if (event.index) {
          setResetPosition(false)
          setUseNavigationNew(false)
          setPositionCell(event)
          setTimeout(() => {
            window.SpatialNavigation.focus(`#event-number-${event.index}`)
          }, 50)
        }
      } else {
        // solo para full epg, scrollea llevando el evento abajo
        if (!miniEpg) {
          if (resultTop === 0) {
            setResetPosition(true)
            setUseNavigationNew(true)
            refScroll.current._onScroll({
              ...scroll,
              scrollTop: style.top - epgFullHeight < 0 ? 0 : style.top - epgFullHeight
            })
          }
        }
      }
    }
  }, [])

  const onFocus = useCallback(({ event, style, miniEpg }) => {
    setPositionCellChannel(get(event, 'channel.number')) // posicion foco channels
    const scroll = refScroll.current.state

    // si el evento es mas largo que lo se se logra ver, posicion al inicio del mismo
    const result = style.left + style.width - scroll.scrollLeft
    if (
      (!event.last && (style.left < scroll.scrollLeft || result > scroll.clientWidth)) ||
      // si estoy en la miniEpg y desplazandome hacia arriba o abajo, posicion el evento al inicio
      (miniEpg && (keyPress.current === 'DOWN' || keyPress.current === 'UP'))
    ) {
      setUseNavigationNew(true)
      refScroll.current._onScroll({
        ...scroll,
        scrollLeft: style.left
      })
    }

    // extender info de evento corto
    setShowInfo({
      canPlay: event.channel.canPlay,
      show: style.width < minHeightShowInfo,
      top: style.top,
      left: style.left,
      width: style.width,
      height: style.height,
      title: event.title,
      time: event.time
    })

    // set Item que se utiliza en epg
    setItem(event)
  }, [])

  const cellSizeAndPositionGetter = useCallback(({ index }) => {
    const {
      width,
      channel: { index: rowNumber }
    } = events.get(index)

    const y = rowNumber * eventHeight
    // si hay guardado un width lo uso, si no uso 0
    const x = columnYMap[rowNumber] || 0
    // guardo el width sumando el width anterior + el width del evento actual
    columnYMap[rowNumber] = x + width

    return { height: eventHeight, width, x, y }
  }, [])

  const cellRenderer = useCallback(
    ({ index, key, style }) => {
      const event = events.get(index)

      return (
        <Event
          key={key}
          style={style}
          index={index}
          paddingRow={paddingRow}
          eventHeight={eventHeight}
          setShowInfo={setShowInfo}
          changeChannel={changeChannel}
          event={event}
          current={current(event)}
          onKeyDown={e => {
            onKeyDown({
              e,
              event,
              style,
              miniEpg
            })
          }}
          onFocus={e => {
            onFocus({
              e,
              event,
              style,
              miniEpg
            })
          }}
        />
      )
    },
    [miniEpg]
  )

  return (
    <ScrollSync ref={refScroll}>
      {({ onScroll, scrollLeft, scrollTop }) => {
        let propTop

        // para avanzar del primer canal haciar arriba ir hacia el ultimo y viceversa
        if (useNavigationNew) {
          propTop = { scrollTop: scrollTop, scrollLeft: scrollLeft }
        }

        return (
          <div>
            {!miniEpg && <ListTime scrollLeft={scrollLeft} />}
            <div
              id='epgFinal'
              className={`${classes.Epg} ${classes.flex}`}
              style={{ height: miniEpg ? `${eventHeight}px` : '360px' }}
            >
              {showInfo && showInfo.show && (
                <InfoEvent
                  eventHeight={eventHeight}
                  paddingRow={paddingRow}
                  showInfo={showInfo}
                  scrollTop={scrollTop}
                  scrollLeft={scrollLeft}
                  miniEpg={miniEpg}
                />
              )}
              <ListChannels
                paddingRow={paddingRow}
                scrollTop={scrollTop}
                totalChannels={channels.size}
                currentChannel={positionCellChannel}
                listChannels={channels}
                eventHeight={eventHeight}
                width={widthChannel}
                height={miniEpg ? eventHeight : epgFullHeight}
              />
              <Collection
                className={classes.collection}
                onScroll={onScroll}
                cellRenderer={cellRenderer}
                cellSizeAndPositionGetter={cellSizeAndPositionGetter}
                scrollToAlignment={miniEpg ? 'start' : resetPosition ? 'start' : 'auto'}
                scrollToCell={get(positionCell, 'index', 0)}
                horizontalOverscanSize={50}
                verticalOverscanSize={50}
                cellCount={events.size}
                height={miniEpg ? eventHeight : epgFullHeight}
                width={1127} // resto el width de los canales
                {...propTop}
              />
            </div>
          </div>
        )
      }}
    </ScrollSync>
  )
}

export default React.memo(CollectionExample)
