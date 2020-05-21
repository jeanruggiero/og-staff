import React from "react";
import IntakeForm from "./FormDetail/IntakeForm";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

function FormDetail({match}) {

  const id = match.params.id;

  return (
    <Box mt={-3}>
      <Box>
        <Tooltip title="Back to Forms">
          <IconButton component={Link} to="/forms">
            <Icon>arrow_back</Icon>
          </IconButton>
        </Tooltip>

        <Box display="inline-block" pl={1}>
          <FormControlLabel control={<Checkbox/>} label="Mark as Processed"/>
        </Box>
      </Box>

      <Divider />

      <Box pt={1.5}>
        <IntakeForm id={id}/>
      </Box>
    </Box>
  )
}

export default FormDetail;