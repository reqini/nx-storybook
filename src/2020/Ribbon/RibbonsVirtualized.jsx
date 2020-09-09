import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Collection, AutoSizer } from 'react-virtualized'

import RibbonsSimple from './RibbonsPrueba'

const heightCategory = 170
const heightLiveEvent = 300
const heightCard = 260

const useStyles = makeStyles(theme => ({
  autoSizer: {
    overflow: 'hidden!important',
    height: '100%!important',
    width: '100%!important'
  },
  collection: {
    overflow: 'hidden!important'
  }
}))

const Ribbons = ({
  setFocus,
  prefixId = '',
  list = [],
  focusHandler = () => {},
  handleVcard = () => {},
  sendToPlay = () => {},
  api = () => {},
  snUp = null,
  snDown = null,
  snLeft = null
}) => {
  const classes = useStyles()
  var glY = 0

  const [scrollTop2, setScrollTop2] = useState(0)

  const cellSizeAndPositionGetter = useCallback(({ index }) => {
    const item = list[index]

    // alto de cada carusel segun el tipo de card que se va a mostrar
    const height = item.category
      ? heightCategory
      : item.type === 'ao-vivo'
      ? heightLiveEvent
      : heightCard

    // va acumulando el alto, para setear el proximo carusel
    const y = glY
    glY = y + height

    return {
      height: index === list.length - 1 ? 400 : height, // al ultimo carusel seteo el tamaño asi tiene margen hacia abajo
      width: 1000,
      x: 0,
      y: y
    }
  }, [])

  const cellRenderer = useCallback(({ index, key, style }) => {
    const ribbon = list[index]
    const isLast = index === list.length - 1

    return (
      <div key={key} style={{ ...style, width: '100%' }}>
        <RibbonsSimple
          isFirst={index === 0}
          isLast={isLast}
          api={api}
          setFocus={setFocus}
          prefixId={prefixId}
          index={index}
          snUp={index === 0 ? snUp || ' ' : null}
          snDown={snDown || index === list.length - 1 ? ' ' : null}
          snLeft={snLeft}
          scrollToTop={false}
          focusHandler={data => {
            setScrollTop2(index)
            focusHandler({ data })
          }}
          clickHandler={handleVcard}
          sendToPlay={sendToPlay}
          id={ribbon.id}
          title={ribbon.title}
          items={ribbon.items}
          type={ribbon.type}
        />
      </div>
    )
  }, [])

  return (
    <AutoSizer className={classes.autoSizer}>
      {({ height, width }) => (
        <Collection
          className={classes.collection}
          scrollToAlignment='start'
          scrollToCell={scrollTop2}
          cellCount={list.length}
          cellRenderer={cellRenderer}
          cellSizeAndPositionGetter={cellSizeAndPositionGetter}
          verticalOverscanSize={100}
          height={height}
          width={width}
        />
      )}
    </AutoSizer>
  )
}

export default React.memo(Ribbons)
