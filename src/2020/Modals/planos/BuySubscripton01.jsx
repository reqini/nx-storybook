import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import get from 'lodash/get'
import { useTranslation } from 'react-i18next'

import ButtonGeneric from '../../Buttons/ButtonGeneric'
import imageLogo from '../../Icons/App/net_launch_logo_claro.svg'

const useStyles = makeStyles((theme) => ({
  container03: {
    width: 900,
    height: theme.sizeBody.hd.height,
    position: 'absolute',
    padding: 40,
    boxSizing: 'border-box',
    textAlign: 'left',
    /* display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", */

    '& h2': {
      fontSize: 28,
      fontWeight: '400',
      margin: '10px 0',
    },

    '& h3': {
      fontSize: 24,
      paddingTop: 20,
      margin: 0,
    },
  },
  logoDescription: {
    marginTop: '10px',
    '& img': {
      height: 72,
    },
  },
  contChannelsItems: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    height: '100%',
  },
  itemList: {
    padding: 0,
    margin: 0,
    marginTop: 25,
    boxSizing: 'border-box',

    '& li': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      width: 90,
      float: 'left',
      margin: 8,
    },
  },
  description: {
    maxHeight: 100,
    overflow: 'hidden',
  },
  item: {
    textDecoration: 'none',
    boxSizing: 'border-box',

    '& img': {
      height: 50,
    },

    '&:focus': {
      '& div': {
        background: theme.palette.primary.main, // tratemos de manejar el theme "#47536b",
      },
    },
  },
  itemImage: {
    background: 'hsla(0,7%,77%,.3)',
    borderRadius: '50%',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: 90,
  },
  itemTitle: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    //textTransform: "lowercase",
  },
  ButtonContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    background: theme.palette.colorModal.main,
    right: 0,
    top: 0,
    height: theme.sizeBody.hd.height,
  },
  ButtonTitle: {
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    padding: '120px 50px 0px 50px',
    lineHeight: '40px',
    fontSize: 28,
    fontWeight: '400',
    margin: 0,
  },
  pricePlans: {
    textAlign: 'left',
    width: '100%',
    padding: '20px 50px',
    boxSizing: 'border-box',
    color: 'white',
    position: 'relative',

    '& p': {
      margin: '10px 0',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',

      '& b': {
        fontSize: 28,
        fontWeight: 500,
        marginTop: '-1px',
      },
    },
  },
}))

const BuyPlan = ({ SetScreen, onClose, item, priceStart, priceEnd, RenderButtonBuy, info }) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()

  const purchased = item.purchased || false
  const titleTrans = item.type !== 'plan' ? 'net_deseja_assinar' : 'net_deseja_assinar_o_plano'
  const unlimited = get(item, 'items')
  let recurrence = []
  for (const i in unlimited) {
    recurrence = unlimited[i]
  }

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
          zIndex: 0,
        }}
      />
      {/* {item.type !== "plan" ? ( */}
      <div className={classes.container03}>
        {/* item.items.length > 12 && <Gradient /> */}
        <div style={{ display: 'flex' }} id='modalButtons'>
          <img src={imageLogo} alt='netflex' style={{ width: 'auto', height: 40, marginBottom: 20 }} />
        </div>

        <div className={classes.logoDescription}>
          {item.type !== 'plan' ? (
            <img
              src={
                item.items[0].composition.systemParameters.IMAGE_URL.includes('?h=72')
                  ? item.items[0].composition.systemParameters.IMAGE_URL
                  : item.items[0].composition.systemParameters.IMAGE_URL + '?h=72'
              }
              alt={item.offerParameters.SHORT_DESCRIPTION}
            />
          ) : (
            <div></div>
          )}
        </div>
        <h2>{item.description}</h2>

        <div>
          <h2>{item.type === 'plan' ? item.name : ''}</h2>
          <h3 className={classes.description}>
            {item.type === 'plan' ? item.description /* item.offerParameters.SHORT_DESCRIPTION */ : ''}
          </h3>
          <div className={classes.contChannelsItems}>
            <h3>{t('net_planos_outro_contenido', 'outros conteudos')}</h3>
            <ul className={classes.itemList} style={{ overflow: 'visible' }}>
              {item.SVOD &&
                item.SVOD.map((data, id) => {
                  return (
                    <li key={id}>
                      <a
                        href='#'
                        className={`${classes.item}`}
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <div className={classes.itemImage}>
                          <img
                            src={data.composition.systemParameters.IMAGE_URL + '?h=72'}
                            alt={data.composition.systemParameters.DISPLAY_NAME}
                          />
                        </div>
                        {/* <Typography
                          className={classes.itemTitle}
                          noWrap
                          variant="h5"
                          component="h5"
                        >
                          {data.composition.systemParameters.DISPLAY_NAME}
                        </Typography> */}
                      </a>
                    </li>
                  )
                })}
            </ul>
            <h3>{item.LIVE.length > 0 ? `canais ${item.name}` : ''}</h3>
            <ul className={classes.itemList}>
              {console.log('ITEMS', item)}
              {item.LIVE &&
                item.LIVE.map((data, id) => {
                  return (
                    <li key={id}>
                      <a
                        href='#'
                        //className={`${classes.item} focusable`}
                        className={`${classes.item}`}
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <div className={classes.itemImage}>
                          <img
                            src={
                              data.composition.systemParameters.IMAGE_URL.includes('?h=72')
                                ? data.composition.systemParameters.IMAGE_URL
                                : data.composition.systemParameters.IMAGE_URL + '?h=72'
                            }
                            alt={data.composition.systemParameters.DISPLAY_NAME}
                          />
                        </div>
                        <Typography className={classes.itemTitle} noWrap variant='h5' component='h5'>
                          {data.composition.systemParameters.DISPLAY_NAME}
                        </Typography>
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
      {/* ) : ( */}
      {/* <div className={classes.container03}>
        <div id="modalButtons">
          {purchased && (
            <ButtonBack
              id="list-channel-back"
              tabIndex="0"
              onClick={() => {
                onClose();
              }}
            />
          )}
          <img
            src={imageLogo}
            alt="netflex"
            style={{ width: "auto", height: 40, marginBottom: 30 }}
          />
        </div>
        <h2>{item.type === "plan" ? item.name : ""}</h2>
        <h3>
          {item.type === "plan" ? item.offerParameters.SHORT_DESCRIPTION : ""}
        </h3>
        <div className={classes.contChannelsItems}>
          <h3>{t("net_planos_outro_contenido", "outros conteudos")}</h3>
          <ul className={classes.itemList} style={{ overflow: "visible" }}>
            {item.SVOD &&
              item.SVOD.map((data, id) => {
                return (
                  <li key={id}>
                    <a
                      href="#"
                      className={`${classes.item}`}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className={classes.itemImage}>
                        <img
                          src={
                            data.composition.systemParameters.IMAGE_URL +
                            "?h=72"
                          }
                          alt={data.composition.systemParameters.DISPLAY_NAME}
                        />
                      </div>
                      <Typography
                        className={classes.itemTitle}
                        noWrap
                        variant="h5"
                        component="h5"
                      >
                        {data.composition.systemParameters.DISPLAY_NAME}
                      </Typography>
                    </a>
                  </li>
                );
              })}
          </ul>
          <h3>{item.LIVE.length > 0 ? `canais ${item.name}` : ""}</h3>
          <ul className={classes.itemList}>
            {item.LIVE &&
              item.LIVE.map((data, id) => {
                return (
                  <li key={id}>
                    <a
                      href="#"
                      //className={`${classes.item} focusable`}
                      className={`${classes.item}`}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className={classes.itemImage}>
                        <img
                          src={
                            data.composition.systemParameters.IMAGE_URL +
                            "?h=72"
                          }
                          alt={data.composition.systemParameters.DISPLAY_NAME}
                        />
                      </div>
                      <Typography
                        className={classes.itemTitle}
                        noWrap
                        variant="h5"
                        component="h5"
                      >
                        {data.composition.systemParameters.DISPLAY_NAME}
                      </Typography>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div> */}
      {/* )} */}
      {purchased ? (
        <div className={`${classes.ButtonContainer}`}>
          <h2>{t('net_planos_already_bought_title', 'ya comprado')}</h2>
          <h3>{t('net_planos_already_bought_info', 'mensaje ya comprado')}</h3>
        </div>
      ) : (
        <div id='modalButtons' className={`${classes.ButtonContainer} default-item`}>
          <h2 className={classes.ButtonTitle}>
            {info.title
              ? `${t(titleTrans, 'Deseja assinar')} ${item.name}${t(
                  'net_dejeja_assinar_signo_pregunta',
                  '?'
                )}`
              : t('net_assinatura_confirmacion1', 'A compra ser\u00e1 feita no valor de')}
          </h2>
          <div className={classes.pricePlans}>
            <p>
              {t('net_planos_precio', 'R$')}
              <b>{priceStart === '' ? 0 : priceStart}</b>,{priceEnd}
              {item.validity.period === 'MONTH' && item.validity.duration && recurrence.recurrent
                ? t('net_planos_mes', '/mes')
                : item.validity.period === 'MONTH' &&
                  item.validity.duration === 1 &&
                  recurrence.recurrent === false
                ? t('net_planos_mes', '/mes') + ' (s/recorrência)'
                : item.validity.period === 'DAY' &&
                  item.validity.duration &&
                  recurrence.recurrent === false
                ? '/ ' + item.validity.duration + ' dias (s/recorrência)'
                : '/ ' + item.validity.duration + ' dias'}
            </p>
          </div>
          <ButtonGeneric
            onClick={(e) => {
              SetScreen(2)
            }}
            title={t('net_assinar', 'assinar')}
          />
          <ButtonGeneric onClick={(e) => onClose()} title={t('btn_modal_cancel', 'Cancelar')} />
        </div>
      )}
    </div>
  )
}

export default BuyPlan
