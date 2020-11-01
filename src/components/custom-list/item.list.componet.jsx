import React, { useState } from "react";
import { Button, Input, ListItem, ListItemText } from "@material-ui/core";
import { ButtonWrap, CategoryFormWrap, InputWrap } from "./custom-list.styles";
import {
  fetcUpdateCategoryStart,
  fetchDeleteCategoryStart,
} from "../../redux/category/category.action";
import { selectIsFetching } from "../../redux/fetching/fetching.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ItemListComponet = (props) => {
  //DECLARETIONS
  const {
    id,
    itemName,
    fetchUpdateCategoryStart,
    fetchDeleteCategoryStart,
  } = props;

  const [categoryData, setCategoryData] = useState({
    id: id,
    categoryName: itemName,
  });

  const { categoryName } = categoryData;
  const [showInput, setShowInput] = useState(false);

  //FUNTIONS
  const handleDoubleClick = () => {
    setShowInput(true);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  const handleSave = () => {
    fetchUpdateCategoryStart(categoryData);
  };

  const handleDelete = () => {
    fetchDeleteCategoryStart(categoryData.id);
  };

  return (
    <div>
      {showInput ? (
        <CategoryFormWrap>
          <InputWrap>
            <Input
              defaultValue={itemName}
              name={"categoryName"}
              value={categoryName}
              inputProps={{ "aria-label": "description" }}
              style={{ textAlign: "center" }}
              onChange={handleChange}
            />
          </InputWrap>
          <Options handleSave={handleSave} handleDelete={handleDelete} />
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

const Options = ({ handleSave, isFetching, handleDelete }) => {
  return !isFetching ? (
    <div style={{ display: "flex" }}>
      <ButtonWrap>
        <Button
          variant="contained"
          style={{ background: "#F0AC81", color: "white" }}
          onClick={() => handleSave()}
        >
          Guardar
        </Button>
      </ButtonWrap>
      <ButtonWrap>
        <Button
          variant="contained"
          style={{ background: "rgb(197, 219, 116)", color: "white" }}
          onClick={() => handleDelete()}
        >
          Eliminar
        </Button>
      </ButtonWrap>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUpdateCategoryStart: (data) => dispatch(fetcUpdateCategoryStart(data)),
  fetchDeleteCategoryStart: (id) => dispatch(fetchDeleteCategoryStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListComponet);
