/* eslint-disable import/exports-last */
import React from 'react'

import LoginForm from 'Components/Organisms/Login/LoginForm'

const Component = ({ ...args }) => {
  return <LoginForm {...args} />
}

export default {
  title: '/Organisms/Login/LoginForm',
}

export const LoginFormComponent = Component.bind({})
LoginFormComponent.argTypes = {}
