import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import get from 'lodash/get'
import ChipContainer from '../../Chip'
import CardLandscape from './CardLandscape'

const useStyles = makeStyles(theme => ({
  channels: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    '& img': {
      height: 27.62,
      marginRight: 5
    },
    '& p': {
      color: 'white',
      width: '100%',
      margin: '0 5px',
      whiteSpace: 'break-spaces',
      boxSizing: 'border-box'
    }
  },
  description: {
    position: 'relative',
    width: '100%',
    height: 40,

    '& p': {
      margin: '5px 21px',
      color: 'white',
      fontSize: 12
    }
  },
  gradient: {
    width: 10,
    height: 40,
    background: 'linear-gradient(45deg, #3876DE, #2D86B6)',
    marginRight: 10
  },
  contentImage: {
    overflow: 'hidden',
    height: 27.62
  },
  pricePlans: {
    textAlign: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    color: 'white',
    position: 'relative',

    '& p': {
      margin: 0,
      marginTop: 10
    },

    '& b': {
      fontSize: 28,
      fontWeight: 500
    }
  }
}))

const CardChannels = ({
  purchased,
  price,
  period = 'DAY',
  planTitle,
  duration,
  imageCard = '',
  channels = [],
  clickHandler = () => {},
  focusHandler = () => {},
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  isLast,
  focusHandlerDown = () => {}
}) => {
  const classes = useStyles()

  return (
    <CardLandscape
      isLast={isLast}
      id={id}
      withContent
      padding={'12px 5px'}
      isFocusable={true}
      bgSize={'cover'}
      borderRadius={12}
      height={150 - 24}
      image={imageCard}
      width={250 - 10}
      opacity
      clickHandler={clickHandler}
      focusHandler={focusHandler}
      focusHandlerDown={focusHandlerDown}
      snUp={snUp}
      snDown={snDown}
      snLeft={snLeft}
    >
      <div className={classes.channels}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={classes.gradient} />
          <div className={classes.contentImage}>
            {channels.map((ch, i) => {
              if (get(ch, 'composition.systemParameters.IMAGE_URL')) {
                return (
                  <img
                    key={i}
                    src={get(ch, 'composition.systemParameters.IMAGE_URL')}
                    alt={get(ch, 'composition.systemParameters.DISPAY_NAME')}
                  />
                )
              }
            })}
          </div>
        </div>
        {purchased ? (
          <ChipContainer
            title={'minha assinatura'}
            color={'rgba(255,255,255,0.28)'}
            height={18}
            width={'auto'}
          />
        ) : null}
      </div>
      <div className={classes.description}>
        <p>{planTitle}</p>
      </div>
      <div className={classes.pricePlans}>
        <p>
          {price.currency}
          <b>{price.wholeNumber}</b>,{price.decimals}
          {duration}
          {period}
        </p>
      </div>
    </CardLandscape>
  )
}

export default React.memo(CardChannels)
