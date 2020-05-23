import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";

function Field(props) {

  const style = {
    paddingBottom: 15,
    paddingRight: 12
  };

  if (props.width) {
    style.width = props.width;
  }

  return (
      <TextField
        value={props.value}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        InputProps={{
          style: {color: "#000000"}
        }}
        style={style}
        disabled
        {...props}
      />
  )
}

export default Field;