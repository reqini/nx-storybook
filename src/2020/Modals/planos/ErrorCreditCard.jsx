import React from 'react'
import { useTranslation } from 'react-i18next'
import ButtonGeneric from '../../Buttons/ButtonGeneric'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modalOverlay: {
    width: theme.sizeBody.hd.width,
    height: theme.sizeBody.hd.height,
    position: 'fixed',
    zIndex: '9999',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 1)',
    color: theme.palette.textColor.main,
  },
  modalContainer: {
    display: 'flex',
    width: 580,
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    '& img': {
      height: 122,
    },
    '& p': {
      '& b': {
        padding: '0px 10px 0px 0px',
      },
    },
  },
  modalText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 400,
    color: 'gray',
  },
  containerButton: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
}))

const ErrorCreditCard = (props) => {
  const { t, i18n } = useTranslation()

  let msg = t(
    'net_sin_medio_de_pago',
    '- No cuentas con un medio de pago, para ingresar uno, abre la aplicacion desde un dispositivo movil'
  )

  const classes = useStyles()

  return (
    <div className={classes.modalOverlay}>
      <div class={`${classes.modalContainer} retry error-buy`}>
        <div class={classes.modalContent}>
          <img src={t('asset.net_vcard_renta_sin_tarjeta')} alt={t('net_ningun_resultado', 'ooops!')} />
          <div class='modal-title'>
            <h3>{t('net_ningun_resultado', 'ooops!')}</h3>
          </div>
          <div>
            <p
              className={classes.modalText}
              dangerouslySetInnerHTML={{
                __html: msg.split('.').join('. <br/>'),
              }}
            />
          </div>
          <div>
            <ButtonGeneric
              onClick={(e) => props.onClose()}
              title={t('net_cerrar_sin_medio_de_pago', 'Cerrar')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorCreditCard
