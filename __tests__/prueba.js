import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { createMount } from '@material-ui/core/test-utils'

import theme from 'Components/theme/DefaultTheme'

import Component from 'Components/Atoms/Buttons/ButtonGeneric'

describe('<Component />', () => {
  let mount

  beforeEach(() => {
    mount = createMount()
  })

  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
