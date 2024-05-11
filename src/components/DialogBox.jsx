import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import NewButton from './NewButton';

function DialogBox({ isOpen, isHandleClose, copyAnyway, dialogText}) {
    // const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={isHandleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className='w-full max-w-md mx-auto rounded-lg px-2 py-4 my-8 text-orange-500'>
                <DialogTitle id="responsive-dialog-title" className='text-xl text-center'>
                    {dialogText}
                </DialogTitle>
                <DialogActions>
                    <NewButton onClick={copyAnyway} buttonText='Copy Anyway'/>
                    <NewButton onClick={isHandleClose} buttonText='Modify'/>
                </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    )
}

export default DialogBox