import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'
import CardLandscape from '../src/Cards/CardLandscape'
import CardTalent from '../src/Cards/CardTalent'
import CardSearch from '../src/Cards/CardSearch'
import CardRents from '../src/Cards/CardRents'
import CardPlans from '../src/Cards/CardPlans'
import CardChannels from '../src/Cards/CardChannels'
import ChipContainer from '../src/Chip'

const stories = storiesOf('Cards', module)

stories.add('Landscape', () =>
	<CardLandscape
		title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
		width={number('width', 290)}
		height={number('height', 145)}
		bgSize={number('bg size', 290)}
		image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
		borderRadius={number('border radius', 6)}
	>
		<ChipContainer title={'novo'} />
	</CardLandscape>
)

stories.add('talents', () =>
	<CardTalent
		infoTalent={text('rol talento', 'Conductor')}
		title={text('Titulo', 'Marcelo tinelli')}
		width={number('width', 88)}
		height={number('height', 88)}
		bgSize={number('bg size', 'cover')}
		image={text('image', 'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/tinellisorpresa.jpg')}
		borderRadius={number('border radius', '50%')}
	/>
)

stories.add('search', () =>
	<CardSearch
		title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
		subTitle={text('sub titulo', 'ontem as 17h')}
		width={number('width', 290)}
		height={number('height', 225)}
		image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
		borderRadius={number('border radius', 6)}
	/>
)

stories.add('rents', () =>
	<CardRents
		title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
		subTitle={text('sub titulo', 'ontem as 17h')}
		width={number('width', 290)}
		height={number('height', 210)}
		bgSize={text('size background', '100%')}
		image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
		borderRadius={number('border radius', 6)}
	/>
)

stories.add('plans', () =>
	<CardPlans
		title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
		subTitle={text('sub titulo', 'ontem as 17h')}
		width={number('width', 290)}
		height={number('height', 210)}
		bgSize={text('size background', '100%')}
		image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
		borderRadius={number('border radius', 6)}
	/>
)

stories.add('channels', () =>
	<CardChannels
		title={text('Titulo', 'Titulo de ejemplo de una pelicula')}
		width={number('width', 290)}
		height={number('height', 210)}
		bgSize={text('size background', '100%')}
		image={text('image', 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg')}
		borderRadius={number('border radius', 6)}
	/>
)