import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs/react'

import ButtonGeneric from 'Components/Atoms/Buttons/ButtonGeneric'

const stories = storiesOf('/Atoms/Buttons', module)

stories.add('ButtonGeneric', () => (
  <ButtonGeneric title={text('titulo', 'Button')} width={number('ancho', 230)} />
))
