import React from 'react';
import './App.css';
import {Box} from "@material-ui/core";
import Routes from "./routes";
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#0066ff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 1,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

function App() {
  return (
      <div className={"main-container"}>
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <Routes/>
              </BrowserRouter>
          </ThemeProvider>
      </div>
  );
}

export default App;
