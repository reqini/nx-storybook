import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import NavLinkMenu from "./navLinkMenu"

const useStyles = makeStyles(() => ({
  //
  li: {
    overflow: 'hidden',
    margin: '4px 0',
    minHeight: 36,
    display: 'flex',
    width: '100%',
  }
}))

const ItemLink = ({node, location}) => {

  const classes = useStyles()
  const iconMenuNav = node.image

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

export default ItemLink