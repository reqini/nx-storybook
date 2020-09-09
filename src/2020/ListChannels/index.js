import React, { useEffect } from 'react'
import get from 'lodash/get'
import { makeStyles } from '@material-ui/core/styles'

import CardEpgChannels from '../Cards/CardEpgChannels'

const useStyles = makeStyles(theme => ({
  channelsContainer: () => ({
    boxSizing: 'border-box',
    height: theme.sizeBody.hd.height,
    width: theme.sizeBody.hd.width,
    padding: '50px 40px 0px 40px'
  }),
  channelsList: {
    width: '100%',
    padding: 0,
    margin: 0,
    height: 670,
    overflow: 'hidden'
  },
  channelsLi: {
    position: 'relative',
    listStyle: 'none',
    display: '-ms-flexbox',
    display: 'flex',
    '-ms-flex-direction': 'column',
    flexDirection: 'column',
    width: 270,
    height: 155,
    float: 'left',
    margin: '0px 14px 45px 14px'
  }
}))

const ListChannels = ({
  currentChannel,
  getCurrentEvent = () => {},
  listEvents = [],
  listChannels = [],
  changeChannel = () => {}
}) => {
  const classes = useStyles()

  useEffect(() => {
    setTimeout(() => {
      window.SpatialNavigation.focus('@listChannels')
    }, 100)
  }, [])

  return (
    <div className={`${classes.channelsContainer}`}>
      <ul id='listChannels' className={`${classes.channelsList}`}>
        {listChannels.map((channel, i) => {
          const event = getCurrentEvent(listEvents, channel)

          return (
            <li className={classes.channelsLi} key={i}>
              <CardEpgChannels
                active={parseInt(get(channel, 'group_id', 0)) === parseInt(currentChannel)}
                canPlay={channel.canPlay}
                onClick={() => {
                  changeChannel({ channel })
                }}
                number={channel.number}
                image={channel.image}
                name={channel.name}
                title={event.title}
                time={event.time}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default React.memo(ListChannels)
