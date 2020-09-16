import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  search: {
    height: 425,
    position: 'relative',
    width: '100%',
    zIndex: 10,
  },
}))

const SearchContainer = ({ children, ref }) => {
  const classes = useStyles()

  return (
    <div className={`main ${classes.search}`} ref={ref}>
      {children}
    </div>
  )
}
export default SearchContainer
