import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import LoginPage from "Components/Templates/LoginPage"

export default {
  title: '/Templates',
  decorators: [withKnobs],
}

export const Login = () => <LoginPage />
