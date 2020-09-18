import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'

import NavLinkMenu from "../../Atoms/Header/navLinkMenu"
import ItemLink from "../../Atoms/Header/ItemLink"

const nodes = [
  {
    id: '47338',
    code: 'home',
    text: 'início',
    image: t('asset.menu.imageHome'),
  },
  {
    id: '54231',
    code: 'tv',
    text: 'ao Vivo',
    image: t('asset.menu.imageTv'),
  },
  {
    id: '47339',
    code: 'movies',
    text: 'filmes',
    image: t('asset.menu.imageMovies'),
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
    image: t('asset.menu.imageSeries'),
  },
  {
    id: '47341',
    code: 'kids',
    text: 'infantil',
    image: t('asset.menu.imageKids'),
  },
  {
    id: '47341',
    code: 'mycontents',
    text: 'Meus Conteúdos',
    image: t('asset.menu.imageMyContents'),
  },
]

const useStyles = makeStyles(() => ({
  // 
  nav: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 266,
    overflowX: 'hidden',
    listStyle: 'none',
    margin: 0,
    padding: '6px 0',
    overflow: 'hidden',
  }
}))

const NavList = () => {

  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <ul className={classes.nav}>
      <NavLinkMenu
        id='profile'
        to={`/profile`}
        image={{
          src: t('asset.menu.imageProfile'),
          alt: 'menu minha lista',
        }}
        translate={{
          key: 'net_minha_conta_menu_vertical',
          text: 'minha conta',
        }}
        location={location}
      />
      <NavLinkMenu
        id='mylist'
        to={`/mylist`}
        image={{
          src: t('asset.menu.imageMylist'),
          alt: 'menu minha lista',
        }}
        translate={{
          key: 'net_minha_lista_menu_vertical',
          text: 'minha lista',
        }}
        location={location}
      />
      <NavLinkMenu
        id='search'
        to={`/search`}
        image={{
          src: t('asset.menu.imageSearch'),
          alt: 'menu search',
        }}
        translate={{
          key: 'net_busca_menu_vertical',
          text: 'busca',
        }}
        location={location}
      />
      {nodes.map((node, position) => (
        <ItemLink key={position} node={node} position={position} location={location} />
      ))}
      <NavLinkMenu
        id='plans'
        to={`/plans`}
        image={{
          src: t('asset.menu.imagePlanos'),
          alt: 'plans',
        }}
        translate={{
          key: 'net_planos_menu_vertical',
          text: 'planos',
        }}
        location={location}
      />
      <NavLinkMenu
        id='config'
        onClick={() => {
          setIsModalOpen(true)
        }}
        image={{
          src: t('asset.menu.imageSalir'),
          alt: 'settings',
        }}
        translate={{
          key: 'btn_menu_quit',
          text: 'salir',
        }}
        snDown={' '}
        location={location}
      />
      </ul>
  )

}

export default React.memo(NavList)