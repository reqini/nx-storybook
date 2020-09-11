import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

const Vcard = () => {
  return <div>Ficha va aca </div>
}

export default {
  title: '/Templates',
  decorators: [withKnobs],
}

export const vcard = () => <Vcard />
