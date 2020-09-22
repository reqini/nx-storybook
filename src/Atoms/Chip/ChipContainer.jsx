import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  chip: ({ color, height, uppercase, width, padding, borderRadius }) => ({
    margin: 0,
    width: width && null,
    borderRadius: borderRadius,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: padding || '0 10px',
    height: height || 25,
    maxWidth: 120,
    background: color || theme.palette.secondary.main,
    color: 'white',
    textTransform: uppercase && 'uppercase',
    justifyContent: 'center',
    flexWrap: 'wrap',

    '& h6': {
      margin: 0,
      fontSize: 11.7,
      lineHeight: '19px',
    },
  }),
}))

const ChipContainer = ({
  title,
  color,
  height,
  gradient,
  uppercase,
  width,
  padding,
  borderRadius = 10,
}) => {
  const classes = useStyles({
    title,
    color,
    height,
    uppercase,
    width,
    padding,
    borderRadius,
  })

  let style = {}

  if (gradient) {
    style = { background: `linear-gradient(${gradient})` }
  }

  return (
    <div className={classes.chip} style={style}>
      <Typography variant='subtitle1' noWrap>
        {title}
      </Typography>
    </div>
  )
}

export default ChipContainer
