import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MenuButtonContainer } from "./menu-button.style";
import { useHistory } from "react-router-dom";

const ButtonMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const linkClick = (option) => {
    if (option.includes("home")) {
      history.push(`/front-bocados/`);
    } else {
      history.push(`/front-bocados/${option}`);
    }

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuButtonContainer>
      <Button
        style={{ color: "black" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ☰ Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => linkClick("home")}>Home</MenuItem>
        <MenuItem onClick={() => linkClick("shop")}>Shop</MenuItem>
        <MenuItem onClick={() => linkClick("contact")}>Contact</MenuItem>
        <MenuItem onClick={() => linkClick("about")}>About</MenuItem>
      </Menu>
    </MenuButtonContainer>
  );
};

export default ButtonMenu;
