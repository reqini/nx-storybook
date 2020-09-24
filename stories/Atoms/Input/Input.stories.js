/* eslint-disable import/exports-last */
import React from 'react'

import InputComponent from 'Components/Atoms/Input/Input'

const Component = ({ ...args }) => {
  return <InputComponent {...args} />
}

export default {
  title: '/Atoms/Input',
}

export const Input = Component.bind({})
Input.argTypes = {}
