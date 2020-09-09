import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import PulseLoader from 'react-spinners/PulseLoader'

import imageLogo from '../Icons/App/net_launch_logo_claro.svg'

class LoadingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    const { classes, image, title, background } = this.props
    return (
      <div className={`${classes.containerLoading}`} style={{ background: background }}>
        {image ? <img className={classes.imgLogin} src={imageLogo} /> : null}
        {title ? <p className={classes.text}>{title}</p> : null}
        <PulseLoader sizeUnit={'px'} size={18} color={'#E1261C'} loading={this.state.loading} />
      </div>
    )
  }
}
LoadingComponent.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.bool
}

LoadingComponent.defaultProps = {
  background: 'black',
  title: null,
  image: false
}
const styles = () => ({
  containerLoading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 24
  },
  imgLogin: {
    height: 50,
    marginBottom: 30
  }
})
export default withStyles(styles)(LoadingComponent)
