import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const allVideos = [
  "https://www.youtube.com/embed/4uY4Pz0SuaM",
  "https://www.youtube.com/embed/zp7zPEKVF7I",
  "https://www.youtube.com/embed/yR1wbqGz06c",
  "https://www.youtube.com/embed/mYWNYwK5jtk",
  "https://www.youtube.com/embed/Ul1CJKTZSpk",
  "https://www.youtube.com/embed/FmfQejRC7MQ",
  "https://www.youtube.com/embed/bjiXQyd-QAE",
  "https://www.youtube.com/embed/pVtaM-PawYc",
  "https://www.youtube.com/embed/zbYbQ0S9niA",
  "https://www.youtube.com/embed/_YOxtckXadY"
];

const AllVideos = () => {
  return (
    <div>
      <h1>All Videos</h1>
      <div className="videos-container">
        {allVideos.map((video, index) => (
          <div key={index} className="video-box">
            <iframe 
              width="100%" 
              height="100%" 
              src={video} 
              title={`Video ${index + 1}`} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Go Back to Homepage</Link>
    </div>
  );
};

export default AllVideos;
