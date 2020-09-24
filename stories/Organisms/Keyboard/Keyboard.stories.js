/* eslint-disable import/exports-last */
import React from 'react'

import KeyboardComponent from 'Components/Organisms/Keyboard/keyboard'

const Component = ({ ...args }) => {
  return <KeyboardComponent showMails {...args} />
}

export default {
  title: '/Organisms/Keyboard',
}

export const Keyboard = Component.bind({})
Keyboard.argTypes = {}
