import {createTheme} from '@mui/material/styles';

const customerTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#00927C',
        },
        secondary: {
            main: '#EAF0F1',
        },

    }
});

export {customerTheme};