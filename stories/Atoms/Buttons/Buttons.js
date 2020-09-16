import React from 'react'
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs'

import Button from 'components/Atoms/Buttons/ButtonGeneric'

export default {
  title: '/Atoms/Buttons',
  decorators: [withKnobs],
}

export const ButtonGeneric = () => {
  const optionsSize = ['small', 'medium', 'big']
  const optionState = ['default', 'disabled', 'active']

  return (
    <Button
      title={text('titulo', 'Button')}
      size={select('size', optionsSize, 'big')}
      stateButton={select('stado', optionState, 'default')}
      width={number('ancho', 230)}
      backgroundButton={text('background', '#4E565C')}
      color={text('color text', '#FFFFFF')}
      borderRadius={number('border radius', 6)}
      fullWidth={boolean('full width', false)}
    />
  )
}
