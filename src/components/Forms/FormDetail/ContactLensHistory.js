import React, {useEffect, useState} from "react";
import {API_URL} from "../../../constants";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormSection from "./FormSection";
import Field from "./Field";

const axios = require('axios');

function ContactLensHistory(props) {
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState();

  useEffect(() => {
    axios.get(API_URL + "forms/" + props.id, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then((response) => {
        setForm(response.data);
        setLoaded(true);
      })
  }, [loaded, props.id]);

  if (!loaded) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Contact Lens History
      </Typography>

      <FormSection label="Contact Lens Complaints">
        <Box>
          <Field label="Visual Complaints"
                 value={form.contactsVisualSymptoms}
                 fullWidth
          />
        </Box>

        <Box>
          <Field label="Comfort Complaints" 
                 value={form.contactsComfortSymptoms} 
                 fullWidth
          />
        </Box>

        <Box>
          <Field label="Other Complaints" 
                 value={form.contactsOtherSymptoms} 
                 fullWidth
          />
        </Box>
      </FormSection>

      <Box display="flex">
        <Box pr={2} height="100%">
          <FormSection label="Wearing Schedule">
            <Box>
              <Field label="Ave WT" value={form.contactsHoursPerDay + " hrs"}/>
            </Box>
            <Box>
              <Field label="Today WT" value={form.todayWearingTime + " hrs"}/>
            </Box>
            <Box>
              <Field label="Days/Week" value={form.contactsDaysPerWeek}/>
            </Box>
            <Box>
              <Field label="Replacement" value={form.contactsReplacementDays}/>
            </Box>
          </FormSection>
        </Box>

        <FormSection label="Care Regimen">
          <Box>
            <Field label="Cleaner"
                   value={form.contactsCleaner}
                   width={250}
            />
          </Box>
          <Box mt={-1}>
            <Field label="Rinse"
                   value={form.contactsRinse}
                   width={250}
            />
          </Box>
          <Box mt={-1}>
            <Field label="Disinfectant"
                   value={form.contactsDisinfectant}
                   width={250}
            />
          </Box>
          <Box mt={-1}>
            <Field label="Enzyme"
                   value={form.contactsEnzyme}
                   width={250}
            />
          </Box>
          <Box mt={-1}>
            <Field label="Drops"
                   value={form.contactsDrops}
                   width={250}
            />
          </Box>
          <Box mt={-1}>
            <Field label="Other"
                   value={form.contactsSolutionOther}
                   width={250}
            />
          </Box>
        </FormSection>
      </Box>
    </Box>
  )
}

export default ContactLensHistory;