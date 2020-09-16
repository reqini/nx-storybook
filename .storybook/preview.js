import { withMuiTheme } from '@harelpls/storybook-addon-materialui'

import theme from '../src/theme/DefaultTheme'

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
}

export const decorators = [
  withMuiTheme({
    'Default theme': theme,
  }),
]
