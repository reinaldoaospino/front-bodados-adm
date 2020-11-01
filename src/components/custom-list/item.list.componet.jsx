import React, { useState } from "react";
import { Button, Input, ListItem, ListItemText } from "@material-ui/core";
import { ButtonWrap, CategoryFormWrap, InputWrap } from "./custom-list.styles";

const ItemListComponet = (props) => {
  //DECLARETIONS
  const [showInput, setShowInput] = useState(false);
  const { id, itemName } = props;

  //FUNTIONS
  const handleDoubleClick = () => {
    setShowInput(true);
  };

  return (
    <div>
      {showInput ? (
        <CategoryFormWrap>
          <InputWrap>
            <Input
              defaultValue={itemName}
              inputProps={{ "aria-label": "description" }}
              style={{ textAlign: "center" }}
            />
          </InputWrap>
          <ButtonWrap>
            <Button
              variant="contained"
              style={{ background: "#F0AC81", color: "white" }}
            >
              Guardar
            </Button>
          </ButtonWrap>
          <ButtonWrap>
            <Button
              variant="contained"
              style={{ background: "rgb(197, 219, 116)", color: "white" }}
            >
              Eliminar
            </Button>
          </ButtonWrap>
        </CategoryFormWrap>
      ) : (
        <ListItem button>
          <ListItemText
            onDoubleClick={() => handleDoubleClick()}
            primary={itemName}
            style={{ textAlign: "center" }}
          />
        </ListItem>
      )}
    </div>
  );
};

export default ItemListComponet;
