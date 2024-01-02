// App.js

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
      <div class="card">
<div class="image" style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)'}}><span class="text">Heat Waves</span></div>
  <span class="title">Composer(s):</span>
  <span class="price">Glass Animals</span>
</div>
      <div class="card">
<div class="image" style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)'}}><span class="text">Night Changes</span></div>
  <span class="title">Composer(s):</span>
  <span class="price">One Direction</span>
</div>
      <div class="card">
<div class="image"  style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)'}}><span class="text">Perfect</span></div>
  <span class="title">Composer(s):</span>
  <span class="price">Ed-Sheeran</span>
</div>
      <div class="card">
<div class="image"  style={{backgroundImage:'url(https://i.ytimg.com/vi/bEnm48HSCpU/maxresdefault.jpg)'}}><span class="text">Galway Girl</span></div>
  <span class="title">Composer(s):</span>
  <span class="price">Ed-Sheeran</span>
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
