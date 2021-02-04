const key =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const url = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
    const result = await fetch(`${url}${key}&per_page=5&page=${page}`);
    const data = await result.json();
    if (result.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchStats = async id => {
    const result = await fetch(`${url}/${id}/statistics${key}`);
    const data = await result.json();
    if (result.status >= 400) {
        throw new Error(data.errors);
    }
    // console.log(' data for id -> ', data.downloads.total);
    return data;
};

export { fetchImages, fetchStats };
