// Imports
import React from 'react';

import {
  Generate,
  Names,
  Favorites,
  SuggestionBox,
  Disclaimer,
  MadeBy,
} from '..';

// Initializations
const synth = window.speechSynthesis;
let voices;
const populateVoices = () => {
  voices = synth.getVoices();
};
synth.onvoiceschanged = populateVoices;

populateVoices();

// Component
const Dashboard = () => {
  const handleReadAloud = fullName => {
    const utterance = new SpeechSynthesisUtterance(fullName);
    utterance.voice = voices.find(voice => voice.voiceURI === 'Samantha');

    synth.speak(utterance);
  };

  return (
    <>
      <div className="row">
        <Generate />

        <Names handleReadAloud={handleReadAloud} />
      </div>

      <div className="row favorites-list-container">
        <Favorites handleReadAloud={handleReadAloud} />
      </div>

      <div className="container">
        <SuggestionBox />

        <Disclaimer />

        <MadeBy />
      </div>
    </>
  );
};

// Exports
export default Dashboard;
