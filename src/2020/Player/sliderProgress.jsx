import React, { useState, useCallback, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

var timeMultipleStep = null
var multipleStep = 1
var isCharged = false

const useStyles = makeStyles((theme) => ({
  slider: {
    //position: "absolute",
    transform: 'translate(-50%, -25%)',
    position: 'relative',
    display: 'block',
    content: '""',
    width: 15,
    height: 15,
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0 1px 1px rgba(0,0,0,.5)',
    userSelect: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: '.5s',
    top: -2,

    '&:focus': {
      backgroundColor: theme.palette.active.main,
      width: 18,
      height: 18,
      transition: '.5s',
      top: -1,
    },
  },
  container: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#ddd',
    borderRadius: 5,
    userSelect: 'none',
    boxSizing: 'border-box',
    width: '100%',
    height: 5,
  },
}))

const SliderProgress = ({ player, durationTotal, durationProgress, initialProgress }) => {
  const classes = useStyles()

  const [pos, setPos] = useState(getPosition(x))
  const [x, setX] = useState(Math.round(initialProgress))
  const xmin = 0

  const container = useRef(null)
  const handle = useRef(null)
  const start = useRef({})
  const offset = useRef({})

  const [isMove, setIsMove] = useState(false)

  function getPosition(x) {
    // const done = Math.round((durationProgress / durationTotal) * 100);
    let left = (x / durationTotal) * 100

    if (left > 100) left = 100
    if (left < 0) left = 0

    return { left }
  }

  useEffect(() => {
    handle.current.addEventListener('sn:willmove', willMove)
    handle.current.addEventListener('keyup', keyUp)

    return () => {
      isCharged = false
      handle.current.removeEventListener('sn:willmove', willMove)
      handle.current.removeEventListener('keyup', keyUp)
    }
  }, [])

  const keyUp = () => {
    setIsMove(false)
  }

  const willMove = (e) => {
    const { direction } = e.detail

    if (direction === 'left' || direction === 'right') {
      setIsMove(true)
      // si mantiene presionado, el avance es cada vez mas rapido
      clearTimeout(timeMultipleStep)
      timeMultipleStep = setTimeout(() => {
        multipleStep = 1.0
      }, 300)
      multipleStep = multipleStep + 0.2
      // --------------

      switch (direction) {
        case 'left':
          e.preventDefault()
          setX((prevState) => prevState - 5 * multipleStep)
          break
        case 'right':
          e.preventDefault()
          setX((prevState) => prevState + 5 * multipleStep)
          break
        default:
      }
    }
  }

  useEffect(() => {
    // para no hacer seek al iniciar el componente
    if (isCharged) {
      if (!isMove) {
        player.seek(x)
      }
    } else {
      isCharged = true
    }
  }, [isMove])

  useEffect(() => {
    setPos(getPosition(x))
  }, [x])

  useEffect(() => {
    if (!isMove) {
      setX(Math.round(durationProgress))
    }
  }, [durationProgress])

  const getClientPosition = (e) => {
    const touches = e.touches

    if (touches && touches.length) {
      const finger = touches[0]
      return {
        x: finger.clientX,
        y: finger.clientY,
      }
    }

    return {
      x: e.clientX,
      y: e.clientY,
    }
  }

  const getPos = (e) => {
    const clientPos = getClientPosition(e)
    const left = clientPos.x + start.current.x - offset.current.x

    return { left }
  }

  const handleMouseDown = (e) => {
    // e.preventDefault();
    const dom = handle.current
    const clientPos = getClientPosition(e)

    start.current = {
      x: dom.offsetLeft,
      y: dom.offsetTop,
    }

    offset.current = {
      x: clientPos.x,
      y: clientPos.y,
    }

    document.addEventListener('mousemove', handleDrag)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchmove', handleDrag, { passive: false })
    document.addEventListener('touchend', handleDragEnd)
    document.addEventListener('touchcancel', handleDragEnd)
  }

  const handleDrag = (e) => {
    setIsMove(true)
    e.preventDefault()
    change(getPos(e))
  }

  const change = ({ top, left }) => {
    const { width, height } = container.current.getBoundingClientRect()
    let dx = 0

    if (left < 0) left = 0
    if (left > width) left = width

    dx = (left / width) * durationTotal

    const x = (dx !== 0 ? parseInt(dx / 0.1, 10) * 0.1 : 0) + xmin

    setX(x)
  }

  const handleDragEnd = (e) => {
    setIsMove((prevState) => {
      if (prevState) {
        player.seek(x)
      }
      return false
    })

    e.preventDefault()
    document.removeEventListener('mousemove', handleDrag)
    document.removeEventListener('mouseup', handleDragEnd)

    document.removeEventListener('touchmove', handleDrag, {
      passive: false,
    })
    document.removeEventListener('touchend', handleDragEnd)
    document.removeEventListener('touchcancel', handleDragEnd)
  }
  //--------------

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
      }}
    >
      <div style={{ paddingLeft: '25px', paddingRight: '25px' }}>
        {moment({ hours: 0, minute: 0, seconds: 0 }).add(x, 's').format('HH:mm:ss')}
      </div>

      <div ref={container} className={classes.container}>
        <div
          id='playerSlider'
          ref={handle}
          onMouseDown={handleMouseDown}
          onClick={(e) => {
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
          }}
          className={`${classes.slider} focusable`}
          style={{ left: pos.left + '%' }}
          tabIndex='0'
        ></div>
      </div>

      <div style={{ paddingLeft: '25px', paddingRight: '25px' }}>
        {moment({ hours: 0, minute: 0, seconds: 0 })
          .add(durationTotal - x, 's')
          .format('HH:mm:ss')}
      </div>
    </div>
  )
}

export default React.memo(SliderProgress)
