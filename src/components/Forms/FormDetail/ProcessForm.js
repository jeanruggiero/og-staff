import React, {useEffect, useState} from "react";
import {API_URL} from "../../../constants";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";

const axios = require('axios');

function ProcessForm(props) {

  const [processed, setProcessed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('loading processed data');
    axios.get(API_URL + "forms/" + props.id, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then((response) => {
        setProcessed(!!response.data.formProcessed);
        setLoaded(true);
      })
  }, [loaded, processed, props.id]);

  const handleChange = (event) => {
    console.log('handling event');
    setProcessed(event.target.checked);

    axios.put(API_URL + "intake/" + props.id + "/", {formProcessed: event.target.checked})
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
      } label="Mark as Processed"/>
    </Box>
  )
}

export default ProcessForm;