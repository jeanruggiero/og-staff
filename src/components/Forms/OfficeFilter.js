import React, {useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
    root: {
      marginTop: 10,
      marginBottom: 20
    },
    formLabel: {
      fontWeight: 500,
      fontSize: 'medium',
      marginBottom: 8,
      marginLeft: 4
    },
    formGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: 4
      }
    }
  })
);

function OfficeFilter(props) {

  // const [state, setState] = useState({
  //   "Westside Family Vision Center": true,
  //   "Saratoga Vision Center": true
  // });

  const handleChange = (event) => {
    // setState({...state, [event.target.name]: event.target.checked});

    props.onChange({
      name: 'office',
      value: {...props.value, [event.target.name]: event.target.checked}
    });

  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox checked={props.value["Westside Family Vision Center"]}
                    onChange={handleChange}
                    name="Westside Family Vision Center"
                    color="primary"
                    style={{
                      marginTop: -8,
                      marginBottom: -8
                    }}
          />
        }
        label="Westside Family Vision Center"
        color="primary"
      />

      <FormControlLabel
        control={
          <Checkbox checked={props.value["Saratoga Vision Center"]}
                    onChange={handleChange}
                    name="Saratoga Vision Center"
                    color="primary"
                    style={{
                      marginTop: -8,
                      marginBottom: -8
                    }}
          />
        }
        label="Saratoga Vision Center"
      />
    </FormGroup>

  )
}

export default OfficeFilter;