import React, { useState } from 'react';
import Player from './Components/Player';
import Dashboard from './Components/Dashboard';
import '../src/Assets/App.css'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Select a Track🎶');

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const forwardHandler = () => {
    // Logic for moving to the next track
    console.log('Forward');
  };

  const backwardHandler = () => {
    // Logic for moving to the previous track
    console.log('Backward');
  };

  return (
    <>

    <div className="App">
      <h1 className='mp'>RhythMix🎵</h1>
    <div className='hello'>
      <div className="card">
<div className="image" style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)',borderRadius:'10px'}}><span className="text">Heat Waves</span></div>
  <span className="title">Composer(s):</span>
  <span className="price">Glass Animals</span>
</div>
      <div className="card">
<div className="image" style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)',borderRadius:'10px'}}><span className="text">Night Changes</span></div>
  <span className="title">Composer(s):</span>
  <span className="price">One Direction</span>
</div>
      <div className="card">
<div className="image"  style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)',borderRadius:'10px'}}><span className="text">Perfect</span></div>
  <span className="title">Composer(s):</span>
  <span className="price">Ed-Sheeran</span>
</div>
      <div className="card">
<div className="image"  style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)',borderRadius:'10px'}}><span className="text">Galway Girl</span></div>
  <span className="title">Composer(s):</span>
  <span className="price">Ed-Sheeran</span>
</div>
</div>
      <Player
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        />
      <Dashboard
        onPlayPause={playPauseHandler}
        onForward={forwardHandler}
        onBackward={backwardHandler}
      />
    </div>
        </>
  );
};

export default App;
