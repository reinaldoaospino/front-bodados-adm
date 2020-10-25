import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = ({ text, required, type, name, value, handleChange,id }) => (
  <TextField
    id={id}
    label={text}
    variant="outlined"
    fullWidth={true}
    required={required}
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
  />
);

export default CustomInput;
