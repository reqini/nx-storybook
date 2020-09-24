/* eslint-disable import/exports-last */
import React from 'react'

import PasswordComponent from 'Components/Molecules/Login/Password'

const Component = ({ ...args }) => {
  return <PasswordComponent {...args} />
}

export default {
  title: '/Molecules/Login/PasswordComponent',
}

export const Password = Component.bind({})
Password.argTypes = {}
