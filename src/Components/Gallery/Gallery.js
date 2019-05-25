import React from 'react';
import {CircularProgress} from "@material-ui/core";
import ImageCard from "./ImageCard/ImageCard";
import styled from "styled-components";

const GalleryContainer = styled.div`
    display: flex;
    overflow: auto;
    flex-flow: row wrap;
    min-height: 250px;
    justify-content: center;
    margin: 20px 0px;
`;


const Gallery = props => {
    return (
        <GalleryContainer>
            {
                props.photoPages.map(photo =>
                    <ImageCard key={photo.id} photo={photo}/>
                )
            }
            {props.isLoading && <CircularProgress size={68}/>}
        </GalleryContainer>
    )
};

export default Gallery;