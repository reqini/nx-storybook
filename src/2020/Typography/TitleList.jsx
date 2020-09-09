import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  titleList: () => ({
    fontSize: 35,
    paddingBottom: 5,
    paddingTop: 10,
    margin: 0,
    marginLeft: 7
  })
}))

export default function TitleList({ title }) {
  const classes = useStyles({ title })

  return <h1 className={classes.titleList}>{title}</h1>
}
