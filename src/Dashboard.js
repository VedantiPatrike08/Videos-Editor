import React from 'react';
import Sidebar from './Sidebar'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUpload, faUserPlus, faVideo, faBroadcastTower, faMicrophone, faQuestionCircle, faBell ,faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import beachVideo from './Videos/beach1.mp4'; 
import userProfileImage from './Images/userprofile.png'; 

const videos = [
  beachVideo, 
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="projects-container">
        <div className="search-bar">
          <div className="search-and-profile">
            <input type="text" placeholder="Search Project..." />
            <button className="button-shadow"><FontAwesomeIcon icon={faUpload} /> Upgrade</button>
            <button className="button-shadow"><FontAwesomeIcon icon={faUserPlus} /> Invite</button>
            <button className="button-shadow"><FontAwesomeIcon icon={faQuestionCircle} /> </button>
            <button className="button-shadow"><FontAwesomeIcon icon={faBell} /> </button>
            <Link to="/dashboard/profile" className="profile-logo">
              <img src={userProfileImage} alt="User Profile" />
            </Link>
          </div>
          <div className='create-videos-text'>
            <p>Let's Create Some <b>Videos!</b></p>
          </div>
          <div className="buttons">
            <Link to='/dashboard/video-editing-page'>
          <button className="button-shadow"><FontAwesomeIcon icon={faProjectDiagram}/>  Create Project </button>
          </Link>
          
            <button className="button-shadow"><FontAwesomeIcon icon={faVideo} /> Record Video</button>
            <button className="button-shadow"><FontAwesomeIcon icon={faBroadcastTower} /> Go Live</button>
            <button className="button-shadow"><FontAwesomeIcon icon={faMicrophone} /> Record PodCast</button>
          </div>
        </div>
        <div className="video-header">
          <p className="inline-block-text">My Recent Videos</p>
          <p ><Link to="/dashboard/all-videos" className="flex-grow">All Videos &gt;</Link></p>
        </div>

        <div className="project-boxes">
          {videos.map((video, index) => (
            <div key={index} className="project-box">
              <video width="100%" height="100%" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        <div className="popular-templates">
          <div className="video-header">
          <p> Start with Popular Templates</p>
           <p ><Link to='/dashboard/all-templates' className="see-all-text">See All &gt;</Link></p>
          </div>
          
           <div className="template-images">
            <img src={require('./Images/3.jpg')} alt="Template 1" />
            <img src={require('./Images/4.jpg')} alt="Template 2" />
            <img src={require('./Images/5.jpg')} alt="Template 3" />
            <img src={require('./Images/6.jpg')} alt="Template 4" />
            <img src={require('./Images/7.jpg')} alt="Template 5" />
            <img src={require('./Images/8.jpg')} alt="Template 6" />
            <img src={require('./Images/9.jpg')} alt="Template 7" />
            <img src={require('./Images/10.jpg')} alt="Template 8" />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
