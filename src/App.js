import React, {useEffect, useState} from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'

import ogTheme from "./styles";
import FormPanel from "./components/Forms/FormPanel";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
import ErrorPage from "./components/ErrorPage";
import AppointmentRequests from "./components/AppointmentRequests/AppointmentRequests";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Login from "./components/Login";
import {API_URL} from "./constants";
import Button from "@material-ui/core/Button";
import ContentPanel from "./components/ContentPanel";

const axios = require('axios');

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const hasToken = !!localStorage.getItem('token');

  if (hasToken !== loggedIn) {
    setLoggedIn(hasToken);
  }

  const handleLogin = (user) => {
    axios.post(API_URL + "token-auth/", user)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        setLoggedIn(true);
      })
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <Login handleLogin={handleLogin} />
    )
  }

  return (
    <ContentPanel handleLogout={handleLogout} />
  )
}

export default App;
