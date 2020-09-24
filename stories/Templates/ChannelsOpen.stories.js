/* eslint-disable import/exports-last */
import React from 'react'

import ChannelsOpen from 'Components/Templates/ChannelsOpen'

const Component = ({ ...args }) => {
  return <ChannelsOpen {...args} />
}

export default {
  title: '/Templates/ChannelsOpen',
}

export const ChannelsOpenPage = Component.bind({})
ChannelsOpenPage.argTypes = {}
