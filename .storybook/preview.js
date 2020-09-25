import React from 'react'
import { withMuiTheme } from '@harelpls/storybook-addon-materialui'
import { themes } from '@storybook/theming'
// import { addParameters, addDecorator } from '@storybook/react'
import 'fontsource-roboto';

import Focus from '../src/Focus'
import theme from '../src/theme/DefaultTheme'
import theme2 from '../src/theme/Theme02'

import './i18n'

const customViewports = {
  hd: {
    name: '720',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  fullHd: {
    name: '1080',
    styles: {
      width: '1280px',
      height: '1080px',
    },
  },
}

export const parameters = {
  viewport: { viewports: customViewports },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    theme: themes.dark,
  },
  controls: { expanded: true },
}

export const decorators = [
  withMuiTheme({
    'Default theme': theme,
    'Theme 02': theme2,
  }),
  (Story) => (
    <div>
      <Focus />
      <Story />
    </div>
  ),
]
