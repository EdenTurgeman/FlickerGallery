import React from 'react';
import {Search} from '@material-ui/icons'
import {IconButton} from "@material-ui/core";
import {debounce} from "throttle-debounce";
import {StyledInputBase, StyledSearchBarContainer, StyledSearchBarPaper} from "./StyledComponents";

const SearchBar = props => {
    const onSearchTermChange = debounce(400, searchTerm => {
        props.searchImages(searchTerm);
    });

    return (
        <StyledSearchBarContainer>
            <StyledSearchBarPaper>
                <IconButton aria-label="Search">
                    <Search/>
                </IconButton>
                <StyledInputBase onChange={event => onSearchTermChange(event.target.value)}
                                 placeholder="Please Enter a search Term"/>
            </StyledSearchBarPaper>
        </StyledSearchBarContainer>
    )
};

export default SearchBar;