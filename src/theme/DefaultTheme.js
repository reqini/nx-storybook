import { createMuiTheme } from '@material-ui/core/styles'

/* eslint no-restricted-globals:0 */
// const height = (screen && screen.height) || 720;
const width = (screen && screen.width) || 1280

const hd = 1280
const fullHd = 1920
// const uhd = 3840;

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    type: 'dark',
    active: {
      main: '#E1261C'
    },
    primary: {
      light: '#6b7588',
      main: '#47536B',
      dark: '#313a4a',
      contrastText: '#CCC'
    },
    background: {
      main: '#030D14'
    },
    colorRented: {
      main: '#AF9008'
    },
    secondary: {
      light: '#e75048',
      main: '#E1251B',
      dark: '#9d1912',
      contrastText: '#FFFFFF'
    },
    buttonsColor: {
      main: '#4E565C',
      foco: '#272E35'
    },
    titleMessages: {
      main: '#a5aab1'
    },
    cardSearch: {
      main: '#181B1C'
    },
    optional: {
      main: '#1C1D1E'
    },
    colorRents: {
      main: 'rgb(210, 176, 7)'
    },
    colorSearch: {
      main: 'rgb(153, 203, 255)'
    },
    colorModal: {
      main: '#222D35'
    },
    grayColor: {
      main: '#212224'
    },
    fontColorPrimary: {
      main: '#99CBFF'
    },
    colorActive: {
      main: /* "#47536A" */ ''
    },
    default: {
      main: '#121317'
    },
    error: {
      light: 'red',
      main: 'red',
      dark: 'red',
      contrastText: '#ccc'
    },
    epg: {
      /* main: "rgba(0, 0, 0, 0.6)",
      active: "#34455f",
      activeBlock: "#19222f",
      focus: "#4171B9",
      focusBlock: "#223e67", */

      main: 'rgba(0, 0, 0, 0.6)',
      active: '#34455F',
      activeBlock: '#1A222F',
      focus: '#007DFF',
      focusBlock: '#4171B9'
    },
    textColor: {
      main: '#FFFFFF'
    }
  },
  sizeButton: {
    height: {
      main: 48,
      foco: 54
    },
    width: 160
  },
  sizeBody: {
    width: width <= hd ? 220 : width <= fullHd ? 440 : 880,
    height: width <= hd ? 150 : width <= fullHd ? 300 : 600,
    hd: {
      width: 1280,
      height: 720
    },
    fullHd: {
      width: 1920,
      height: 1080
    },
    ultraHd: {
      width: 3840,
      height: 2160
    }
  },
  sizeCard: {
    width: width <= hd ? 220 : width <= fullHd ? 440 : 880,
    height: width <= hd ? 150 : width <= fullHd ? 300 : 600,

    foco: {
      width: width <= hd ? 220 : width <= fullHd ? 440 : 880,
      height: width <= hd ? 150 : width <= fullHd ? 300 : 600
    },
    background: {
      width: width <= hd ? 220 : width <= fullHd ? 440 : 880,
      height: width <= hd ? 150 : width <= fullHd ? 300 : 600
    }
  },
  sizeMenu: {
    width: width <= hd ? 220 : width <= fullHd ? 440 : 880,
    height: width <= hd ? 150 : width <= fullHd ? 300 : 600
  },
  shadowBox: {
    generic: '0 3px 5px 2px rgba(0, 0, 0, .4)'
  }
})
export default theme
