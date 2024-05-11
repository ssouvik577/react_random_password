import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function OpenToast({isOpen, isHandleClose,toastMessage}) {
      
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={isHandleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
    return (
      <div>
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={isHandleClose}
          message={toastMessage}
          action={action}
        />
      </div>
    );
}

export default OpenToast