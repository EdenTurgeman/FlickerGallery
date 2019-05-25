import axios from "axios";

const formatImageUrl = ({farm, server, id, secret}) => {
    return 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'
};

export const searchPhotos = (searchTerm, page = 1) => {
    return axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search', {
        params: {
            "safe_search": 1,
            format: 'json',
            "api_key": 'bac9f1ccfd854f27894fd47c4f01b1e8',
            nojsoncallback: 1,
            content_type: 1,
            text: searchTerm,
            page: page
        }
    }).then(({data}) => {
        if (data.photos) {
            return data.photos.photo.map(photo => ({
                ...photo,
                url: formatImageUrl(photo)
            }));
        }
    })
};

