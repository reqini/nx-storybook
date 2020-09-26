/* eslint-disable import/exports-last */
import React from 'react'

import CardChannels from 'Components/Molecules/Cards/CardChannels'

const Component = ({ ...args }) => {
  return <CardChannels {...args} />
}

export default {
  title: '/Molecules/Card',
}

export const Channel = Component.bind({})
Channel.argTypes = {
  price: {
    name: 'price',
    description: 'price',
    type: { name: 'object', required: false },
    control: {
      type: 'object',
    },
    defaultValue: { currency: '$', wholeNumber: 200, decimals: 20 },
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '' },
    },
  },
  title: {
    name: 'titulo',
    description: 'Texto del boton',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'Titulo de ejemplo de una pelicula',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Titulo de ejemplo de una pelicula' },
    },
  },
  width: {
    name: 'width',
    description: 'width',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '290px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '290px' },
    },
  },
  height: {
    name: 'height',
    description: 'height',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '210px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '210px' },
    },
  },
  bgSize: {
    name: 'bgSize',
    description: 'bgSize',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '100%',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '100%' },
    },
  },
  borderRadius: {
    name: 'borde',
    description: 'borde',
    type: { name: 'number', required: false },
    control: {
      type: 'number',
    },
    defaultValue: 6,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 6 },
    },
  },
  imageCard: {
    name: 'image',
    description: 'imagen',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
}
