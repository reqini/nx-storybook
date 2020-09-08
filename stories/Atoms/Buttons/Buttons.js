import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'

import ButtonBack from 'Components/Atoms/Buttons/ButtonBack'

const stories = storiesOf('/Atoms/Buttons', module)

stories.add('Buttons', () => <ButtonBack name={text('Position', 'relative')} />)
