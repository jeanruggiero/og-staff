import React, {useEffect, useState} from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'

import FormPanel from "./Forms/FormPanel";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
import ErrorPage from "./ErrorPage";
import AppointmentRequests from "./AppointmentRequests/AppointmentRequests";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Login from "./Login";
import {API_URL} from "../constants";
import Button from "@material-ui/core/Button";
import TopNav from "./TopNav";

const axios = require('axios');

function ContentPanel(props) {



  return (
    <Box>
      <TopNav handleLogout={props.handleLogout} />

      <Box maxWidth={800} mx={3} mb={8} mt={4}>
        <Switch>
          <Route exact path="/"
                 render={() => <Redirect to="/forms" />}
          />

          <Route path="/forms" component={FormPanel}/>
          <Route path="/appointment-requests" component={AppointmentRequests} />
          <Route component={ErrorPage}/>

        </Switch>
      </Box>
    </Box>
  )
}

export default ContentPanel;
