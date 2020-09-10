import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'

import LoadingComponent from 'Components/Organisms/Loading/LoadingComponent'

const stories = storiesOf('/Organisms/Loading', module)

stories.add('Loading', () => (
  <LoadingComponent 
    title={text('Titulo', 'Cargando...')} 
  />
))
 