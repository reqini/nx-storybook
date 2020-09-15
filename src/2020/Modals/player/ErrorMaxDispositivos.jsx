import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import ButtonGeneric from '../../../2020/Buttons/ButtonGeneric'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    margin: '10px 0px 15px 0px !important',
    padding: '0px 20px',
    fontSize: '40px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '765px',
    margin: 0,
    fontSize: '25px',
    lineHeight: '36px',
    fontWeight: '400',
    color: 'gray',
  },
}))

const ShowError = ({ onClose = () => {} }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const msg = t(
    'PLY_DEV_00006',
    'Sua conta atingiu o limite máximo de dispositivos em uso. Para gerenciar seus dispositivos, acesse no aplicativo do seu celular, a opção Menu - Configurações - Gerenciar Dispositivos'
  )

  return (
    <div className={classes.container}>
      <img src={t('asset.imagePopcorn')} alt='' height='160' />
      <h3 className={classes.title}>{t('social_title_ups123', 'ooops!')}</h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split('.').join('. <br/>'),
        }}
      />
      <ButtonGeneric
        href='#'
        onClick={(e) => {
          e.preventDefault()
          onClose()
        }}
        title={t('entendi', 'entendi')}
      />
    </div>
  )
}

export default React.memo(ShowError)
