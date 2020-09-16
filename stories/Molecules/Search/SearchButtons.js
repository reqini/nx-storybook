import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import ButtonsSearch from 'Components/Molecules/Search/SearchButtons'

export default {
  title: '/Molecules/Search',
  decorators: [withKnobs],
}

export const SearchButtons = () => <ButtonsSearch />
