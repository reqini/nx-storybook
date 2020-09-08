import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BackButton from '../../Icons/App/net_back_icon.svg'
import BackButtonFocus from '../../Icons/App/net_back_icon_focus.svg'
import svgToUri from '../../svgToUri'

const useStyles = makeStyles(() => ({
  containerBack: {
    width: 80
  },
  back: ({ hidden, position }) => ({
    position: position || 'absolute',
    top: 30,
    left: 30,
    zIndex: 1,
    width: 50,
    height: 50,
    visibility: hidden ? 'hidden' : null,
    backgroundSize: 50,
    backgroundImage: `${svgToUri(BackButton)}`,
    backgroundRepeat: 'no-repeat',

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
    <div className={classes.containerBack}>
      <div
        className={`${classes.back} focusable`}
        tabIndex='0'
        data-sn-down={snDown}
        onClick={e => {
          e.preventDefault()
          onClick(e)
        }}
      />
    </div>
  )
}

export default React.memo(ButtonBack)
