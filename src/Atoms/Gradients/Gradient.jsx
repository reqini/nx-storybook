import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  gradientTransparentPlans: ({ height, position, bottom }) => ({
    position: position,
    bottom: bottom || -1,
    left: 0,
    width: '100%',
    height: height || 100,
    backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), black)',
  }),
}))

const Gradient = ({ height, position = 'absolute', bottom }) => {
  const classes = useStyles({ height, position, bottom })

  return <div className={classes.gradientTransparentPlans} />
}
export default Gradient
