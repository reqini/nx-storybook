import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  backgroundImage: ({ 
    height, 
    width, 
    circular, 
    bgSize, 
    bgPosition, 
    image 
  }) => ({
    height: height || null,
    width: width || null,
    borderRadius: circular && '50%',
    backgroundImage: `url(${ image })`,
    backgroundSize: bgSize || 'cover',
    backgrondPosition: bgPosition || 'center',
    backgroundRepeat: 'no-repeat'
  }),
}))

const BackgroundImage = ({
  children,
  image = 'https://netb.tmsimg.com/assets/s10021_lw_h3_ab.png',
  width,
  height,
  circular = null,
  className,
  bgSize, 
  bgPosition
}) => {
  const classes = useStyles({ image, width, height, circular, bgSize, bgPosition })

  return (
    <div className={`${classes.backgroundImage} ${className}`}>
      {children}
    </div>
  )
}
export default React.memo(BackgroundImage)