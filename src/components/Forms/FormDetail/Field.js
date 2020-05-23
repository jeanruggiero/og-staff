import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function Field(props) {

  let style = {width: 150};
  let display = "inline-block";

  if (props.width) {
    style.width = props.width;
  } if (props.fullWidth !== undefined) {
    style = {};
    display = "block";
  }

  return (
    <Box pr={2} pb={1.5} display={display}>
      <TextField helperText={props.label}
                 value={props.value}
                 InputProps={{
                   style: {color: "#000000"}
                 }}
                 disabled
                 style={style}
                 fullWidth={props.fullWidth !== undefined}

      />
    </Box>
  )

}

export default Field;