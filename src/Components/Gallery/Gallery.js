import React, {useState} from 'react';
import {CircularProgress} from "@material-ui/core";
import BottomScrollListener from 'react-bottom-scroll-listener'
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
    const [currentPage, setCurrentPage] = useState(1);

    const loadPage = () => {
        setCurrentPage(currentPage + 1);
        props.loadMore(currentPage + 1);
    };

    return (
        <BottomScrollListener onBottom={loadPage}>
            {scrollRef => (
                <GalleryContainer ref={scrollRef}>
                    {
                        props.photoPages.map(photo =>
                            <ImageCard key={photo.id} photo={photo}/>
                        )
                    }
                    {props.isLoading && <CircularProgress size={68}/>}
                </GalleryContainer>
            )}
        </BottomScrollListener>
    )
};

export default Gallery;