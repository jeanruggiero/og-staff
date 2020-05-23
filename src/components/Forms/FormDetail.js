import React, {useState} from "react";
import IntakeForm from "./FormDetail/IntakeForm";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import Preliminaries from "./FormDetail/Preliminaries";
import CurrentEyeSymptoms from "./FormDetail/CurrentEyeSymptoms";
import ReviewOfSymptoms from "./FormDetail/ReviewOfSymptoms";
import FamilyHistory from "./FormDetail/FamilyHistory";
import SocialHistory from "./FormDetail/SocialHistory";
import ContactLensHistory from "./FormDetail/ContactLensHistory";
import {API_URL} from "../../constants";


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
        <IntakeForm id={id} />
        <Preliminaries id={id} />
        <CurrentEyeSymptoms id={id} />
        <ReviewOfSymptoms id={id} />
        <FamilyHistory id={id} />
        <SocialHistory id={id} />
        <ContactLensHistory id={id} />
      </Box>
    </Box>
  )
}

export default FormDetail;