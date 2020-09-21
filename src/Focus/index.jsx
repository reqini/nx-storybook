import { Component } from 'react'

import './spatial_navigation'

class Focus extends Component {
  componentDidMount() {
    window.SpatialNavigation.init()

    const areas = [
      {
        name: 'newPlayer',
        config: {
          selector: '#HTML5VideoWrapperTv .focusable',
          restrict: 'self-only',
        },
      },
      {
        name: 'nav_down',
        config: {
          selector: '#header .focusable',
          leaveFor: {
            left: '',
            right: '@container',
          },
          enterTo: 'default-element',
          defaultElement: '.active',
        },
      },
      // search ---
      {
        name: 'keyboard',
        config: {
          selector: '.keyboardPad .focusable',
          leaveFor: {
            up: '@searchCont',
          },
          enterTo: 'last-focused',
          defaultElement: 'first-child',
        },
      },
      {
        name: 'keyboardGral',
        config: {
          selector: '.keyboardGral .focusable',
          leaveFor: {
            up: '@searchCont',
          },
          enterTo: 'last-focused',
          defaultElement: '.kbd-btn:first-child',
        },
      },
      {
        name: 'searchButtons',
        config: {
          selector: '#searchButtoms .focusable',
          enterTo: '.active',
          defaultElement: '.active',
        },
      },
      {
        name: 'searchCont',
        config: {
          selector: '.fromVMenu .focusable',
          leaveFor: {
            down: '@keyboardGral',
          },
          enterTo: 'last-focused',
          defaultElement: '.ribbon .focusable:first-child',
        },
      },
      // --- ---
      {
        name: 'container',
        config: {
          selector: '#privateContent .focusable',
          defaultElement: '.elementopredeterminado',
          rememberSource: true,
          enterTo: 'last-focused',
        },
      },
      {
        name: 'login',
        config: {
          selector: '.login .focusable',
          defaultElement: '.elementopredeterminado',
        },
      },
      {
        name: 'landing',
        config: {
          selector: '.landing .focusable',
          defaultElement: '.elementopredeterminado',
        },
      },
      {
        name: 'listChannels',
        config: {
          selector: '#listChannels .focusable',
          rememberSource: true,
          enterTo: 'last-focused',
          defaultElement: '#listChannels .focusable.active',
        },
      },
      {
        name: 'epgFinal',
        config: {
          selector: '.epgFinal .focusable',
          rememberSource: true,
          enterTo: 'last-focused',
          restrict: 'self-only',
          defaultElement: '.currentEvent',
        },
      },
      {
        name: 'modal-area',
        config: {
          selector: '.modal-overlay .focusable',
          defaultElement: '.modal-default-item',
          restrict: 'self-only',
        },
      },
      {
        name: 'modal-new',
        config: {
          selector: '.modalNew .focusable',
          defaultElement: '.default-modal-item .focusable',
          restrict: 'self-only',
        },
      },
    ]

    areas.map((x) => {
      return window.SpatialNavigation.add(x.name, x.config)
    })

    const enterUpHandler = (e) => {
      e.target.click()
    }

    const enterDownHandler = (e) => {
      e.preventDefault()
    }

    window.addEventListener('sn:enter-up', enterUpHandler)
    window.addEventListener('sn:enter-down', enterDownHandler)

    window.SpatialNavigation.makeFocusable()
    // window.SpatialNavigation.focus();
  }

  render() {
    return null
  }
}

export default Focus
