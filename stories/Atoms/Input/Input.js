import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'

import Button from 'Components/Buttons/ButtonGeneric'

// import Input from 'components/Input/Input'

// const stories = storiesOf('Input', module)
//
// stories.add('Input ', () =>
// 	<Input
// 		title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
// 		width={number('width', 290)}
// 		height={number('height', 145)}
// 		bgSize={number('bg size', 290)}
// 		image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
// 		borderRadius={number('border radius', 6)}
// 	>
// 	</Input>
// )

const stories = storiesOf('/Atoms/Button', module)

stories.add('Input ', () => <Button />)
