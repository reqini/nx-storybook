import React from 'react'
import moment from 'moment'
import dotenv from 'dotenv'

import { configure, addDecorator, setAddon } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// import '../css/storybook.scss'

import theme from '../src/theme/DefaultTheme'

dotenv.config()

const muiTheme = createMuiTheme(theme)

const fullScreen = false
if (!fullScreen) {
	addDecorator((story, context) => {
		return withInfo({
			styles: {
				propTableHead: {
					display: 'none'
				},
				source: {
					overflow: 'hidden',
					h1: {
						display: 'none'
					}
				}
			},
			text: `Import ${context.name} from "Components/${context.kind}/${context.name}"`
		})(story)(context)
	})
}

addDecorator(withKnobs)

addDecorator(story => {
	moment.locale('es')
	return story()
})

addDecorator(story => (
	<BrowserRouter>
		<MuiThemeProvider theme={muiTheme}>{story()}</MuiThemeProvider>
	</BrowserRouter>
))

withOptions({
	name: 'nxbook',
	goFullScreen: false,
	showStoriesPanel: true,
	showAddonPanel: true,
	showSearchBox: false,
	addonPanelInRight: true,
	sidebarAnimations: false
})

setDefaults({
	header: false, // Toggles display of header with component name and description
	inline: true
})

const req = require.context('../stories', true, /.js$/)

function loadStories() {
	req.keys().forEach(filename => req(filename))
}

setAddon(infoAddon)

configure(loadStories, module)
