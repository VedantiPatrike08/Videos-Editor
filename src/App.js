import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AllVideos from './AllVideos';
import VideoEditingPage from './VideoEditingPage';
import AllTemplates from './AllTemplates';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard/all-videos" element={<AllVideos />} /> 
            <Route path="/dashboard/video-editing-page" element={<VideoEditingPage/>} />
            <Route path="/dashboard/all-templates" element={<AllTemplates />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
