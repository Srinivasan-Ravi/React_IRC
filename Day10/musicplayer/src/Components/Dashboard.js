// Dashboard.js
import '../Assets/App.css'
import React from 'react';

const Dashboard = ({ onPlayPause, onForward, onBackward }) => {
  return (
    <div className="dashboard">
      <button onClick={onBackward}>Previous</button>
      <button onClick={onPlayPause}>Play/Pause</button>
      <button onClick={onForward}>Next</button>
    </div>
  );
};

export default Dashboard;
