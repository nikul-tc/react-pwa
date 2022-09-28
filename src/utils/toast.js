import React from 'react';
import { createRoot } from 'react-dom/client'
import { SnackbarProvider, withSnackbar } from 'notistack';

const toast = {
    success: function (msg) {
        this.toast(msg, 'success');
    },
    error: function (msg) {
        this.toast(msg, 'error');
    },
    toast: function (msg, variantType) {
        const Display = withSnackbar(({ message, enqueueSnackbar }) => {
            enqueueSnackbar(message, { variant: variantType, preventDuplicate: true, autoHideDuration: 2000});
            return null;
        });
        const container = document.getElementById('snackbarhelper');
        const root = createRoot(container);
        root.render(
            <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                <Display message={msg} variant={variantType} />
            </SnackbarProvider>)
    }
}

export default toast