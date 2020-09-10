import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text, number } from '@storybook/addon-knobs/react'

import Input from 'Components/Atoms/Input/Input'

const stories = storiesOf('/Atoms/Input', module)

stories.add('Input', () => (<Input /> ))
