import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(({
  fontSize = 30, 
  fontWeight = 300,
  color = 'white',
  fontStyle = 'normal'
}) => ({
  Typography: {
   fontSize: fontSize,
   fontWeight: fontWeight,
   color: color,
   fontStyle: fontStyle
 }
}))

const Typography = ({
  children,
  variant = "h1",
}) => {

  const classes = useStyles()

  return React.createElement(
    variant,
    { className:classes.Typography },
    children,
  );
}

export default Typography