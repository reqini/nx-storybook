import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  globalError: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentError: ({ height }) => ({
    height: height,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }),
  image: {
    height: 140,
    marginBottom: 15,
  },
  title: {
    fontWeight: 700,
    fontSize: 32,
    margin: 0,
    marginTop: 20,
  },
  text: {
    fontSize: 28,
    color: '#B8B8B8',
    margin: '0px 0 20px 0',
  },
}))

const Message = ({
  image,
  height = 720,
  children,
  alt = 'popcorn icon',
  title = 'Titulo de ejemplo',
  textContent,
}) => {
  const classes = useStyles({ height })

  return (
    <div className={`fromVMenu rents-error ${classes.globalError}`}>
      <div className={classes.contentError}>
        {image && <img src={image} alt={alt} className={classes.image} />}
        {title && <h2 className={classes.title}>{title}</h2>}
        {textContent && <p className={classes.text}>{textContent}</p>}
        {children}
      </div>
    </div>
  )
}
export default React.memo(Message)
