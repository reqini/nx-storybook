import React from 'react'
import { List } from 'react-virtualized'

import Channel from './channel'

const Channels = ({
  paddingVertical = true,
  scrollTop,
  totalChannels,
  currentChannel,
  listChannels,
  paddingRow,
  eventHeight = 100,
  width,
  height,
}) => {
  const rowRenderer = React.useCallback(
    ({ index, key, style }) => {
      const { number, canPlay, image } = listChannels.get(index)
      let active = parseInt(number) === parseInt(currentChannel)

      return (
        <Channel
          active={active}
          key={key}
          paddingVertical={paddingVertical}
          paddingRow={paddingRow}
          style={style}
          number={number}
          canPlay={canPlay}
          image={image}
          eventHeight={eventHeight}
        />
      )
    },
    [currentChannel]
  )

  const style = React.useMemo(() => ({ overflow: 'hidden' }), [])
  return (
    <List
      style={style}
      scrollTop={scrollTop}
      overscanRowCount={1}
      rowCount={totalChannels}
      rowHeight={eventHeight}
      rowRenderer={rowRenderer}
      height={height}
      width={width}
    />
  )
}

export default React.memo(Channels)
