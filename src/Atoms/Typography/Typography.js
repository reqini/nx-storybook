import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  Typography: ({
    fontSize,
    fontWeight,
    color,
    fontStyle,
    margin,
    textAlign,
  }) => ({
    width: '100%',
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    margin: margin,
    textAlign: textAlign,
    fontStyle: fontStyle,
  }),
}))

const Typography = ({
  children,
  className,
  variant = 'h1',
  fontSize = 30,
  fontWeight = 500,
  color = 'white',
  fontStyle = 'normal',
  margin = 0,
  textAlign = 'left',
}) => {
  const classes = useStyles({
    fontSize,
    className,
    fontWeight,
    color,
    fontStyle,
    margin,
    textAlign,
  })

  return React.createElement(variant, { className: `${className}  ${classes.Typography}` }, children)
}

export default Typography
