import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { useTranslation } from 'react-i18next'

const drawerWidth = 266

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: theme.sizeBody.hd.height,
    maxWidth: 50,
    position: 'fixed',
  },
  logo: {
    marginLeft: 10,
    marginTop: 15,
  },
  contentLogo: {
    position: 'fixed',
    top: 10,
    left: 10,
  },
  paper: {
    height: theme.sizeBody.hd.height,
    background: theme.palette.default.main,
  },
  menuButton: {
    marginRight: 36,
  },
  heightDrawer: {
    height: theme.sizeBody.hd.height,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    height: theme.sizeBody.hd.height,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    border: 'none',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    border: 'none',
    overflowX: 'hidden',
    width: 75,
    [theme.breakpoints.up('sm')]: {
      width: 75,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const PersistentDrawerLeft = (props) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [open, setOpen] = React.useState(props.menuVisible ? true : false)

  React.useEffect(() => {
    setOpen(props.menuVisible)
  }, [props.menuVisible])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div id='navHeader' className={classes.root} style={{ zIndex: 999 }}>
      <Drawer
        onFocus={handleDrawerOpen}
        onBlur={handleDrawerClose}
        onClick={handleDrawerClose}
        variant='permanent'
        anchor='left'
        open={open}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {open && (
          <div className={classes.contentLogo}>
            <img
              src={t('asset.logo')}
              height={35}
              width={100}
              alt='claroTv logo'
              className={classes.logo}
            />
          </div>
        )}
        {props.children}
      </Drawer>
    </div>
  )
}

export default React.memo(PersistentDrawerLeft)
