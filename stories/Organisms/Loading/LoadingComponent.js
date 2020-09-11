import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import LoadingComponent from 'Components/Organisms/Loading/LoadingComponent'

export default {
  title: '/Organisms/Loading',
  decorators: [withKnobs],
}

export const Loading = () => <LoadingComponent title={text('Titulo', 'Cargando...')} />
