import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  CategoryButtonContainer,
  NotSelectedCategory,
  SelectedCategory,
} from "./category-button.styles";
import ListIcon from "@material-ui/icons/List";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategoryFilter } from "../../redux/category/category.selector";
import { setCategoryFilter } from "../../redux/category/category.action";

const CategoryButton = ({
  categoriesCollection,
  categoryFilter,
  setCategoryFilter,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const categoryClick = (option) => {
    setCategoryFilter(option);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <CategoryButtonContainer>
      <Button
        style={{ color: "black", fontSize: "1.1em" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ListIcon style={{ fontSize: "2em" }} /> Categorias
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categoriesCollection.map((c) => (
          <MenuItem onClick={() => categoryClick(c.categoryName)}>
            {categoryFilter === c.categoryName ? (
              <SelectedCategory>{categoryFilter}</SelectedCategory>
            ) : (
              <NotSelectedCategory>{c.categoryName}</NotSelectedCategory>
            )}
          </MenuItem>
        ))}
      </Menu>
    </CategoryButtonContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryFilter: selectCategoryFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (data) => dispatch(setCategoryFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButton);
