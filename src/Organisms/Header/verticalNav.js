import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Modal } from '../../2020/Modals/Modal'
import Exit from '../../2020/Modals/exit/exit'

import PersistentDrawerLeft from '../../Molecules/Header/materialNav'
import NavList from "../../Molecules/Header/navList"

const useStyles = makeStyles(() => ({
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
  }
}))

const VerticalNav = ({ 
  user, 
  location, 
  logout = () => {}
 }) => {

  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      window.SpatialNavigation.focus('@container')
    }, 100)
  }

  return (
    <div id='header'>
      <PersistentDrawerLeft>
        <div className={classes.header}>
          <div className={classes.contentNav}>
            <nav>
              <NavList />
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