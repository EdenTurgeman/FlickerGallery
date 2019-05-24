import React, {useEffect, useState} from 'react';
import {CircularProgress} from "@material-ui/core";
import {searchPhotos} from "../vendor/searchFlicker";
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
    const [photoPages, setPhotoPages] = useState([]);
    const [loadingPhotos, setLoadingPhotos] = useState(false);

    useEffect(() => {
        if (props.searchTerm) {
            setLoadingPhotos(true);
            setPhotoPages([]);
            searchPhotos(props.searchTerm).then(photos => {
                setLoadingPhotos(false);
                setPhotoPages(photos);
            });
        } else {
            setPhotoPages([]);
        }
    }, [props.searchTerm]);

    return (
        <GalleryContainer>
            {
                photoPages.map(photo =>
                    <ImageCard key={photo.id} photo={photo}/>
                )
            }
            {loadingPhotos && <CircularProgress size={68}/>}
        </GalleryContainer>
    )
};

export default Gallery;