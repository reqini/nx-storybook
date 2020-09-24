/* eslint-disable import/exports-last */
import React from 'react'

import VerticalNav from 'Components/Organisms/Header/verticalNav'

const Component = ({ ...args }) => {
  return <VerticalNav {...args} />
}

export default {
  title: '/Organisms/Header',
}

export const VerticalNavComponent = Component.bind({})
VerticalNavComponent.argTypes = {}
