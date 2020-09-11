import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  searchScroll: ({ height, width }) => ({
    height: height || 380,
    width: width || '100%',
    display: 'block',
    position: 'relative',
    overflow: 'hidden'
  }),
  scrollerContainer: {
    display: 'block',
    position: 'relative',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  scrollChildren: {
    height: '100%',
    overflow: 'hidden'
  }
}))

const SearchContentRibbons = ({ children }) => {
  const classes = useStyles({ height, width })

  return (
    <div className={`${classes.searchScroll}`}>
      <div className={`results ${classes.scrollChildren}`}>{children}</div>
    </div>
  )
}
export default SearchContentRibbons
