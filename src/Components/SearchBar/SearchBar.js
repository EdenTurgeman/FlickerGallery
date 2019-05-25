import React from 'react';
import {Restore, Save, Search} from '@material-ui/icons'
import {IconButton, Tooltip} from "@material-ui/core";
import {debounce} from "throttle-debounce";
import {StyledInputBase, StyledSearchBarContainer, StyledSearchBarPaper} from "./StyledComponents";

const SearchBar = props => {
    const onSearchTermChange = debounce(500, newTerm => {
        props.searchImages(newTerm);
    });

    return (
        <StyledSearchBarContainer>
            <StyledSearchBarPaper>
                <IconButton aria-label="Search">
                    <Search/>
                </IconButton>
                <StyledInputBase onChange={event => onSearchTermChange(event.target.value)}
                                 placeholder="Please Enter a search Term"/>
                <Tooltip placement="bottom-start" title="Save Search">
                    <IconButton onClick={props.saveSearch}>
                        <Save/>
                    </IconButton>
                </Tooltip>
                <Tooltip placement="bottom-start" title="Load Searches" >
                    <IconButton>
                        <Restore/>
                    </IconButton>
                </Tooltip>
            </StyledSearchBarPaper>
        </StyledSearchBarContainer>
    )
};

export default SearchBar;