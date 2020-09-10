import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs/react'

import ChipContainer from 'Components/Atoms/Chip/ChipContainer'

const stories = storiesOf('/Atoms/Chip', module)

stories.add('ChipContainer', () => (
  <ChipContainer 
    title={text('texto', 'etiqueta')} 
    color={text('Background', 'red')} 
    width={number('ancho', 230)} 
  />
))
