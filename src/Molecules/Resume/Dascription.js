import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../../Atoms/Typography/Typography'

const useStyles = makeStyles(() => ({
  description: {
    lineHeight: '26px',
    maxWidth: '700px',
    marginBottom: 15,
    height: 'auto',
    maxHeight: '102px',
    overflow: 'hidden',

    '& p': {
      margin: 0,
      fontSize: '20px',
    },
  },
}))

const Description = ({ description }) => {
  
  const classes = useStyles()

  return (
    <div className={`${classes.description}`}>
      <Typography 
      textAlign="left" 
      fontWeight={300} 
      variant="p">
        {description}
      </Typography>
    </div>
  )
}
export default React.memo(Description)
