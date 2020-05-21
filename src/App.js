import React, {useState} from 'react';
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
import AppointmentRequests from "./components/AppointmentRequests";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Login from "./components/Login";
import {API_URL} from "./constants";
import Button from "@material-ui/core/Button";

const axios = require('axios');

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  tab: {
    maxWidth: 250,
    minWidth: 250
  }
});

function App() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
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

  const handleChange = (event, newValue)  => {
    setValue(newValue);
  };



  return (
    <ThemeProvider theme={ogTheme}>


      <Paper square>

        <Box display="flex">
          <Box display="flex" alignItems="center" px={3}>
            <Box>
              <Typography variant="h3" align="center">
                Optometric Group
              </Typography>

              <Typography variant="h4" align="center">
                Staff Home
              </Typography>
            </Box>
          </Box>

          <Tabs value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
          >
            <Tab icon={<Icon>assignment</Icon>}
                 label="Intake Forms"
                 className={classes.tab}
                 component={Link}
                 to="/forms"
                 exact
            />

            <Tab icon={<Icon>today</Icon>}
                 label="Appointment Requests"
                 className={classes.tab}
                 component={Link}
                 to="/appointment-requests"
            />
          </Tabs>

          <Box flexGrow={1} />

          <Box display="flex" alignItems="center" pr={3}>
            <Button onClick={handleLogout}>Logout</Button>
          </Box>
        </Box>
      </Paper>
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
    </ThemeProvider>
  )
}

export default App;
