import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import ButtonGeneric from '../../Buttons/ButtonGeneric'

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0 0 0',
    fontSize: '37px',
  },
  content: {
    marginTop: '25px',
    fontSize: '25px',
    lineHeight: '0px',
    fontWeight: '400',
    color: 'gray',
  },
  contentLogo: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
}))

const showError = ({ channel, onClose = () => {} }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  const { number, image, name } = channel
  const msg = `${t('net_canal_bloqueado', 'Este canal não faz parte de seu plano de assinatura ')}`

  return (
    <div className={classes.container}>
      <div className={classes.contentLogo}>
        <img src={t('asset.logo')} alt='netflex' style={{ height: 40 }} />
      </div>

      <h3 className={classes.title}>
        {number}
        <img
          style={{ padding: 0, margin: '0 20px', width: '90px' }}
          src={image || ''}
          alt={name || ''}
        />
      </h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split('.').join('. <br/>'),
        }}
      />
      <ButtonGeneric
        onClick={(e) => {
          onClose()
          history.push({
            pathname: '/plans',
            state: { channel: channel },
          })
        }}
        title={'ver planos'}
      />
      <ButtonGeneric onClick={(e) => onClose()} title={t('net_back_registro_dispositivo', 'Cerrar')} />
    </div>
  )
}

export default showError
