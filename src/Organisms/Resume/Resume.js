import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import SimpleImage from '../../Atoms/Image/SimpleImage'
import Typography from '../../Atoms/Typography/Typography'

import Info from '../../Molecules/Resume/Info'
import Description from '../../Molecules/Resume/Dascription'

// const srcImage = cover || imageFull || imageCard || image_background || previewImage || image_still

const useStyles = makeStyles((theme) => ({
  resume: {
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden',
    width: '100%',
    minHeight: '200px',
    paddingLeft: '15px',
  },
  resumeDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '400px',
    margin: 'auto',
  },
  imgChannelResume: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  globalIntro: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
  },
  global: {
    backgroundColor: 'black',
    height: 720,
    position: 'absolute',
    boxSizing: 'border-box',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width: 1280
  },
  contentRibbons: {
    height: 360,
    width: theme.sizeBody.hd.width - 20,
    position: 'relative',
    zIndex: 2,
    bottom: 0,
    paddingLeft: 20,
    overflow: 'hidden',

    '& h2': {
      padding: 0,
      margin: 0,
      marginBotton: 15,
    },
  },
  infoVcard: {
    width: '41%',
    position: 'relative',
    background: 'black',
    zIndex: 1,
    height: 405,
    boxSizing: 'border-box',
  },
  contInfoResume: {
    zIndex: 1,
    height: 320,
    width: 600,
    top: 30,
    left: 20,
    position: 'absolute',
  },
  wrapImageBackground: {
    width: '60%',
    height: 405,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundSize: 1280,
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    // backgroundImage: `url(${t('asset.resume.default')})`
  },
  backgroundVcard: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    '-webkit-box-shadow': 'inset 7em -6em 6em 0em #000',
    '-moz-box-shadow': 'inset 7em -6em 6em 0em #000',
    'box-shadow': 'inset 7em -6em 6em 0em #000',
    // backgroundImage: `url(${ srcImage || t('asset.resume.default')})`
  },
  contentRibonns: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    overflow: 'hidden',
  },
  description: {
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: '300!important',
    textAlign: 'left',
    maxWidth: 700,
    height: 'auto',
    maxHeight: 100,
    overflow: 'hidden',
  },
  infoRented: {
    '& p': {
      color: theme.palette.colorRented.main,
      margin: 0,
      marginTop: 5,
      fontSize: 20,
    },
  },
  titleVcard: ({ maxWidth, noWrap }) => ({
    margin: 0,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 800,
    overflow: noWrap ? 'hidden' : null,
    maxWidth: maxWidth || '100%',
    whiteSpace: noWrap ? 'nowrap' : null,
    textOverflow: noWrap ? 'ellipsis' : null,
  })
}))

const Resume = ({
  children,
  item: {
    season = '',
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
    infoRented,
  },
  onClose = null,
  className,
  favoriteButton,
  code = '',
  buttons,
  hasLanguages,
}) => {

  const { t, i18n } = useTranslation()
  const classes = useStyles()

  return (
    <div className={`${classes.global}`}>
      <div className={`${classes.globalIntro}`}>
        <div className={`${classes.infoVcard}`}>
          <div className={classes.contInfoResume}>
            <div className={classes.contentTitle}>
              <Typography variant="h4">{title}</Typography>
            </div>
            <Info
              isModalProps
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
            <Description description={description} />
            {infoRented && (
              <div className={classes.infoRented}>
                <p>{`assista até ${infoRented}`}</p>
              </div>
            )}
            {(buttons || favoriteButton) &&
              (!hasLanguages ? (
                <React.Fragment>
                  <div className={classes.infoRented}>
                    <p>{`este conteúdo não está disponível`}</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    {buttons}
                    {favoriteButton}
                  </div>
                </React.Fragment>
              ) : (
                <div style={{ display: 'flex' }}>
                  {buttons}
                  {favoriteButton}
                </div>
              ))}
          </div>
        </div>
        <div className={classes.wrapImageBackground}>
          <div className={classes.backgroundVcard}>
            {code.includes('nx_') && (
              <div className={classes.imgChannelResume}>
                <SimpleImage 
                  image={t(`asset.net_icon_${code}`)} 
                  alt='channel' 
                  height={100} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
export { Info }
export default React.memo(Resume)