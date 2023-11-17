import React, { useState } from 'react';
import VideoSearchComponent from './youtube/VideoSearchComponent';
import VideoListComponent from './youtube/VideoListComponent';
import fetchVideos from './youtube/fetchVideos'; // The function to fetch videos

const App = () => {
    const [videos, setVideos] = useState([]);

    const handleSearch = async (query) => {
        const fetchedVideos = await fetchVideos(query);
        setVideos(fetchedVideos);
    };

    return (
        <div>
            <VideoSearchComponent onSearch={handleSearch} />
            <VideoListComponent videos={videos} />
        </div>
    );
};

export default App;
