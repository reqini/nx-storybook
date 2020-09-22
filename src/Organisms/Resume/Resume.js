import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import SimpleImage from '../../Atoms/Image/SimpleImage'
import Typography from '../../Atoms/Typography/Typography'

import Info from '../../Molecules/Resume/Info'
import Description from '../../Molecules/Resume/Dascription'
import TitleVcard from '../../Molecules/Typography/TitleVcard'

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
    alignItems: 'flex-start',
    height: '400px',
    margin: 'auto',
  },
  imgChannelResume: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  global: {
    backgroundColor: 'black',
    height: 403,
    top: 0,
    width: '100%',
    maxWidth: 1280,
    position: 'absolute',
    display: 'flex',
  },
  contentRibbons: {
    height: 360,
    width: theme.sizeBody.hd.width - 20,
    position: 'absolute',
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
    zIndex: 1,
    background: 'black',
    height: '100%',
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
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundSize: 1280,
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
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
    'box-shadow': 'inset 7em -6em 6em 0em #000'
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
      marginTop: 10,
      fontSize: 20,
    },
  },
  actions: {
    display: 'flex'
  }
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
    imageFull,
    showActionBtns,
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
  const srcImage = imageFull

  return (
    <React.Fragment>
      <div className={`${classes.global}`}>
        <div className={`${classes.infoVcard}`}>
          <div className={classes.contInfoResume}>
            <TitleVcard onClose={onClose} title={title} />
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
            <Description description={description} />
            {infoRented && (
              <div className={classes.infoRented}>
                <Typography variant="p">{`assista até ${infoRented}`}</Typography>
              </div>
            )}
            {(buttons || favoriteButton) &&
              (!hasLanguages ? (
                <React.Fragment>
                  <div className={classes.infoRented}>
                    <Typography variant="p">{`este conteúdo não está disponível`}</Typography>
                  </div>
                  <div className={`resume-action-buttons ${classes.actions}`}>
                    {favoriteButton}
                  </div>
                </React.Fragment>
              ) : (
                <div className={`resume-action-buttons ${classes.actions}`}>
                  {buttons}
                  {favoriteButton}
                </div>
              ))}
          </div>
        </div>
        <div className={classes.wrapImageBackground} style={{ backgroundImage: `url(${t('asset.resume.default')})` }}>
          <div className={classes.backgroundVcard} style={{ backgroundImage: `url(${srcImage || t('asset.resume.default')})` }}>
            {code.includes('nx_') && (
              <div className={classes.imgChannelResume}>
                <SimpleImage image={t(`asset.net_icon_${code}`)} alt='channel' height={100} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${classes.contentRibbons}`}>{children}</div>
    </React.Fragment>
  )
}
export { Info }
export default Resume