import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'

import CardLandscape from 'Components/Cards/CardLandscape'
import CardTalent from 'Components/Cards/CardTalent'
import CardSearch from 'Components/Cards/CardSearch'
import CardRents from 'Components/Cards/CardRents'
import CardPlans from 'Components/Cards/CardPlans'
import CardChannels from 'Components/Cards/CardChannels'

const stories = storiesOf('/Atoms/Cards', module)

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
    infoTalent={text('rol talento', 'Conductor')}
    title={text('Titulo', 'Marcelo tinelli')}
    width={number('width', 88)}
    height={number('height', 88)}
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

stories.add('plans', () => (
  <CardPlans
    title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
    subTitle={text('sub titulo', 'ontem as 17h')}
    width={number('width', 290)}
    height={number('height', 210)}
    bgSize={text('size background', '100%')}
    image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
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
