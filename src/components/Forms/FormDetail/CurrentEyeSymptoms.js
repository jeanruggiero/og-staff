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

function CurrentEyeSymptoms(props) {
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
        Current Eye Symptoms
      </Typography>

      <FormSection>
        <Box pt={1} pb={1.5}>
          {!form.eyeSymptomsConditions ? <Typography>None</Typography> : (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Symptom/Condition</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {form.eyeSymptomsConditions.items.map((item, index) =>
                    <TableRow key={index}>
                      <TableCell>{item}</TableCell>
                      <TableCell>{form.eyeSymptomsConditions.details[item]}</TableCell>
                    </TableRow>
                  )}

                  {form.otherEyeSymptomsConditions && (
                    <TableRow>
                      <TableCell>Other</TableCell>
                      <TableCell>{form.otherEyeSymptomsConditions}</TableCell>
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

export default CurrentEyeSymptoms;