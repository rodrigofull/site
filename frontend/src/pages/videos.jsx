import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/youtube')
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map(video => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default Videos;
