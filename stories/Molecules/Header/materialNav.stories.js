/* eslint-disable import/exports-last */
import React from 'react'

import PersistentDrawerLeft from 'Components/Molecules/Header/materialNav'

const Component = ({ ...args }) => {
  return <PersistentDrawerLeft {...args} />
}

export default {
  title: '/Molecules/Header',
}

export const DrawerLeft = Component.bind({})
DrawerLeft.argTypes = {}
