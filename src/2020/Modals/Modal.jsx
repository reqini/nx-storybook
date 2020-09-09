import React, { useRef, useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import uniqueId from 'lodash/uniqueId'

import ModalContext from './ModalContext'

const Context = React.createContext()

const ModalProvider = ({ children }) => {
  const modalRef = useRef()
  const [context, setContext] = useState()

  // make sure re-render is triggered after initial
  // render so that modalRef exists
  useEffect(() => {
    setContext(modalRef.current)
  }, [])

  return (
    <Context.Provider value={context}>
      {children}
      <div ref={modalRef} />
    </Context.Provider>
  )
}

const Modal = ({ onClose, children, style = {}, disableAutoFocus = false }) => {
  const { keys } = useContext(ModalContext)

  const ref01 = useRef()
  const modalNode = useContext(Context)

  // cuando hay un modal arriba de otro necesito tener distinto id y agregar la config a spatial navigation para que no se pierda el foco
  const id = uniqueId('id_')
  useEffect(() => {
    ref01.current.addEventListener('keydown', handleKeyPress)

    window.SpatialNavigation.add(id, {
      selector: `#${id} .focusable`,
      defaultElement: '.default-item .focusable',
      restrict: 'self-only'
    })
    window.SpatialNavigation.makeFocusable(id)
    // window.SpatialNavigation.makeFocusable();

    if (!disableAutoFocus) {
      setTimeout(setFocus, 200)
    }
  })

  const setFocus = () => {
    window.SpatialNavigation.focus(`@${id}`)
  }

  const handleKeyPress = e => {
    const currentKey = keys ? keys.getPressKey(e.keyCode) : null
    switch (currentKey) {
      case 'BACK':
        e.preventDefault()
        e.stopPropagation()
        onClose()
        break
      default:
        // por warning
        break
    }
  }

  return modalNode
    ? ReactDOM.createPortal(
        <div
          ref={ref01}
          id={id}
          // pasar todos los children a funcion y sacar esta condicion y la de abajo
          className={typeof children === 'function' ? '' : 'modalNew'}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            /* width: "100%",
            height: "100%", */
            width: 1280,
            height: 720,
            background: 'black',
            zIndex: 9999,
            ...style
          }}
        >
          {typeof children === 'function' ? children({ setFocus }) : children}
        </div>,
        modalNode
      )
    : null
}

export { ModalProvider, Modal }
