import React, { useEffect, useState } from "react"; // ✅ IMPORTANT

function VideoSummary() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/video-summary")
      .then((res) => res.json())
      .then((data) => {
        setVideos(Array.isArray(data.videos) ? data.videos : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading video summaries...</p>;

  if (videos.length === 0) return <p>No video summaries available.</p>;

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          <h3>{video.title}</h3>
          <p>{video.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoSummary;
