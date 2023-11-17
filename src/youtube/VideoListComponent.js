import React from 'react';
import VideoItemComponent from './VideoItemComponent';

const VideoListComponent = ({ videos }) => {
    return (
        <div>
            {videos.map(video => (
                <VideoItemComponent key={video.id.videoId} video={video} />
            ))}
        </div>
    );
};

export default VideoListComponent;
