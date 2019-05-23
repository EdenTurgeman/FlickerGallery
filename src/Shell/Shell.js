import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBar from "../SearchBar/SearchBar";
import Gallery from "../Gallery/Gallery";

const StyledShell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${props => {
    console.log(props);
    return props.theme.palette.primary.main
}};
`;

const Shell = props => {
        const [images, setImages] = useState([]);

        const searchImages = searchTerm => {
            if (!searchTerm) {
                setImages([]);
            }
            console.log(searchTerm)
        };

        return (
            <StyledShell>
                <SearchBar searchImages={searchImages}/>
                <Gallery/>
            </StyledShell>
        )
    }
;

export default Shell;