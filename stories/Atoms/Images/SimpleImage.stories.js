/* eslint-disable import/exports-last */
import React from 'react'

import Image from 'Components/Atoms/Image/SimpleImage'

const Component = ({ ...args }) => {
  return <Image {...args} />
}

export default {
  title: '/Atoms/Images',
}

export const SimpleImage = Component.bind({})
SimpleImage.argTypes = {
  width: {
    name: 'width',
    description: 'width',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '100px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '100px' },
    },
  },
}
