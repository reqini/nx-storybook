import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import ButtonGeneric from '../../Atoms/Buttons/ButtonGeneric'

const useStyles = makeStyles(() => ({
  formGroup: {
    margin: 'auto',
    width: '100%',
  },
  buttonFilter: {
    height: 56,
    width: 720,
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}))

const RenderButton = ({ pagSelected, setPagSelected, result = [] }) => {
  
  const classes = useStyles({})
  const { t /* i18n */ } = useTranslation()
  const extraProps = { 'data-sn-down': '@searchCont' }

  if (!result.length) {
    extraProps['data-sn-down'] = '@keyboard'
  }

  return (
    <div id='searchButtoms' className={`${classes.formGroup} ${classes.buttonFilter} button-filter`}>
      <ButtonGeneric
        onClick={() => setPagSelected('all')}
        {...extraProps}
        size={'big'}
        width={130}
        margin={0}
        type={pagSelected === 'all' ? 'active' : 'default'}
        title={t('search.net_busqueda_all', 'todos')}
      />
      <ButtonGeneric
        onClick={() => setPagSelected('tv')}
        {...extraProps}
        size={'big'}
        width={130}
        margin={0}
        type={pagSelected === 'tv' ? 'active' : 'default'}
        title={t('search.net_busqueda_tv')}
      />
      <ButtonGeneric
        onClick={() => setPagSelected('movies')}
        {...extraProps}
        size={'big'}
        width={130}
        margin={0}
        type={'default'}
        title={t('search.net_busqueda_filmes', 'Filmes')}
      />
      <ButtonGeneric
        onClick={() => setPagSelected('series')}
        {...extraProps}
        size={'big'}
        width={130}
        margin={0}
        type={pagSelected === 'series' ? 'active' : 'default'}
        title={t('search.net_busqueda_series', 'Series')}
      />
      <ButtonGeneric
        onClick={() => setPagSelected('talents')}
        {...extraProps}
        size={'big'}
        width={130}
        margin={0}
        type={pagSelected === 'talents' ? 'active' : 'default'}
        title={t('search.net_busqueda_artista', 'artista')}
      />
    </div>
  )
}
export default React.memo(RenderButton)