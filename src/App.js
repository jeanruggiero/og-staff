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
import PasswordChange from "./components/PasswordChange";

const axios = require('axios');

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordChangeRequired, setPasswordChangeRequired] = useState(null);
  const hasToken = !!localStorage.getItem('token');


  if ((hasToken !== loggedIn) && (passwordChangeRequired === false)) {
    setLoggedIn(hasToken);
  }


  const handleLogin = (user) => {
    axios.post(API_URL + "token-auth/", user)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);

        axios.get(API_URL + "update_password/", {
          headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
        })
          .then(response => {
            if (response.data.passwordChangeRequired) {
              setPasswordChangeRequired(true);
            } else {
              setLoggedIn(true);
            }
          });
      });
  };

  const handlePasswordChange = () => {
    setPasswordChangeRequired(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  if (passwordChangeRequired) {
    return (
      <PasswordChange handlePasswordChange={handlePasswordChange} />
    )
  }

  if (!hasToken) {
    return (
      <Login handleLogin={handleLogin} />
    )
  }

  return (
    <ContentPanel handleLogout={handleLogout} />
  )
}

export default App;
