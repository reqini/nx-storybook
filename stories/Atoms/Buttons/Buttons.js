import React from 'react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

import Button from 'components/Atoms/Buttons/ButtonGeneric'

export default {
  title: '/Atoms/Buttons',
  decorators: [withKnobs],
}

export const ButtonGeneric = () => (
  <Button
    big
    title={text('titulo', 'Button')} 
    width={number('ancho', 230)} 
    backgroundButton={text('background', '#4E565C')}
    color={text('color text', '#FFFFFF')}
    borderRadius={number('border radius', 6)}
    fullWidth={boolean('full width', false)}
  />
)
