import React from 'react';
import styled from 'styled-components';
import {Card} from "@material-ui/core";

const GalleryContainer = styled.div`
    display: flex;
    overflow: auto;
    justify-content: center;
    flex-flow: row wrap;
    margin: 20px 0px;
`;

const StyledImageCard = styled(Card)`
    margin: 10px;
    height: 250px;
    width: 300px;
`;

const Gallery = props => {
    return (
        <GalleryContainer>
        </GalleryContainer>
    )
};

export default Gallery;