import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBar from "../SearchBar/SearchBar";
import Gallery from "../Gallery/Gallery";

const StyledShell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.palette.primary.main};
`;

const Shell = props => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchImages = inputValue => {
        setSearchTerm(inputValue);
    };

    return (
        <StyledShell>
            <SearchBar searchImages={searchImages}/>
            <Gallery searchTerm={searchTerm}/>
        </StyledShell>
    )
};

export default Shell;