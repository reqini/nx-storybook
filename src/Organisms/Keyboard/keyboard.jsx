import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import TvLatinLower from './layouts/tvLatinLower'
import TvLatinUpper from './layouts/tvLatinUpper'
import TvSymbolsLayout from './layouts/tvSymbols'

import KeyboardButton from '../../Atoms/Keyboard/button'

const useStyles = makeStyles((theme) => ({
  keyboardHeaderHorizontal: {
    paddingLeft: '90px',
  },
  keyboardLetterHor: {
    fontWeight: '100',
    borderRadius: 'none',
    height: 40,
    fontSize: 18,
    lineHeight: '40px',
    width: 'calc(100% / 3)',
    maxWidth: 230,

    '&:focus': {
      color: theme.palette.secondary.main,
      background: 'transparent!important',
      fontWeight: '900',
    },
  },
  keyboard: {
    height: 'auto',
    width: '100%',
  },
  keyboardRow: {
    overflow: 'hidden',
    width: '100%',
  },
  number: {
    display: 'flex',
    justifyContent: 'center',
  },
  keyboardRowHeader: {
    display: 'none',
  },
  keyboardRowDomains: {
    display: 'none',
  },
  keyboardEmpty: {
    borderRadius: '6px',
    border: 'none',
    margin: '5px 0',
    padding: 10,
    '&:focus': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900',
    },
    '&:hover': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900',
    },
  },
  keyboardEmpty2: {
    borderRadius: 6,
    border: '1px solid #fff',
    padding: '12px 32px',
    fontWeight: '100',
    width: 'calc(100% / 5)',
    '&:focus': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900',
    },
    '&:hover': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900',
    },
  },
  borrar: {
    padding: '8px 0',
  },
  limpiar: {
    padding: '8px 10px',
  },
  space: {
    minWidth: 270,
    marginLeft: 10,
    marginRight: 10,
    background: theme.palette.buttonsColor.foco,
    padding: '8px 10px',
    borderRadius: 6,
  },
  upper: {
    padding: '0 10px',
  },
  keyboardImage: {
    display: 'block',
    height: 19,
    padding: '5px 0',
    margin: 'auto',
    width: 'auto',
  },
  keyboardImage2: {
    display: 'block',
    height: 35,
    padding: '5px 0',
    margin: 'auto',
    width: 'auto',
  },
  especial: {
    minWidth: 60,
  },
  keyboardLetter: {
    borderRadius: '50%',
    fontWeight: '300',
    height: 50,
    lineHeight: '50px',
    margin: '5px 0',
    width: '9.09091%',
    maxWidth: 52,
    '&:focus': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900',
    },
    /*     '&:hover': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900'
    } */
  },
  keyboardLetterNumber: {
    borderRadius: '50%',
    height: 52,
    margin: 3,
    padding: 15,
    lineHeight: '20px',
    width: '20%',
    maxWidth: 53,
    '&:focus': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900',
    },
    /*     '&:hover': {
      fontWeight: 900,
      background: theme.palette.secondary.main,
      fontWeight: '900'
    } */
  },
  formContainer: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    maxWidth: '605px',
  },
}))

const Keyboard = ({
  region = 'brasil',
  keysDevice,
  showMails = false,
  currentValue = '',
  onClick = () => {},
  backspaceClick = () => {},
  snUp = null,
}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [typeKeyboard, setTypeKeyboard] = useState('')
  const [keys, setKeys] = useState([])
  const [keysNumber, setKeysNumber] = useState([])
  const [keysHeader, setKeysHeader] = useState([])
  const input = currentValue

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    setKeysNumber(getKeysLayoutNumber())
    setKeysHeader(getKeysLayoutHeader())
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    setKeys(getKeysLayout())
  }, [typeKeyboard])

  const getKeysLayout = () => {
    if (typeKeyboard === 'symbols') {
      return TvSymbolsLayout.layoutSymbols
    }

    if (typeKeyboard === 'upper') {
      return TvLatinUpper.layout[region]
    }

    return TvLatinLower.layout[region]
  }

  const getKeysLayoutNumber = () => {
    return TvLatinLower.layoutNumber[region]
  }

  const getKeysLayoutHeader = () => {
    return TvLatinLower.layoutHeader[region]
  }

  const handleLetterButtonClick = (key) => {
    const nextValue = `${input}${key}`

    onClick(nextValue)
  }

  const handleBackspaceClick = () => {
    if (!input.length) {
      return
    }

    const value = input
    const nextValue = value.substring(0, value.length - 1)

    onClick(nextValue)
  }

  const handleSpaceButtonClick = () => {
    if (!input) {
      return
    }

    const lastChar = input.slice(-1)
    let nextValue = input

    if (lastChar !== ' ') {
      nextValue += ' '
    }

    onClick(nextValue)
  }

  const handleEmptyClick = () => {
    onClick('')
  }

  const thereIsAnotherKeyboard = () => {
    let existModalKeyboard = document.getElementsByClassName('keyboard modal').length > 0
    return existModalKeyboard ? true : false
  }

  const handleKeyPress = (e) => {
    if (thereIsAnotherKeyboard()) {
      return
    }

    const currentKey = keysDevice ? keysDevice.getPressKey(e.keyCode) : null
    switch (currentKey) {
      case 'ONE':
        handleLetterButtonClick('1')
        break
      case 'TWO':
        handleLetterButtonClick('2')
        break
      case 'THREE':
        handleLetterButtonClick('3')
        break
      case 'FOUR':
        handleLetterButtonClick('4')
        break
      case 'FIVE':
        handleLetterButtonClick('5')
        break
      case 'SIX':
        handleLetterButtonClick('6')
        break
      case 'SEVEN':
        handleLetterButtonClick('7')
        break
      case 'EIGHT':
        handleLetterButtonClick('8')
        break
      case 'NINE':
        handleLetterButtonClick('9')
        break
      case 'ZERO':
        handleLetterButtonClick('0')
        break
    }
  }

  return (
    <Grid container>
      {showMails && (
        <Grid item xs={12} className='keyboardGral' style={{ background: '#1C1D1E' }}>
          <div style={{ maxWidth: 630 }}>
            <div className={classes.keyboardHeaderHorizontal}>
              {keysHeader.map((row, index) => (
                <div key={index}>
                  {row.map((button) => (
                    <KeyboardButton
                      value={button}
                      className={classes.keyboardLetterHor}
                      onClick={(key) => handleLetterButtonClick(key)}
                      key={button}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Grid>
      )}
      <Grid container className='keyboardPad'>
        <Grid
          item
          xs={8}
          style={{
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div className={classes.formContainer}>
            {keys.map((row, index) => {
              return (
                <div key={index}>
                  {row.map((button) => {
                    return (
                      <KeyboardButton
                        useMail={showMails}
                        isTop={index === 0}
                        value={button}
                        className={classes.keyboardLetter}
                        onClick={(key) => handleLetterButtonClick(key)}
                        key={button}
                        snUp={snUp}
                      />
                    )
                  })}
                </div>
              )
            })}
            <div>
              <KeyboardButton
                value={
                  typeKeyboard === 'symbols'
                    ? TvLatinLower.symbolsKeyValue
                    : TvSymbolsLayout.symbolsKeyValue
                }
                className={`${classes.keyboardEmpty} ${classes.especial}`}
                onClick={() => {
                  setTypeKeyboard((state) => (state !== 'symbols' ? 'symbols' : ''))
                }}
              />
              <KeyboardButton
                value={
                  typeKeyboard === 'upper' ? (
                    <img
                      src={t('asset.keyboard.capitalLettersActive')}
                      alt='back-space-icon'
                      className={classes.keyboardImage2}
                    />
                  ) : (
                    <img
                      src={t('asset.keyboard.capitalLettersInactive')}
                      alt='back-space-icon'
                      className={classes.keyboardImage2}
                    />
                  )
                }
                className={`${classes.keyboardEmpty} ${classes.upper}`}
                onClick={() => {
                  setTypeKeyboard((state) => (state !== 'upper' ? 'upper' : ''))
                }}
              />
              <KeyboardButton
                value={t('net_teclado_espacio', 'espaço')}
                className={`${classes.keyboardEmpty} ${classes.space}`}
                onClick={(key) => handleSpaceButtonClick()}
                dataSnDown='none'
              />
              <KeyboardButton
                value={
                  <img
                    src={t('asset.keyboard.backSpaceIcon')}
                    alt='back-space-icon'
                    className={classes.keyboardImage}
                  />
                }
                className={`${classes.keyboardEmpty} ${classes.borrar}`}
                onClick={(key) => handleBackspaceClick()}
                dataSnDown='none'
              />
              <KeyboardButton
                value={t('empty', 'limpar')}
                className={`${classes.keyboardEmpty} ${classes.limpiar}`}
                onClick={(key) => handleEmptyClick()}
                dataSnDown='none'
              />
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            margin: '12px 0',
            borderLeft: '3px solid rgba(29,29,32, 1)',
          }}
        >
          {keysNumber.map((row, index) => (
            <div className={classes.number} key={index}>
              {row.map((button) => (
                <KeyboardButton
                  isTop={index === 0}
                  value={button}
                  className={classes.keyboardLetterNumber}
                  onClick={(key) => handleLetterButtonClick(key)}
                  key={button}
                  snUp={snUp}
                />
              ))}
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default React.memo(Keyboard)
