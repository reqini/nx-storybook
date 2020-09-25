import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import PulseLoader from 'react-spinners/PulseLoader'
import SimpleImage from '../../Atoms/Image/SimpleImage'

const useStyles = makeStyles(() => ({
  containerLoading: ({ position }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: position,
    zIndex: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }),
  text: {
    fontSize: 24,
    color: 'white',
  },
  imgLogin: {
    height: 50,
    marginBottom: 30,
  },
}))

const LoadingComponent = ({ image, title, background = 'black', position = 'relative' }) => {
  const { t } = useTranslation()
  const classes = useStyles({ position })

  return (
    <div className={`${classes.containerLoading}`} style={{ background: background }}>
      {image && <SimpleImage image={image || t('asset.logo')} className={classes.imgLogin} />}
      {title && <p className={classes.text}>{title}</p>}
      <PulseLoader sizeUnit={'px'} size={18} color={'#E1261C'} loading={true} />
    </div>
  )
}

export default React.memo(LoadingComponent)
