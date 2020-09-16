import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Resume from '../Resume/Resume'

const useStyles = makeStyles((theme) => ({
  epgContentResume: () => ({
    height: 200,
    background: 'red',
  }),
  epgResume: {
    'resume-data-container': {
      width: 'calc(100% - 30px)',
      height: 290,
    },
    'resume-data-large': {
      marginTop: 0,
    },
  },
}))

const Background = ({ item }) => {
  if (!item) {
    return null
  }
  const { image, title, description, year, rating, language, duration } = item
  const classes = useStyles()
  return (
    <div
      style={{
        top: '0px',
        left: '0px',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <Resume
        className={classes.epgResume}
        item={{
          title,
          cover: image || false,
          description,
          lenguage: language,
        }}
        isLive={false}
      />
    </div>
  )
}

export default React.memo(Background)
