import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ComponentTest from "Components/JuiTest/ComponentTest"

export default {
  title: '/Templates/ComponentTest',
  decorators: [withKnobs],
}

export const Component = () => <ComponentTest />
