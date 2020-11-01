import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { CategoryButtonContainer } from "./category-button.styles";
import ListIcon from "@material-ui/icons/List";

const CategoryButton = ({ categoriesCollection }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const categoryClick = (option) => {
    setAnchorEl(null);
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
        { categoriesCollection.map((c) => (
          <MenuItem onClick={() => categoryClick()}>{c.categoryName}</MenuItem>
        ))}
      </Menu>
    </CategoryButtonContainer>
  );
};

export default CategoryButton;
