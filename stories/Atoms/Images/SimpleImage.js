import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Image from 'Components/Atoms/Image/SimpleImage'

export default {
  title: '/Atoms/Images',
  decorators: [withKnobs],
}

export const SimpleImage = () => <Image width={number('ancho', 100)} />
