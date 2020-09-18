import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import PersistentDrawerLeft from 'Components/Molecules/Header/materialNav'

export default {
  title: '/Molecules/Header/',
  decorators: [withKnobs],
}

export const DrawerLeft = () => <PersistentDrawerLeft />
