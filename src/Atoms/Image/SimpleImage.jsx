import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  simpleImage: ({ height, width, circular }) => ({
    height: height || null,
    width: width || null,
    borderRadius: circular && '50%',
  }),
}))

const SimpleImage = ({
  image = 'https://netb.tmsimg.com/assets/s10021_lw_h3_ab.png',
  alt = null,
  title = null,
  width,
  height,
  circular = null,
  className,
}) => {
  const classes = useStyles({ image, width, height, circular })

  return <img className={`${classes.simpleImage} ${className}`} src={image} alt={alt} title={title} />
}
export default React.memo(SimpleImage)
