import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Chip from 'Components/Atoms/Chip/ChipContainer'

export default {
  title: '/Atoms/Chip',
  decorators: [withKnobs],
}

export const ChipContainer = () => (
  <Chip
    title={text('texto', 'etiqueta')}
    color={text('Background', '#000000')}
    width={number('ancho', 230)}
  />
)
