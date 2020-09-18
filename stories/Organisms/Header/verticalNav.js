import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import VerticalNav from 'Components/Organisms/Header/verticalNav'

export default {
  title: '/Organisms/Header',
  decorators: [withKnobs],
}

export const VerticalNavComponent = () => <VerticalNav />