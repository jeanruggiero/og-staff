import React, {useEffect, useState} from "react";
import {API_URL} from "../../../constants";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormSection from "./FormSection";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Field from "./Field";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const axios = require('axios');

function ReviewOfSymptoms(props) {
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
        Review of Symptoms
      </Typography>

      <FormSection>
        <Box pt={1} pb={1.5}>
          {!form.generalSymptomsConditions ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Symptom/Condition</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.generalSymptomsConditions.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item}</TableCell>
                    </TableRow>
                  )}

                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>

      </FormSection>

      <FormSection label="Pregnant/Nursing">
        <Box>
          <Field label="Pregnant" value={form.pregnant}/>
          <Field label="Details" value={form.pregnantDetails}/>
        </Box>

        <Box>
          <Field label="Nursing" value={form.nursing} />
          <Field label="Details" value={form.nursingDetails} />
        </Box>
      </FormSection>
    </Box>
  )
}

export default ReviewOfSymptoms;