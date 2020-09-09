import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
  epgHeaderContainer: {
    display: 'block',
    maxWidth: 1260
  },
  epgHeader: {
    position: 'relative',
    background: 'rgba(0,0,0, 0.6)',
    marginBottom: 2,
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '5px 10px'
  },
  transparent: {
    background: 'transparent',
    border: 'none'
  },
  epgHeaderTitle: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 400,
    width: '20%',
    paddingLeft: 145
  },
  colorCodes: {
    width: '98%',
    bottom: 120,
    zIndex: 10,
    boxSizing: 'border-box',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingRight: 40,
    textAlign: 'right'
  },
  colorCodeItem: {
    fontSize: 16,
    cursor: 'pointer',
    display: 'inline-block',
    top: 0,
    padding: '0 6px',
    borderRadius: 10,
    marginLeft: 12,
    color: '#fff',
    textDecoration: 'none',
    fontSize: 20,

    '& span': {
      height: 10,
      width: 10,
      verticalAlign: 'middle'
    },
    '& p': {
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  colorBall: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '25px',
    marginLeft: '5px',
    marginRight: '5px',
    padding: 0,
    verticalAlign: 'center'
  },
  blue: {
    background: '#007dff'
  },
  red: {
    background: 'red'
  },
  yellow: {
    background: '#ffe100'
  },
  green: {
    background: '#00af1d'
  }
}))

const EpgHeader = ({
  date,
  type = 'MINI',
  yellowHandler = () => {},
  redHandler = () => {},
  greenHandler = () => {},
  blueHandler = () => {}
}) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  return (
    <div
      className={`${classes.epgHeader} ${type === 'MINI' ? classes.transparent : null}`}
      style={{
        top: type === 'MINI' ? '20px' : '2px'
      }}
    >
      <div className={classes.epgHeaderContainer}>
        <div className={classes.epgHeaderTitle}>{date}</div>
        <ul className={classes.colorCodes}>
          <div onClick={redHandler} className={classes.colorCodeItem}>
            <span className={`${classes.colorBall} ${classes.red}`} />
            {type !== 'FULL'
              ? t('aoVivo.net_guia_completa', 'Mini-guía en pantalla')
              : t('aoVivo.net_mini_guia', 'Mini-guía en pantalla')}
          </div>
          <div onClick={greenHandler} className={classes.colorCodeItem}>
            <span className={`${classes.colorBall} ${classes.green}`} />
            {t('aoVivo.net_cambiar_idioma', 'Idioma')}
          </div>
          <div onClick={yellowHandler} className={classes.colorCodeItem}>
            <p>
              <span className={`${classes.colorBall} ${classes.yellow}`} />
              {t('aoVivo.tv_channels_title', 'Canales')}
            </p>
          </div>
          <div onClick={blueHandler} className={classes.colorCodeItem}>
            <p>
              <span className={`${classes.colorBall} ${classes.blue}`} />
              {t('aoVivo.net_menu', 'Menú')}
            </p>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default React.memo(EpgHeader)
