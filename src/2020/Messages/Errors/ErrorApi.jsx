import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Message from '../../Messages/message'
import TextMessages from '../../Typography/TextMessages'
import ButtonGeneric from '../../Buttons/ButtonGeneric'

const useStyles = makeStyles((theme) => ({
  landscape: () => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  }),
  title: () => ({
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 10,
    margin: 0,
    marginLeft: 7,
  }),
}))

const ErrorApi = ({ getData = () => {}, title = false }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.landscape}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <Message image={t('asset.imagePopcorn')}>
        <TextMessages
          title={t('net_ningun_resultado', 'ooops!')}
          textContent={t('net_error_carga_alquilados', 'Aconteceu um erro ao carregar o conteúdo')}
          action={
            <ButtonGeneric
              href='#'
              onClick={(e) => {
                e.preventDefault()
                getData()
              }}
              title={t('btn_menu_retry', 'intentar de nuevo')}
            />
          }
        />
      </Message>
    </div>
  )
}

export default ErrorApi
