import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ChipContainer from '../../Atoms/Chip/ChipContainer'

const useStyles = makeStyles(() => ({
  // styles
  contentRating: {
    marginRight: 10
  }
}))

const Rating = ({ rating }) => {

  const colorRating = () => {
    const color = rating
    switch (color) {
      case 'L':
        return '#02AF52'
        break
      case '10':
        return '#02CCFF'
        break
      case '12':
        return '#FFCC01'
        break
      case '14':
        return '#FF6600'
        break
      case '16':
        return '#FF0000'
        break
      case '18':
        return '#000000'
        break
      default:
        return null
        break
    }
  }

  const classes = useStyles({})

  return (
    <div className={classes.contentRating}>
      <ChipContainer 
        borderRadius={3} 
        height={21} 
        width={32} 
        title={rating} 
        color={colorRating()} 
      />
    </div>
  )
}
export default Rating