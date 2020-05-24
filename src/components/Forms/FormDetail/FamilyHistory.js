import React, {useEffect, useState} from "react";
import {API_URL} from "../../../constants";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormSection from "./FormSection";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const axios = require('axios');

function FamilyHistory(props) {
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState();

  const eyeDiseases = ["Amblyopia (Lazy Eye)", "Blindness", "Cataracts", "Color Blindness", "Glaucoma",
    "Macular Degeneration", "Retinal Detachment", "Strabismus (Eye Turn)"];

  const systemicDiseases = ["Arthritis", "Cancer", "Diabetes", "Heart Disease",
    "High Blood Pressure", "Kidney Disease", "Lupus", "Stroke", "Thyroid Disease"];

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

  console.log(form.familyMedicalHistory);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Family History
      </Typography>

      <FormSection label="Eye Diseases">
        <Box pt={1} pb={1.5}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Condition</TableCell>
                  <TableCell>History</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Relationship to Patient</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                {eyeDiseases.map((item, index) =>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{form.familyMedicalHistory[item] ? "Yes" : ""}</TableCell>

                    {(((item === "Cataracts") || (item === "Glaucoma")) && form.familyMedicalHistory[item]) ? (
                      <TableCell>{"Age of Onset: " + form.familyMedicalHistory[item + "AgeOfOnset"] + "; Severity: " + form.familyMedicalHistory[item + "Severity"] + "; Details: " + form.familyMedicalHistory[item + "Details"]}</TableCell>
                    ) : (
                      <TableCell>{form.familyMedicalHistory[item + "Details"]}</TableCell>
                    )}

                    <TableCell>{form.familyMedicalHistory[item] && form.familyMedicalHistory[item].join(", ")}</TableCell>
                  </TableRow>
                )}

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </FormSection>

      <FormSection label="Systemic Diseases">
        <Box pt={1} pb={1.5}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Condition</TableCell>
                  <TableCell>History</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Relationship to Patient</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                {systemicDiseases.map((item, index) =>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{form.familyMedicalHistory[item] ? "Yes" : ""}</TableCell>
                    <TableCell>{form.familyMedicalHistory[item + "Details"]}</TableCell>
                    <TableCell>{form.familyMedicalHistory[item] && form.familyMedicalHistory[item].join(", ")}</TableCell>
                  </TableRow>
                )}

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </FormSection>
    </Box>
  )
}

export default FamilyHistory;