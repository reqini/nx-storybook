import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  backgroundGradientLanding: {
    position: 'absolute',
    backgroundImage: ' linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
    top: 0,
    bottom: 0,
    left: -1,
    right: 0
  }
}))

const GradientHome = () => {
  const classes = useStyles()

  return <div className={classes.backgroundGradientLanding} />
}
export default GradientHome
