/* eslint-disable import/exports-last */
import React from 'react'

import Typography from 'components/Atoms/Typography/Typography'

const Component = ({ ...args }) => {
  return <Typography {...args}>Texto de ejemplo</Typography>
}

export default {
  title: '/Atoms/Typography',
}

export const TypographyComponent = Component.bind({})
TypographyComponent.argTypes = {
  variant: {
    name: 'variant',
    description: 'variant',
    type: { name: 'string', required: false },
    control: {
      type: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    defaultValue: 'h1',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'h1' },
    },
  },

  textAlign: {
    name: 'textAlign',
    description: 'align',
    type: { name: 'string', required: false },
    control: {
      type: 'select',
      options: ['left', 'center', 'right'],
    },
    defaultValue: 'medium',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'center' },
    },
  },

  color: {
    name: 'color fuente',
    description: 'color fuente',
    type: { name: 'color', required: false },
    control: {
      type: 'color',
    },
    defaultValue: 'white',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'white' },
    },
  },

  fontWeight: {
    name: 'fontWeight',
    description: 'font',
    type: { name: 'number', required: false },
    control: {
      type: 'number',
    },
    defaultValue: 300,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 300 },
    },
  },
}
