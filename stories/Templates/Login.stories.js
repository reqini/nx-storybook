/* eslint-disable import/exports-last */
import React from 'react'

import LoginPage from 'Components/Templates/LoginPage'

const Component = ({ ...args }) => {
  return <LoginPage {...args} />
}

export default {
  title: '/Templates/LoginPage',
}

export const Login = Component.bind({})
Login.argTypes = {}
