/* eslint-disable import/exports-last */
import React from 'react'

import CardTalent from 'Components/Molecules/Cards/CardTalent'

const Component = ({ ...args }) => {
  return <CardTalent {...args} />
}

export default {
  title: '/Molecules/Card',
}

export const Talent = Component.bind({})
Talent.argTypes = {
  lastName: {
    name: 'lastName',
    description: 'lastName',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'Tinelli',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Tinelli' },
    },
  },
  name: {
    name: 'name',
    description: 'name',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'Marcelo',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Marcelo' },
    },
  },
  width: {
    name: 'width',
    description: 'width',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '110px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '110px' },
    },
  },
  height: {
    name: 'height',
    description: 'height',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '110px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '110px' },
    },
  },
  bgSize: {
    name: 'bgSize',
    description: 'bgSize',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'cover',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'cover' },
    },
  },
  borderRadius: {
    name: 'borde',
    description: 'borde',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '50%',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '50%' },
    },
  },
  image: {
    name: 'image',
    description: 'imagen',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue:
      'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/tinellisorpresa.jpg',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
}
