import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs/react'

import SimpleImage from 'Components/Atoms/Image/SimpleImage'

const stories = storiesOf('/Atoms/Images', module)

stories.add('SimpleImage', () => (<SimpleImage width={number('ancho', 100)} />))