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
import FormList from "./FormList";

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

function FormListPanel(props) {

  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [height, setHeight] = useState(1);
  const [formFilter, setFormFilter] = useState({
    'processed': {
      'processed': false,
      'unprocessed': true
    },
    'office': {
      'Westside Family Vision Center': false,
      'Saratoga Vision Center': false
    }
  });

  const handleFilterChange = (filters) => {
    setFormFilter(filters);
  };

  return (
    <Box>

      <Box>
        <Box>
          <Typography variant="h1" display="block" gutterBottom >
            Intake Forms
          </Typography>
        </Box>

        <Box>
          <FilterGroup value={formFilter} onChange={handleFilterChange}/>
        </Box>
      </Box>

      <FormList filter={formFilter} />
    </Box>
  )


}

export default FormListPanel;