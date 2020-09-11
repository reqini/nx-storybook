import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import MessageComponent from 'Components/Organisms/Messages/message'

export default {
  title: '/Organisms/Messages',
  decorators: [withKnobs],
}

export const Message = () => <MessageComponent />
