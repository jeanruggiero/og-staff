import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./App.css";
import * as serviceWorker from './serviceWorker';
import ogTheme from "./styles";
import { ThemeProvider } from '@material-ui/core/styles'


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ogTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
