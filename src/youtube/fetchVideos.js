import axios from 'axios';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyDXPOkjAjjQNIvlz6Ed4LRy2zKh-JuxCcc' // Use environment variable

const fetchVideos = async (query) => {
    try {
        const response = await axios.get(YOUTUBE_API_URL, {
            params: {
                part: 'snippet',
                maxResults: 20,
                key: API_KEY,
                q: query,
            }
        });
        console.log("🚀 ~ response:", response.data)
        return response.data.items;
       
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

export default fetchVideos;
