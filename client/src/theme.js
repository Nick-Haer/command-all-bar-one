import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
            light: 'rgb(255, 255, 255)',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            main: '#009688',
            dark: '#009688',
        },
    },
});


export default theme;
