import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Input from '../../Atoms/Input/Input'
import PasswordComponent from '../../Molecules/Login/Password'
import ButtonGeneric from '../../Atoms/Buttons/ButtonGeneric'
import Typography from 'Components/Atoms/Typography/Typography'

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
        <Typography textAlign="left" variant="p" margin="0 0 10px" fontSize={20}>usuário ou e-mail</Typography>
        <Input />
      </div>
      <div className={classes.gridForm}>
        <Typography textAlign="left" variant="p" margin="0 0 10px" fontSize={20}>senha</Typography>
        <PasswordComponent />
      </div>
      <div>
        <ButtonGeneric fullWidth margin={0} title={'entrar'}/>
      </div>
    </div>
  )
  
}
export default LoginForm