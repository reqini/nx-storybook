import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  backgroundGradientLanding: ({ width }) => ({
    width: width || null,
    position: 'absolute',
    backgroundImage:
      ' linear-gradient(to right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.6685049019607843) 40%, rgba(0, 0, 0, 0) 100%)',
    top: 0,
    bottom: 0,
    left: -1,
    right: 0
  })
}))

const GradientLanding = ({ width }) => {
  const classes = useStyles({ width })

  return <div className={classes.backgroundGradientLanding} />
}
export default GradientLanding
