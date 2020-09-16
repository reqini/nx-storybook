import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import get from 'lodash/get'

import CardPlans from 'Components/Molecules/Cards/CardPlans'

const item = JSON.parse(
  `{"id":"9de4b915-4795-4e2b-bc60-e30cf99b4b37","catalogId":"29fc47b7-cedc-435f-b581-bdc842c719fe","name":"O MELHOR DO ESPORTE","validity":{"period":"DAY","duration":15,"unlimited":false},"offerParameters":{"BANNER_URL":"https://storage.googleapis.com/image-storage-nx1-prod/img_1.jpg","SHORT_DESCRIPTION":"O MELHOR DO ESPORTE","HASCHANNEL":"TRUE","TYPE":"PLAN"},"totalPrice":{"amount":109,"scale":2,"currency":"BRL"},"orderIndex":0,"items":[{"id":"c6b3b9ca-ee7a-407a-8d04-54191201b348","orderIndex":0,"price":{"amount":102,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"f95b4b7f-0620-499e-9137-e14760f10241","name":"NX_SVOD_CLARO_VIDEO","description":"NX_SVOD_CLARO_VIDEO","componentId":"3e8abea2-ef90-49df-85d9-772244801330","attributes":[{"name":"TYPE","type":"TEXT","text":"SVOD"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"Claro video","IMAGE_URL":"http://assetsnx.clarobrasil.mobi/assets/s92299_lw_h15_aa.png"}}},{"id":"c483f83d-b6c1-4871-a34f-a0a2e6700eb3","orderIndex":1,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"e11340d3-31ee-4ed5-8b3a-2f829ad27d27","name":"NX_LIVE_BAND_SPORTS_HD","description":"NX_LIVE_BAND_SPORTS_HD","componentId":"db931ee6-ae4a-4e80-8e0a-cb4eba3f6ff6","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"BAND SPORTS HD","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png"}}},{"id":"86aefe69-502c-4e98-a595-20da5c5e8f74","orderIndex":2,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"9d1d6811-3f2a-4bad-99d0-d9995ab9ecde","name":"NX_LIVE_ESPN","description":"NX_LIVE_ESPN","componentId":"40cd01d6-1b3a-4914-9b03-db7ac65cdf05","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s16388_lw_h3_aa.png"}}},{"id":"d6bf19dd-9928-427d-89fe-d18d134f2d14","orderIndex":3,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"e7102035-b488-4718-8542-a770da02419a","name":"NX_LIVE_ESPN_BR","description":"NX_LIVE_ESPN_BR","componentId":"6169bc4c-9a32-4139-9f59-a964f113e33e","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN BR","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s75838_lw_h3_aa.png"}}},{"id":"ed411f76-9718-40e3-90db-133869f737b8","orderIndex":4,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"af4ad994-1dbd-4dc9-940f-d9a9ad8a9500","name":"NX_LIVE_ESPN_EXTRA","description":"NX_LIVE_ESPN_EXTRA","componentId":"a479fb5c-1e18-4088-aa5d-f00c4f02ab42","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN EXTRA","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s109973_lw_h3_aa.png"}}},{"id":"b7c6c1b9-4826-4073-b0d0-c990b2b419f6","orderIndex":5,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"eff66909-a59f-44ba-868d-b9f1120b1725","name":"NX_LIVE_ESPN_HD","description":"NX_LIVE_ESPN_HD","componentId":"31d5cfd7-8f8e-4181-8d30-5db7fb6ad042","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN HD","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s77747_lw_h3_aa.png"}}},{"id":"1d59e58f-0f30-4751-b0d1-53d8429518be","orderIndex":6,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"2354aa45-ae28-4bb5-9e17-ba9e9bac9e8f","name":"NX_LIVE_FOX_SPORTS_I","description":"NX_LIVE_FOX_SPORTS_I","componentId":"aebf17c5-20ee-425b-920a-c3d154435936","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"FOX SPORTS I","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s76099_lw_h3_aa.png"}}},{"id":"0872acd1-b582-400c-91e7-8916c8be0690","orderIndex":7,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"1253fcdb-af9f-4967-9fe5-042b3d292256","name":"NX_LIVE_FOX_SPORTS_II","description":"NX_LIVE_FOX_SPORTS_II","componentId":"d603132a-4ac4-4ce2-963c-1ca319422f80","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"FOX SPORTS II","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s76099_lw_h3_aa.png"}}}],"bundleId":"13271c2f-7347-4c98-886f-9a8bc0c7f7c6","purchased":false,"SVOD":[{"id":"c6b3b9ca-ee7a-407a-8d04-54191201b348","orderIndex":0,"price":{"amount":102,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"f95b4b7f-0620-499e-9137-e14760f10241","name":"NX_SVOD_CLARO_VIDEO","description":"NX_SVOD_CLARO_VIDEO","componentId":"3e8abea2-ef90-49df-85d9-772244801330","attributes":[{"name":"TYPE","type":"TEXT","text":"SVOD"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"Claro video","IMAGE_URL":"http://assetsnx.clarobrasil.mobi/assets/s92299_lw_h15_aa.png"}}}],"LIVE":[{"id":"c483f83d-b6c1-4871-a34f-a0a2e6700eb3","orderIndex":1,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"e11340d3-31ee-4ed5-8b3a-2f829ad27d27","name":"NX_LIVE_BAND_SPORTS_HD","description":"NX_LIVE_BAND_SPORTS_HD","componentId":"db931ee6-ae4a-4e80-8e0a-cb4eba3f6ff6","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"BAND SPORTS HD","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png"}}},{"id":"86aefe69-502c-4e98-a595-20da5c5e8f74","orderIndex":2,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"9d1d6811-3f2a-4bad-99d0-d9995ab9ecde","name":"NX_LIVE_ESPN","description":"NX_LIVE_ESPN","componentId":"40cd01d6-1b3a-4914-9b03-db7ac65cdf05","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s16388_lw_h3_aa.png"}}},{"id":"d6bf19dd-9928-427d-89fe-d18d134f2d14","orderIndex":3,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"e7102035-b488-4718-8542-a770da02419a","name":"NX_LIVE_ESPN_BR","description":"NX_LIVE_ESPN_BR","componentId":"6169bc4c-9a32-4139-9f59-a964f113e33e","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN BR","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s75838_lw_h3_aa.png"}}},{"id":"ed411f76-9718-40e3-90db-133869f737b8","orderIndex":4,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"af4ad994-1dbd-4dc9-940f-d9a9ad8a9500","name":"NX_LIVE_ESPN_EXTRA","description":"NX_LIVE_ESPN_EXTRA","componentId":"a479fb5c-1e18-4088-aa5d-f00c4f02ab42","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN EXTRA","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s109973_lw_h3_aa.png"}}},{"id":"b7c6c1b9-4826-4073-b0d0-c990b2b419f6","orderIndex":5,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"eff66909-a59f-44ba-868d-b9f1120b1725","name":"NX_LIVE_ESPN_HD","description":"NX_LIVE_ESPN_HD","componentId":"31d5cfd7-8f8e-4181-8d30-5db7fb6ad042","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"ESPN HD","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s77747_lw_h3_aa.png"}}},{"id":"1d59e58f-0f30-4751-b0d1-53d8429518be","orderIndex":6,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"2354aa45-ae28-4bb5-9e17-ba9e9bac9e8f","name":"NX_LIVE_FOX_SPORTS_I","description":"NX_LIVE_FOX_SPORTS_I","componentId":"aebf17c5-20ee-425b-920a-c3d154435936","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"FOX SPORTS I","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s76099_lw_h3_aa.png"}}},{"id":"0872acd1-b582-400c-91e7-8916c8be0690","orderIndex":7,"price":{"amount":1,"scale":2,"currency":"BRL"},"recurrent":true,"composition":{"id":"1253fcdb-af9f-4967-9fe5-042b3d292256","name":"NX_LIVE_FOX_SPORTS_II","description":"NX_LIVE_FOX_SPORTS_II","componentId":"d603132a-4ac4-4ce2-963c-1ca319422f80","attributes":[{"name":"TYPE","type":"TEXT","text":"LIVE"}],"systemParameters":{"COMPOSITION_CORRELATED":"NONE","DISPLAY_NAME":"FOX SPORTS II","IMAGE_URL":"https://assetsnx.clarobrasil.mobi/assets/s76099_lw_h3_aa.png"}}}]}`
)

const recurrence = []
const period = 'DAY'
const duration = get(item, 'validity.duration')
const price =
  String(item.totalPrice.amount).length > item.totalPrice.scale
    ? String(item.totalPrice.amount)
    : String(item.totalPrice.amount).padStart(item.totalPrice.scale + 1, 0)

const props = {
  id: item.catalogId,
  countItems: get(item, 'items.length'),
  live: get(item, 'LIVE.length'),
  planTitle: item.name,
  purchased: item.purchased || false,
  imageCard: get(item, 'offerParameters.BANNER_URL'),
  price: {
    wholeNumber: String(price).slice(0, -item.totalPrice.scale),
    decimals: String(price).slice(-item.totalPrice.scale),
    currency: 'R$',
  },
  channels: item.items.filter((item, i) => i < 5),
  duration: period === 'DAY' && duration ? '/' + duration : '',
  period:
    period === 'MONTH' && duration && recurrence.recurrent
      ? 'MES'
      : period === 'MONTH' && duration === 1 && recurrence.recurrent === false
      ? 'PERIOD'
      : period === 'DAY' && duration && recurrence.recurrent === false
      ? ' dias (s/recorrência)'
      : ' dias',
  unlimited: recurrence.recurrent,
  clickHandler: () => {
    action('click')
  },
}

export default {
  title: '/Molecules/Card',
  decorators: [withKnobs],
}

export const plans = () => (
  <CardPlans
    {...props}
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    subTitle={text('sub titulo', 'ontem as 17h')}
    width={number('width', 290)}
    height={number('height', 210)}
    bgSize={text('size background', '100%')}
    image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
    borderRadius={number('border radius', 6)}
  />
)
