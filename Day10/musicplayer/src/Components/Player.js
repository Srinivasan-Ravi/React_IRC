// Player.js

import React from 'react';

const Player = ({ isPlaying, currentTrack }) => {
  return (
    <div className="player">
      <h2>{currentTrack}</h2>
      <audio controls autoPlay={isPlaying}>
        <source src="your-audio-file.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
