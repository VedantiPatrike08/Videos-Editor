import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVideo, faFileAlt, faFilm, faHome, faMicrophoneAlt, faToolbox } from '@fortawesome/free-solid-svg-icons'; 
import './Dashboard.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="logo">Logo</div>
      
      <div className="project-links">
        <Link to="/"><FontAwesomeIcon icon={faUser} /> Profile</Link>
        <Link to="/dashboard/video-editing-page"><FontAwesomeIcon icon={faVideo} /> New Video +</Link>
        <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
        <Link to="/dashboard/all-templates"><FontAwesomeIcon icon={faFileAlt} /> Templates</Link>
        <Link to="/dashboard/all-videos"><FontAwesomeIcon icon={faFilm} /> All Videos</Link>
        <Link to="/dashboard/all-videos"><FontAwesomeIcon icon={faMicrophoneAlt} /> Podcasts & Shows</Link> 
        <Link to="/dashboard/brand-kit"><FontAwesomeIcon icon={faToolbox} /> Brand Kit</Link> 
      
      </div>
    </aside>
  );
};

export default Sidebar;
