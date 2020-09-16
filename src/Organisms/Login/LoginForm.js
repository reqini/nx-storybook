import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Input from '../../Atoms/Input/Input'
import PasswordComponent from '../../Molecules/Login/Password'
import ButtonGeneric from '../../Atoms/Buttons/ButtonGeneric'

const useStyles = makeStyles(() => ({
  // styles
  form: {
    display: "flex",
    flexFlow: "column",
    width: 500,
  },
  gridForm: {
    marginBottom: 20,
  }
}))

const LoginForm = () => {

  const classes = useStyles({})

  return (
    <div className={classes.form}>
      <div className={classes.gridForm}>
        <Input />
      </div>
      <div className={classes.gridForm}>
        <PasswordComponent />
      </div>
      <div>
        <ButtonGeneric margin={0} title={'entrar'}/>
      </div>
    </div>
  )
}
export default LoginForm