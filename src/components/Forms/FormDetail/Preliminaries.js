import React, {useEffect, useState} from "react";
import {API_URL} from "../../../constants";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormSection from "./FormSection";
import Field from "./Field";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

const axios = require('axios');

function Preliminaries(props) {

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
        Preliminaries
      </Typography>

      <FormSection>
        <Field label="Chief Complaint" value={form.reasonForAppointment} />
        <Field label="Date of Last Health Exam" value={form.dateLastHealthExam} />
        <Field label="Date of Last Eye Exam" value={form.dateLastEyeExam} />
        <Field label="Date of Last Dilation" value={form.dateLastDilation} />
      </FormSection>

      <FormSection label="Past General Illness & Surgeries">
        <Box pt={1} pb={1.5}>
          {!form.generalIllnessSurgeries ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.generalIllnessSurgeries.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </FormSection>

      <FormSection label="Current Medications">
        <Box pt={1} pb={1.5}>
          {!form.currentMedications ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Medication</TableCell>
                    <TableCell>For</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.currentMedications.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item.medication}</TableCell>
                      <TableCell>{item.reason}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </FormSection>

      <FormSection label="Eye Drops">
        <Box pt={1} pb={1.5}>
          {!form.currentEyeDrops ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Type/Brand</TableCell>
                    <TableCell>Eye</TableCell>
                    <TableCell>Frequency</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.currentEyeDrops.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item.typeBrand}</TableCell>
                      <TableCell>{item.eye}</TableCell>
                      <TableCell>{item.frequency}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </FormSection>

      <FormSection label="Eye Surgeries & Injuries">
        <Box pt={1} pb={1.5}>
          {!form.eyeSurgeriesInjuries ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Surgery Dates</TableCell>
                    <TableCell>Surgeon</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.eyeSurgeriesInjuries.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.surgeon}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </FormSection>

      <FormSection label="Supplements & Diet">
        <Box>
          <Field label="Nutritional Supplements" value={form.nutritionalSupplements}/>
          <Field label="Details" value={form.supplementDetails}/>
        </Box>

        <Box>
          <Field label="Special Diet" value={form.specialDiet} />
          <Field label="Details" value={form.dietDetails} />
        </Box>
      </FormSection>

      <FormSection label="Drug Allergies">
        <Box pt={1} pb={1.5}>
          {form.medicationAllergies && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Medication</TableCell>
                    <TableCell>Symptoms of Reaction</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.medicationAllergies.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item.medication}</TableCell>
                      <TableCell>{item.symptoms}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </FormSection>

      <FormSection label="Other Allergies">
        <Box pt={1} pb={1.5}>
          {!form.otherAllergies ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Allergy</TableCell>
                    <TableCell>Symptoms of Reaction</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.otherAllergies.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item.allergy}</TableCell>
                      <TableCell>{item.symptoms}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>

      </FormSection>
    </Box>
  )
}

export default Preliminaries;