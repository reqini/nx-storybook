import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ButtonGeneric from '../../Buttons/ButtonGeneric'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    margin: '10px 0px 15px 0px !important',
    padding: '0px 20px',
    fontSize: '40px'
  },
  content: {
    margin: 0,
    fontSize: '25px',
    lineHeight: '36px',
    fontWeight: '400',
    color: 'gray'
  }
}))

const BuySuccess = ({ isVcard = false, isSVOD, onClose, playFullMedia, refresh }) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  let msg = isSVOD
    ? t('net_assinar_exito2', 'a assinatura foi feita com sucesso')
    : t('net_renta_exitosa', 'O aluguel foi feito com sucesso')

  const logo = t('asset.net_vcard_renta_exito')

  return (
    <div className={classes.container}>
      <img src={logo} alt='' height='150' />
      <h3 className={classes.title}>{t('net_assinar_exito1', 'tudo certo!')}</h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split('.').join('. <br/>')
        }}
      />
      {isVcard ? (
        <div className={'modal-buttons-horizontal'}>
          <ButtonGeneric
            onClick={e => {
              e.preventDefault()
              playFullMedia()
              onClose()
            }}
            title={t('net_ver_ahora', 'Ver ahora')}
          />
          <ButtonGeneric
            onClick={e => {
              e.preventDefault()
              refresh()
              onClose()
            }}
            title={t('net_ver_mas_tarde', 'Ver mas tarde')}
          />
        </div>
      ) : (
        <div className={'modal-buttons-horizontal'}>
          <ButtonGeneric
            onClick={e => {
              e.preventDefault()

              history.push('/node/mycontents')
              onClose()
            }}
            title={t('net_cerrar_sin_medio_de_pago', 'entendi')}
          />
        </div>
      )}
    </div>
  )
}

export default BuySuccess
