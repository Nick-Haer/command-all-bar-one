import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from "./landing/Landing";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Landing />
    </ThemeProvider>
  );
}

export default App;
