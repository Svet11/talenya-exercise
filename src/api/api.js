import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:5000/api'});

export const getVideos = async (query) => {
        try {
            const { data } = await api.get('/video/get', { params: {query} });
            return data;
        } catch (err) {
            console.log(err.message);
            return "Something went wrong :( Try later..."
        }
}

export const parseLink = async (link) => {
    try {
        const { data } = await api.get('/links/parse', { params: {link} });
        return data;
    } catch (err) {
        console.log(err.message);
        return "Something went wrong :( Try later..."
    }
}
