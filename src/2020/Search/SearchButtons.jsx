import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  active: {
    height: theme.sizeButton.height.main,
    background: `${theme.palette.active.main}`,
    border: `3px solid ${theme.palette.active.main}`,
    fontWeight: 900,
    position: 'initial',
    marginBottom: 0,
  },
  formGroup: {
    margin: 'auto',
    width: '100%',
  },
  buttonFilter: {
    height: 56,
    width: 750,
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnSearch: {
    background: theme.palette.buttonsColor.main,
    border: '3px solid transparent',
    minWidth: 137,
    height: theme.sizeButton.height.main,
    borderRadius: 4,
    fontWeight: 300,
    fontSize: 21,
    color: '#fff',
    textDecoration: 'none',
    '&:focus': {
      height: theme.sizeButton.height.foco,
      background: theme.palette.primary.main,
      position: 'initial',
      marginBottom: 0,
      marginTop: 0,
    },
  },
}))

const RenderButton = ({ pagSelected, setPagSelected, result = [] }) => {
  const classes = useStyles({})
  const { t, i18n } = useTranslation()

  const extraProps = { 'data-sn-down': '@searchCont' }
  if (!result.length) {
    extraProps['data-sn-down'] = '@keyboard'
  }

  return (
    <div id='searchButtoms' className={`${classes.formGroup} ${classes.buttonFilter} button-filter`}>
      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === 'all' && `${classes.active} active`
        }`}
        onClick={() => setPagSelected('all')}
        {...extraProps}
      >
        {t('search.net_busqueda_all', 'todos')}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === 'tv' && `${classes.active} active`
        }`}
        onClick={() => setPagSelected('tv')}
        {...extraProps}
      >
        {t('search.net_busqueda_tv')}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === 'movies' && `${classes.active} active`
        }`}
        onClick={() => setPagSelected('movies')}
        {...extraProps}
      >
        {t('search.net_busqueda_filmes', 'Filmes')}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === 'series' && `${classes.active} active`
        }`}
        onClick={() => setPagSelected('series')}
        {...extraProps}
      >
        {t('search.net_busqueda_series', 'Series')}
      </button>

      <button
        className={`${classes.btnSearch} focusable ${
          pagSelected === 'talents' && `${classes.active} active`
        }`}
        onClick={() => setPagSelected('talents')}
        {...extraProps}
      >
        {t('search.net_busqueda_artista', 'artista')}
      </button>
    </div>
  )
}
export default React.memo(RenderButton)
