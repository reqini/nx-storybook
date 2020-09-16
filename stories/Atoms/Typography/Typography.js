import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Typography from 'components/Atoms/Typography/Typography'

export default {
  title: '/Atoms/Typography',
  decorators: [withKnobs],
}

export const TypographyComponent = () => {

  const selectedVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong']

  return (
    <Typography variant={select('variant', selectedVariant, 'h1')}>Texto de ejemplo</Typography>
  )
}
