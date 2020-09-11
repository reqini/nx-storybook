import React, { useState, useCallback, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SliderProgress from './sliderProgress'
import PlayerControler from './PlayerControler'
import ButtonBack from '../Buttons/ButtonBack'

var time = false
const hideTime = 6000

var gShowControls = false // poruqe dentro del handleKey no cambia el showControls

const useStyles = makeStyles((theme) => ({
  PlayerContainer: () => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  }),
  PlayerWrapper: () => ({
    display: 'flex',
    flexFlow: 'column',
    position: 'absolute',
    bottom: 0,
    background: 'transparent',
    height: '100%',
    width: '100%',
  }),
  Hours: {
    display: 'flex',
    height: 30,
    alignItems: 'center',
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 153,
    overflow: 'hidden',
  },
}))

const NewControls = ({
  keys,
  title,
  subTitle,
  isSerie,
  onShowEpisodes,
  loading,
  greenHandler,
  yellowHandler,
  blueHandler,
  durationTotal,
  durationProgress,
  initialProgress,
  player,
  back,
  isPause,
  handlePausePlay,
  useLanguages = false,
  onShowLanguages,
  handleBackwardForward,
}) => {
  const classes = useStyles()

  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    setShowControls(false)
    // if (!loading) {
    //   setShowControls(true);
    //   setTime();
    // }
  }, [loading])

  useEffect(() => {
    gShowControls = showControls

    if (showControls) {
      setTimeout(() => {
        window.SpatialNavigation.focus('@newPlayer')
      }, 100)
    }
  }, [showControls])

  const setTime = () => {
    clearTimeout(time)
    time = setTimeout(() => {
      setShowControls(false)
    }, hideTime)
  }

  const handleKeyPress = (e) => {
    const currentKey = keys ? keys.getPressKey(e.keyCode) : null

    if (!gShowControls) {
      setShowControls(true)

      e.preventDefault()
      e.stopPropagation()
    }

    setTime()

    switch (currentKey) {
      case 'RED':
        e.preventDefault()
        e.stopPropagation()

        break
    }
  }

  if (loading) {
    return false
  }

  return (
    <div style={{ visibility: showControls ? 'visible' : 'hidden' }}>
      <div className={`${classes.PlayerContainer}`}>
        <div className={`${classes.PlayerWrapper}`}>
          <PlayerControler
            useLanguages={useLanguages}
            onShowLanguages={onShowLanguages}
            title={title}
            isPause={isPause}
            stepBackward
            stepForward
            subTitle={subTitle}
            play
            episodes={isSerie}
            onShowEpisodes={onShowEpisodes}
            handlePausePlay={handlePausePlay}
            handleBackwardForward={handleBackwardForward}
            progresBar={
              <SliderProgress
                player={player}
                durationTotal={durationTotal}
                durationProgress={durationProgress}
                initialProgress={initialProgress}
              />
            }
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(NewControls)
