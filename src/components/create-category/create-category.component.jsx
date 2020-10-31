
import React, { useState } from "react";
import { FormContainer,Divider,ButtonWrap } from "../../styles/public.styles";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

const CreateCategoryComponent = () => {
    const [categoryData, setCategoryData] = useState({
       categoryName: ""
      });



      const {categoryName} = categoryData;

      const handleChange = (event) => {
        const { value, name } = event.target;
        setCategoryData({ ...categoryData, [name]: value });
      };
    


      
  return (

      <FormContainer>
          <Divider>
          <CustomInput
              name={"categoryName"}
              value={categoryName}
              text="Nombre Categoria"
              required={true}
              onChange={handleChange}
              id={"categoryName"}
            />
          </Divider>
          <ButtonWrap>
            <CustomButton text={"Aceptar"} disabled={disabled} />
            {isCreating ? <CircularProgress /> : null}
          </ButtonWrap>
      </FormContainer>
  
  );
};

export default CreateCategoryComponent;
