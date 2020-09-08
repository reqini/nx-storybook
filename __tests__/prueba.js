import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { createMount } from '@material-ui/core/test-utils'

import Component from 'Components/Atoms/Buttons/ButtonGeneric'
import theme from 'Components/theme/DefaultTheme'

describe('<Component />', () => {
  let mount

  beforeEach(() => {
    mount = createMount()
  })

  it('should render', () => {
    const wrapper = mount(
      <MuiThemeProvider theme={theme}>
        <Component />
      </MuiThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
