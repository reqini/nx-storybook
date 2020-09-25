/* eslint-disable import/exports-last */
import React from 'react'

import LandingPage from 'Components/Templates/Landing'

const Component = ({ ...args }) => {
  return <LandingPage {...args} />
}

export default {
  title: '/Templates/Landing',
}

export const Landing = Component.bind({})
Landing.argTypes = {}
