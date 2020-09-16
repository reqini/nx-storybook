import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import InputComponent from 'Components/Atoms/Input/Input'

export default {
  title: '/Atoms/Input',
  decorators: [withKnobs],
}

export const Input = () => <InputComponent />
