import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Buttons/ButtonGeneric'

const useStyles = makeStyles(() => ({
  // styles
  flexFormRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}))

const PasswordComponent = () => {
  const classes = useStyles({})

  return (
    <div className={classes.flexFormRow}>
      <Input
        //isFocusable={get(values, "email.length") > 0}
        //currentFocus={currentKey}
        //type={typePassword}
        name='password'
        placeholder={'Contraseña'}
        //value={values.password}
        //onClick={setFocusInput}
      />
      <Button
        heightFocoDisable
        size={'big'}
        width={130}
        margin={'0 0 0 10px'}
        //isFocusable={get(values, "email.length") > 0}
        type='button'
        title={'mostrar'}
        //onClick={changeTypePassword}
      />
    </div>
  )
}
export default PasswordComponent
