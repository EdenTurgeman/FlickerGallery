import React from 'react';
import styled from 'styled-components';
import {Search} from '@material-ui/icons'
import {IconButton, InputBase, Paper} from "@material-ui/core";
import {debounce} from "throttle-debounce";

const StyledSearchBarPaper = styled(Paper)`
  height: 50px;
  width: 35%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  margin-bottom: 10px;
`;

const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 8%;
`;

const StyledInputBase = styled(InputBase)`
    width: 100%;
`;

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
                <StyledInputBase onChange={event => onSearchTermChange(event.target.value)} placeholder="Please Enter a search Term"/>
            </StyledSearchBarPaper>
        </StyledSearchBarContainer>
    )
};

export default SearchBar;