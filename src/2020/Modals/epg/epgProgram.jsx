import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import TitleRibbons from '../../Typography/TitleRibbons'
import { Info } from '../../Resume/Resume'

const useStyles = makeStyles((theme) => ({
  containerFuture: {
    width: '100%',
    height: theme.sizeBody.hd.height,
    padding: 45,
    backgroundSize: 'cover',
    position: 'relative',
    textAlign: 'initial',
    boxSizing: 'border-box',
  },
  resume: {
    position: 'relative',
    zIndex: 2,
    width: 550,
  },
  background: () => ({
    position: 'absolute',
    width: '60%',
    height: 432,
    right: 0,
    top: 0,
    //boxShadow: "inset 9em -10em 20em 0em #000",
    '-webkit-box-shadow': 'inset 7em -6em 6em 0em #000',
    '-moz-box-shadow': 'inset 7em -6em 6em 0em #000',
    'box-shadow': 'inset 7em -6em 6em 0em #000',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }),
  resumeDataLarge: {
    width: '100%',
  },
  imgLogo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,

    '& span': {
      fontSize: 30,
      fontWeight: 500,
      marginRight: 10,
    },
    '& img': {
      height: 50,
    },
  },
  contentFutureTime: {
    color: theme.palette.epg.focus,
  },
  descrip: {
    width: '100%',
  },
}))

const Program = ({ channel, event, onClose }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)

  const classes = useStyles()

  const getFocus = () => {
    setTimeout(() => {
      window.SpatialNavigation.focus('@modal-new')
    }, 200)
  }

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(false)
      getFocus()
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    getFocus()
  }, [loading])

  const { number, image: logo } = channel
  const {
    title,
    description,
    image,
    isLive,
    schedule,
    year,
    rating,
    genre,
    seasonsText,
    hasReminder,
    recordable,
    eventStatus,
    subtitle,
    language,
    resolution,
  } = event

  const date_time = `Hoje ${moment(event.date_begin, 'YYYY/MM/DD HH:mm:ss').format('HH:mm')} - ${moment(
    event.date_end,
    'YYYY/MM/DD HH:mm:ss'
  ).format('HH:mm')}`
  const duration = moment.utc().startOf('day').add(event.duration, 'minutes').format('hh:mm:ss')

  const DataMoldal = () => {
    return (
      <div onClick={(e) => onClose()} className={`content-future ${classes.containerFuture}`}>
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${image || t('asset.resume.default')})` }}
        />
        <div className={`${classes.resume} fromVMenu`}>
          <div className={'resume-container fullWidth'}>
            <div className={`resume-data-container`}>
              <div className={classes.resumeDataLarge}>
                <div className={classes.imgLogo}>
                  <span>{number}</span>
                  <img src={logo} alt={title} />
                </div>
                <TitleRibbons title={title} marginB={15} marginL={0} />
                <div className={classes.descrip}>
                  <Info
                    isLive={isLive}
                    schedule={schedule}
                    year={year}
                    rating={rating}
                    category={genre}
                    season={seasonsText}
                    duration={duration}
                    reminder={hasReminder}
                    recordable={recordable}
                    eventStatus={eventStatus}
                    subtitle={subtitle}
                    language={language}
                    resolution={resolution}
                  />
                  <div className='resume-description block-with-text'>
                    <p>{description}</p>
                  </div>
                  <h4 className={`focusable ${classes.contentFutureTime}`}>{date_time}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='modal-overlay'>
      <div className={`modal-container-new program-future`}>
        <DataMoldal />
      </div>
    </div>
  )
}

export default Program
