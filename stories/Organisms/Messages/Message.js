import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text } from '@storybook/addon-knobs/react'

import Message from 'Components/Organisms/Messages/message'

const stories = storiesOf('/Organisms/Messages', module)

stories.add('Message', () => (<Message />))
