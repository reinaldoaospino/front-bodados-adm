import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const LinkStyles = {
  textDecoration: "none",
  color: "black",
};

const ProductMenuComponent = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { fontSize, background, borderRadius, color } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ background: background, borderRadius: borderRadius }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span style={{ fontSize: fontSize, color: color, textAlign: "center" }}>
          Productos
        </span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/productos/crear" style={LinkStyles}>
          <MenuItem onClick={handleClose}>Crear</MenuItem>
        </Link>
        <Link to="/productos/administrar" style={LinkStyles}>
          <MenuItem onClick={handleClose}>Listar Productos</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default ProductMenuComponent;
