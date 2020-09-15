import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const classes = useStyles({ height })

  return (
    <Grid container spacing={0} className={`fromVMenu rents-error ${classes.globalError}`}>
      <Grid item xs={4} className={classes.contentError}>
        <img src={image || t('asset.imagePopcorn ')} alt={alt} className={classes.image} />
        {children}
      </Grid>
    </Grid>
  )
}
export default React.memo(Message)
