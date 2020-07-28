import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'
import SimpleImage from '../src/Image/SimpleImage'

const stories = storiesOf('Image', module)

stories.add('Simple Image', () =>
	<SimpleImage
		image={text('Iamge', 'https://netb.tmsimg.com/assets/s10021_lw_h3_ab.png')}
		height={number('Height', 200)}
	/>
)