import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoEditingPage.css';
import beachVideo from './Videos/beach2.mp4'; 
import {Link} from 'react-router-dom';
import { 
    faCog, 
    faImages, 
    faVolumeUp, 
    faClosedCaptioning, 
    faFont, 
    faShapes, 
    faPlay, 
    faForward, 
    faBackward, 
    faSearchPlus, 
    faSearchMinus, 
    faHome,
    faMicrophone,
    faScissors, 
    faPlus, 
    faComment 
  } from '@fortawesome/free-solid-svg-icons';
  

const VideoEditingPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarVisible(!sidebarVisible);
  // };

  const toggleSettings = () => {
    setSettingsVisible(!settingsVisible);
  };

  return (
    <div className='container'>

    <div className={`video-editing-page ${sidebarVisible ? '' : 'sidebar-hidden'}`}>
      <aside className="sidebar">
        {/* <div className="sidebar-header">
          <button className="toggle-sidebar-button" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div> */}
        <ul className="sidebar-menu">
          <li onClick={toggleSettings}><FontAwesomeIcon icon={faCog} /> </li>
          <li><FontAwesomeIcon icon={faImages} /> </li>
          <li><FontAwesomeIcon icon={faVolumeUp} /> </li>
          <li><FontAwesomeIcon icon={faClosedCaptioning} /> </li>
          <li><FontAwesomeIcon icon={faFont} /> </li>
          <li><FontAwesomeIcon icon={faShapes} /> </li>
          <li><Link to="/" className='home-icon-go-back'><FontAwesomeIcon icon={faHome} /></Link></li>
        </ul>
      </aside>
      <div className="main-content">
        {settingsVisible && (
          

      <div class="settings-box">                          
        <h3>Settings</h3>
        <div class="setting-option">
          <label for="size">Size</label>
          <div class="box-container">
            <select id="size" class="full-width">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <div class="setting-option">
          <label>Background</label>
          <div class="box-container">
            <div class="background-option">
              <input type="radio" id="color" name="background-option"></input>
              <label for="color">Color</label>
            </div>
          </div>
          <div class="box-container">
            <div class="background-option">
              <input type="radio" id="image" name="background-option"></input>
              <label for="image">Image</label>
            </div>
          </div>
          <div class="box-container">
            <div class="background-option">
              <input type="radio" id="none" name="background-option"></input>
              <label for="none">None</label>
            </div>
          </div>
        </div>
        <div class="setting-option">
          <label>Audio</label>
          <div class="box-container">
            <div class="background-option">
              
              <p>Clean Audio</p>
            </div>
          </div>
        </div>
        <div class="setting-option">
          <label>Duration</label>
          <div class="box-container">
            <div class="background-option">
              <input type="radio" id="short" name="duration-option"></input>
              <label for="short">Short</label>
            </div>
          </div>
          <div class="box-container">
            <div class="background-option">
              <input type="radio" id="medium" name="duration-option"></input>
              <label for="medium">Medium</label>       
            </div>
          </div>
          <div class="box-container">
            <div class="background-option">
              <input type="radio" id="long" name="duration-option"></input>
              <label for="long">Long</label>
            </div>
          </div>
        </div>
      </div>
    
      
        )}
   
        <div className="video-container">
          <video controls className='single-video'>
            <source src={beachVideo} type="video/mp4" />
          </video>
        </div>

        <div className="video-controls">
            <div className="left-icons">
                <FontAwesomeIcon icon={faScissors} /><span>Split</span> 
                <FontAwesomeIcon icon={faPlus} /><span>Add Media</span> 
                <FontAwesomeIcon icon={faMicrophone} /><span>Voiceover</span>
            </div>
            <div className="middle-icons">
                <FontAwesomeIcon icon={faBackward} />
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faForward} />
            </div>
            <div className="right-icons">
                <FontAwesomeIcon icon={faVolumeUp} />
                <div className="zoom-controls">
                <FontAwesomeIcon icon={faSearchMinus} />
                <div className="zoom-slider"></div>
                <FontAwesomeIcon icon={faSearchPlus} />
                </div>
                <span>Fit</span>
                <FontAwesomeIcon icon={faComment} />
            </div>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default VideoEditingPage;
