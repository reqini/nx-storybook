import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
//import { useTranslation } from 'react-i18next'

import Resume from 'Components/Organisms/Resume/Resume'

export default {
  title: '/Organisms/Resume',
  decorators: [withKnobs],
}

export const ResumeComponent = () => {

  //const { t } = useTranslation()

  return (
    <Resume />
  )
}