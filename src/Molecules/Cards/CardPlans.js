import React from 'react'
import get from 'lodash/get'
import { makeStyles } from '@material-ui/core/styles'

import CardLandscape from './CardLandscape'
import ChipContainer from '../../Atoms/Chip/ChipContainer'
import SimpleImage from '../../Atoms/Image/SimpleImage'
import Typography from '../../Atoms/Typography/Typography'

const colorClasses = ['45deg,#0D9F70,#2574B4']

const useStyles = makeStyles((theme) => ({
  channelsPlans: {
    fontWeight: 900,
    fontSize: 18,
    margin: 5,
    color: 'white',
    position: 'relative',
  },
  pricePlans: {
    textAlign: 'center',
    width: '100%',
    padding: 0,
    color: 'white',
    position: 'relative',

    '& p': {
      margin: '15px 0',
      fontSize: 13.4,

      '& b': {
        fontSize: 30.15,
        fontWeight: 500,
      },
    },
  },
  listChannelsPlans: {
    width: '100%',
    height: 50,
    padding: 0,
    margin: 0,
    marginTop: 5,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',

    '& li': {
      height: 32.4,
      marginLeft: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '&:first-child': {
        marginLeft: 0,
      },

      '& img': {
        width: 37.3,
      },
    },
  },
  contentTags: {
    margin: '5px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const CardPlans = ({
  purchased = false,
  width,
  height,
  bgSize,
  borderRadius,
  live,
  duration,
  price,
  imageCard = 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg',
  period = 'DAY',
  planTitle = 'PLAN',
  channels = [],
  clickHandler = () => {},
  focusHandler = () => {},
  snUp = null,
  snDown = null,
  snLeft = null,
  id,
  isLast,
  focusHandlerDown = () => {},
  marginFoco,
}) => {
  const classes = useStyles({
    width,
    height,
    bgSize,
    borderRadius,
    marginFoco,
    purchased,
  })

  return (
    <CardLandscape
      marginFoco={marginFoco}
      isLast={isLast}
      id={id}
      withContent
      padding={20}
      isFocusable={true}
      bgSize={'cover'}
      borderRadius={12}
      height={198 - 40}
      image={imageCard}
      width={262 - 40}
      opacity
      clickHandler={clickHandler}
      focusHandler={focusHandler}
      focusHandlerDown={focusHandlerDown}
      snUp={snUp}
      snDown={snDown}
      snLeft={snLeft}
    >
      <div className={classes.contentTags}>
        <ChipContainer
          title={planTitle.toUpperCase()}
          uppercase
          height={18}
          width={'auto'}
          gradient={colorClasses[Math.floor(Math.random() * colorClasses.length)]}
        />
        {purchased ? (
          <ChipContainer
            title={'meu plano'}
            color={'rgba(255,255,255,0.28)'}
            height={18}
            padding={'0'}
            width={70}
          />
        ) : null}
      </div>
      <Typography variant="p" className={classes.channelsPlans}>{live} canais</Typography>
      <div className={classes.pricePlans}>
        <Typography variant="p" textAlign="center">
          {price.currency}
          <Typography variant="b">{price.wholeNumber}</Typography>, {price.decimals}
          {duration}
          {period}
        </Typography>
      </div>
      <ul className={classes.listChannelsPlans}>
        {channels.map((ch, i) => {
          if (get(ch, 'composition.systemParameters.IMAGE_URL')) {
            return (
              <li key={i}>
                <SimpleImage 
                  image={ch.composition.systemParameters.IMAGE_URL}
                  alt={'planos' || ch.composition.systemParameters.DISPAY_NAME}
                />
              </li>
            )
          }
        })}
      </ul>
    </CardLandscape>
  )
}
export default React.memo(CardPlans)
