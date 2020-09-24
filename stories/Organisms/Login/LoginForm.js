import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
// import { useTranslation } from 'react-i18next'

import LoginForm from 'Components/Organisms/Login/LoginForm'

export default {
  title: '/Organisms/Login',
  decorators: [withKnobs],
}

export const LoginFormComponent = () => {

  // const { t } = useTranslation()

  return (
    <LoginForm />
  )
}