/* eslint-disable import/exports-last */
import React from 'react'

import LoadingComponent from 'Components/Organisms/Loading/LoadingComponent'

const Component = ({ ...args }) => {
  return <LoadingComponent {...args} />
}

export default {
  title: '/Organisms/Loading',
}

export const Loading = Component.bind({})
Loading.argTypes = {
  title: {
    name: 'titulo',
    description: 'titulo',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'Cargando...',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Cargando...' },
    },
  },

  position: {
    name: 'texto',
    description: 'Texto',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'absolute',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'absolute' },
    },
  },
}
