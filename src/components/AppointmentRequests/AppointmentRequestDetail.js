import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import {API_URL} from "../../constants";
import ProcessAppointmentRequest from "./ProcessAppointmentRequest";
import FormSection from "../Forms/FormDetail/FormSection";
import Field from "./Field";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const axios = require('axios');

function AppointmentRequestDetail({match}) {

  const id = match.params.id;
  const [loaded, setLoaded] = useState(false);
  const [apptRequest, setApptRequest] = useState();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    axios.get(API_URL + "appointment_request_detail/" + id, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then(response => {
        console.log(response);
        setApptRequest(response.data);
        setLoaded(true);
      })
  }, [id, loaded]);


  if (!loaded) {
    return (<p>Loading</p>)
  }

  return (
    <Box mt={-3}>
      <Box>
        <Tooltip title="Back to Appointment Requests">
          <IconButton component={Link} to="/appointment-requests">
            <Icon>arrow_back</Icon>
          </IconButton>
        </Tooltip>

        <ProcessAppointmentRequest id={id} />
      </Box>

      <Divider />

      <Box pt={2}>
        <FormSection label="Patient Information">
          <Field label="First Name"
                 name="firstName"
                 value={apptRequest.patient.firstNameRepr}
          />

          <Field label="MI"
                 name="MI"
                 value={apptRequest.patient.mi}
                 width={45}
          />

          <Field label="Last Name"
                 name="lastName"
                 value={apptRequest.patient.lastNameRepr}
          />

          <Field label="Date of Birth"
                 name="DOB"
                 value={apptRequest.patient.dob}
                 width={120}
          />

          <Field label="Email"
                 name="email"
                 value={apptRequest.patient.email}
                 width={300}
          />

        </FormSection>

        <FormSection label="Details">
          <Field label="Reason for Appointment"
                 value={apptRequest.reason && apptRequest.reason.join(", ")}
                 fullWidth
          />

          <Field label="Office"
                 value={apptRequest.office}
                 width={220}
          />
        </FormSection>

        <FormSection label="Patient Availability">

          <Box display="flex" mb={2}>

            {days.map((day, index) => {
              const am = day.toLowerCase() + "Am";
              const pm = day.toLowerCase() + "Pm";

              return (
                <Box pr={2}>
                  <Typography align="center" gutterBottom>
                    {day}
                  </Typography>

                  <Box pb={1}>
                    <Button variant={apptRequest[am] ? "contained" : "outlined"}
                            color="primary"
                            size="small"
                            disableRipple
                            disableElevation
                            fullWidth
                    >
                      AM
                    </Button>
                  </Box>

                  <Box>
                    <Button variant={apptRequest[pm] ? "contained" : "outlined"}
                            color="primary"
                            size="small"
                            disableRipple
                            disableElevation
                            fullWidth
                    >
                      PM
                    </Button>
                  </Box>

                </Box>
              )
            })}
          </Box>


        </FormSection>

        <FormSection label="Respond">
          <Box display="flex" alignItems="center">
            <Field label="Respond By"
                   value={apptRequest.contactMethod}
                   width={100}
            />

            {apptRequest.contactMethod === "Email" ? (
              <Button variant="contained"
                      color="primary"
                      startIcon={<Icon>email</Icon>}
                      component="a"
                      href={"mailto:" + apptRequest.patient.email}
                      target="_blank"
              >
                Email Patient
              </Button>
            ) : (
              <Field label="Phone Number"
                     value={apptRequest.phoneNumber}
              />
            )}
          </Box>
        </FormSection>
      </Box>
    </Box>
  )
}

export default AppointmentRequestDetail;