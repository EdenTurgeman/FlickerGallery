import React from 'react';
import Shell from "./Shell/Shell";
import {ThemeProvider} from 'styled-components'
import {indigo} from '@material-ui/core/colors'
import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[400],
        },
        contrastThreshold: 3,
        typography: {useNextVariants: true}
    },
});

const App = props => {
    return (
        <ThemeProvider theme={theme}>
            <Shell/>
        </ThemeProvider>
    );
};

export default App;
