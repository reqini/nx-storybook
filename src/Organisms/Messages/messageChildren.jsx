import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
    width: 600,
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

const MessageChildren = ({ image, children, height = 720, alt = 'popcorn icon' }) => {
  const { t } = useTranslation()
  const classes = useStyles({ height })

  return (
    <div className={`fromVMenu rents-error ${classes.globalError}`}>
      <div className={classes.contentError}>
        <img src={image || t('asset.imagePopcorn')} alt={alt} className={classes.image} />
        {children}
      </div>
    </div>
  )
}
export default MessageChildren
