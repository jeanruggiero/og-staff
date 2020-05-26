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
    <Box mb={2}>
      <Typography variant="h2" gutterBottom>
        Welcome Form
      </Typography>

      <FormSection>
        <Box>
          <Field label="First Name" value={form.patient.firstNameRepr}/>
          <Field label="MI" value={form.patient.mi} width={30} />
          <Field label="Last Name" value={form.patient.lastNameRepr}/>
          <Field label="Preferred Name" value={form.preferredName} />
          <Field label="Gender" value={form.gender} width={80} />
        </Box>

        <Box>
          <Field label="Street Address" value={form.addressStreet} width={250} />
          <Field label="City" value={form.addressCity} />
          <Field label="State" value={form.addressState} width={50} />
          <Field label="Zip" value={form.addressZip} width={100} />
        </Box>

        <Box>
          <Field label="Date of Birth" value={form.patient.dob} width={90} />
          <Field label="Cell Phone" value={form.cellPhone} width={100} />
          <Field label="Home Phone" value={form.homePhone} width={100} />
          <Field label="Work Phone" value={form.workPhone} width={100} />
        </Box>

        <Box>
          <Field label="Email Address" value={form.patient.email} width={200} />
          <Field label="Spouse or Parent(s) Name" value={form.spouseParentName} width={180} />
        </Box>

        <Box>
          <Field label="Emergency Contact" value={form.emergencyContactName} />
          <Field label="Emergency Phone" value={form.emergencyPhone} />
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

      <FormSection>
        <Field label="Race" value={form.race} />
        <Field label="Ethnicity" value={form.ethnicity} />
        <Field label="Preferred Language" value={form.preferredLanguage} />
      </FormSection>

      <FormSection>
        <Field label="Referred By" value={form.referredBy} />
      </FormSection>

      <FormSection label="HIPAA Privacy Policy">
        <Field label="Patient Recevied" value="Yes" />
        <Field label="Date" value={form.dateSubmitted} width={100} />
      </FormSection>

      <FormSection label="Primary Insurance Information">
        <Box>
          <Field label="Insurance Company" value={form.insuranceCompany}/>
          <Field label="Street Address" value={form.insuranceCompanyStreetAddress}/>
          <Field label="City" value={form.insuranceCompanyCity}/>
          <Field label="State" value={form.insuranceCompanyState} width={40} />
          <Field label="Zip" value={form.insuranceCompanyZip} width={60} />
        </Box>

        <Box>
          <Typography>Insured Individual's Information</Typography>
          <Field label="Gender"
                 value={form.primaryInsuredGender || form.gender}
                 width={80}
          />

          <Field label="First Name"
                 value={form.primaryInsuredFirstName || form.patient.firstNameRepr}
          />

          <Field label="MI"
                 value={form.primaryInsuredMi || form.patient.mi}
                 width={30}
          />

          <Field label="Last Name"
                 value={form.primaryInsuredLastName || form.patient.lastNameRepr} />
        </Box>

        <Box>
          <Field label="Identification Number" value={form.insuranceIdNumber} />
          <Field label="Group Number" value={form.insuranceGroupNumber} />
          <Field label="Date of Birth"
                 value={form.primaryInsuredDob || form.patient.dob}
                 width={100}
          />
        </Box>

        <Box>
          <Field label="Patient Relationship to Insured" value={form.relationshipToInsured} />
        </Box>
      </FormSection>

      <FormSection label="Patient Status">
        <Field label="Patient Marital Status" value={form.maritalStatus} />
        <Field label="Employment Status" value={form.employmentStatus} />
      </FormSection>

      <FormSection label="Secondary Insurance Information">
        <Box>
          <Field label="Insurance Company" value={form.secondaryInsuranceCompany}/>
          <Field label="Street Address" value={form.secondaryInsuranceCompanyStreetAddress}/>
          <Field label="City" value={form.secondaryInsuranceCompanyCity}/>
          <Field label="State" value={form.secondaryInsuranceCompanyZip} width={40} />
          <Field label="Zip" value={form.secondaryInsuranceCompanyZip} width={60} />
        </Box>

        <Box>
          <Typography>Insured Individual's Information</Typography>
          <Field label="Gender"
                 value={form.secondaryInsurance && (form.secondaryInsuredGender || form.gender)}
                 width={80}
          />

          <Field label="First Name"
                 value={form.secondaryInsurance && (form.secondaryInsuredFirstName || form.patient.firstNameRepr)}
          />

          <Field label="MI"
                 value={form.secondaryInsurance && (form.secondaryInsuredMi || form.patient.mi)}
                 width={30}
          />

          <Field label="Last Name"
                 value={form.secondaryInsurance && (form.secondaryInsuredLastName || form.patient.lastNameRepr)} />
        </Box>

        <Box>
          <Field label="Identification Number" value={form.secondaryInsuranceIdNumber} />
          <Field label="Group Number" value={form.secondaryInsuranceGroupNumber} />
          <Field label="Date of Birth"
                 value={form.secondaryInsurance && (form.secondaryInsuredDob || form.patient.dob)}
                 width={100}
          />
        </Box>

        <Box>
          <Field label="Patient Relationship to Insured" value={form.secondaryRelationshipToInsured} />
        </Box>
      </FormSection>
    </Box>
  )
}

export default IntakeForm;