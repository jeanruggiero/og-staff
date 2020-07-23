import React, {useState} from "react";
import ProcessedFilter from "./ProcessedFilter";
import Box from "@material-ui/core/Box";
import OfficeFilter from "./OfficeFilter";

function FilterGroup(props) {

  // const [state, setState] = useState();

  const handleChange = (filter) => {
    // setState({...state, [filter.name]: filter.value});

    props.onChange({...props.value, [filter.name]: filter.value});
  };

  return (
    <Box display="flex" pb={1}>
      <Box pr={4}>
        <ProcessedFilter value={props.value.processed} onChange={handleChange}/>
      </Box>

      <Box>
        <OfficeFilter value={props.value.office} onChange={handleChange}/>
      </Box>
    </Box>
  )
}

export default FilterGroup;
