/* eslint-disable import/exports-last */
import React from 'react'

import { ButtonGeneric } from 'components/Atoms/Buttons/ButtonGeneric'

const Component = ({ ...args }) => {
  return <ButtonGeneric {...args} />
}

export default {
  title: '/Atoms/Buttons',
}

export const Button = Component.bind({})
Button.argTypes = {
  title: {
    name: 'titulo',
    description: 'Texto del boton',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },

  size: {
    name: 'size',
    description: 'size',
    type: { name: 'select', required: false },
    control: {
      type: 'select',
      options: ['small', 'medium', 'big'],
    },
    defaultValue: 'medium',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'medium' },
    },
  },

  stateButton: {
    name: 'estado',
    description: 'estado',
    type: { name: 'select', required: false },
    control: {
      type: 'select',
      options: ['default', 'disabled', 'active'],
    },
    defaultValue: 'default',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'medium' },
    },
  },

  width: {
    name: 'width',
    description: 'width',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '230px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '230px' },
    },
  },

  backgroundButton: {
    name: 'background',
    description: 'background',
    type: { name: 'color', required: false },
    control: {
      type: 'color',
    },
    defaultValue: '#4E565C',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '#4E565C' },
    },
  },

  color: {
    name: 'color fuente',
    description: 'color fuente',
    type: { name: 'color', required: false },
    control: {
      type: 'color',
    },
    defaultValue: '#FFFFFF',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '#FFFFFF' },
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

  fullWidth: {
    name: 'fullWidth',
    description: 'fullWidth',
    type: { name: 'boolean', required: false },
    control: {
      type: 'boolean',
    },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
}
