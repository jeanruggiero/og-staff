import React, {useEffect, useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

function ProcessedFilter(props) {

  // const [state, setState] = useState({
  //   processed: false,
  //   unprocessed: true
  // });

  const handleChange = (event) => {
    // setState({...state, [event.target.name]: event.target.checked});

    props.onChange({
      name: 'processed',
      value: {...props.value, [event.target.name]: event.target.checked}
    });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox checked={props.value.unprocessed}
                    onChange={handleChange}
                    name="unprocessed"
                    style={{
                      marginTop: -8,
                      marginBottom: -8
                    }}
          />
        }
        label="Unprocessed"
      />

      <FormControlLabel
        control={
          <Checkbox checked={props.value.processed}
                    onChange={handleChange}
                    name="processed"
                    style={{
                      marginTop: -8,
                      marginBottom: -8
                    }}
          />
        }
        label="Processed"
      />
    </FormGroup>
  )
}

export default ProcessedFilter;