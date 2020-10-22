import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = ({ text, required,type }) => (
  <TextField
    id="outlined-basic"
    label={text}
    variant="outlined"
    fullWidth={true}
    required={required}
    type = {type}
  />
);

export default CustomInput;
