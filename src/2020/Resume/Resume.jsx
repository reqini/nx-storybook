import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import Info from './Info'
import Description from './Dascription'
import GradientHome from '../Gradients/GradientHome'
import SimpleImage from '../Image/SimpleImage'
import TitleVcard from '../Typography/TitleVcard'

//import imageDefault from "./images/placeholder_background.jpg";

const useStyles = makeStyles(theme => ({
  resume: {
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden',
    width: '100%',
    minHeight: '200px',
    paddingLeft: '15px'
  },
  resumeContainer: {
    display: 'block',
    position: 'relative',
    margin: 'auto',
    width: '100%',
    maxWidth: 1280,
    height: 720
  },
  resumeDataContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '400px',
    margin: 'auto'
  },
  imgChannelResume: {
    position: 'absolute',
    right: 0,
    top: 20
  },
  resumeDataLarge: {
    float: 'left',
    marginTop: 20
  },
  backgroundGradient: {
    position: 'absolute',
    backgroundImage:
      'linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.6685049019607843) 40%, rgba(0, 0, 0, 0) 100%)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  resumePreviewFullwidth: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    boxShadow: '2px 3px 7px 0px black',
    zIndex: 0,

    '& img': {
      width: '100%'
    }
  }
}))

const Resume = ({
  children,
  item: {
    season = false,
    episode = '',
    episodeTitle = '',
    isLive,
    schedule,
    year,
    rating,
    category,
    duration,
    hasReminder,
    description,
    title,
    subtitle,
    leg,
    language,
    resolution,
    showActionBtns,
    previewImage,
    image_still,
    image_background,
    imageFull,
    imageCard,
    cover,
    infoRented
  },
  className,
  favoriteButton,
  code = '',
  buttons
}) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()

  const srcImage = cover || imageFull || imageCard || image_background || previewImage || image_still

  return (
    <div
      className={`${className} ${classes.resume}`}
      style={{
        //backgroundImage: `url(${imageDefault})`
        background: 'black'
      }}
    >
      {srcImage && (
        <div
          className={classes.resumePreviewFullwidth}
          style={{
            /* backgroundImage: `url(${
              srcImage || "/images/placeholder_background.jpg"
            })`, */
            background: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'top'
          }}
        >
          <div className={classes.backgroundGradient} />
        </div>
      )}
      <GradientHome />
      <div className={`${classes.resumeContainer} fullWidth`}>
        <div className={`${isLive && 'live'} ${classes.resumeDataContainer}`}>
          <div className={classes.resumeDataLarge}>
            <TitleVcard title={title} />
            <div className='resume-info'>
              <Info
                isLive={isLive}
                schedule={schedule}
                year={year}
                rating={rating}
                category={category}
                season={season}
                episode={episode}
                title_episode={episodeTitle}
                duration={duration}
                reminder={hasReminder}
                leg={leg || subtitle}
                language={language}
                resolution={resolution}
              />

              {description && <Description description={description} />}

              {infoRented && (
                <div className='info-rented'>
                  <p>{`assista até ${infoRented}`}</p>
                </div>
              )}

              {(buttons || favoriteButton) && (
                <div className='resume-action-buttons' style={{ display: 'flex' }}>
                  {buttons}
                  {favoriteButton}
                </div>
              )}

              {code.includes('nx_') && (
                <div className={classes.imgChannelResume}>
                  <SimpleImage image={t(`asset.net_icon_${code}`)} alt='channel' height={100} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
export { Info }
export default Resume
