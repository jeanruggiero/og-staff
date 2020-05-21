import React, { useState } from "react";
import {Box} from "@material-ui/core";
import { API_URL } from "../../constants";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import FormList from "./FormList";
import FormDetail from "./FormDetail";

const axios = require('axios');

function FormPanel() {

  return (
    <Box>
      <BrowserRouter>
        <Switch>
          <Route path="/forms" exact component={FormList}/>
          <Route path="/forms/:id" component={FormDetail}/>
        </Switch>
      </BrowserRouter>
    </Box>
  )
}

export default FormPanel;