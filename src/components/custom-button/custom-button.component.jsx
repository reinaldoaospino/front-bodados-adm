import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ text, icon, borderRadius, background, ...rest }) => (
  <Button
    variant="contained"
    style={{
      background: background ? background  : "#F0AC81",
      color: "#fff",
      borderRadius: borderRadius,
      width: "100%",
      height: "100%",
    }}
    endIcon={icon}
    type="submit"
    {...rest}
  >
    <span style={{ fontWeight: "bold", fontSize: "17px" }}>{text}</span>
  </Button>
);

export default CustomButton;
