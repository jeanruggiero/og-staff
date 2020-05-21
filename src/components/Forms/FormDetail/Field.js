import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function Field(props) {

  const style = {width: 150};

  if (props.width) {
    style.width = props.width;
  }

  return (
    <Box pr={2} pb={1.5} display="inline-block">
      <TextField helperText={props.label}
                 value={props.value}
                 InputProps={{
                   style: {color: "#000000"}
                 }}
                 disabled
                 style={style}
      />
    </Box>
  )

}

export default Field;