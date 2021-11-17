import { google } from 'googleapis';
import { apiKey } from '../../../app.js';

export const getVideo = async (req, res) => {
    try {
        const youtube = google.youtube({
            version: 'v3',
            auth: apiKey
        });
        const { query } = req.query;
        const { data } = await youtube.search.list({
            part: 'snippet',
            q: query,
            type: 'video',
            maxResults: '15'
        });

        res.status(200).send(data.items);
    } catch (err) {
        console.log(err.message);
        res.status(400).send('smtn went wrong');
    };
}