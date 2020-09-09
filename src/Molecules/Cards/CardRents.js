import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const defaultImage = require('./images/default-image.svg')

const useStyles = makeStyles(theme => ({
  cardRents: ({ width, height, borderRadius }) => ({
    background: theme.palette.cardSearch.main,
    border: `2px solid ${theme.palette.grayColor.main}`,
    height: height || 200,
    width: width || 290,
    margin: 4,
    borderRadius: borderRadius || 12,
    overflow: 'hidden',

    '&:focus': {
      background: theme.palette.colorActive.main,
      border: `4px solid white`,
      margin: 0
    }
  }),
  cardRentsContentDefaultImage: () => ({
    background: theme.palette.cardSearch.main,
    backgroundImage: `url(${defaultImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 100,
    backgroundPosition: 'center',
    width: '100%',
    height: 146
  }),
  cardRentsImage: ({ bgSize, image, bgSizeFocus }) => ({
    backgroundImage: `url(${image})`,
    position: 'relative',
    backgroundSize: bgSize || 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    minHeight: 146,
    boxShadow: theme.shadowBox.generic,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    '&:focus': {
      backgroundSize: bgSizeFocus || 'cover'
    }
  }),
  cardRentsContent: {
    padding: 10,
    textAlign: 'left',
    height: '100%'
  },
  title: () => ({
    color: 'white',
    fontSize: 15
  }),
  subTitle: () => ({
    color: theme.palette.colorRents.main,
    fontSize: 15
  })
}))

const CardRents = ({
  id,
  clickHandler,
  focusHandler,
  data,
  width,
  height,
  bgSize,
  bgSizeFocus,
  borderRadius,
  title = false,
  image,
  children,
  subTitle,
  progressLine,
  isFocusable,
  snUp = null,
  snDown = null,
  snLeft = null,
  snRight = null,
  isFirst = false,
  focusHandlerDown = () => {}
}) => {
  const classes = useStyles({
    width,
    height,
    bgSize,
    borderRadius,
    image,
    bgSizeFocus
  })

  return (
    <div
      id={id}
      tabIndex='0'
      className={`${isFocusable ? 'focusable' : ''} ${classes.cardRents}`}
      onClick={e => {
        if (typeof clickHandler === 'function') {
          e.preventDefault()
          return clickHandler()
        }
        return null
      }}
      data-sn-right={snRight}
      data-sn-left={isFirst ? (snLeft !== null ? snLeft : '@nav_down') : null}
      onFocus={() => focusHandler && focusHandler(data)}
      data-sn-up={snUp}
      data-sn-down={snDown}
      onKeyDown={e => {
        focusHandlerDown(e)
      }}
    >
      <div className={`${classes.cardRentsContentDefaultImage}`}>
        <div className={`${classes.cardRentsImage}`}>{children}</div>
      </div>
      {progressLine}
      <div className={classes.cardRentsContent}>
        {title && (
          <Typography className={classes.title} variant='body1' noWrap>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography className={classes.subTitle} variant='body2' noWrap>
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  )
}
export default React.memo(CardRents)
