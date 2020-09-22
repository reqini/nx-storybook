import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ButtonJuli from "Components/JuiTest/ButtonJuli"

export default {
  title: '/Templates/ButtonJuli',
  decorators: [withKnobs],
}

export const Component = () => <ButtonJuli>
  soy un boton
</ButtonJuli>