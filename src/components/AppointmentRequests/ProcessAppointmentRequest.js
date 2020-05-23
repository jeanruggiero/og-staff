import React, {useEffect, useState} from "react";
import {API_URL} from "../../constants";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";

const axios = require('axios');

function ProcessAppointmentRequest(props) {

  const [processed, setProcessed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('loading processed data');
    axios.get(API_URL + "appointment_request_detail/" + props.id, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then((response) => {
        setProcessed(!!response.data.requestProcessed);
        setLoaded(true);
      })
  }, [loaded, processed, props.id]);

  const handleChange = (event) => {
    console.log('handling event');
    setProcessed(event.target.checked);

    axios.put(API_URL + "appointment_request_detail/" + props.id + "/", {requestProcessed: event.target.checked}, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then(function (response) {
        console.log(response);
      });
  };

  if (!loaded) {
    return (
      <Box />
    )
  }

  return (
    <Box display="inline-block" pl={1}>
      <FormControlLabel control={
          <Checkbox checked={processed}
                    onChange={handleChange}
          />
        }
                        label="Mark as Processed"
      />
    </Box>
  )
}

export default ProcessAppointmentRequest;