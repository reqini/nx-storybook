import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs/react'

// Components
import SlideContainer from '../src/SlideContainer'
import CardLandscape from '../src/Cards/CardLandscape'
import CardTalent from '../src/Cards/CardTalent'
import ChipContainer from '../src/Chip'

const stories = storiesOf('SlideContainer', module)
const itemsSlide = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

stories.add('Slide Filmes', () =>
	<SlideContainer>
		{itemsSlide.map(id =>
			<CardLandscape
				key={id}
				width={number('width', 262)}
				height={number('height', 145)}
				bgSize={number('bg size', 262)}
				image={text('image', 'http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg')}
				borderRadius={number('border radius', 6)}
			>
				<ChipContainer title={'novo'} />
			</CardLandscape>
		)}
	</SlideContainer>
)

stories.add('Slide Talents', () =>
	<SlideContainer slidesToShow={10}>
		{itemsSlide.map(id =>
			<CardTalent
				infoTalent={text('rol talento', 'Conductor')}
				title={text('Titulo', 'Marcelo tinelli boton')}
				width={number('width', 88)}
				height={number('height', 88)}
				bgSize={number('bg size', 'cover')}
				image={text('image', 'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/tinellisorpresa.jpg')}
				borderRadius={number('border radius', '50%')}
			/>
		)}
	</SlideContainer>
)