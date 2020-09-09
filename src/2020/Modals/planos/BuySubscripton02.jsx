import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import imageLogo from '../../Icons/App/net_launch_logo_claro.svg'

const useStyles = makeStyles(theme => ({
  container03: {
    width: '900px',
    height: theme.sizeBody.hd.height,
    position: 'absolute',
    //padding: "40px 70px",
    padding: '40px 70px 0 70px',
    boxSizing: 'border-box',
    textAlign: 'left',
    /* display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", */

    '& h2': {
      fontSize: 28,
      fontWeight: '400',
      margin: '10px 0'
    },

    '& h3': {
      color: '#a5aab1',
      fontSize: 28,
      fontWeight: '400',
      margin: '10px 0 25px',
      whiteSpace: 'normal',
      lineHeight: '35px'
    }
  },
  itemList: {
    padding: 0,
    margin: 0,
    height: 400,
    overflow: 'hidden',

    '& li': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      width: 90,
      float: 'left',
      margin: 8
    }
  },
  item: {
    textDecoration: 'none',
    boxSizing: 'border-box',

    '& img': {
      height: 50
    },

    '&:focus': {
      '& div': {
        background: theme.palette.primary.main
      }
    }
  },
  itemImage: {
    background: 'hsla(0,7%,77%,.3)',
    borderRadius: '50%',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: 90
  },
  itemTitle: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
    //textTransform: "lowercase",
  },
  ButtonContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '109px',
    width: '30%',
    background: theme.palette.colorModal.main,
    right: 0,
    top: 0,
    height: theme.sizeBody.hd.height
  },
  ButtonTitle: {
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    padding: '0 50px',
    lineHeight: '40px',
    fontSize: 28,
    fontWeight: '400',
    margin: 0
  }
}))

const BuyConfirmation = ({ onClose, card, item, priceStart, priceEnd, RenderButtonBuy }) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()

  let preferredCard = card.data.creditCardResults.filter(e => {
    return e.preferred
  })

  return (
    <div>
      <div
        style={{
          height: 720,
          width: 900,
          backgroundImage: `url(${item.offerParameters.BANNER_URL})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.2,
          position: 'absolute',
          zIndex: 0
        }}
      />
      <div className={classes.container03}>
        {/* item.items.length > 12 ? <Gradient /> : null */}
        <img
          src={imageLogo}
          alt='netflex'
          style={{ width: 'auto', height: 40, marginBottom: 30, maxWidth: 100 }}
        />
        <h2>{t('net_assinatura_confirmacion', 'Confira os dados antes de confirmar')}</h2>
        {item.type !== 'plan' && item.offerParameters.LOGO_URL && (
          <img
            style={{ width: 'auto', height: 72, marginBottom: 30 }}
            src={item.offerParameters.LOGO_URL + '?h=72'}
            alt={item.offerParameters.SHORT_DESCRIPTION}
          />
        )}
        {item.type === 'plan' && <h2>{item.offerParameters.SHORT_DESCRIPTION}</h2>}
        <h3>{t('net_assinatura_confirmacion_assinatura', 'Assinatura')}</h3>
        <h2>{t('net_assinatura_confirmacion_precio', 'Preço')}</h2>
        <h3>
          {t('net_planos_precio', 'R$')}
          {priceStart === '' ? 0 : priceStart},{priceEnd}
          {t('net_planos_mes', '/mes')}
        </h3>
        <h2>{t('net_assinatura_confirmacion_tarjeta', 'Cartao')}</h2>
        <div
          style={{
            fontSize: '32px',
            fontWeight: '400'
          }}
        >
          {String(card.data.creditCardResults[0].brand).toLowerCase()}{' '}
          <span style={{ letterSpacing: '7px' }}>****</span>
          {preferredCard[0].lastDigits}
        </div>
      </div>
      <div id='modalButtons' className={`${classes.ButtonContainer}`}>
        {RenderButtonBuy({
          title: (
            <h2 class='info-value'>
              {`${t('net_assinatura_confirmacion1', 'A compra ser\u00e1 feita no valor de')}`}
            </h2>
          ),
          subTitle: (
            <h3 className='data-value'>
              <div className='price-plans'>
                {t('net_planos_precio', 'R$')}
                <b>{priceStart === '' ? 0 : priceStart}</b>,{priceEnd}
                {item.validity.period === 'MONTH'
                  ? t('net_planos_mes', '/mes')
                  : t('net_planos_day', '/día')}
              </div>
            </h3>
          )
        })}
      </div>
    </div>
  )
}

export default BuyConfirmation
