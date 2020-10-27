import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = ({ text, required, ...rest }) => (
  <TextField
    label={text}
    required={required}
    variant="outlined"
    fullWidth={true}
    {...rest}
  />
);

export default CustomInput;
