import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const Logo = ({ width, classes, image, height, position }) => {
  return (
    <div className={classes.contentLogo} style={{ position }}>
      <img
        src={image === null ? require('../Icons/App/net_launch_logo_claro.png') : image}
        alt='netflex'
        style={{ width, height }}
      />
    </div>
  )
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  image: PropTypes
}
Logo.defaultProps = {
  width: null,
  height: 40,
  position: 'relative',
  image: null
}

const styles = () => ({
  contentLogo: {
    width: '100%',
    padding: 20,
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'flex-start'
  }
})
export default withStyles(styles)(Logo)
