import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text, number } from '@storybook/addon-knobs/react'

import SearchButtons from 'Components/Molecules/Search/SearchButtons'

const stories = storiesOf('/Molecules/Search', module)

stories.add('SearchButtons', () => (
  <SearchButtons />
))