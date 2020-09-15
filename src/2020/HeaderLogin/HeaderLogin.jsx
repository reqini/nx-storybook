import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '27px',
    left: '17px',
  },
  img: {
    position: 'absolute',
    left: '20px',
    width: '100px',
  },
  title: {
    margin: 0,
    width: '91px',
    position: 'absolute',
    left: '133px',
    top: '11px',
    fontWeight: '500',
  },
}))

const HeaderLogin = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <img src={t('asset.logo')} className={classes.img} alt='Claro Logo' />
      <div>
        <h2 className={classes.title}>{t('login.header', 'Login')}</h2>
      </div>
    </div>
  )
}

export default React.memo(HeaderLogin)
