import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ChannelsOpen from "Components/Templates/ChannelsOpen"

export default {
  title: '/Templates/ChannelsOpen',
  decorators: [withKnobs],
}

export const ChannelsOpenPage = () => <ChannelsOpen />
