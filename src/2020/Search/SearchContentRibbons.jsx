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
    //width: 'calc(100% - 25px)',
    overflow: 'hidden'
    //paddingLeft: 25
  }
}))

export default function SearchContentRibbons({ children }) {
  const classes = useStyles()

  return (
    <div className={`${classes.searchScroll}`}>
      <div className={`results ${classes.scrollChildren}`}>{children}</div>
    </div>
  )
}
