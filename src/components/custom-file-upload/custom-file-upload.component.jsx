import React from "react";

const CustomFileUpload = ({ loadFile, ...rest }) => {
  return (
    <div>
      <input type="file" onChange={(e) => loadFile(e)} {...rest} />
    </div>
  );
};

export default CustomFileUpload;
