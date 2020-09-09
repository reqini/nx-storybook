import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import defaultImage from '../newEpg/images/net_epg_candado_2.svg'

const useStyles = makeStyles(() => ({
  flex: () => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  }),
  channelBlock: () => ({
    textDecoration: 'none',
    backgroundColor: 'rgba(33, 34, 36, .6)',
    border: '4px solid transparent',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 102,

    '& img': {
      opacity: 0.5
    },

    '& span': {
      opacity: 0.5
    },

    '&:focus': {
      backgroundColor: 'rgb(25, 34, 47)!important',
      border: '4px solid white'
    }
  }),

  block: {
    backgroundImage: `url(${defaultImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '230px 5px',
    backgroundSize: 25,
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  channel: () => ({
    textDecoration: 'none',
    backgroundColor: '#212224',
    border: '4px solid transparent',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 102,

    '&:focus': {
      backgroundColor: 'rgb(65, 113, 185)',
      border: '4px solid white',

      '& p': {
        color: 'white'
      }
    }
  }),
  channelText: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '500',
    width: 110,
    color: '#fff',
    textTransform: 'lowercase'
  },
  channelImg: () => ({
    opacity: 1,
    height: 64
  }),
  contentText: {
    padding: '10px 20px 0px 20px',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 110,
    left: 0,
    width: '100%',

    '& p': {
      margin: 0,
      color: '#666666',
      fontSize: 18,
      maxWidth: 230,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  }
}))

const CardEpgChannels = ({ onClick, number, name, image, title, time, canPlay, active = false }) => {
  const classes = useStyles()

  return (
    <div
      tabIndex='0'
      className={`
          focusable ${active && 'active'} ${
        canPlay ? classes.channel : `${classes.channelBlock} ${classes.block}`
      }`}
      onClick={onClick}
    >
      <div className={classes.flex}>
        <span className={classes.channelText}>{number}</span>
        <img className={classes.channelImg} src={image} alt={name} />
      </div>
      <div className={`${classes.contentText}`}>
        <p>{title}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default React.memo(CardEpgChannels)
