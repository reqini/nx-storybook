import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

import { Modal } from '../Modals/Modal'
import Exit from '../Modals/exit/exit'

import PersistentDrawerLeft from './materialNav'

import imageHome from '../../Atoms/Icons/Nav/home.svg'
import imageTv from '../../Atoms/Icons/Nav/tv.svg'
import imageMovies from '../../Atoms/Icons/Nav/movies.svg'
import imageSeries from '../../Atoms/Icons/Nav/series.svg'
import imageKids from '../../Atoms/Icons/Nav/kids.svg'
import imageMyContents from '../../Atoms/Icons/Nav/mycontents.svg'

import imageProfile from '../../Atoms/Icons/Nav/profile.svg'
import imageMylist from '../../Atoms/Icons/Nav/MInhaLista.svg'
import imageSearch from '../../Atoms/Icons/Nav/Search.svg'
import imagePlanos from '../../Atoms/Icons/Nav/Planos.svg'
import imageSalir from '../../Atoms/Icons/Nav/salir.svg'

// para usar nodes dinamicamente llamar a
// import { navData } from "../../requests/loader";
// navData()
// ---------------
const nodes = [
  {
    id: '47338',
    code: 'home',
    text: 'início',
    image: imageHome,
  },
  {
    id: '54231',
    code: 'tv',
    text: 'ao Vivo',
    image: imageTv,
  },
  {
    id: '47339',
    code: 'movies',
    text: 'filmes',
    image: imageMovies,
    childs: [
      {
        id: '47346',
        code: 'filmes_acao',
        text: 'Ação',
      },
      {
        id: '53440',
        code: 'filmes_teens',
        text: 'Teens',
      },
      {
        id: '47348',
        code: 'filmes_comedia',
        text: 'Comédia',
      },
    ],
  },
  {
    id: '54234',
    code: 'series',
    text: 'séries',
    image: imageSeries,
  },
  {
    id: '47341',
    code: 'kids',
    text: 'infantil',
    image: imageKids,
  },
  {
    id: '47341',
    code: 'mycontents',
    text: 'Meus Conteúdos',
    image: imageMyContents,
  },
]

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 5,

    '& nav': {
      textAlign: 'center',
      width: '100%',
      fontSize: 18,
      height: '100%',
      maxWidth: 266,
    },
  },
  contentNav: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 266,
    overflowX: 'hidden',
    listStyle: 'none',
    margin: 0,
    padding: '6px 0',
    overflow: 'hidden',
  },
  iconNav: {
    height: 35,
    width: 35,
    marginRight: '25px',
  },
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
  li: {
    overflow: 'hidden',
    margin: '4px 0',
    minHeight: 36,
    display: 'flex',
    width: '100%',
  },
}))

const NavLinkMenu = ({ id, to, image, translate, onClick, location, snDown = null }) => {
  const history = useHistory()
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  let active =
    (location && location.state && location.state.menuSelect) || (location && location.pathname) || false

  switch (active) {
    case '/node/filmes_teens':
    case '/node/filmes_acao':
    case '/node/filmes_comedia':
      active = '/node/movies'
  }

  const { src: Image, alt } = image
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
      <Image className={classes.iconNav} alt={alt} />
      <span>{t(key, text)}</span>
    </div>
  )
}

const VerticalNav = ({ user, location, logout = () => {} }) => {
  const classes = useStyles()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const NavItem = ({ node, location }) => {
    let iconMenuNav = node.image

    return (
      <li key={node.id} className={classes.li}>
        <NavLinkMenu
          id={node.code}
          to={`/node/${node.code}`}
          image={{ src: iconMenuNav, alt: node.text }}
          translate={{
            key: `aa-${node.text}`,
            text: node.text,
          }}
          location={location}
        />
      </li>
    )
  }

  const Nav = ({ nodes = [] }) => {
    return (
      <ul className={classes.nav}>
        <li className={classes.li}>
          <NavLinkMenu
            id='profile'
            to={`/profile`}
            image={{
              src: imageProfile,
              alt: 'menu minha lista',
            }}
            translate={{
              key: 'net_minha_conta_menu_vertical',
              text: 'minha conta',
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id='mylist'
            to={`/mylist`}
            image={{
              src: imageMylist,
              alt: 'menu minha lista',
            }}
            translate={{
              key: 'net_minha_lista_menu_vertical',
              text: 'minha lista',
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id='search'
            to={`/search`}
            image={{
              src: imageSearch,
              alt: 'menu search',
            }}
            translate={{
              key: 'net_busca_menu_vertical',
              text: 'busca',
            }}
            location={location}
          />
        </li>
        {nodes.map((node, position) => (
          <NavItem key={position} node={node} position={position} location={location} />
        ))}
        <li className={classes.li}>
          <NavLinkMenu
            id='plans'
            to={`/plans`}
            image={{
              src: imagePlanos,
              alt: 'plans',
            }}
            translate={{
              key: 'net_planos_menu_vertical',
              text: 'planos',
            }}
            location={location}
          />
        </li>
        <li className={classes.li}>
          <NavLinkMenu
            id='config'
            onClick={() => {
              setIsModalOpen(true)
            }}
            image={{
              src: imageSalir,
              alt: 'settings',
            }}
            translate={{
              key: 'btn_menu_quit',
              text: 'salir',
            }}
            snDown={' '}
            location={location}
          />
        </li>
      </ul>
    )
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      window.SpatialNavigation.focus('@container')
    }, 100)
  }

  return (
    <div id='header' style={{ width: '80px' }}>
      <PersistentDrawerLeft>
        <div className={classes.header}>
          <div className={classes.contentNav}>
            <nav>
              <Nav nodes={nodes} />
            </nav>
          </div>
        </div>
      </PersistentDrawerLeft>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Exit user={user} onClose={closeModal} logout={logout} />
        </Modal>
      )}
    </div>
  )
}

export default React.memo(VerticalNav)
