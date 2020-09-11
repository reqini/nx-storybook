import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs/react'

import CardLandscape from 'Components/Molecules/Cards/CardLandscape'
import CardTalent from 'Components/Molecules/Cards/CardTalent'
import CardSearch from 'Components/Molecules/Cards/CardSearch'
import CardRents from 'Components/Molecules/Cards/CardRents'
import CardChannels from 'Components/Molecules/Cards/CardChannels'

const stories = storiesOf('/Molecules/Card/', module)

stories.add('Landscape', () => (
  <CardLandscape
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    width={number('width', 290)}
    height={number('height', 145)}
    bgSize={number('bg size', 290)}
    image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
    borderRadius={number('border radius', 6)}
  ></CardLandscape>
))

stories.add('talents', () => (
  <CardTalent
    lastName={text('Apellido', 'Tinelli')}
    name={text('Nombre', 'Marcelo')}
    width={number('width', 110)}
    height={number('height', 110)}
    bgSize={number('bg size', 'cover')}
    image={text(
      'image',
      'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/tinellisorpresa.jpg'
    )}
    borderRadius={number('border radius', '50%')}
  />
))

stories.add('rents', () => (
  <CardRents
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    subTitle={text('sub titulo', 'ontem as 17h')}
    width={number('width', 290)}
    height={number('height', 210)}
    bgSize={text('size background', '100%')}
    image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
    borderRadius={number('border radius', 6)}
  />
))

stories.add('search', () => (
  <CardSearch
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    subTitle={text('sub titulo', 'ontem as 17h')}
    width={number('width', 290)}
    height={number('height', 225)}
    imageFull={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
    borderRadius={number('border radius', 6)}
  />
))

stories.add('channels', () => (
  <CardChannels
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    width={number('width', 290)}
    height={number('height', 210)}
    bgSize={text('size background', '100%')}
    image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
    borderRadius={number('border radius', 6)}
  />
))
