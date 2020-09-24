/* eslint-disable import/exports-last */
import React from 'react'

import Chip from 'Components/Atoms/Chip/ChipContainer'

const Component = ({ ...args }) => {
  return <Chip {...args} />
}

export default {
  title: '/Atoms/Chip',
}

export const ChipContainer = Component.bind({})
ChipContainer.argTypes = {
  title: {
    name: 'titulo',
    description: 'Texto del boton',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'etiqueta',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'etiqueta' },
    },
  },

  color: {
    name: 'color',
    description: 'color',
    type: { name: 'string', required: false },
    control: {
      type: 'color',
    },
    defaultValue: '#000000',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },

  width: {
    name: 'width',
    description: 'width',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '230px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
}
