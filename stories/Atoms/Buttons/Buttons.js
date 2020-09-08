import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'

import ButtonGeneric from 'Components/Atoms/Buttons/ButtonGeneric'
import ButtonBack from 'Components/Atoms/Buttons/ButtonBack'

const stories = storiesOf('/Atoms/Buttons', module)

stories.add('ButtonGeneric', () => 
  <ButtonGeneric 
    title={text('titulo', 'Button')} 
    width={number('ancho', 230)}
  />
)
stories.add('ButtonBack', () => <ButtonBack name={text('Position', 'relative')} />)