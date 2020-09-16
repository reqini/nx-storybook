import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import KeyboardComponent from 'Components/Organisms/Keyboard/keyboard'

export default {
  title: '/Organisms/Keyboard',
  decorators: [withKnobs],
}

export const Keyboard = () => {
  return <KeyboardComponent showMails />
}
