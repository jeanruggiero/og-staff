import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function AutoSizeField(props) {

  let style = {width: 150};
  let display = "inline-block";

  let value = props.value;
  switch (value) {
    case true:
      value = "Yes";
      break;
    case false:
      value = "No";
      break;
    default:
      break;
  }

  if (props.width) {
    style.width = props.width;
  } if (props.fullWidth !== undefined) {
    style = {};
    display = "block";
  }

  return (
    <Box pr={2} pb={1.5} display={display}>
      <TextField helperText={props.label}
                 value={value}
                 InputProps={{
                   style: {color: "#000000"}
                 }}
                 disabled
                 style={style}
                 fullWidth={props.fullWidth !== undefined}
                 multiline

      />
    </Box>
  )

}

export default AutoSizeField;