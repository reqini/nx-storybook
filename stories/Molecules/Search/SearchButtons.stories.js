/* eslint-disable import/exports-last */
import React from 'react'

import ButtonsSearch from 'Components/Molecules/Search/SearchButtons'

const Component = ({ ...args }) => {
  return <ButtonsSearch {...args} />
}

export default {
  title: '/Molecules/Search',
}

export const SearchButtons = Component.bind({})
SearchButtons.argTypes = {}
