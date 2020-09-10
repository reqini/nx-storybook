import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'

import LoadingComponent from 'Components/Organisms/Loading/LoadingComponent'

const stories = storiesOf('/Organisms/Loading', module)

stories.add('LoadingComponent', () => (
  <LoadingComponent 
    title={text('Titulo', 'Cargando...')} 
  />
))
 