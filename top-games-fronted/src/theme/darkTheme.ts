import { createTheme, ThemeOptions } from "@mui/material";

const darkTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main:'#aa00ee',
        },
        secondary: {
            main: '#7000ff',
        },
    }
});

export default darkTheme;