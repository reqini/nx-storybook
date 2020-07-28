const theme = ({
    palette: {
        primary: {
            //light: '#757ce8',
            main: '#47536b',
            //dark: '#002884',
            //contrastText: '#fff',
        },
        secondary: {
            main: '#e1251b'
        },
        grayColor: {
            main: '#212224'
        },
        fontColorPrimary: {
            main: '#99CBFF'
        },
        colorActive: {
            main: '#47536b'
        },
        epg: {
            main: 'rgba(0, 0, 0, 0.93)',
            active: '#34455f',
            activeBlock: '#19222f',
            focus: '#4171B9',
            focusBlock: '#223e67'
        }
    },
    shadowBox: {
        generic: '0 3px 5px 2px rgba(0, 0, 0, .4)'
    },
    typography: {
        //fontFamily: ['Roboto'].join(','),
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
    },
});
export default theme;