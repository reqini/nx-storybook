import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import ButtonGeneric from '../../Buttons/ButtonGeneric'

const useStyles = makeStyles(() => ({
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
    margin: 0,
    fontSize: '25px',
    lineHeight: '36px',
    fontWeight: '400',
    color: 'gray',
  },
}))

const ShowError = ({ onClose = () => {}, getData = () => {} }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const msg = t('net_error_carga_alquilados', 'Aconteceu um erro ao carregar o conteúdo')

  return (
    <div className={classes.container}>
      <img src={t('asset.imagePopcorn')} alt='' height='160' />
      <h3 className={classes.title}>{t('net_alugados_contenido_no_disponible_ooops', 'ooops!')}</h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split('.').join('. <br/>'),
        }}
      />
      <ButtonGeneric
        onClick={(e) => {
          e.preventDefault()
          getData()
        }}
        title={t('btn_menu_retry', 'tentar novamente')}
      />
      <ButtonGeneric
        onClick={(e) => {
          e.preventDefault()
          onClose()
        }}
        title={t('btn_modal_cancel', 'cancelar')}
      />
    </div>
  )
}

export default React.memo(ShowError)
