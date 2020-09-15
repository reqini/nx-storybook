import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Keyboard from 'Components/Organisms/Keyboard/Keyboard'

export default {
  title: '/Organisms/Keyboard',
  decorators: [withKnobs],
}

export const Keyboard = () => {
  return(
    <Keyboard />
  )
}