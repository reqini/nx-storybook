import React, { useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import get from 'lodash/get'

import CardRents from '../Cards/CardRents'

const useStyles = makeStyles(() => ({
  constainer: {
    display: 'flex',
    widht: '100%',
    height: '100%',
  },
  nextEpisode: () => ({
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: 300,
    height: 230,

    right: 0,
    marginRight: 30,
    marginBottom: 30,

    '&:focus': {
      backgroundSize: 55,
      height: 55,
      width: 55,
    },
  }),
}))

const Buy = ({ item, onClose, handlePlay, setFocus, keys }) => {
  const classes = useStyles()

  const [loading, setLoading] = React.useState(true)
  const [completed, setCompleted] = React.useState(0)

  const handleKeyPress = (e) => {
    const currentKey = keys.getPressKey(e.keyCode) || null

    switch (currentKey) {
      case 'BACK':
        // e.preventDefault();
        // e.stopPropagation();
        onClose()
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, true)

    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0
        }
        const diff = 10
        return Math.min(oldCompleted + diff, 100)
      })
    }
    setInterval(progress, 1000)

    setLoading(false)
    setTimeout(() => {
      setFocus()
    }, 600)

    return () => {
      document.removeEventListener('keydown', handleKeyPress, true)
    }
  }, [])

  useEffect(() => {
    if (completed == 100) {
      handleClick()
    }
  }, [completed])

  const handleClick = useCallback(() => {
    handlePlay(item)
    onClose()
  })

  if (loading) {
    return null
  }

  return (
    <div className={classes.container} style={{ background: 'transparent' }}>
      <div className={classes.nextEpisode}>
        <CardRents
          isFocusable
          width={290}
          height={225}
          image={get(item, 'image_large')}
          title={`T:${get(item, 'extendedcommon.media.episode.season')} E:${get(
            item,
            'extendedcommon.media.episode.number'
          )} - ${get(item, 'title')}`}
          subTitle={`próximo episódio em ${10 - completed / 10} segundos`}
          clickHandler={handleClick}
          progressLine={<LinearProgress variant='determinate' color='secondary' value={completed} />}
        />
      </div>
    </div>
  )
}

export default Buy
