/* eslint-disable import/exports-last */
import React from 'react'

import KeyboardComponent from 'Components/Organisms/Keyboard/keyboard'

const Component = ({ ...args }) => {
  return <KeyboardComponent {...args} />
}

export default {
  title: '/Organisms/Keyboard',
}

export const Keyboard = Component.bind({})
Keyboard.argTypes = {
  showMails: {
    name: 'mails',
    description: 'ver emails',
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
