import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  titleVcard: ({ maxWidth, noWrap }) => ({
    margin: 0,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 800,
    overflow: noWrap ? 'hidden' : null,
    maxWidth: maxWidth || '100%',
    whiteSpace: noWrap ? 'nowrap' : null,
    textOverflow: noWrap ? 'ellipsis' : null,
  }),
  contentTitle: ({ position }) => ({
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    position: position || null,
  }),
}))

const TitleVcard = ({ title, onClose = null, position, maxWidth, noWrap = false }) => {
  const classes = useStyles({ title, onClose, position, maxWidth, noWrap })

  return (
    <div className={classes.contentTitle}>
      <h4 className={classes.titleVcard}>{title}</h4>
    </div>
  )
}
export default React.memo(TitleVcard)
