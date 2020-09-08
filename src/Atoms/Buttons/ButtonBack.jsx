import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BackButton from '../../Icons/App/net_back_icon.svg'
import BackButtonFocus from '../../Icons/App/net_back_icon_focus.svg'
import svgToUri from '../../svgToUri'

const useStyles = makeStyles(() => ({
  back: ({ hidden, position }) => ({
    position: position || 'absolute',
    zIndex: 1,
    width: 55,
    height: 55,
    visibility: hidden ? 'hidden' : null,
    backgroundSize: 50,
    backgroundPosition: 'center',
    backgroundImage: `${svgToUri(BackButton)}`,
    backgroundRepeat: 'no-repeat',

    '&:hover': {
      backgroundImage: `${svgToUri(BackButtonFocus)}`,
      backgroundSize: 55,
      height: 55,
      width: 55
    },
    '&:focus': {
      backgroundImage: `${svgToUri(BackButtonFocus)}`,
      backgroundSize: 55,
      height: 55,
      width: 55
    }
  })
}))

const ButtonBack = ({ onClick, snDown = null, hidden = false, position = 'relative' }) => {
  const classes = useStyles({ hidden, position })

  return (
    <div
      className={`${classes.back} focusable`}
      tabIndex='0'
      data-sn-down={snDown}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
    />
  )
}

export default React.memo(ButtonBack)
