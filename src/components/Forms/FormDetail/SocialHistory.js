import React, {useEffect, useState} from "react";
import {API_URL} from "../../../constants";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormSection from "./FormSection";
import Field from "./Field";

const axios = require('axios');

function SocialHistory(props) {
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState();

  useEffect(() => {
    axios.get(API_URL + "forms/" + props.id + "/", {
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
        Social History
      </Typography>

      <FormSection>
        <Box>
          <Field label="Current Occupation" value={form.occupation}/>
          <Field label="Years" value={form.occupationYears} width={60} />
          <Field label="Employer" value={form.employer}/>
        </Box>

        <Box>
          <Field label="Computer Used" value={form.usesComputer} width={100} />
          <Field label="Hrs Per Day" value={form.computerTime} width={60} />
          <Field label="Distance from Computer" value={form.distanceFromScreen} />
        </Box>

        <Box>
          <Field label="Do you drive?" value={form.drives} width={100} />
          <Field label="Mileage Each Day" value={form.drivingDistance} width={100} />
          <Field label="Visual Difficulty When Driving" value={form.visualDifficultyDriving} />
        </Box>

        <Box>
          <Field label="Problems With Night Vision" value={form.nightVisionProblems} />
        </Box>
      </FormSection>

      <FormSection label="Glasses Information">
        <Box>
          <Field label="Currently Wears Glasses" value={form.wearsGlasses} />
          <Field label="Since" value={form.glassesSince} width={100} />
          <Field label="Wearing Schedule" value={form.glassesFrequency} />
          <Field label="Situations" value={form.glassesSituations} />
        </Box>

        <Box>
          <Field label="Glasses Owned" value={form.glassesTypes} />
        </Box>

        <Box>
          <Field label="Had Trouble With Glasses in Past" value={form.troubleGlassesPast} />
          <Field label="Details" value={form.troubleGlassesPastDetails} />
        </Box>

        <Box>
          <Field label="Wears Sunglasses" value={form.wearsSunglasses} />
          <Field label="Sunglasses Are Current Prescription" value={form.sunglassesCurrentPrescription} />
        </Box>

        <Box>
          <Field label="Special Eyewear Needs" value={form.specialEyewearNeeds} />
          <Field label="Other Special EyewearNeeds" value={form.specialEyewearNeedsOther} />
        </Box>
      </FormSection>

      <FormSection label="Contact Lens Information">
        <Box>
          <Field label="Tried to Wear Contact Lenses" value={form.woreContactsPast} />
          <Field label="Reason For Stopping" value={form.reasonStoppingContacts} />
        </Box>

        <Box>
          <Field label="Currently Wears Contacts" value={form.wearsContacts} />
          <Field label="Since" value={form.contactsSince} width={100} />
        </Box>
      </FormSection>

      <FormSection>
        <Box>
          <Field label="Are there activities that would be easier without glasses?" value={form.activitiesEasierWithoutGlasses} />

        </Box>

        <Box>
          <Field label="Vision Correction Procedures" value={form.visionCorrectionProcedures} />
        </Box>

        <Box>
          <Field label="Interested in Learning About LASIK?" value={form.interestedLasik} />
        </Box>
      </FormSection>

      <FormSection label="Contact Lens Details">
        <Box>
          <Field label="Type" value={form.typeContacts} />
          <Field label="Brand" value={form.brandContacts} />
        </Box>

        <Box>
          <Field label="Hours/Day" value={form.contactsHoursPerDay} width={70} />
          <Field label="Days/Week" value={form.contactsDaysPerWeek} width={70} />
        </Box>

        <Box display="flex">
          <Box pr={2}>
            <Box>
              <Typography>Lens Comfort</Typography>
            </Box>
            <Field label="Right" value={form.lensComfortRight} width={40}/>
            <Field label="Left" value={form.lensComfortLeft} width={40}/>
          </Box>

          <Box pr={2}>
            <Box>
              <Typography>Distance Vision</Typography>
            </Box>
            <Field label="Right" value={form.distanceVisionRight} width={40}/>
            <Field label="Left" value={form.distanceVisionLeft} width={40}/>
          </Box>

          <Box pr={2}>
            <Typography>Near Vision:</Typography>
            <Field label="Right" value={form.nearVisionRight} width={40}/>
            <Field label="Left" value={form.nearVisionLeft} width={40}/>
          </Box>
        </Box>

        <Box>
          <Typography>Contact Lens Solutions</Typography>
          <Field label="Cleaner" value={form.contactsCleaner} />
          <Field label="Disinfectant" value={form.contactsDisinfectant} />
          <Field label="Enzyme" value={form.contactsEnzyme} />
        </Box>

        <Box>
          <Field label="Rinse" value={form.contactsRinse} />
          <Field label="Drops" value={form.contactsDrops} />
          <Field label="Other" value={form.contactsSolutionOther} />
        </Box>

      </FormSection>

      <FormSection>
        <Box>
          <Field label="Uses Nutritional Supplements" value={form.nutritionalSupplements}/>
          <Field label="Details" value={form.supplementDetails}/>
        </Box>

        <Box>
          <Field label="Exercises Regularly" value={form.exercisesRegularly} />
          <Field label="Drinks Alcohol" value={form.alcoholFrequency} />
        </Box>

        <Box>
          <Field label="Uses Tobacco" value={form.usesTobacco} />
          <Field label="Tobacco Intake Method" value={form.tobaccoUseMethods} />
          <Field label="Tobacco Counseling" value={form.tobaccoCounseling} />
          <Field label="Tobacco Use Frequency" value={form.tobaccoFrequency} />
          <Field label="Uses Illegal Drugs" value={form.usesIllegalDrugs} />
        </Box>

        <Box>
          <Field label="Hobbies/Interests" value={form.hobbiesInterests} />
        </Box>

      </FormSection>
    </Box>
  )
}

export default SocialHistory;