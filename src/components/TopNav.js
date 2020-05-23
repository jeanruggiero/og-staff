import React, {useEffect, useState} from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'


import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
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

function TopNav(props) {

  const classes = useStyles();

  const [value, setValue] = useState(0);

  console.log(window.location.pathname);

  const handleChange = (event, newValue)  => {
    setValue(newValue);
  };

  return (
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

        <Tabs value={window.location.pathname}
              variant="fullWidth"
              indicatorColor="secondary"
              onChange={handleChange}
        >
          <Tab icon={<Icon>assignment</Icon>}
               label="Intake Forms"
               className={classes.tab}
               value="/forms"
               component={Link}
               to="/forms"
               exact
          />

          <Tab icon={<Icon>today</Icon>}
               label="Appointment Requests"
               className={classes.tab}
               value="/appointment-requests"
               component={Link}
               to="/appointment-requests"
          />
        </Tabs>

        <Box flexGrow={1} />

        <Box display="flex" alignItems="center" pr={3}>
          <Button onClick={props.handleLogout}>Logout</Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default TopNav;
