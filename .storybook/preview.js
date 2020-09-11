import { withMuiTheme } from '@harelpls/storybook-addon-materialui'

import theme from '../src/theme/DefaultTheme'

export const decorators = [
  withMuiTheme({
    'Default theme': theme
  })
]
