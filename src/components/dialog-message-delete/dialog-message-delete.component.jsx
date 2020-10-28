import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectActionComplete, selectActionSucess } from "../../redux/product/product.selector";
import { setActionComplete } from "../../redux/product/product.action";

const DialogMessageDeleteComponent = (props) => {
  const {
    open,
    handleYes,
    handleCloseDialog,
    text,
    actionComplete,
    actionSuccess,
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
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={handleYes} color="primary" autoFocus>
            Si
          </Button>
        </DialogActions>
        {!actionSuccess && actionComplete ? (
          <span>Error en eliminar producto, intente más tarde</span>
        ) : null}
      </Dialog>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  actionSuccess: selectActionSucess,
  actionComplete: selectActionComplete,
});

const mapDispatchToProps = (dispatch) => ({
  setActionComplete: (value) => dispatch(setActionComplete(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogMessageDeleteComponent);
