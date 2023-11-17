
const VideoItemComponent = ({ video }) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
        </div>
    );
};

export default VideoItemComponent;
