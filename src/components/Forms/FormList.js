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
import FilterGroup from "./FilterGroup";
import CircularProgress from "@material-ui/core/CircularProgress";

const axios = require('axios');

const useStyles = makeStyles({
  card: {

  },
  name: {
    flexGrow: 0,
    fontWeight: 500,
    fontSize: "large"
  },
  date: {
    color: "#AAAAAA"
  }
});

function FormList(props) {

  const classes = useStyles();
  const [forms, setForms] = useState();
  const [page, setPage] = useState(1);
  const [height, setHeight] = useState(1);

  console.log(props.filter);

  useEffect(() => {

    let queryParams = {};

    if (props.filter.processed['processed'] ^ props.filter.processed['unprocessed']) {
      queryParams.processed = props.filter.processed['processed']
    }

    if (props.filter.office['Westside Family Vision Center'] ^ props.filter.office['Saratoga Vision Center']) {
      queryParams.office = props.filter.office['Westside Family Vision Center'] ? 'Westside Family Vision Center' : 'Saratoga Vision Center';
    }

    setForms(null);

    axios.get(API_URL + 'forms/', {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')},
      params: queryParams
    })
      .then((response) => {
        console.log(response);
        setForms(response.data);
        }
      );
  }, [page, props]);


  if (forms) {
    return (
      <Box>
        {forms.map((form, index) => (
          <ListCard uuid={form.uuid}
                    firstNameRepr={form.firstNameRepr}
                    lastNameRepr={form.lastNameRepr}
                    dateSubmitted={form.dateSubmitted}
                    processed={form.formProcessed}
                    redirectRoot="/forms"
                    tagText="Processed"
                    tagColor="#019421"
          />)
        )}
      </Box>
    )
  } else {
    return (
      <Box display="flex" justifyContent="center" pt={5}>
        <CircularProgress/>
      </Box>
      );
  }

}

export default FormList;