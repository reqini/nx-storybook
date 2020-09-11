import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Button from 'components/Atoms/Buttons/ButtonGeneric'

export default {
  title: '/Atoms/Buttons',
  decorators: [withKnobs],
}

export const ButtonGeneric = () => (
  <Button title={text('titulo', 'Button')} width={number('ancho', 230)} />
)
