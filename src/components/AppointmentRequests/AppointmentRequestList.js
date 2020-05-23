import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {API_URL} from "../../constants";
import ListCard from "../ListCard";

const axios = require('axios');

const useStyles = makeStyles({
  name: {
    flexGrow: 0,
    fontWeight: 500,
    fontSize: "large"
  },
  date: {
    color: "#AAAAAA"
  }
});

function AppointmentRequestList(props) {

  const classes = useStyles();
  const [apptRequests, setApptRequests] = useState();
  const [page, setPage] = useState(1);
  const [height, setHeight] = useState(1);

  useEffect(() => {
    axios.get(API_URL + 'appointment_request_list/', {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then((response) => {
        console.log(response);
        setApptRequests(response.data);
        }
      );
  }, [page]);

  if (apptRequests) {
    return (
      <Box>

        <Typography variant="h1" gutterBottom>Appointment Requests</Typography>

        {apptRequests.map((apptRequest, index) => (
          <ListCard uuid={apptRequest.uuid}
                    FirstNameRepr={apptRequest.FirstNameRepr}
                    LastNameRepr={apptRequest.LastNameRepr}
                    dateSubmitted={apptRequest.dateSubmitted}
                    processed={apptRequest.requestProcessed}
                    redirectRoot="/appointment-requests"
                    tagText="Scheduled"
                    tagColor="#66277a"
          />)
        )}
      </Box>
    )
  } else {
    return (<p>Loading...</p>)
  }

}

export default AppointmentRequestList;