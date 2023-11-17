import React, { useState } from 'react';
import fetchVideos from './fetchVideos';

const VideoSearchComponent = () => {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);

    const handleSearch = async () => {
        const fetchedVideos = await fetchVideos(query);
        console.log("🚀 ~ file: VideoSearchComponent.js ~ handleSearch ~ fetchedVideos:", fetchedVideos);
        setVideos(fetchedVideos);
    };

    return (
        <div className="bg-red-50 p-4">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="p-2 border border-red-300 rounded-md focus:outline-none focus:border-red-500"
            />
            <button 
                onClick={handleSearch} 
                className="ml-2 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
            >
                Search
            </button>
            {videos.length > 0 ? (
                <div className="mt-4">
                    {videos.map(video => {
                        // console.log("video:", video);
                        
                        const id = video.id.videoId
                        const info = video.snippet
                        const { thumbnails, title } = info
                        const imageURL = thumbnails.default.url

                        return (
                        <div key={id} className="mb-4 p-2 border border-red-300 rounded-md">
                            <h3 className="text-lg text-red-700">{title}</h3>
                            <img src={imageURL} alt={title} className="mt-2" />
                            {/* You can also include other video details like description, channel, etc. */}
                        </div>
                        )}
                    )}
                </div>
            ) : (
                <p className="mt-4 text-red-700">No videos found. Try a different search.</p>
            )}
        </div>
    );
};

export default VideoSearchComponent;
