import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogMessageDeleteComponent = (props) => {
  const { open, handleYes, handleCloseDialog, text } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={handleYes} color="primary" autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogMessageDeleteComponent;
