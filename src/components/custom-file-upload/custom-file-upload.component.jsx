import React from "react";

const CustomFileUpload = ({ productData, setProductData, ...rest }) => {
  // const [imgPreview, setImgPreview] = useState("");

  const loadFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      // setImgPreview([reader.result]);
      var base64Img = reader.result.split(",")[1];
      console.log("entra");
      setProductData({ ...productData, imgFile: base64Img });
    };
  };
  return (
    <div>
      <input type="file" onChange={(e) => loadFile(e)} {...rest} />
    </div>
  );
};

export default CustomFileUpload;
