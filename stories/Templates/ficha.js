import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'

const stories = storiesOf('/Templates/Ficha', module)

const Ficha = () => {
  return <div>Ficha va aca ---></div>
}

stories.add('Input ', () => <Ficha />)
