import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {API_URL} from "../../constants";
import FormListCard from "./FormListCard";

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

  useEffect(() => {
    axios.get(API_URL + 'forms/', {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then((response) => {
        console.log(response);
        setForms(response.data);
        }
      );
  }, [page]);

  if (forms) {
    return (
      <Box>

        {forms.map((form, index) => (
          <FormListCard uuid={form.uuid}
                        FirstNameRepr={form.FirstNameRepr}
                        LastNameRepr={form.LastNameRepr}
                        dateSubmitted={form.dateSubmitted}
          />)
        )}
      </Box>
    )
  } else {
    return (<p>Loading...</p>)
  }

}

export default FormList;