import { createTheme, ThemeOptions } from "@mui/material";

const darkTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main:'#ffffff',
        },
        secondary: {
            main: '#7000ff',
        },
        common: {
            white: '#fff',
            black: '#000',
        }
    }
});

export default darkTheme;