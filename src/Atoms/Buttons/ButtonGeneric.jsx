import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  constainer: ({ width, margin = 10, minHeight }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    boxSizing: 'border-box',
    minHeight: minHeight || 54,
    margin: margin,
  }),
  button: ({
    width,
    fontWeightSpan,
    heightFocoDisable = false,
    backgroundButton = theme.palette.buttonsColor.main,
    color = 'white',
    fontWeight = false,
    borderRadius = 6,
  }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: backgroundButton,
    color: color || 'white',
    borderRadius: borderRadius,
    lineHeight: '22px',
    position: 'relative',
    textDecoration: 'none',
    boxSizing: 'border-box',

    '&:focus': {
      height: heightFocoDisable ? theme.sizeButton.height.main : theme.sizeButton.height.foco,
      borderRadius: 1,
      fontWeight: fontWeight ? 500 : 900,
      color: '#fff',
      border: 'none',
      background: theme.palette.primary.main,
      boxSizing: 'border-box',
      transition: 'box-shadow 0.15s ease-in',
      boxShadow: '0 0 0 5px rgba(71, 83, 107, 1)',
    },

    '& span': {
      fontWeight: fontWeightSpan,
      fontSize: 20,
    },
  }),
  big: ({ fullWidth }) => ({
    width: fullWidth ? '100%' : 'auto',
    minWidth: 230,
    height: theme.sizeButton.height.main,
    fontSize: 24,
  }),
  medium: ({ fullWidth }) => ({
    width: fullWidth ? '100%' : 'auto',
    minWidth: 180,
    height: 38,
    fontSize: 21,
  }),
  small: ({ fullWidth }) => ({
    width: fullWidth ? '100%' : 'auto',
    minWidth: 100,
    height: 28,
    fontSize: 18,
  }),
  nonFocusable: {
    background: 'silver',
    color: 'gray',
    cursor: 'no-drop',
  },
  description: {
    marginTop: 5,
    fontSize: '18px',
    textTransform: 'lowercase',
    textAlign: 'center',
  },
}))

const ButtonGeneric = ({
  big,
  medium,
  small,
  backgroundButton,
  borderRadius,
  fullWidth = true,
  fontWeight = true,
  isFocusable = true,
  fontWeightSpan,
  children,
  title = null,
  width,
  color,
  heightFocoDisable,
  margin,
  onClick,
  description,
  snUp = null,
  snDown = null,
  snRight = null,
  snLeft = null,
  minHeight = null,
}) => {
  const classes = useStyles({
    width,
    minHeight,
    fontWeight,
    fontWeightSpan,
    heightFocoDisable,
    margin,
    isFocusable,
    fullWidth,
    color,
    borderRadius,
    backgroundButton,
  })

  return (
    <div className={classes.constainer}>
      <div
        tabIndex='0'
        className={`${isFocusable ? 'focusable' : classes.nonFocusable} ${classes.button} ${
          (medium && classes.medium) || (small && classes.small) || classes.big
        }`}
        onClick={(e) => {
          e.preventDefault()
          onClick && onClick(e)
        }}
        data-sn-up={snUp}
        data-sn-down={snDown}
        data-sn-right={snRight}
        data-sn-left={snLeft}
      >
        <span>{title}</span>
        {children}
      </div>
      {description && <p className={classes.description}>{description}</p>}
    </div>
  )
}

export default React.memo(ButtonGeneric)
