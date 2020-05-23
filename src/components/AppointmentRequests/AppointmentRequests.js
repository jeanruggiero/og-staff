import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Box} from "@material-ui/core";

import AppointmentRequestList from "./AppointmentRequestList";
import AppointmentRequestDetail from "./AppointmentRequestDetail";

function AppointmentRequests() {
  return (
    <Box>
      <BrowserRouter>
        <Switch>
          <Route path="/appointment-requests" exact component={AppointmentRequestList}/>
          <Route path="/appointment-requests/:id" component={AppointmentRequestDetail}/>
        </Switch>
      </BrowserRouter>
    </Box>
  )
}

export default AppointmentRequests;