import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
 // styles
}))

const ComponentTest = ({ /* props */ }) => {

  const classes = useStyles({
    // props to styles
  })

  return (
    <div>
      component
    </div>
  )
}
export default ComponentTest