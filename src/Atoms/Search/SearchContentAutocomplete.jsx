import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  autocomplete: () => ({
    width: 750,
    height: 60,
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
}))

const SearchContentAutocomplete = ({ children }) => {
  const classes = useStyles()

  return <div className={`${classes.autocomplete}`}>{children}</div>
}
export default SearchContentAutocomplete
