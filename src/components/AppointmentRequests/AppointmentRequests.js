import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Box} from "@material-ui/core";

import AppointmentRequestList from "./AppointmentRequestList";
import AppointmentRequestDetail from "./AppointmentRequestDetail";

function AppointmentRequests() {
  return (
    <Box>

      <Switch>
        <Route exact path="/appointment-requests" component={AppointmentRequestList}/>
        <Route path="/appointment-requests/:id" component={AppointmentRequestDetail}/>
      </Switch>

    </Box>
  )
}

export default AppointmentRequests;