import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
  globalError: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentError: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    height: 140,
    marginBottom: 15,
  },
}))

export default function Message({ image, children, height = 720 }) {
  const classes = useStyles({ height })

  return (
    <Grid container spacing={0} className={`fromVMenu rents-error ${classes.globalError}`}>
      <Grid item xs={4} className={classes.contentError} style={{ height: height }}>
        <img src={image} alt='popcorn icon' className={classes.image} />
        {children}
      </Grid>
    </Grid>
  )
}
