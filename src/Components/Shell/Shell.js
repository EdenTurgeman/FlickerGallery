import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBar from "../SearchBar/SearchBar";
import Gallery from "../Gallery/Gallery";
import {searchPhotos} from "../../vendor/searchFlicker";
import SaveSearchSnackbar from "./SaveSearchSnackbar/SaveSearchSnackbar";

const StyledShell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.palette.primary.main};
`;

const Shell = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [photoPages, setPhotoPages] = useState([]);
    const [loadingPhotos, setLoadingPhotos] = useState(false);
    //const [openLoadSearches, setopenLoadSearches] = useState(false);
    const [searchSaved, setSearchSaved] = useState(false);


    const saveSearch = () => {
        if (searchTerm) {
            const localStorageSearches = JSON.parse(localStorage.getItem("searches"));
            const searches = localStorageSearches ? localStorageSearches : {};

            searches[searchTerm] = photoPages;

            localStorage.setItem("searches", JSON.stringify(searches));
            setSearchSaved(true);
        }
    };

    const searchImages = inputValue => {
        setSearchTerm(inputValue);

        if (inputValue) {
            setLoadingPhotos(true);
            setPhotoPages([]);
            searchPhotos(inputValue).then(photos => {
                setLoadingPhotos(false);
                setPhotoPages(photos);
            });
        } else {
            setPhotoPages([]);
        }
    };

    const loadImagesPage = page => {
        if (!loadingPhotos) {
            setLoadingPhotos(true);

            searchPhotos(searchTerm, page).then(photos => {
                setPhotoPages([...photoPages, ...photos]);
                setLoadingPhotos(false);
            })
        }
    };

    return (
        <StyledShell>
            <SearchBar saveSearch={saveSearch} searchImages={searchImages}/>
            <Gallery searchTerm={searchTerm}
                     loadMore={loadImagesPage}
                     photoPages={photoPages}
                     isLoading={loadingPhotos}/>
            <SaveSearchSnackbar open={searchSaved} onClose={() => setSearchSaved(false)}/>
        </StyledShell>
    )
};

export default Shell;