import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {API_URL} from "../../../constants";
import Field from "./Field";
import Typography from "@material-ui/core/Typography";
import FormSection from "./FormSection";
import Grid from "@material-ui/core/Grid";

const axios = require('axios');

function IntakeForm(props) {

  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState();

  useEffect(() => {
    axios.get(API_URL + "forms/" + props.id, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then((response) => {
        console.log(response);
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
        Welcome Form
      </Typography>

      <FormSection>
        <Box>
          <Field label="First Name" value={form.patient.FirstNameRepr}/>
          <Field label="MI" value={form.patient.MI} width={30} />
          <Field label="Last Name" value={form.patient.LastNameRepr}/>
          <Field label="Preferred Name" value={form.preferredName} />
        </Box>

        <Box>
          <Field label="Street Address" value={form.addressStreet} width={250} />
          <Field label="City" value={form.addressCity} />
          <Field label="State" value={form.addressState} width={50} />
          <Field label="Zip" value={form.addressZip} width={100} />
        </Box>

        <Box>
          <Field label="Date of Birth" value={form.patient.DOB} width={90} />
          <Field label="Cell Phone" value={form.cellPhone} width={100} />
          <Field label="Home Phone" value={form.homePhone} width={100} />
          <Field label="Work Phone" value={form.workPhone} width={100} />
        </Box>

        <Box>
          <Field label="Email Address" value={form.email} width={200} />
          <Field label="Spouse or Parent(s) Name" value={form.spouseParentName} width={180} />
        </Box>

        <Box>
          <Field label="Emergency Contact" value={form.emergencyContactName} />
          <Field label="Emergency Phone" value={form.emergencyContactPhone} />
          <Field label="Person Responsible for Account" value={form.personResponsible} width={200} />
        </Box>

        <Box>
          <Field label="Primary Insured's Employer" value={form.insuredEmployer} width={180} />
        </Box>
      </FormSection>

      <FormSection>
        <Box>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Box pr={2} pb={2}>
                <Typography>Height:</Typography>
              </Box>
            </Grid>

            <Grid item>
              <Field label="ft" value={form.heightFeet} width={50} />
              <Field label="in" value={form.heightInches} width={50} />
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Box pr={2} pb={2}>
                <Typography>Weight:</Typography>
              </Box>
            </Grid>

            <Grid item>
              <Field label="lbs" value={form.weight} width={70} />
            </Grid>
          </Grid>


        </Box>
      </FormSection>
    </Box>
  )
}

export default IntakeForm;