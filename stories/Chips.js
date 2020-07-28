import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'
import ChipContainer from '../src/Chip'

const stories = storiesOf('Chips', module)

stories.add('Chip Simple', () =>
	<ChipContainer
		title={text('Titulo', 'novo')}
		color={text('Color', '')}
	/>
)