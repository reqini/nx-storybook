import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  containerControls: {
    backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), black)',
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
  },
  contentTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)',
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    margin: 0,
  },
  buttons: ({ image }) => ({
    width: 48,
    height: 48,
    margin: '0 10px',
    borderRadius: '50%',
    backgroundImage: `url(${image})`,
    backgroundSize: 48,
    backgroundPosition: 'center',

    '&:focus': {
      background: theme.palette.primary.main,
      backgroundImage: `url(${image})`,
      backgroundSize: 48,
      backgroundPosition: 'center',
    },
  }),
  contentButtons: {
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Button = React.memo(({ text, classButton, type, image, onClick = () => {} }) => {
  const { t } = useTranslation()
  const getProperties = ({ type }) => {
    switch (type) {
      case 'back':
        return {
          className: 'transparent',
          image: t('asset.player.iconBack'),
        }
      case 'episodes':
        return {
          image: t('asset.player.iconEpisodes'),
        }
      case 'replay':
        return {}
      case 'previewSong':
        return {}
      case 'stepBackward':
        return {
          image: t('asset.player.iconBackward'),
        }
      case 'play':
        return {
          className: 'transparent',
          image: t('asset.player.iconPlay'),
        }
      case 'pause':
        return {
          className: 'transparent',
          image: t('asset.player.iconPause'),
        }
      case 'stepForward':
        return {
          image: t('asset.player.iconForward'),
        }
      case 'next':
        return {
          image: t('asset.player.iconForward'),
        }
      case 'nextSong':
        return {}
      case 'language':
        return {
          image: t('asset.player.iconSub'),
        }
      case 'skipIntro':
        return {
          // text: Translator.get("skip_intro_player", "Omitir intro"),
          className: 'focusable focusable-skip skip-control-btn action',
        }
      case 'record':
        return {
          className: 'player-ui-button action',
        }
      case 'favorite':
      default:
        return {}
    }
  }

  const data = getProperties({ type })
  const classes = useStyles({ image: data.image, type })

  return (
    <div
      className={`${classes.buttons} ${data.className} focusable`}
      tabIndex='0'
      data-sn-up={'#playerSlider'} // hacia arriba siempre al slider
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {text && text}
    </div>
  )
})

const DefaultButtons = ({
  title,
  subTitle,
  progresBar,
  play,
  episodes,
  stepBackward,
  stepForward,
  onShowEpisodes,
  isPause,
  handlePausePlay,
  useLanguages,
  onShowLanguages,
  handleBackwardForward = () => {},
}) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.contentTitle}>
        <h3 className={classes.title}>{title}</h3>
        <h3 className={classes.subTitle}>{subTitle}</h3>
      </div>
      <div className={classes.containerControls}>
        {progresBar}

        <div className={classes.contentButtons}>
          {episodes && <Button type='episodes' onClick={onShowEpisodes} />}
          {stepBackward && <Button type='stepBackward' onClick={() => handleBackwardForward(true)} />}
          {play &&
            (isPause ? (
              <Button classButton={classes.player} type='play' onClick={handlePausePlay} />
            ) : (
              <Button type='pause' onClick={handlePausePlay} />
            ))}
          {stepForward && <Button type='stepForward' onClick={() => handleBackwardForward()} />}
          {useLanguages && <Button type='language' onClick={onShowLanguages} />}
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(DefaultButtons)
