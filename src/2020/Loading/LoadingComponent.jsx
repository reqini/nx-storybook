import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import PulseLoader from 'react-spinners/PulseLoader'

const useStyles = makeStyles((theme) => ({
  containerLoading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  imgLogin: {
    height: 50,
    marginBottom: 30,
  },
}))

const LoadingComponent = ({ image, title, background }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={`${classes.containerLoading}`} style={{ background: background }}>
      {image && <img className={classes.imgLogin} src={t('asset.logo')} />}
      {title && <p className={classes.text}>{title}</p>}
      <PulseLoader sizeUnit={'px'} size={18} color={'#E1261C'} loading={true} />
    </div>
  )
}

export default React.memo(LoadingComponent)
