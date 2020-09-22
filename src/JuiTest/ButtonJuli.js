import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ChipContainer from '../Atoms/Chip/ChipContainer'

const useStyles = makeStyles((theme) => ({
  classButton:{   //nombre de la clase
    borderRadius: 10,
    background:  'black',
    color: 'white'
  }, //no olvidar la coma si voy a agregar otra clase
  classButton2:{
    background: 'red',
    width: 200,
    padding: 10
  },
  texto:{
    color: 'white',
    width: '100%',
    textAlign: 'left',
    margin: 0
  }
}))

const ButtonJuli = ({ 
  children, //sirve para poder cambiar el nombre del boton
}) => {

  const classes = useStyles({
    // props to styles
  })

  return (
    <React.Fragment>
       <button className={classes.classButton}> {/*Así se invoca a la clase */}
          <p className={classes.texto}>
            {children}
           </p>
       </button>
       <button className={classes.classButton2}>
          <p className={classes.texto}>
            {children}
          </p>
       </button>
       <ChipContainer title="Estoy aprendiendo lento como Maradona" color="pink" /> {/* */}
    </React.Fragment>

  )
}
export default ButtonJuli