import React from 'react';
import {Slide, Snackbar} from "@material-ui/core";

const SaveSearchSnackbar = props => (
    <Snackbar
        open={props.open}
        autoHideDuration={2000}
        onClose={() => props.onClose(false)}
        TransitionComponent={Slide}
        message={<span>Search Saved!</span>}
    />
);

export default SaveSearchSnackbar;