import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  //
  navItem: {
    width: '100%',
    minWidth: 'max-content',
    color: '#fff',
    padding: 5,
    textDecoration: 'none',
    textAlign: 'left',
    alignItems: 'center',
    display: 'flex',
    fontWeight: '300',

    padding: '4px 0 4px 21px',
    textTransform: 'lowercase',
    fontWeight: 400,

    '&:focus': {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
      outline: 0,
      fontWeight: '800',
    },
  },
  navItemActive: {
    backgroundColor: theme.palette.active.main,
    fontWeight: '500',
  },
  iconNav: {
    height: 35,
    width: 35,
    marginRight: 25,
  }
}))

const NavLinkMenu = ({ id, to, image, translate, onClick, location, snDown = null }) => {

  const history = useHistory()
  const classes = useStyles()
  const { t } = useTranslation()

  let active = (location && location.state && location.state.menuSelect) || (location && location.pathname) || false

  switch (active) {
    case '/node/filmes_teens':
    case '/node/filmes_acao':
    case '/node/filmes_comedia':
      active = '/node/movies'
  }

  const { src, alt } = image
  const { key, text } = translate

  return (
    <div
      id={id}
      key={id}
      tabIndex={0}
      className={`${classes.navItem} focusable ${
        active === `/${id}` || active === `/node/${id}` ? `${classes.navItemActive} active` : ''
      }`}
      onClick={() => {
        if (onClick) {
          onClick()
        } else {
          history.push(to)
        }
      }}
      data-sn-down={snDown}
    >
      <img src={src} className={classes.iconNav} alt={alt} />
      <span>{t(key, text)}</span>
    </div>
  )
}
export default NavLinkMenu