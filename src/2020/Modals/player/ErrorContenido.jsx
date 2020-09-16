import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  container: ({ useButtom }) => ({
    position: useButtom ? 'initial' : 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  }),
  title: {
    margin: '20px 0 0 0',
    fontSize: 37,
    fontWeight: 500,
  },
  content: {
    fontSize: 39,
    lineHeight: '0px',
    fontWeight: '400',
    color: 'gray',
  },
  button: {
    marginTop: 20,
    textAlign: 'center',
    width: 300,
    background: theme.palette.buttonsColor.main, //"#4E565C",
    borderRadius: 6,
    fontSize: 18,
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',

    '&:focus': {
      fontSize: 18,
      borderRadius: 1,
      fontWeight: '900',
      transition: 'box-shadow 0.15s ease-in',
      background: theme.palette.primary.main,
      boxShadow: `0 0 0 7px ${theme.palette.primary.main}`,
      color: '#fff',
      border: 'none',
    },
  },
}))

const ShowError = ({ onClose = () => {}, useButtom = true }) => {
  const { t } = useTranslation()
  const classes = useStyles({ useButtom })

  const msg = t('player_error_contenido', 'Este conteúdo não está disponível')

  return (
    <div className={classes.container}>
      <img src={t('asset.imagePopcorn')} alt='' height='160' />
      <h3 className={classes.title}>{t('player_error_contenido_title', 'Erro na reprodução')}</h3>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: msg.split('.').join('. <br/>'),
        }}
      />
      {useButtom && (
        <a
          className={`${classes.button} focusable`}
          href='javascript:void(0)'
          onClick={(e) => onClose()}
        >
          {t('player_error_contenido_button', 'OK')}
        </a>
      )}
    </div>
  )
}

export default ShowError
