import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectActionComplete,
  selectActionSucess,
  selectIsDeleting,
} from "../../redux/product/product.selector";
import { setActionComplete } from "../../redux/product/product.action";
import { CircularProgress } from "@material-ui/core";

const DialogMessageDeleteComponent = (props) => {
  const {
    open,
    handleYes,
    handleCloseDialog,
    text,
    actionComplete,
    actionSuccess,
    isDeleting,
  } = props;

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
          {isDeleting ? <CircularProgress /> : null}
          <Button
            disabled={isDeleting}
            onClick={handleCloseDialog}
            color="primary"
            autoFocus
          >
            Cancelar
          </Button>
          <Button
            disabled={isDeleting}
            onClick={handleYes}
            color="primary"
            autoFocus
          >
            Si
          </Button>
        </DialogActions>
        {!actionSuccess && actionComplete ? (
          <span style={{ fontSize: "1.1em", textAlign: "center" }}>
            Error en eliminar producto, intente más tarde
          </span>
        ) : null}
      </Dialog>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  actionSuccess: selectActionSucess,
  actionComplete: selectActionComplete,
  isDeleting: selectIsDeleting,
});

const mapDispatchToProps = (dispatch) => ({
  setActionComplete: (value) => dispatch(setActionComplete(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogMessageDeleteComponent);
