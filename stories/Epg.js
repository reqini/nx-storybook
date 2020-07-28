import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, array } from '@storybook/addon-knobs/react'
import Event from '../src/Epg/Event'
import EventChannel from '../src/Epg/EventChannel'
import ContainerEvents from '../src/Epg/ContainerEvents'

const stories = storiesOf('Epg', module)

stories.add('Event', () =>
	<Event
		title={text('Titulo', 'Los Simuladores - Segunda Temporada')}
		time={text('Time', '12:30 - 13:45')}
		width={number('Width', 300)}
		height={number('Height', 90)}
		block={boolean('Event Block', false)}
		active={boolean('Event Activo', false)}
	/>
)

stories.add('Event Channel', () =>
	<EventChannel
		numberChannel={number('Channel', 12)}
		block={boolean('Event Block', false)}
		active={boolean('Event Activo', false)}
	/>
)

stories.add('Container Events', () =>
	<ContainerEvents />
)