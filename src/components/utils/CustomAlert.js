import { Backdrop, IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";

const CustomAlert = ({ open, title, severity }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Snackbar open={isOpen} autoHideDuration={2000} onClose={() => setIsOpen(false)}>
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>{title}</AlertTitle>
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
