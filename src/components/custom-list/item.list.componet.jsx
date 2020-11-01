import React, { useState } from "react";
import { Button, Input, ListItem, ListItemText } from "@material-ui/core";
import { ButtonWrap, CategoryFormWrap, InputWrap } from "./custom-list.styles";
import { fetcUpdateCategoryStart } from "../../redux/category/category.action";
import {
  setFetchingComplete,
  setFetchingSuccess,
} from "../../redux/fetching/fetching.action";
import {
  selectIsFetching,
  selectFetchingComplete,
  selectFetchingSuccess,
} from "../../redux/fetching/fetching.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ItemListComponet = (props) => {
  //DECLARETIONS
  const {
    id,
    itemName,
    isFetching,
    fetchingSuccess,
    fetchingComplete,
    fetchUpdateCategoryStart,
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
          <Options handleSave={handleSave} />
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

const Options = ({
  handleSave,
  isFetching,
  fetchingSuccess,
  fetchingComplete,
}) => {
  const error = fetchingComplete && !fetchingSuccess;
  const completeSucess = fetchingComplete && fetchingSuccess;

  return !isFetching ? (
    <div>
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
        >
          Eliminar
        </Button>
      </ButtonWrap>
    </div>
  ) : (
    <div>
      {!isFetching ? <p>Cargando..</p> : null}
      {error ? <p>Error en la carga</p> : null}
      {completeSucess ? <p>Actuallizado correctamente</p> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  fetchingSuccess: selectFetchingSuccess,
  fetchingComplete: selectFetchingComplete,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUpdateCategoryStart: (data) => dispatch(fetcUpdateCategoryStart(data)),
  setFetchingSuccess: (value) => dispatch(setFetchingSuccess(value)),
  setFetchingComplete: (value) => dispatch(setFetchingComplete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListComponet);
