import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import PasswordComponent from 'Components/Molecules/Login/Password'

export default {
  title: '/Molecules/Login',
  decorators: [withKnobs],
}

export const Password = () => <PasswordComponent />
