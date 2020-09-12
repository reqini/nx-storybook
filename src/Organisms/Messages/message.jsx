import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ImagePopcorn from '../../Atoms/Icons/Messages/net_contenido_alquilado_sin_contenido.svg'

const useStyles = makeStyles(() => ({
  globalError: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentError: ({ height }) => ({
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }),
  image: {
    height: 140,
    marginBottom: 15,
  },
}))

const Message = ({ image, children, height = 720, alt = 'popcorn icon' }) => {
  const classes = useStyles({ height })

  return (
    <Grid container spacing={0} className={`fromVMenu rents-error ${classes.globalError}`}>
      <Grid item xs={4} className={classes.contentError}>
        {image ? (
          <img src={image} alt={alt} className={classes.image} />
        ) : (
          <ImagePopcorn alt={alt} className={classes.image} />
        )}
        {children}
      </Grid>
    </Grid>
  )
}
export default Message
