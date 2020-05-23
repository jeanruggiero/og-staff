import React, {useState} from "react";
import {API_URL} from "../../../constants";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";

const axios = require('axios');

function ProcessForm(props) {
  const [procesed, setProcessed] = useState();

  const handleMarkProcessed = () => {
    axios.put(API_URL + "intake/" + props.id + "/", {processed: true})
      .then(function (response) {
        console.log(response);
      });
  };

  const handleUnmarkProcessed = () => {

  };

  return (
    <Box display="inline-block" pl={1}>
      <FormControlLabel control={<Checkbox/>} label="Mark as Processed"/>
    </Box>
  )
}

export default ProcessForm;