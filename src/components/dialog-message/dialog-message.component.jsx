import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogMessageComponent = ({ open, handleCloseDialog, text }) => {
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
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogMessageComponent;
