import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Message from './message'
import TextMessages from '../Typography/TextMessages'
import ButtonGeneric from '../Buttons/ButtonGeneric'

const useStyles = makeStyles((theme) => ({
  landscape: () => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  }),
  title: () => ({
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 10,
    margin: 0,
    marginLeft: 7,
  }),
}))

const MessageGeneric = ({ title = '', msg = '', onClick = () => {}, textButton = '' }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.landscape}>
      <Message image={t('asset.imagePopcorn')}>
        <TextMessages
          title={title}
          textContent={msg}
          action={
            <ButtonGeneric
              href='#'
              onClick={(e) => {
                e.preventDefault()
                onClick()
              }}
              title={textButton}
            />
          }
        />
      </Message>
    </div>
  )
}

export default React.memo(MessageGeneric)
