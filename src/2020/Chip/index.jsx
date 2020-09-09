import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  chip: ({ color, height, uppercase, width, padding }) => ({
    margin: 0,
    width: width || null,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: padding || '0 10px',
    height: height || 25,
    maxWidth: 120,
    background: color || theme.palette.secondary.main,
    color: 'white',
    textTransform: uppercase ? 'uppercase' : null,
    justifyContent: 'center',
    flexWrap: 'wrap',

    '& h6': {
      margin: 0,
      fontSize: 11.7,
      lineHeight: '19px'
    }
  })
}))

export default function ChipContainer({ title, color, height, gradient, uppercase, width, padding }) {
  const classes = useStyles({ title, color, height, uppercase, width, padding })

  let style = {}
  if (gradient) {
    style = { background: `linear-gradient(${gradient})` }
  }
  return (
    <React.Fragment>
      <div className={classes.chip} style={style}>
        <Typography variant='subtitle1' noWrap>
          {title}
        </Typography>
      </div>
    </React.Fragment>
  )
}
