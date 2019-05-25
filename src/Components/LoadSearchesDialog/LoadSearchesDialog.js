import React from 'react';
import {Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem} from "@material-ui/core";

const LoadSearchesDialog = props => {
    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="md"
            open={props.open}>
            <DialogTitle>Select Field</DialogTitle>
            <DialogContent>
                <List>
                    {props.loadedSearcheTerms.map(searchTerm =>
                        <ListItem key={searchTerm}>
                            <Checkbox/>
                        </ListItem>
                    )}
                </List>
            </DialogContent>
            <DialogActions>
                <Button>
                    Cancel
                </Button>
                <Button>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoadSearchesDialog;