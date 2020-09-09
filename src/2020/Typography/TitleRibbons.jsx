import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  content: ({ marginL }) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,

    '& span': {
      fontSize: 26,
      marginLeft: marginL
    }
  }),
  titleRibbons: ({ marginL }) => ({
    marginTop: 0,
    fontWeight: 400,
    fontSize: 26,
    width: '100%',
    marginLeft: `${marginL}px!important`
  })
}))

const TitleRibbons = ({ title, spanTag = null, marginB = 10, marginL = 7 }) => {
  const classes = useStyles({ title, spanTag, marginB, marginL })

  return (
    <div className={classes.content}>
      <h2 className={classes.titleRibbons} dangerouslySetInnerHTML={{ __html: title }} />
      {spanTag && (
        <span>
          <b style={{ color: '#4E565C' }}> (0)</b>
        </span>
      )}
    </div>
  )
}
export default React.memo(TitleRibbons)
