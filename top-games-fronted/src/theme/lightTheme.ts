import { createTheme, ThemeOptions } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main:'#540D6E',
        },
        secondary: {
            main: '#ff8400',
        },
    }
})

export default lightTheme;