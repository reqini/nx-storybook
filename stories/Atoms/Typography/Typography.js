import React from 'react'
import { withKnobs, select, text, number } from '@storybook/addon-knobs'

import Typography from 'components/Atoms/Typography/Typography'

export default {
  title: '/Atoms/Typography',
  decorators: [withKnobs],
}

export const TypographyComponent = () => {

  const selectedVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong']
  const selectedAlign = ['left', 'center', 'right']

  return (
    <Typography 
      variant={select('variant', selectedVariant, 'h1')}
      textAlign={select('text align', selectedAlign, 'center')}
      color={text('color', 'white')}
      fontSize={number('font size', 30)}
      fontWeight={number('font weight', 300)}
    >
      Texto de ejemplo
    </Typography>
  )
}
