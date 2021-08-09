// Imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearedNamesActionCreator,
  copyToClipboardThunkCreator,
} from '../../store';
import { toastNotification } from '../../utils';

// Initializations
const synth = window.speechSynthesis;

let voices;
const populateVoices = () => {
  voices = synth.getVoices();
};
populateVoices();

synth.onvoiceschanged = populateVoices;

// Component
const NamesDisplay = ({
  names,
  disabledClear,
  copyError,
  clearedNamesAction,
  copyToClipboardThunk,
}) => {
  const handleClear = () => {
    clearedNamesAction();
    toastNotification('Names Cleared Succesfully', 'green');
  };

  const handleCopy = fullName => {
    copyToClipboardThunk(fullName);
  };

  const handleSpeak = fullName => {
    const utterance = new SpeechSynthesisUtterance(fullName);
    const [voice] = voices.filter(curVoice => curVoice.voiceURI === 'Samantha');
    utterance.voice = voice;

    synth.speak(utterance);
  };

  return (
    <div className="section">
      <div className="card">
        <div className="card-content grey-text text-darken-3 center">
          <span className="card-title">
            <span className="text-style-bold">Names List</span>
          </span>

          <ul className="names">
            {names.length ? (
              <>
                <div>
                  <label>These aren't the names you're looking for?</label>
                </div>

                <div>
                  <label>Try shortening your input names!</label>
                </div>

                <br />

                {names.map((name, idx) => {
                  return (
                    <li key={idx} className="name-container white-space-pre">
                      <span>{`${idx + 1}. `}</span>

                      <a
                        href={`https://starwars.fandom.com/wiki/Special:Search?query=${name.first}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name.first}
                      </a>

                      <a
                        className="name-containee"
                        href={`https://starwars.fandom.com/wiki/Special:Search?query=${name.last}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name.last}
                      </a>

                      <img
                        className="name-containee gender-icon"
                        src={`/icons/${name.gender}.png`}
                        alt="Gender Icon"
                      />

                      <span className="text-style-italic">{` (${name.input})`}</span>

                      <img
                        className="name-containee"
                        src="/icons/speaker.png"
                        alt="Read Aloud Icon"
                        title="Read Aloud"
                        onClick={() =>
                          handleSpeak(`${name.first}, ${name.last}`)
                        }
                      />

                      <img
                        className="name-containee"
                        src="/icons/clipboard.png"
                        alt="Copy To Clipboard Icon"
                        title="Copy To Clipboard"
                        onClick={() =>
                          handleCopy(`${name.first} ${name.last}`)
                        }
                      />
                    </li>
                  );
                })}
              </>
            ) : (
              <li>
                <span>Generate names to populate this list.</span>
              </li>
            )}
          </ul>

          <button
            className="btn black black-1 clear-button"
            type="button"
            disabled={disabledClear}
            onClick={handleClear}
          >
            Clear
          </button>

          {copyError ? (
            <div className="text-color-red text-style-bold">
              Error! Failed to copy to clipboard.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  names: state.names.names,
  disabledClear: state.names.disabledClear,
  copyError: state.layout.copyError,
});

const mapDispatchToProps = dispatch => ({
  clearedNamesAction: () => dispatch(clearedNamesActionCreator()),
  copyToClipboardThunk: text => dispatch(copyToClipboardThunkCreator(text)),
});

// Prop Types
NamesDisplay.propTypes = {
  names: PropTypes.arrayOf(PropTypes.object),
  disabledClear: PropTypes.bool,
  copyError: PropTypes.bool,
  clearedNamesAction: PropTypes.func,
  copyToClipboardThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NamesDisplay);
