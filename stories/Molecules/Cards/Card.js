import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import CardLandscape from 'Components/Molecules/Cards/CardLandscape'
// import CardTalent from 'Components/Molecules/Cards/CardTalent'
// import CardSearch from 'Components/Molecules/Cards/CardSearch'
// import CardRents from 'Components/Molecules/Cards/CardRents'
// import CardChannels from 'Components/Molecules/Cards/CardChannels'

export default {
  title: '/Molecules/Card',
  decorators: [withKnobs],
}

export const Landscape = () => (
  <CardLandscape
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    width={number('width', 290)}
    height={number('height', 145)}
    bgSize={number('bg size', 290)}
    image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
    borderRadius={number('border radius', 6)}
  ></CardLandscape>
)

// export const talents = () => (
//   <CardTalent
//     lastName={text('Apellido', 'Tinelli')}
//     name={text('Nombre', 'Marcelo')}
//     width={number('width', 110)}
//     height={number('height', 110)}
//     bgSize={number('bg size', 'cover')}
//     image={text(
//       'image',
//       'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/tinellisorpresa.jpg'
//     )}
//     borderRadius={number('border radius', '50%')}
//   />
// )

// export const rents = () => (
//   <CardRents
//     title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
//     subTitle={text('sub titulo', 'ontem as 17h')}
//     width={number('width', 290)}
//     height={number('height', 210)}
//     bgSize={text('size background', '100%')}
//     image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
//     borderRadius={number('border radius', 6)}
//   />
// )

// export const search = () => (
//   <CardSearch
//     title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
//     subTitle={text('sub titulo', 'ontem as 17h')}
//     width={number('width', 290)}
//     height={number('height', 225)}
//     imageFull={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
//     borderRadius={number('border radius', 6)}
//   />
// )

// export const channels = () => (
//   <CardChannels
//     title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
//     width={number('width', 290)}
//     height={number('height', 210)}
//     bgSize={text('size background', '100%')}
//     image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
//     borderRadius={number('border radius', 6)}
//   />
// )
