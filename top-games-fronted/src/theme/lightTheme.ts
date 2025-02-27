import { createTheme, ThemeOptions } from "@mui/material";

const lightTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main:'#540D6E',
        },
        secondary: {
            main: '#ff8400',
        },
        common: {
            white: '#fff',
            black: '#000',
        }
    }
})

export default lightTheme;